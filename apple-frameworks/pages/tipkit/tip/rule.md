> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tipkit/tip/rule](https://developer.apple.com/documentation/tipkit/tip/rule)

# Rule

**Framework:** TipKit  
**Kind:** Type Alias  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A condition to meet before displaying a tip.

## Declaration

```swift
typealias Rule = Tips.Rule
```

<a id="Overview"></a>

## Overview

Use rules to control when your tips display.

<a id="Parameter-Rules"></a>

### Parameter Rules

[Parameter](../tips/parameter.md) based rules track app state. For example, to display a tip when someone logs in:

1. Define the app state you want to track using the `@Parameter` macro.
2. Define a rule based on that app state using the `#Rule` macro.
3. Set the conditions for when the tip displays in the macro closure.

```swift
struct FavoriteLandmarkTip: Tip {
    // Define the app state you want to track.
    @Parameter
    static var userIsLoggedIn: Bool = false

    var rules: [Rule] {
        // Define a rule based on the app state.
        #Rule(Self.$userIsLoggedIn) {
            // Set the conditions for when the tip displays.
            $0 == true
        }
    }
}
```

<a id="Event-Rules"></a>

### Event Rules

Event based rules track user interactions. For example, to display a tip only when a [Event](../tips/event.md) occurs three or more times:

1. Define the user interaction you want to track as a [Event](../tips/event.md) with a unique `id`.
2. Define a rule based on that interaction using a `#Rule` macro.
3. Set the conditions for when the tip displays in the macro closure.

```swift
struct FavoriteLandmarkTip: Tip {
    // Define the user interaction you want to track.
    static let didViewLandmark: Event = Event(id: "didViewLandmark")

    var rules: [Rule] {
        // Define a rule based on the interaction.
        #Rule(Self.didViewLandmark) {
            // Set the conditions for when the tip displays.
            $0.donations.count > 3
        }
    }
}
```

> **Note**

> If no rules are defined within a tip content structure, the tip displays until dismissed or they exceed the threshold of their display frequency.

## Topics

### Creating parameters

- [Parameter](../tips/parameter.md): A type that monitors the state of its wrapped value to reevaluate any dependent tip rules when the value changes.

### Creating events and adding donations

- [Event](../tips/event.md): A repeatable user-defined action.
