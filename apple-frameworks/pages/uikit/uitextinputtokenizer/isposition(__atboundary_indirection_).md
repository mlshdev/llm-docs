> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtokenizer/isposition(_:atboundary:indirection:)](https://developer.apple.com/documentation/uikit/uitextinputtokenizer/isposition(_:atboundary:indirection:))

# isPosition(\_:atBoundary:inDirection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Return whether a text position is at a boundary of a text unit of a specified granularity in a specified direction.

## Declaration

```swift
func isPosition(_ position: UITextPosition, atBoundary granularity: UITextGranularity, inDirection direction: UITextDirection) -> Bool
```

## Parameters

- `position`: A text-position object that represents a location in a document.
- `granularity`: A constant that indicates a certain granularity of text unit.
- `direction`: A constant that indicates a direction relative to `position`. The constant can be of type UITextStorageDirection or UITextLayoutDirection.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text position is at the given text-unit boundary in the given direction; [false](https://developer.apple.com/documentation/swift/false) if it is not at the boundary.

## See Also

### Determining text positions relative to unit boundaries

- [isPosition(\_:withinTextUnit:inDirection:)](isposition%28__withintextunit_indirection_%29.md): Return whether a text position is within a text unit of a specified granularity in a specified direction.

# isPosition:atBoundary:inDirection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Return whether a text position is at a boundary of a text unit of a specified granularity in a specified direction.

## Declaration

```objectivec
- (BOOL) isPosition:(UITextPosition *) position atBoundary:(UITextGranularity) granularity inDirection:(UITextDirection) direction;
```

## Parameters

- `position`: A text-position object that represents a location in a document.
- `granularity`: A constant that indicates a certain granularity of text unit.
- `direction`: A constant that indicates a direction relative to `position`. The constant can be of type UITextStorageDirection or UITextLayoutDirection.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the text position is at the given text-unit boundary in the given direction; [false](https://developer.apple.com/documentation/swift/false) if it is not at the boundary.

## See Also

### Determining text positions relative to unit boundaries

- [isPosition:withinTextUnit:inDirection:](isposition%28__withintextunit_indirection_%29.md): Return whether a text position is within a text unit of a specified granularity in a specified direction.
