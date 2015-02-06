lib.pageBgImg = COA
lib.pageBgImg {
  10 = IMG_RESOURCE
  10.file {
    import {
      cObject = TEXT
      cObject.override {
        required = 1
# slide sets.backgroundImage for all the subpages as well,
# overwritten if subpage has it's own.backgroundImage added
        data = levelmedia: -1, slide
        wrap = ${banner.backgroundImage.path}|
# gets first.backgroundImage from recources list
        listNum = 0
      }
#.backgroundImage manipulation – if 'c' crop is in action
#.backgroundImages must be bigger than given width and height
      width = ${banner.backgroundImage.width}
      height = ${banner.backgroundImage.height}
      format = ${banner.backgroundImage.format}
      quality = ${banner.backgroundImage.quality}
    }
  }
}

lib.logo = TEXT
lib.logo.value = <img src="$[banner.logo.file}" />
