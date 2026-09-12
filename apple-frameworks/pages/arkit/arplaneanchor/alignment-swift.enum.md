> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arplaneanchor/alignment-swift.enum](https://developer.apple.com/documentation/arkit/arplaneanchor/alignment-swift.enum)

# ARPlaneAnchor.Alignment (Swift)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ · iPadOS 11.0+

The kinds of alignment — horizontal or vertical — that a plane anchor can have.

## Declaration

```swift
enum Alignment
```

## Topics

### Alignment Values

- [ARPlaneAnchor.Alignment.horizontal](alignment-swift.enum/horizontal.md): The plane is perpendicular to gravity.
- [ARPlaneAnchor.Alignment.vertical](alignment-swift.enum/vertical.md): The plane is parallel to gravity.

### Initializers

- [init(rawValue:)](alignment-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Orientation

- [alignment](alignment-swift.property.md): The general orientation of the detected plane with respect to gravity.

# ARPlaneAnchorAlignment (Objective-C)

**Framework:** ARKit  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS

The kinds of alignment — horizontal or vertical — that a plane anchor can have.

## Declaration

```objectivec
enum ARPlaneAnchorAlignment : NSInteger;
```

## Topics

### Alignment Values

- [ARPlaneAnchorAlignmentHorizontal](alignment-swift.enum/horizontal.md): The plane is perpendicular to gravity.
- [ARPlaneAnchorAlignmentVertical](alignment-swift.enum/vertical.md): The plane is parallel to gravity.

## See Also

### Orientation

- [alignment](alignment-swift.property.md): The general orientation of the detected plane with respect to gravity.
