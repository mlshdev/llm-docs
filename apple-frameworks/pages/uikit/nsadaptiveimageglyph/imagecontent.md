> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsadaptiveimageglyph/imagecontent](https://developer.apple.com/documentation/uikit/nsadaptiveimageglyph/imagecontent)

# imageContent (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The raw data for the image.

## Declaration

```swift
var imageContent: Data { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the image data, the unique identifier for the image, the image description, and additional metadata. When saving your content to disk, save the data for any adaptive images with the rest of your content. If you need to specify a type for the image data, use the value in the [contentType](contenttype.md) property.

# imageContent (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

The raw data for the image.

## Declaration

```objectivec
@property (readonly) NSData * imageContent;
```

<a id="Discussion"></a>

## Discussion

This property contains the image data, the unique identifier for the image, the image description, and additional metadata. When saving your content to disk, save the data for any adaptive images with the rest of your content. If you need to specify a type for the image data, use the value in the [contentType](contenttype.md) property.
