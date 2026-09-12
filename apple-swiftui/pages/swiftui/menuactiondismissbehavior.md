> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/menuactiondismissbehavior](https://developer.apple.com/documentation/swiftui/menuactiondismissbehavior)

# MenuActionDismissBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The set of menu dismissal behavior options.

## Declaration

```swift
struct MenuActionDismissBehavior
```

<a id="overview"></a>

## Overview

Configure the menu dismissal behavior for a view hierarchy using the [menuActionDismissBehavior(\_:)](view/menuactiondismissbehavior%28__%29.md) view modifier.

## Topics

### Getting dismiss behaviors

- [automatic](menuactiondismissbehavior/automatic.md): Use the a dismissal behavior that’s appropriate for the given context.
- [disabled](menuactiondismissbehavior/disabled.md): Never dismiss the presented menu after performing an action.
- [enabled](menuactiondismissbehavior/enabled.md): Always dismiss the presented menu after performing an action.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Configuring menu dismissal

- [menuActionDismissBehavior(\_:)](view/menuactiondismissbehavior%28__%29.md): Tells a menu whether to dismiss after performing an action.
