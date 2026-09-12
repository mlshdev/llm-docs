> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipgroup/currenttip](https://developer.apple.com/documentation/tipkit/tipgroup/currenttip)

# currentTip

**Framework:** TipKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Returns the current tip available for display.

## Declaration

```swift
@MainActor final var currentTip: (any Tip)? { get }
```

## See Also

### Getting the currently available tip

- [currentTipUpdates](currenttipupdates.md): Stream of tips that become eligible for display.
