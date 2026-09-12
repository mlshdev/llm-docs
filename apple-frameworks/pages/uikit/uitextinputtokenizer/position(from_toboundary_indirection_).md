> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtokenizer/position(from:toboundary:indirection:)](https://developer.apple.com/documentation/uikit/uitextinputtokenizer/position(from:toboundary:indirection:))

# position(from:toBoundary:inDirection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Return the next text position at a boundary of a text unit of the given granularity in a given direction.

## Declaration

```swift
func position(from position: UITextPosition, toBoundary granularity: UITextGranularity, inDirection direction: UITextDirection) -> UITextPosition?
```

## Parameters

- `position`: A text-position object that represents a location in a document.
- `granularity`: A constant that indicates a certain granularity of text unit.
- `direction`: A constant that indicates a direction relative to `position`. The constant can be of type UITextStorageDirection or UITextLayoutDirection.

<a id="return-value"></a>

## Return Value

The next boundary position of a text unit of the given granularity in the given direction, or `nil` if there is no such position.

# positionFromPosition:toBoundary:inDirection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Return the next text position at a boundary of a text unit of the given granularity in a given direction.

## Declaration

```objectivec
- (UITextPosition *) positionFromPosition:(UITextPosition *) position toBoundary:(UITextGranularity) granularity inDirection:(UITextDirection) direction;
```

## Parameters

- `position`: A text-position object that represents a location in a document.
- `granularity`: A constant that indicates a certain granularity of text unit.
- `direction`: A constant that indicates a direction relative to `position`. The constant can be of type UITextStorageDirection or UITextLayoutDirection.

<a id="return-value"></a>

## Return Value

The next boundary position of a text unit of the given granularity in the given direction, or `nil` if there is no such position.
