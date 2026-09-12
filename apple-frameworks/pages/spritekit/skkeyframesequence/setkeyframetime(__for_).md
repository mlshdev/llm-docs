> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skkeyframesequence/setkeyframetime(_:for:)](https://developer.apple.com/documentation/spritekit/skkeyframesequence/setkeyframetime(_:for:))

# setKeyframeTime(\_:for:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Changes the time for a specific keyframe.

## Declaration

```swift
func setKeyframeTime(_ time: CGFloat, for index: Int)
```

## Parameters

- `time`: The new time value for the keyframe.
- `index`: The index of the keyframe to change.

## See Also

### Sequence Building

- [addKeyframeValue(\_:time:)](addkeyframevalue%28__time_%29.md): Adds a keyframe to the sequence.
- [removeKeyframe(at:)](removekeyframe%28at_%29.md): Removes a keyframe from the sequence.
- [removeLastKeyframe()](removelastkeyframe%28%29.md): Removes the last value in the sequence.
- [setKeyframeValue(\_:for:)](setkeyframevalue%28__for_%29.md): Changes the value for a specific keyframe.
- [setKeyframeValue(\_:time:for:)](setkeyframevalue%28__time_for_%29.md): Replaces a keyframe in the sequence with a new keyframe.

# setKeyframeTime:forIndex: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Changes the time for a specific keyframe.

## Declaration

```objectivec
- (void) setKeyframeTime:(CGFloat) time forIndex:(NSUInteger) index;
```

## Parameters

- `time`: The new time value for the keyframe.
- `index`: The index of the keyframe to change.

## See Also

### Sequence Building

- [addKeyframeValue:time:](addkeyframevalue%28__time_%29.md): Adds a keyframe to the sequence.
- [removeKeyframeAtIndex:](removekeyframe%28at_%29.md): Removes a keyframe from the sequence.
- [removeLastKeyframe](removelastkeyframe%28%29.md): Removes the last value in the sequence.
- [setKeyframeValue:forIndex:](setkeyframevalue%28__for_%29.md): Changes the value for a specific keyframe.
- [setKeyframeValue:time:forIndex:](setkeyframevalue%28__time_for_%29.md): Replaces a keyframe in the sequence with a new keyframe.
