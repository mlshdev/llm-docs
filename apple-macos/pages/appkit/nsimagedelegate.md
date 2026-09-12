> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagedelegate](https://developer.apple.com/documentation/appkit/nsimagedelegate)

# NSImageDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods that you can use to respond to drawing failures and manage incremental loads.

## Declaration

```swift
protocol NSImageDelegate : NSObjectProtocol
```

## Topics

### Responding to Drawing Failure

- [imageDidNotDraw(\_:in:)](nsimagedelegate/imagedidnotdraw%28__in_%29.md): Tells the delegate that the image object is unable, for whatever reason, to lock focus on its image or draw in the specified rectangle.

### Managing Incremental Loads

- [NSImage.LoadStatus](nsimage/loadstatus.md): Status values for incremental image loading.

## Relationships

### Inherits From

- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Images

- [Providing images for different appearances](https://developer.apple.com/documentation/uikit/providing-images-for-different-appearances): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Supporting Continuity Camera in Your Mac App](supporting-continuity-camera-in-your-mac-app.md): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [Supporting HDR images in your app](https://developer.apple.com/documentation/uikit/supporting-hdr-images-in-your-app): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [Applying Apple HDR effect to your photos](applying-apple-hdr-effect-to-your-photos.md): You can decode and apply Apple’s HDR gain map to your own images.
- [NSImage](nsimage.md): A high-level interface for manipulating image data.
- [NSImageRep](nsimagerep.md): A semiabstract superclass that provides subclasses that you use to draw an image from a particular type of source data.

# NSImageDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A set of optional methods that you can use to respond to drawing failures and manage incremental loads.

## Declaration

```objectivec
@protocol NSImageDelegate <NSObject>
```

## Topics

### Responding to Drawing Failure

- [imageDidNotDraw:inRect:](nsimagedelegate/imagedidnotdraw%28__in_%29.md): Tells the delegate that the image object is unable, for whatever reason, to lock focus on its image or draw in the specified rectangle.

### Managing Incremental Loads

- [image:didLoadPartOfRepresentation:withValidRows:](nsimagedelegate/image_didloadpartofrepresentation_withvalidrows_.md): Deprecated. Tells the delegate that part of the incrementally loaded image data is available.
- [image:didLoadRepresentation:withStatus:](nsimagedelegate/image_didloadrepresentation_withstatus_.md): Deprecated. Tells the delegate that an incrementally loaded image has been loaded and decompressed as completely as is possible.
- [image:didLoadRepresentationHeader:](nsimagedelegate/image_didloadrepresentationheader_.md): Deprecated. Tells the delegate that enough data has been read to determine the size of the image.
- [image:willLoadRepresentation:](nsimagedelegate/image_willloadrepresentation_.md): Deprecated. Tells the delegate that the image object is about to access its underlying bitmap data.
- [NSImageLoadStatus](nsimage/loadstatus.md): Status values for incremental image loading.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Images

- [Providing images for different appearances](https://developer.apple.com/documentation/uikit/providing-images-for-different-appearances): Supply image resources appropriate for light and dark appearances and for high-contrast environments.
- [Supporting Continuity Camera in Your Mac App](supporting-continuity-camera-in-your-mac-app.md): Incorporate scanned documents and pictures from a user’s iPhone, iPad, or iPod touch into your Mac app using Continuity Camera.
- [Supporting HDR images in your app](https://developer.apple.com/documentation/uikit/supporting-hdr-images-in-your-app): ​ Load, display, edit, and save HDR images using SwiftUI and Core Image. ​
- [Applying Apple HDR effect to your photos](applying-apple-hdr-effect-to-your-photos.md): You can decode and apply Apple’s HDR gain map to your own images.
- [NSImage](nsimage.md): A high-level interface for manipulating image data.
- [NSImageRep](nsimagerep.md): A semiabstract superclass that provides subclasses that you use to draw an image from a particular type of source data.
