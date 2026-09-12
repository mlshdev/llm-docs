> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/carenderer/endframe()](https://developer.apple.com/documentation/quartzcore/carenderer/endframe())

# endFrame() (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Release any data associated with the current frame.

## Declaration

```swift
func endFrame()
```

## See Also

### Rendering a Frame

- [beginFrame(atTime:timeStamp:)](beginframe%28attime_timestamp_%29.md): Begin rendering a frame at the specified time.
- [updateBounds()](updatebounds%28%29.md): Returns the bounds of the update region that contains all pixels that will be rendered by the current frame.
- [addUpdate(\_:)](addupdate%28__%29.md): Adds the rectangle to the update region of the current frame.
- [render()](render%28%29.md): Render the update region of the current frame to the target context.
- [nextFrameTime()](nextframetime%28%29.md): Returns the time at which the next update should happen.

# endFrame (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Release any data associated with the current frame.

## Declaration

```objectivec
- (void) endFrame;
```

## See Also

### Rendering a Frame

- [beginFrameAtTime:timeStamp:](beginframe%28attime_timestamp_%29.md): Begin rendering a frame at the specified time.
- [updateBounds](updatebounds%28%29.md): Returns the bounds of the update region that contains all pixels that will be rendered by the current frame.
- [addUpdateRect:](addupdate%28__%29.md): Adds the rectangle to the update region of the current frame.
- [render](render%28%29.md): Render the update region of the current frame to the target context.
- [nextFrameTime](nextframetime%28%29.md): Returns the time at which the next update should happen.
