require 'rubygems'
require 'nokogiri'
require 'open-uri'

# leaving these out because they're not good.
exclude = [
  ]

# Different sites require different selectors for the links. 
doc = Nokogiri::HTML(open("http://inn.org/members/"))

doc.css("article p a").each do |node|
  if exclude.include? node['href']
    next
  else
    puts node['href']
  end
end
