> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchwalltime/distantfuture

# distantFuture

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A time in the distant future.

## Declaration

```swift
static let distantFuture: DispatchWallTime
```

<a id="Discussion"></a>

## Discussion

You can pass this value to methods that schedule work to have the system wait indefinitely for a particular event to occur or condition to be met.

## See Also

### Getting Well-Known Times

- [now()](now%28%29.md): Returns the current time.
