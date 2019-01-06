function getRepositories() {
  const req = new XMLHttpRequest();
  req.addEventListener('load', showRepositories);
  req.open('GET', 'https://api.github.com/users/octocat/repos');
  req.send();
}

<script id="repository-template" type="text/x-handlebars-template">
  <ul>
   {{#each this}}
     <li>
       <h2><a href="{{html_url}}">{{name}}</a></h2>
       {{> authorPartial owner }}
       <p>Watchers: {{watchers_count}}</p>
       <p>Forks: {{forks_count}}</p>
       <p>Issues: {{open_issues_count}}</p>
     </li>
    {{/each}}
  </ul>
</script>
<script id="author-partial-template" type="text/x-handlebars-template">
  <section>
    <header><h4>Created By {{login}}</h4></header>
    <img src="{{avatar_url}}" height="32" width="32">
  </section>
</script>

document.addEventListener('DOMContentLoaded', function(event) {
  Handlebars.registerPartial(
    'authorPartial',
    document.getElementById('author-partial-template').innerHTML
  );
});
