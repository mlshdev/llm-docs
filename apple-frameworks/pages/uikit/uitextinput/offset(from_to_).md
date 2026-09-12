> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitextinput/offset(from:to:)](https://developer.apple.com/documentation/uikit/uitextinput/offset(from:to:))

# offset(from:to:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the number of UTF-16 characters between one text position and another text position.

## Declaration

```swift
func offset(from: UITextPosition, to toPosition: UITextPosition) -> Int
```

## Parameters

- `from`: A custom object that represents a location within a document.
- `toPosition`: A custom object that represents another location within document.

<a id="return-value"></a>

## Return Value

The number of UTF-16 characters between `fromPosition` and `toPosition`.

## See Also

### Evaluating text positions

- [compare(\_:to:)](compare%28__to_%29.md): Returns how one text position compares to another text position.

# offsetFromPosition:toPosition: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Returns the number of UTF-16 characters between one text position and another text position.

## Declaration

```objectivec
- (NSInteger) offsetFromPosition:(UITextPosition *) from toPosition:(UITextPosition *) toPosition;
```

## Parameters

- `from`: A custom object that represents a location within a document.
- `toPosition`: A custom object that represents another location within document.

<a id="return-value"></a>

## Return Value

The number of UTF-16 characters between `fromPosition` and `toPosition`.

## See Also

### Evaluating text positions

- [comparePosition:toPosition:](compare%28__to_%29.md): Returns how one text position compares to another text position.
