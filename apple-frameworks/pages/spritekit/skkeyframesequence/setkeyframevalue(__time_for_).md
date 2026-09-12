> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skkeyframesequence/setkeyframevalue(_:time:for:)](https://developer.apple.com/documentation/spritekit/skkeyframesequence/setkeyframevalue(_:time:for:))

# setKeyframeValue(\_:time:for:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces a keyframe in the sequence with a new keyframe.

## Declaration

```swift
func setKeyframeValue(_ value: Any, time: CGFloat, for index: Int)
```

## Parameters

- `value`: The new value for the keyframe.
- `time`: The new time for the keyframe.
- `index`: The index of the keyframe to change.

## See Also

### Sequence Building

- [addKeyframeValue(\_:time:)](addkeyframevalue%28__time_%29.md): Adds a keyframe to the sequence.
- [removeKeyframe(at:)](removekeyframe%28at_%29.md): Removes a keyframe from the sequence.
- [removeLastKeyframe()](removelastkeyframe%28%29.md): Removes the last value in the sequence.
- [setKeyframeTime(\_:for:)](setkeyframetime%28__for_%29.md): Changes the time for a specific keyframe.
- [setKeyframeValue(\_:for:)](setkeyframevalue%28__for_%29.md): Changes the value for a specific keyframe.

# setKeyframeValue:time:forIndex: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces a keyframe in the sequence with a new keyframe.

## Declaration

```objectivec
- (void) setKeyframeValue:(id) value time:(CGFloat) time forIndex:(NSUInteger) index;
```

## Parameters

- `value`: The new value for the keyframe.
- `time`: The new time for the keyframe.
- `index`: The index of the keyframe to change.

## See Also

### Sequence Building

- [addKeyframeValue:time:](addkeyframevalue%28__time_%29.md): Adds a keyframe to the sequence.
- [removeKeyframeAtIndex:](removekeyframe%28at_%29.md): Removes a keyframe from the sequence.
- [removeLastKeyframe](removelastkeyframe%28%29.md): Removes the last value in the sequence.
- [setKeyframeTime:forIndex:](setkeyframetime%28__for_%29.md): Changes the time for a specific keyframe.
- [setKeyframeValue:forIndex:](setkeyframevalue%28__for_%29.md): Changes the value for a specific keyframe.
