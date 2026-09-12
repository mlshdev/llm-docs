> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/layoutdirection](https://developer.apple.com/documentation/appkit/nsimage/layoutdirection)

# NSImage.LayoutDirection (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

Constants that describe the layout direction for the image.

## Declaration

```swift
enum LayoutDirection
```

## Topics

### Layout Directions

- [NSImage.LayoutDirection.unspecified](layoutdirection/unspecified.md): An unspecified layout direction.
- [NSImage.LayoutDirection.leftToRight](layoutdirection/lefttoright.md): A left-to-right layout direction.
- [NSImage.LayoutDirection.rightToLeft](layoutdirection/righttoleft.md): A right-to-left layout direction.

### Initializers

- [init(rawValue:)](layoutdirection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Working with Representations of Images

- [addRepresentation(\_:)](addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations(\_:)](addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [removeRepresentation(\_:)](removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [bestRepresentation(for:context:hints:)](bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageRep.HintKey](../nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.

# NSImageLayoutDirection (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.12+

Constants that describe the layout direction for the image.

## Declaration

```objectivec
enum NSImageLayoutDirection : NSInteger;
```

## Topics

### Layout Directions

- [NSImageLayoutDirectionUnspecified](layoutdirection/unspecified.md): An unspecified layout direction.
- [NSImageLayoutDirectionLeftToRight](layoutdirection/lefttoright.md): A left-to-right layout direction.
- [NSImageLayoutDirectionRightToLeft](layoutdirection/righttoleft.md): A right-to-left layout direction.

## See Also

### Working with Representations of Images

- [addRepresentation:](addrepresentation%28__%29.md): Adds the specified image representation object to the image.
- [addRepresentations:](addrepresentations%28__%29.md): Adds an array of image representation objects to the image.
- [representations](representations.md): An array containing all of the image object’s image representations.
- [removeRepresentation:](removerepresentation%28__%29.md): Removes and releases the specified image representation.
- [bestRepresentationForRect:context:hints:](bestrepresentation%28for_context_hints_%29.md): Returns the best representation of the image for the specified rectangle using the provided hints.
- [NSImageHintKey](../nsimagerep/hintkey.md): Constants for the keys to include in a hints dictionary when drawing the image.
