> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/addrepresentation(_:)](https://developer.apple.com/documentation/appkit/nsimage/addrepresentation(_:))

# addRepresentation(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the specified image representation object to the image.

## Declaration

```swift
func addRepresentation(_ imageRep: NSImageRep)
```

## Parameters

- `imageRep`: The image representation to add.

<a id="Discussion"></a>

## Discussion

After invoking this method, you may need to explicitly set features of the new image representation, such as the size, number of colors, and so on. This is true particularly when the `NSImage` object has multiple image representations to choose from. See [NSImageRep](../nsimagerep.md) and its subclasses for the methods you use to complete initialization.

Any representation added by this method is retained by the receiver. Image representations cannot be shared among multiple `NSImage` objects.

## See Also

### Working with Representations of Images

- [addRepresentations(\_:)](addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [removeRepresentation(\_:)](removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [bestRepresentation(for:context:hints:)](bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageRep.HintKey](../nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
- [NSImage.LayoutDirection](layoutdirection.md): Constants that describe the layout direction for the image.

# addRepresentation: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Adds the specified image representation object to the image.

## Declaration

```objectivec
- (void) addRepresentation:(NSImageRep *) imageRep;
```

## Parameters

- `imageRep`: The image representation to add.

<a id="Discussion"></a>

## Discussion

After invoking this method, you may need to explicitly set features of the new image representation, such as the size, number of colors, and so on. This is true particularly when the `NSImage` object has multiple image representations to choose from. See [NSImageRep](../nsimagerep.md) and its subclasses for the methods you use to complete initialization.

Any representation added by this method is retained by the receiver. Image representations cannot be shared among multiple `NSImage` objects.

## See Also

### Working with Representations of Images

- [addRepresentations:](addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [removeRepresentation:](removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [bestRepresentationForRect:context:hints:](bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageHintKey](../nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
- [NSImageLayoutDirection](layoutdirection.md): Constants that describe the layout direction for the image.
