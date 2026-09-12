> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/images-and-pdf](https://developer.apple.com/documentation/appkit/images-and-pdf)

# Images and PDF

**Interface languages:** Swift, Objective-C

**Framework:** AppKit  
**Kind:** API Collection

Create and manage images, in bitmap, PDF, and other formats.

## Topics

### Images

- [Providing images for different appearances](https://developer.apple.com/documentation/uikit/providing-images-for-different-appearances): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Supporting Continuity Camera in Your Mac App](supporting-continuity-camera-in-your-mac-app.md): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [Supporting HDR images in your app](https://developer.apple.com/documentation/uikit/supporting-hdr-images-in-your-app): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [Applying Apple HDR effect to your photos](applying-apple-hdr-effect-to-your-photos.md): You can decode and apply Apple’s HDR gain map to your own images.
- [NSImage](nsimage.md): A high-level interface for manipulating image data.
- [NSImageDelegate](nsimagedelegate.md): A set of optional methods that you can use to respond to drawing failures and manage incremental loads.
- [NSImageRep](nsimagerep.md): A semiabstract superclass that provides subclasses that you use to draw an image from a particular type of source data.

### Bitmap Formats

- [NSBitmapImageRep](nsbitmapimagerep.md): An object that renders an image from bitmap data.
- [NSCIImageRep](nsciimagerep.md): An object that can render an image from a Core Image object.
- [NSPICTImageRep](nspictimagerep.md): An object that renders an image from a PICT format data stream of version 1, version 2, and extended version 2.

### Vector Formats

- [NSPDFImageRep](nspdfimagerep.md): An object that can render an image from a PDF format data stream.
- [NSPDFInfo](nspdfinfo.md): An object that stores information associated with the creation of a PDF file, such as its URL, tag names, page orientation, and paper size.
- [NSEPSImageRep](nsepsimagerep.md): Deprecated. An object that can render an image from encapsulated PostScript (EPS) code.

### Custom Formats

- [NSCustomImageRep](nscustomimagerep.md): An object that uses a delegate object to render an image from a custom format.

## See Also

### Graphics, Drawing, Color, and Printing

- [Drawing](drawing.md): Draw shapes, images, and other content on the screen.
- [Color](color.md): Represent colors using built-in or custom formats, and give users options for selecting and applying colors.
- [Printing](printing.md): Display the system print panels and manage the printing process.
