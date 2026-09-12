> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tipgroup/currenttipupdates](https://developer.apple.com/documentation/tipkit/tipgroup/currenttipupdates)

# currentTipUpdates

**Framework:** TipKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

Stream of tips that become eligible for display.

## Declaration

```swift
final var currentTipUpdates: some AsyncSequence<any Tip, Never> { get }
```

## See Also

### Getting the currently available tip

- [currentTip](currenttip.md): Returns the current tip available for display.
