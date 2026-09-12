> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menuactiondismissbehavior/automatic](https://developer.apple.com/documentation/swiftui/menuactiondismissbehavior/automatic)

# automatic

**Framework:** SwiftUI  
**Kind:** Type Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

Use the a dismissal behavior that’s appropriate for the given context.

## Declaration

```swift
static let automatic: MenuActionDismissBehavior
```

<a id="discussion"></a>

## Discussion

In most cases, the default behavior is [enabled](enabled.md). There are some cases, like [Stepper](../stepper.md), that use [disabled](disabled.md) by default.

## See Also

### Getting dismiss behaviors

- [disabled](disabled.md): Never dismiss the presented menu after performing an action.
- [enabled](enabled.md): Always dismiss the presented menu after performing an action.
