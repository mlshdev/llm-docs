> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/layoutdirectionbehavior](https://developer.apple.com/documentation/swiftui/layoutdirectionbehavior)

# LayoutDirectionBehavior

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A description of what should happen when the layout direction changes.

## Declaration

```swift
enum LayoutDirectionBehavior
```

<a id="overview"></a>

## Overview

A `LayoutDirectionBehavior` can be used with the `layoutDirectionBehavior` view modifier or the `layoutDirectionBehavior` property of `Shape`.

## Topics

### Getting behaviors

- [LayoutDirectionBehavior.fixed](layoutdirectionbehavior/fixed.md): A behavior that doesn’t mirror when the layout direction changes.
- [mirrors](layoutdirectionbehavior/mirrors.md): A behavior that mirrors when the layout direction is right-to-left.
- [LayoutDirectionBehavior.mirrors(in:)](layoutdirectionbehavior/mirrors%28in_%29.md): A behavior that mirrors when the layout direction has the specified value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting a layout direction

- [layoutDirectionBehavior(\_:)](view/layoutdirectionbehavior%28__%29.md): Sets the behavior of this view for different layout directions.
- [layoutDirection](environmentvalues/layoutdirection.md): The layout direction associated with the current environment.
- [LayoutDirection](layoutdirection.md): A direction in which SwiftUI can lay out content.
- [LayoutRotationUnaryLayout](layoutrotationunarylayout.md)
