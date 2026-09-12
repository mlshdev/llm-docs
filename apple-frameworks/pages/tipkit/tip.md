> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip](https://developer.apple.com/documentation/tipkit/tip)

# Tip

**Framework:** TipKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that sets a tip’s content, as well as the conditions for when it displays.

## Declaration

```swift
protocol Tip : Identifiable, Sendable
```

<a id="Overview"></a>

## Overview

Use this protocol for setting a tip’s content, as well as defining the conditions for when it appears in a view. You create custom tips by declaring types that conform to the `Tip` protocol. Set your tip’s content by giving it a [title](tip/title.md),  [message](tip/message.md),  [image](tip/image.md), and a list of [actions](tip/actions.md).

For example, to create a tip with a `title`, `message`, and `image`:

```swift
struct FavoriteBackyardTip: Tip {
    var title: Text {
        Text("Save as a Favorite")
    }

    var message: Text? {
        Text("Your favorite backyards always appear at the top of the list.")
    }

    var image: Image? {
        Image(systemName: "star")
    }
}
```

For a tip to be valid, you need to set its `title`. To control when a tip displays, pass instances of [Rule](tip/rule.md) and [Option](tip/option.md) into the [rules](tip/rules.md) and [options](tip/options.md) properties of the tip.

After you define your tip’s content, display it in either a [TipView](tipview.md) or a [popoverTip(\_:arrowEdge:action:)](https://developer.apple.com/documentation/swiftui/view/popovertip%28_:arrowedge:action:%29).

## Topics

### Setting tip content

- [title](tip/title.md): A title that names the tip.
- [message](tip/message.md): A short description of how to use the tip’s feature.
- [image](tip/image.md): The image associated with the tip.
- [id](tip/id.md): The tip’s unique identifier.

### Controlling when tips appear

- [rules](tip/rules.md): The rules that determine when a tip is eligible for display. For more information on rules, see [Rule](tips/rule.md).
- [Rule](tip/rule.md): A condition to meet before displaying a tip.
- [Event](tip/event.md): A repeatable user-defined action.

### Customizing tip behavior

- [options](tip/options.md): Customizations for a tip.
- [Option](tip/option.md): A type that represents the various customizations that you can make to a tip’s behavior.
- [IgnoresDisplayFrequency](tip/ignoresdisplayfrequency.md): Controls whether a tip obeys the preconfigured display frequency interval.
- [MaxDisplayCount](tip/maxdisplaycount.md): Specifies the maximum number of times a tip displays before the system automatically invalidates it.
- [MaxDisplayDuration](tip/maxdisplayduration.md): Specifies the maximum amount of time a tip is displayed before it is invalidated.

### Providing actions

- [actions](tip/actions.md): Buttons that help people get started or learn more about your feature.
- [Action](tip/action.md): A type that describes a control associated with a tip.

### Monitoring tip status

- [status](tip/status-swift.property.md): The current status of a tip based on its rules and the configured [displayFrequency(\_:)](tips/configurationoption/displayfrequency%28__%29.md).
- [statusUpdates](tip/statusupdates.md): An asynchronous sequence for monitoring a tip’s status changes.
- [shouldDisplay](tip/shoulddisplay.md): A Boolean value that determines whether to display a tip.
- [shouldDisplayUpdates](tip/shoulddisplayupdates.md): An asynchronous sequence for monitoring a tip’s display eligibility.
- [Status](tip/status-swift.typealias.md): A type that describes the current display eligibility status for a tip.
- [InvalidationReason](tip/invalidationreason.md): A type that describes why the system permanently invalidated a tip.

### Invalidating a tip

- [invalidate(reason:)](tip/invalidate%28reason_%29.md): Permanently invalidates a tip and prevents it from displaying.
- [resetEligibility()](tip/reseteligibility%28%29.md): Reset a previously invalidated tip.

## Relationships

### Inherits From

- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [AnyTip](anytip.md)

## See Also

### Content

- [TipGroup](tipgroup.md): A collection of tips that can be presented one at a time using a specific order or based on the first tip eligible for display.
