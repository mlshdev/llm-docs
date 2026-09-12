> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nsadaptiveimageglyph/contentdescription](https://developer.apple.com/documentation/uikit/nsadaptiveimageglyph/contentdescription)

# contentDescription (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An alternate textual description of the image contents.

## Declaration

```swift
var contentDescription: String { get }
```

<a id="Discussion"></a>

## Discussion

This string contains a brief description of the image, which is useful for searches or places where you need a text-based description. The adaptive image derives the content of this property from the underlying image data.

## See Also

### Getting the content metadata

- [contentIdentifier](contentidentifier.md): A unique identifier for this image.
- [contentType](contenttype.md): The image data format to use for this image type.

# contentDescription (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An alternate textual description of the image contents.

## Declaration

```objectivec
@property (copy, readonly) NSString * contentDescription;
```

<a id="Discussion"></a>

## Discussion

This string contains a brief description of the image, which is useful for searches or places where you need a text-based description. The adaptive image derives the content of this property from the underlying image data.

## See Also

### Getting the content metadata

- [contentIdentifier](contentidentifier.md): A unique identifier for this image.
- [contentType](contenttype.md): The image data format to use for this image type.
