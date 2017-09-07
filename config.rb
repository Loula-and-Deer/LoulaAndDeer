require 'compass/import-once/activate'

# Require any additional compass plugins here.
require "normalize-scss"

# Set this to the root of your project when deployed:
images_dir = "assets/images"
css_dir = "assets"
sass_dir = "sass"
sourcemap = false
output_style = :compressed
line_comments = false

# Saves css files as liquid
on_stylesheet_saved do |filename|
  if File.exists?(filename)
    # Break up the path
    path = File.dirname(filename) + "/"
    file = File.basename(filename, ".*")
    extension = ".scss.liquid"

    # Move the file to new location
    FileUtils.mv filename, path + file + extension
      `theme upload /assets/styles.scss.liquid`
      `theme upload /assets/product-customizer.scss.liquid`
  end
end

# listener = Listen.to('./snippets', './templates') do |modified, added|
#   puts "modified absolute path: #{modified}"
#   puts "added absolute path: #{added}"
# end
# listener.start # not blocking
# sleep

# You can select your preferred output style here (can be overridden via the command line):
# output_style = :expanded or :nested or :compact or :compressed

# To enable relative paths to assets via compass helper functions. Uncomment:
# relative_assets = true
