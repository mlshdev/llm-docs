> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchtime/distantfuture](https://developer.apple.com/documentation/dispatch/dispatchtime/distantfuture)

# distantFuture

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A time in the distant future.

## Declaration

```swift
static let distantFuture: DispatchTime
```

<a id="Discussion"></a>

## Discussion

You can pass this value to methods that schedule work to have the system wait indefinitely for a particular event to occur or condition to be met.

## See Also

### Getting Well-Known Times

- [now()](now%28%29.md): Returns the current time.
