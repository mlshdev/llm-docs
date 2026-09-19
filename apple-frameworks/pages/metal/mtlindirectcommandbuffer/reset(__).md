> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/metal/mtlindirectcommandbuffer/reset(_:)

# reset(\_:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS

Resets a range of commands to their default state.

## Declaration

```swift
func reset(_ range: Range<Int>)
```

## Parameters

- `range`: The range of commands to reset. The range needs to fit inside the indirect command buffer’s extents.
