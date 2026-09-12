> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutdirection](https://developer.apple.com/documentation/swiftui/layoutdirection)

# LayoutDirection

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A direction in which SwiftUI can lay out content.

## Declaration

```swift
enum LayoutDirection
```

<a id="overview"></a>

## Overview

SwiftUI supports both left-to-right and right-to-left directions for laying out content to support different languages and locales. The system sets the value based on the user’s locale, but you can also use the [environment(\_:\_:)](view/environment%28____%29.md) modifier to override the direction for a view and its child views:

```swift
MyView()
    .environment(\.layoutDirection, .rightToLeft)
```

You can also read the [layoutDirection](environmentvalues/layoutdirection.md) environment value to find out which direction applies to a particular environment. However, in many cases, you don’t need to take any action based on this value. SwiftUI horizontally flips the x position of each view within its parent, so layout calculations automatically produce the desired effect for both modes without any changes.

## Topics

### Getting layout directions

- [LayoutDirection.leftToRight](layoutdirection/lefttoright.md): A left-to-right layout direction.
- [LayoutDirection.rightToLeft](layoutdirection/righttoleft.md): A right-to-left layout direction.

### Creating a layout direction

- [init(\_:)](layoutdirection/init%28__%29.md): Create a direction from its UITraitEnvironmentLayoutDirection equivalent.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting a layout direction

- [layoutDirectionBehavior(\_:)](view/layoutdirectionbehavior%28__%29.md): Sets the behavior of this view for different layout directions.
- [LayoutDirectionBehavior](layoutdirectionbehavior.md): A description of what should happen when the layout direction changes.
- [layoutDirection](environmentvalues/layoutdirection.md): The layout direction associated with the current environment.
- [LayoutRotationUnaryLayout](layoutrotationunarylayout.md)
