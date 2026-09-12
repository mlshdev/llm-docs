> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsadaptiveimageglyph/contentdescription](https://developer.apple.com/documentation/appkit/nsadaptiveimageglyph/contentdescription)

# contentDescription (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

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

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

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
