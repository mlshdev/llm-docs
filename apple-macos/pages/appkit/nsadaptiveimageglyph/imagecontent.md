> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsadaptiveimageglyph/imagecontent](https://developer.apple.com/documentation/appkit/nsadaptiveimageglyph/imagecontent)

# imageContent (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The raw data for the image.

## Declaration

```swift
var imageContent: Data { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the image data, the unique identifier for the image, the image description, and additional metadata. When saving your content to disk, save the data for any adaptive images with the rest of your content. If you need to specify a type for the image data, use the value in the [contentType](contenttype.md) property.

# imageContent (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

The raw data for the image.

## Declaration

```objectivec
@property (readonly) NSData * imageContent;
```

<a id="Discussion"></a>

## Discussion

This property contains the image data, the unique identifier for the image, the image description, and additional metadata. When saving your content to disk, save the data for any adaptive images with the rest of your content. If you need to specify a type for the image data, use the value in the [contentType](contenttype.md) property.
