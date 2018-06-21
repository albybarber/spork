#!/bin/sh

TMP_PATH="/tmp/fannyPack"
SKETCH_PLUGIN_PATH=~/Library/Application\ Support/com.bohemiancoding.sketch3/Plugins


# $1 = author 
# $2 = package_name
# $3 = plugin_name
install_sketch_plugin () {
    echo "😻  Installing - $3"
    curl -s -o $TMP_PATH/$2.zip "https://codeload.github.com/$1/$2/zip/master"
    unzip -q $TMP_PATH/$2.zip -d $TMP_PATH
    cp -r "${TMP_PATH}/$2-master/$3.sketchplugin" "$SKETCH_PLUGIN_PATH"
}

echo "\n🔧 🔧 🔧 🔧  FANNYPACK 🔧 🔧 🔧 🔧\n"

rm -rf $TMP_PATH
mkdir $TMP_PATH

# get and install sketch plugins
# install_sketch_plugin sergeishere HandyMenu-SketchPlugin "HandyMenu"
# install_sketch_plugin AnimaApp LaunchpadPlugin "Launchpad"
install_sketch_plugin andrewfiorillo sketch-palettes "Sketch Palettes"
# install_sketch_plugin nilshoenson shared-text-styles "shared-textstyles"

echo ""
