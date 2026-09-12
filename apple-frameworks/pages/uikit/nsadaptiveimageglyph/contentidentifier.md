> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsadaptiveimageglyph/contentidentifier](https://developer.apple.com/documentation/uikit/nsadaptiveimageglyph/contentidentifier)

# contentIdentifier (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A unique identifier for this image.

## Declaration

```swift
var contentIdentifier: String { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to create a persistent reference to this specific image in your code. The image data contains this content identifier, so the value persists between instantiations.

## See Also

### Getting the content metadata

- [contentDescription](contentdescription.md): An alternate textual description of the image contents.
- [contentType](contenttype.md): The image data format to use for this image type.

# contentIdentifier (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A unique identifier for this image.

## Declaration

```objectivec
@property (readonly) NSString * contentIdentifier;
```

<a id="Discussion"></a>

## Discussion

Use this property to create a persistent reference to this specific image in your code. The image data contains this content identifier, so the value persists between instantiations.

## See Also

### Getting the content metadata

- [contentDescription](contentdescription.md): An alternate textual description of the image contents.
- [contentType](contenttype.md): The image data format to use for this image type.
