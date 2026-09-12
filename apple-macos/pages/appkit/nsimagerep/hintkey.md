> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimagerep/hintkey](https://developer.apple.com/documentation/appkit/nsimagerep/hintkey)

# NSImageRep.HintKey (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Constants for the keys to include in a hints dictionary when drawing the image.

## Declaration

```swift
struct HintKey
```

## Topics

### Hint Keys

- [ctm](hintkey/ctm.md): A context transform hint.
- [interpolation](hintkey/interpolation.md): An interpolation hint.
- [userInterfaceLayoutDirection](hintkey/userinterfacelayoutdirection.md): A layout direction hint.

### Initializers

- [init(rawValue:)](hintkey/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with Representations of Images

- [addRepresentation(\_:)](../nsimage/addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations(\_:)](../nsimage/addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](../nsimage/representations.md): An array containing all of the image object’s image representations.
- [removeRepresentation(\_:)](../nsimage/removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [bestRepresentation(for:context:hints:)](../nsimage/bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImage.LayoutDirection](../nsimage/layoutdirection.md): Constants that describe the layout direction for the image.

# NSImageHintKey (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Constants for the keys to include in a hints dictionary when drawing the image.

## Declaration

```objectivec
typedef NSString * NSImageHintKey;
```

## Topics

### Hint Keys

- [NSImageHintCTM](hintkey/ctm.md): A context transform hint.
- [NSImageHintInterpolation](hintkey/interpolation.md): An interpolation hint.
- [NSImageHintUserInterfaceLayoutDirection](hintkey/userinterfacelayoutdirection.md): A layout direction hint.

## See Also

### Working with Representations of Images

- [addRepresentation:](../nsimage/addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations:](../nsimage/addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](../nsimage/representations.md): An array containing all of the image object’s image representations.
- [removeRepresentation:](../nsimage/removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [bestRepresentationForRect:context:hints:](../nsimage/bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageLayoutDirection](../nsimage/layoutdirection.md): Constants that describe the layout direction for the image.
