> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skkeyframesequence/addkeyframevalue(_:time:)](https://developer.apple.com/documentation/spritekit/skkeyframesequence/addkeyframevalue(_:time:))

# addKeyframeValue(\_:time:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a keyframe to the sequence.

## Declaration

```swift
func addKeyframeValue(_ value: Any, time: CGFloat)
```

## Parameters

- `value`: An object that defines the value to add. It must have the same class as other value objects stored in the sequence.
- `time`: The corresponding time.

<a id="Discussion"></a>

## Discussion

The new keyframe is appended to the end of the array.

## See Also

### Sequence Building

- [removeKeyframe(at:)](removekeyframe%28at_%29.md): Removes a keyframe from the sequence.
- [removeLastKeyframe()](removelastkeyframe%28%29.md): Removes the last value in the sequence.
- [setKeyframeTime(\_:for:)](setkeyframetime%28__for_%29.md): Changes the time for a specific keyframe.
- [setKeyframeValue(\_:for:)](setkeyframevalue%28__for_%29.md): Changes the value for a specific keyframe.
- [setKeyframeValue(\_:time:for:)](setkeyframevalue%28__time_for_%29.md): Replaces a keyframe in the sequence with a new keyframe.

# addKeyframeValue:time: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Adds a keyframe to the sequence.

## Declaration

```objectivec
- (void) addKeyframeValue:(id) value time:(CGFloat) time;
```

## Parameters

- `value`: An object that defines the value to add. It must have the same class as other value objects stored in the sequence.
- `time`: The corresponding time.

<a id="Discussion"></a>

## Discussion

The new keyframe is appended to the end of the array.

## See Also

### Sequence Building

- [removeKeyframeAtIndex:](removekeyframe%28at_%29.md): Removes a keyframe from the sequence.
- [removeLastKeyframe](removelastkeyframe%28%29.md): Removes the last value in the sequence.
- [setKeyframeTime:forIndex:](setkeyframetime%28__for_%29.md): Changes the time for a specific keyframe.
- [setKeyframeValue:forIndex:](setkeyframevalue%28__for_%29.md): Changes the value for a specific keyframe.
- [setKeyframeValue:time:forIndex:](setkeyframevalue%28__time_for_%29.md): Replaces a keyframe in the sequence with a new keyframe.
