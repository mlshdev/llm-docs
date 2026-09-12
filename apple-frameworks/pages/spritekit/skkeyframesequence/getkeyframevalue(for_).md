> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skkeyframesequence/getkeyframevalue(for:)](https://developer.apple.com/documentation/spritekit/skkeyframesequence/getkeyframevalue(for:))

# getKeyframeValue(for:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Gets the value for a keyframe in the sequence.

## Declaration

```swift
func getKeyframeValue(for index: Int) -> Any
```

## Parameters

- `index`: The index of the keyframe.

<a id="return-value"></a>

## Return Value

The value object for the keyframe.

## See Also

### Sequence Information

- [count()](count%28%29.md): The number of keyframes in the sequence.
- [getKeyframeTime(for:)](getkeyframetime%28for_%29.md): Gets the time for a keyframe in the sequence.

# getKeyframeValueForIndex: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Gets the value for a keyframe in the sequence.

## Declaration

```objectivec
- (id) getKeyframeValueForIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the keyframe.

<a id="return-value"></a>

## Return Value

The value object for the keyframe.

## See Also

### Sequence Information

- [count](count%28%29.md): The number of keyframes in the sequence.
- [getKeyframeTimeForIndex:](getkeyframetime%28for_%29.md): Gets the time for a keyframe in the sequence.
