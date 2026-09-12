> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arreferenceimage/init(_:orientation:physicalwidth:)-ir2z](https://developer.apple.com/documentation/arkit/arreferenceimage/init(_:orientation:physicalwidth:)-ir2z)

# init(\_:orientation:physicalWidth:) (Swift)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** iOS 11.3+ · iPadOS 11.3+

Creates a new reference image from a Core Video pixel buffer.

## Declaration

```swift
init(_ pixelBuffer: CVPixelBuffer, orientation: CGImagePropertyOrientation, physicalWidth: CGFloat)
```

## Parameters

- `pixelBuffer`: A Core Video pixel buffer containing the image data for the new image.
- `orientation`: The intended display orientation for the image.
- `physicalWidth`: The real-world width, in meters, of the image.

<a id="Discussion"></a>

## Discussion

To accurately recognize the position and orientation of an image in the AR environment, ARKit must know the image’s physical size. When you call this initializer, ARKit uses the `physicalWidth` measurement and `orientation` you provide together with the aspect ratio of the image itself to calculate the physical height. Use the [physicalSize](physicalsize.md) property of the created [ARReferenceImage](../arreferenceimage.md) object to retrieve these values.

> **Important**

> ARKit preprocesses reference images before using them for image detection. To provide reference images bundled with your app, create AR reference image assets in your Xcode asset catalog, and use the [referenceImages(inGroupNamed:bundle:)](referenceimages%28ingroupnamed_bundle_%29.md) method to load them.

## See Also

### Creating Reference Images

- [init(\_:orientation:physicalWidth:)](init%28__orientation_physicalwidth_%29-8b3bs.md): Creates a new reference image from a Core Graphics image object.

# initWithPixelBuffer:orientation:physicalWidth: (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+

Creates a new reference image from a Core Video pixel buffer.

## Declaration

```objectivec
- (instancetype) initWithPixelBuffer:(CVPixelBufferRef) pixelBuffer orientation:(CGImagePropertyOrientation) orientation physicalWidth:(CGFloat) physicalWidth;
```

## Parameters

- `pixelBuffer`: A Core Video pixel buffer containing the image data for the new image.
- `orientation`: The intended display orientation for the image.
- `physicalWidth`: The real-world width, in meters, of the image.

<a id="Discussion"></a>

## Discussion

To accurately recognize the position and orientation of an image in the AR environment, ARKit must know the image’s physical size. When you call this initializer, ARKit uses the `physicalWidth` measurement and `orientation` you provide together with the aspect ratio of the image itself to calculate the physical height. Use the [physicalSize](physicalsize.md) property of the created [ARReferenceImage](../arreferenceimage.md) object to retrieve these values.

> **Important**

> ARKit preprocesses reference images before using them for image detection. To provide reference images bundled with your app, create AR reference image assets in your Xcode asset catalog, and use the [referenceImagesInGroupNamed:bundle:](referenceimages%28ingroupnamed_bundle_%29.md) method to load them.

## See Also

### Creating Reference Images

- [initWithCGImage:orientation:physicalWidth:](init%28__orientation_physicalwidth_%29-8b3bs.md): Creates a new reference image from a Core Graphics image object.
