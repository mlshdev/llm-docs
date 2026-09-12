> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/images-and-pdf](https://developer.apple.com/documentation/uikit/images-and-pdf)

# Images and PDF (Swift)

**Framework:** UIKit  
**Kind:** API Collection

Create and manage images, including those that use bitmap and PDF formats.

## Topics

### Representations

- [UIImage](uiimage.md): An object that manages image data in your app.
- [UIImage.SymbolConfiguration](uiimage/symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
- [UIImage.Configuration](uiimage/configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.

### Image creation

- [Supporting HDR images in your app](supporting-hdr-images-in-your-app.md): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [jpegData(compressionQuality:)](uiimage/jpegdata%28compressionquality_%29.md): Returns a data object that contains the image in JPEG format.
- [pngData()](uiimage/pngdata%28%29.md): Returns a data object that contains the specified image in PNG format.

### Photo album

- [UIImageWriteToSavedPhotosAlbum(\_:\_:\_:\_:)](uiimagewritetosavedphotosalbum%28________%29.md): Adds the specified image to the user’s Camera Roll album.
- [UISaveVideoAtPathToSavedPhotosAlbum(\_:\_:\_:\_:)](uisavevideoatpathtosavedphotosalbum%28________%29.md): Adds the movie from the specified path to the user’s Camera Roll album.
- [UIVideoAtPathIsCompatibleWithSavedPhotosAlbum(\_:)](uivideoatpathiscompatiblewithsavedphotosalbum%28__%29.md): Returns a Boolean value that indicates whether the specified video is compatible to save to the user’s Camera Roll album.

### PDF creation

- [UIGraphicsBeginPDFContextToData(\_:\_:\_:)](uigraphicsbeginpdfcontexttodata%28______%29.md): Creates a PDF graphics context that targets the specified mutable data object.
- [UIGraphicsBeginPDFContextToFile(\_:\_:\_:)](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsEndPDFContext()](uigraphicsendpdfcontext%28%29.md): Closes a PDF graphics context and pops it from the current context stack.
- [UIGraphicsBeginPDFPage()](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsBeginPDFPageWithInfo(\_:\_:)](uigraphicsbeginpdfpagewithinfo%28____%29.md): Marks the beginning of a new page in a PDF context and configures it using the specified custom values.
- [UIGraphicsGetPDFContextBounds()](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsAddPDFContextDestinationAtPoint(\_:\_:)](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md): Creates a jump destination in the current page.
- [UIGraphicsSetPDFContextDestinationForRect(\_:\_:)](uigraphicssetpdfcontextdestinationforrect%28____%29.md): Links a rectangular area on the current page to the specified jump destination.
- [UIGraphicsSetPDFContextURLForRect(\_:\_:)](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.

### PDF screenshots

- [UIScreenshotService](uiscreenshotservice.md): An object that coordinates the creation of PDF screenshots of an app’s content.

## See Also

### Graphics, drawing, and printing

- [Drawing](drawing.md): Configure your app’s drawing environment using colors, renderers, draw paths, strings, and shadows.
- [Printing](printing.md): Display the system print panels and manage the printing process.

# Images and PDF (Objective-C)

**Framework:** UIKit  
**Kind:** API Collection

Create and manage images, including those that use bitmap and PDF formats.

## Topics

### Representations

- [UIImage](uiimage.md): An object that manages image data in your app.
- [UIImageSymbolConfiguration](uiimage/symbolconfiguration-swift.class.md): An object that contains the specific font, size, style, and weight attributes to apply to a symbol image.
- [UIImageConfiguration](uiimage/configuration-swift.class.md): A configuration object that contains the traits that the system uses when selecting the current image variant.

### Image creation

- [Supporting HDR images in your app](supporting-hdr-images-in-your-app.md): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [UIImageJPEGRepresentation](uiimage/jpegdata%28compressionquality_%29.md): Returns a data object that contains the image in JPEG format.
- [UIImagePNGRepresentation](uiimage/pngdata%28%29.md): Returns a data object that contains the specified image in PNG format.

### Photo album

- [UIImageWriteToSavedPhotosAlbum](uiimagewritetosavedphotosalbum%28________%29.md): Adds the specified image to the user’s Camera Roll album.
- [UISaveVideoAtPathToSavedPhotosAlbum](uisavevideoatpathtosavedphotosalbum%28________%29.md): Adds the movie from the specified path to the user’s Camera Roll album.
- [UIVideoAtPathIsCompatibleWithSavedPhotosAlbum](uivideoatpathiscompatiblewithsavedphotosalbum%28__%29.md): Returns a Boolean value that indicates whether the specified video is compatible to save to the user’s Camera Roll album.

### PDF creation

- [UIGraphicsBeginPDFContextToData](uigraphicsbeginpdfcontexttodata%28______%29.md): Creates a PDF graphics context that targets the specified mutable data object.
- [UIGraphicsBeginPDFContextToFile](uigraphicsbeginpdfcontexttofile%28______%29.md): Creates a PDF graphics context that targets a file at the specified path.
- [UIGraphicsEndPDFContext](uigraphicsendpdfcontext%28%29.md): Closes a PDF graphics context and pops it from the current context stack.
- [UIGraphicsBeginPDFPage](uigraphicsbeginpdfpage%28%29.md): Marks the beginning of a new page in a PDF context and configures it using default values.
- [UIGraphicsBeginPDFPageWithInfo](uigraphicsbeginpdfpagewithinfo%28____%29.md): Marks the beginning of a new page in a PDF context and configures it using the specified custom values.
- [UIGraphicsGetPDFContextBounds](uigraphicsgetpdfcontextbounds%28%29.md): Returns the current page bounds.
- [UIGraphicsAddPDFContextDestinationAtPoint](uigraphicsaddpdfcontextdestinationatpoint%28____%29.md): Creates a jump destination in the current page.
- [UIGraphicsSetPDFContextDestinationForRect](uigraphicssetpdfcontextdestinationforrect%28____%29.md): Links a rectangular area on the current page to the specified jump destination.
- [UIGraphicsSetPDFContextURLForRect](uigraphicssetpdfcontexturlforrect%28____%29.md): Links a rectangular area on the current page to the specified URL.

### PDF screenshots

- [UIScreenshotService](uiscreenshotservice.md): An object that coordinates the creation of PDF screenshots of an app’s content.

## See Also

### Graphics, drawing, and printing

- [Drawing](drawing.md): Configure your app’s drawing environment using colors, renderers, draw paths, strings, and shadows.
- [Printing](printing.md): Display the system print panels and manage the printing process.
