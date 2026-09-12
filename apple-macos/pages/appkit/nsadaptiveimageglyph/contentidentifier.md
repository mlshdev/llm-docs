> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsadaptiveimageglyph/contentidentifier](https://developer.apple.com/documentation/appkit/nsadaptiveimageglyph/contentidentifier)

# contentIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

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

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

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
