> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/bestrepresentation(for:context:hints:)](https://developer.apple.com/documentation/appkit/nsimage/bestrepresentation(for:context:hints:))

# bestRepresentation(for:context:hints:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the best representation of the image for the specified rectangle using the provided hints.

## Declaration

```swift
func bestRepresentation(for rect: NSRect, context referenceContext: NSGraphicsContext?, hints: [NSImageRep.HintKey : Any]?) -> NSImageRep?
```

## Parameters

- `rect`: The area of the image to return.
- `referenceContext`: A graphics context. This value can be `nil`.
- `hints`: An optional dictionary of hints that provide more context for selecting or generating a `CGImage`, and may override properties of the `referenceContext`. See `Image Hint Dictionary Keys` for a summary of the possible key-value pairs.

<a id="return-value"></a>

## Return Value

The image representation that most closely matches the specified criteria.

## See Also

### Working with Representations of Images

- [addRepresentation(\_:)](addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations(\_:)](addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [removeRepresentation(\_:)](removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [NSImageRep.HintKey](../nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
- [NSImage.LayoutDirection](layoutdirection.md): Constants that describe the layout direction for the image.

# bestRepresentationForRect:context:hints: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.6+

Returns the best representation of the image for the specified rectangle using the provided hints.

## Declaration

```objectivec
- (NSImageRep *) bestRepresentationForRect:(NSRect) rect context:(NSGraphicsContext *) referenceContext hints:(NSDictionary<NSString *,id> *) hints;
```

## Parameters

- `rect`: The area of the image to return.
- `referenceContext`: A graphics context. This value can be `nil`.
- `hints`: An optional dictionary of hints that provide more context for selecting or generating a `CGImage`, and may override properties of the `referenceContext`. See `Image Hint Dictionary Keys` for a summary of the possible key-value pairs.

<a id="return-value"></a>

## Return Value

The image representation that most closely matches the specified criteria.

## See Also

### Working with Representations of Images

- [addRepresentation:](addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations:](addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [removeRepresentation:](removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [NSImageHintKey](../nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
- [NSImageLayoutDirection](layoutdirection.md): Constants that describe the layout direction for the image.
