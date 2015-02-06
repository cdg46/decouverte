page.fluidtemplate.layoutRootPath = EXT:banner/Resources/Private/Layouts/Page/

banner {
    backgroundImage {
      # cat=banner; type=string; label=Path:Path to background Image (with an ending slash!)  
      path = EXT:banner/Resources/Public/Img/
      # cat=banner; type=options[jpg,png]; label=Image type
      type=jpg
      # cat=banner; type=string; label=width image
      width=1400c
      # cat=banner; type=string; label=height image
      height=540c
      # cat=banner; type=int+; label=quality
      quality=100
    }
    logo {
      # cat=banner; type=string; label=Path:Path to Logo  
      file = EXT:banner/Resources/Public/Img/logo.png
    }
}
