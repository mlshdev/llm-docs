> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/springloadingbehavior/automatic](https://developer.apple.com/documentation/swiftui/springloadingbehavior/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The automatic spring loading behavior.

## Declaration

```swift
static let automatic: SpringLoadingBehavior
```

<a id="discussion"></a>

## Discussion

This defers to default component behavior for spring loading. Some components, such as `TabView`, will default to allowing spring loading; while others do not.

## See Also

### Getting the behaviors

- [enabled](enabled.md): Spring loaded interactions will be enabled for applicable views.
- [disabled](disabled.md): Spring loaded interactions will be disabled for applicable views.
