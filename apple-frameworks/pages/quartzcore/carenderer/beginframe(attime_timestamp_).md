> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/carenderer/beginframe(attime:timestamp:)](https://developer.apple.com/documentation/quartzcore/carenderer/beginframe(attime:timestamp:))

# beginFrame(atTime:timeStamp:) (Swift)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Begin rendering a frame at the specified time.

## Declaration

```swift
func beginFrame(atTime t: CFTimeInterval, timeStamp ts: UnsafeMutablePointer<CVTimeStamp>?)
```

## Parameters

- `t`: The layer time.
- `ts`: The display timestamp associated with timeInterval. Can be null.

## See Also

### Rendering a Frame

- [updateBounds()](updatebounds%28%29.md): Returns the bounds of the update region that contains all pixels that will be rendered by the current frame.
- [addUpdate(\_:)](addupdate%28__%29.md): Adds the rectangle to the update region of the current frame.
- [render()](render%28%29.md): Render the update region of the current frame to the target context.
- [nextFrameTime()](nextframetime%28%29.md): Returns the time at which the next update should happen.
- [endFrame()](endframe%28%29.md): Release any data associated with the current frame.

# beginFrameAtTime:timeStamp: (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Begin rendering a frame at the specified time.

## Declaration

```objectivec
- (void) beginFrameAtTime:(CFTimeInterval) t timeStamp:(CVTimeStamp *) ts;
```

## Parameters

- `t`: The layer time.
- `ts`: The display timestamp associated with timeInterval. Can be null.

## See Also

### Rendering a Frame

- [updateBounds](updatebounds%28%29.md): Returns the bounds of the update region that contains all pixels that will be rendered by the current frame.
- [addUpdateRect:](addupdate%28__%29.md): Adds the rectangle to the update region of the current frame.
- [render](render%28%29.md): Render the update region of the current frame to the target context.
- [nextFrameTime](nextframetime%28%29.md): Returns the time at which the next update should happen.
- [endFrame](endframe%28%29.md): Release any data associated with the current frame.
