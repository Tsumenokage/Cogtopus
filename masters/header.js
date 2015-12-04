$(document).ready(function(d)
{

	//x = document.createElement();

//$(x).appendTo('body');
	/*
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav">
	        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
	        <li><a href="#">Link</a></li>
	        <li class="dropdown">
	          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
	          <ul class="dropdown-menu">
	            <li><a href="#">Action</a></li>
	            <li><a href="#">Another action</a></li>
	            <li><a href="#">Something else here</a></li>
	            <li role="separator" class="divider"></li>
	            <li><a href="#">Separated link</a></li>
	            <li role="separator" class="divider"></li>
	            <li><a href="#">One more separated link</a></li>
	          </ul>
	        </li>
	      </ul>
	      <form class="navbar-form navbar-left" role="search">
	        <div class="form-group">
	          <input type="text" class="form-control" placeholder="Search">
	        </div>
	        <button type="submit" class="btn btn-default">Submit</button>
	      </form>
	      <ul class="nav navbar-nav navbar-right">
	        <li><a href="#">Link</a></li>
	        <li class="dropdown">
	          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
	          <ul class="dropdown-menu">
	            <li><a href="#">Action</a></li>
	            <li><a href="#">Another action</a></li>
	            <li><a href="#">Something else here</a></li>
	            <li role="separator" class="divider"></li>
	            <li><a href="#">Separated link</a></li>
	          </ul>
	        </li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	*/

/*
	//Header portable
	navbarHeader = document.createElement('div');
	$(navbarHeader).addClass('navbar-header').appendTo(header);

	button = document.createElement('button');
	$(button).addClass('navbar-toggle').addClass('collapsed').prop({
		type: 'button',
		dataTarget: '#bs-example-navbar-collapse-1',
		ariaExpanded: 'false'
	}).appendTo(navbarHeader);

	buttonToggleNav = document.createElement('span');
	$(buttonToggleNav).addClass('sr-only').text('Toggle navigation').appendTo(button);

	buttonToggleLink = document.createElement('a');
	$(buttonToggleLink).addClass('navbar-brand').prop({
		href: '#',
	}).text('Brand').appendTo(button);
*/

	header = generateNavbar();

	//Header standalone
	$(header).append(buildNavbarLink('google.com', 'Awesome link'));

	//Retourne une liste <ul>.
	function generateNavbar()
	{
		navbar = document.createElement('nav');
		$(navbar).addClass('navbar').addClass('navbar-default').appendTo('body');

		navbarContainer = document.createElement('div');
		$(navbarContainer).addClass('container-fluid').appendTo(navbar);

		header = document.createElement('div');
		$(header).addClass('collapse').addClass('navbar-collapse').prop('id', 'bs-example-navbar-collapse-1').appendTo(navbarContainer);

		headerElements = document.createElement('ul');
		$(headerElements).addClass('nav').addClass('navbar-nav').appendTo(header);

		return headerElements;
	}

	function buildNavbarElement()
	{
		return document.createElement('li');
	}

	function buildNavbarLink($href, $text)
	{
		container = buildNavbarElement();
		element = document.createElement('a');
		$(element).prop('href', $href).text($text).appendTo(container);

		return container;
	}
});