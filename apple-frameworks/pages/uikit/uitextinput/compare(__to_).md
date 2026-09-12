> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/compare(_:to:)](https://developer.apple.com/documentation/uikit/uitextinput/compare(_:to:))

# compare(\_:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns how one text position compares to another text position.

## Declaration

```swift
func compare(_ position: UITextPosition, to other: UITextPosition) -> ComparisonResult
```

## Parameters

- `position`: A custom object that represents a location within a document.
- `other`: A custom object that represents another location within a document.

<a id="return-value"></a>

## Return Value

A value that indicates whether the two text positions are identical or whether one is before the other.

## See Also

### Evaluating text positions

- [offset(from:to:)](offset%28from_to_%29.md): Returns the number of UTF-16 characters between one text position and another text position.

# comparePosition:toPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns how one text position compares to another text position.

## Declaration

```objectivec
- (NSComparisonResult) comparePosition:(UITextPosition *) position toPosition:(UITextPosition *) other;
```

## Parameters

- `position`: A custom object that represents a location within a document.
- `other`: A custom object that represents another location within a document.

<a id="return-value"></a>

## Return Value

A value that indicates whether the two text positions are identical or whether one is before the other.

## See Also

### Evaluating text positions

- [offsetFromPosition:toPosition:](offset%28from_to_%29.md): Returns the number of UTF-16 characters between one text position and another text position.
