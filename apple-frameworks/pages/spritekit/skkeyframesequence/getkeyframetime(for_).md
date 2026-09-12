> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skkeyframesequence/getkeyframetime(for:)](https://developer.apple.com/documentation/spritekit/skkeyframesequence/getkeyframetime(for:))

# getKeyframeTime(for:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Gets the time for a keyframe in the sequence.

## Declaration

```swift
func getKeyframeTime(for index: Int) -> CGFloat
```

## Parameters

- `index`: The index of the keyframe.

<a id="return-value"></a>

## Return Value

The time value for the keyframe.

## See Also

### Sequence Information

- [count()](count%28%29.md): The number of keyframes in the sequence.
- [getKeyframeValue(for:)](getkeyframevalue%28for_%29.md): Gets the value for a keyframe in the sequence.

# getKeyframeTimeForIndex: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Gets the time for a keyframe in the sequence.

## Declaration

```objectivec
- (CGFloat) getKeyframeTimeForIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the keyframe.

<a id="return-value"></a>

## Return Value

The time value for the keyframe.

## See Also

### Sequence Information

- [count](count%28%29.md): The number of keyframes in the sequence.
- [getKeyframeValueForIndex:](getkeyframevalue%28for_%29.md): Gets the value for a keyframe in the sequence.
