> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/removerepresentation(_:)](https://developer.apple.com/documentation/appkit/nsimage/removerepresentation(_:))

# removeRepresentation(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes and releases the specified image representation.

## Declaration

```swift
func removeRepresentation(_ imageRep: NSImageRep)
```

## Parameters

- `imageRep`: The image representation object you want to remove.

## See Also

### Working with Representations of Images

- [addRepresentation(\_:)](addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations(\_:)](addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [bestRepresentation(for:context:hints:)](bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageRep.HintKey](../nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
- [NSImage.LayoutDirection](layoutdirection.md): Constants that describe the layout direction for the image.

# removeRepresentation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes and releases the specified image representation.

## Declaration

```objectivec
- (void) removeRepresentation:(NSImageRep *) imageRep;
```

## Parameters

- `imageRep`: The image representation object you want to remove.

## See Also

### Working with Representations of Images

- [addRepresentation:](addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations:](addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [bestRepresentationForRect:context:hints:](bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageHintKey](../nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
- [NSImageLayoutDirection](layoutdirection.md): Constants that describe the layout direction for the image.
