> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinputtokenizer/rangeenclosingposition(_:with:indirection:)](https://developer.apple.com/documentation/uikit/uitextinputtokenizer/rangeenclosingposition(_:with:indirection:))

# rangeEnclosingPosition(\_:with:inDirection:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Return the range for the text enclosing a text position in a text unit of a given granularity in a given direction.

## Declaration

```swift
func rangeEnclosingPosition(_ position: UITextPosition, with granularity: UITextGranularity, inDirection direction: UITextDirection) -> UITextRange?
```

## Parameters

- `position`: A text-position object that represents a location in a document.
- `granularity`: A constant that indicates a certain granularity of text unit.
- `direction`: A constant that indicates a direction relative to `position`. The constant can be of type UITextStorageDirection or UITextLayoutDirection.

<a id="return-value"></a>

## Return Value

A text-range representing a text unit of the given granularity in the given direction, or `nil` if there is no such enclosing unit.  Whether a boundary position is enclosed depends on the given direction, using the same rule as the [isPosition(\_:withinTextUnit:inDirection:)](isposition%28__withintextunit_indirection_%29.md) method.

<a id="Discussion"></a>

## Discussion

In this method, return the range for the text enclosing a text position in a text unit of the given granularity, or `nil` if there is no such enclosing unit.  If the text position is entirely enclosed within a text unit of the given granularity, it is considered enclosed. If the text position is at a text-unit boundary, it is considered enclosed only if the next position in the given direction is entirely enclosed.

# rangeEnclosingPosition:withGranularity:inDirection: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Return the range for the text enclosing a text position in a text unit of a given granularity in a given direction.

## Declaration

```objectivec
- (UITextRange *) rangeEnclosingPosition:(UITextPosition *) position withGranularity:(UITextGranularity) granularity inDirection:(UITextDirection) direction;
```

## Parameters

- `position`: A text-position object that represents a location in a document.
- `granularity`: A constant that indicates a certain granularity of text unit.
- `direction`: A constant that indicates a direction relative to `position`. The constant can be of type UITextStorageDirection or UITextLayoutDirection.

<a id="return-value"></a>

## Return Value

A text-range representing a text unit of the given granularity in the given direction, or `nil` if there is no such enclosing unit.  Whether a boundary position is enclosed depends on the given direction, using the same rule as the [isPosition:withinTextUnit:inDirection:](isposition%28__withintextunit_indirection_%29.md) method.

<a id="Discussion"></a>

## Discussion

In this method, return the range for the text enclosing a text position in a text unit of the given granularity, or `nil` if there is no such enclosing unit.  If the text position is entirely enclosed within a text unit of the given granularity, it is considered enclosed. If the text position is at a text-unit boundary, it is considered enclosed only if the next position in the given direction is entirely enclosed.
