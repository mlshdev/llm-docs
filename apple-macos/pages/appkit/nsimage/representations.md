> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/representations](https://developer.apple.com/documentation/appkit/nsimage/representations)

# representations (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing all of the image object’s image representations.

## Declaration

```swift
var representations: [NSImageRep] { get }
```

<a id="Discussion"></a>

## Discussion

This property can contain zero or more [NSImageRep](../nsimagerep.md) objects.

## See Also

### Working with Representations of Images

- [addRepresentation(\_:)](addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations(\_:)](addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [removeRepresentation(\_:)](removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [bestRepresentation(for:context:hints:)](bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageRep.HintKey](../nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
- [NSImage.LayoutDirection](layoutdirection.md): Constants that describe the layout direction for the image.

# representations (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

An array containing all of the image object’s image representations.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSImageRep *> * representations;
```

<a id="Discussion"></a>

## Discussion

This property can contain zero or more [NSImageRep](../nsimagerep.md) objects.

## See Also

### Working with Representations of Images

- [addRepresentation:](addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations:](addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [removeRepresentation:](removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [bestRepresentationForRect:context:hints:](bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageHintKey](../nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
- [NSImageLayoutDirection](layoutdirection.md): Constants that describe the layout direction for the image.
