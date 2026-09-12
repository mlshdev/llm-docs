> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarminimizationbehavior](https://developer.apple.com/documentation/swiftui/toolbarminimizationbehavior)

# ToolbarMinimizationBehavior

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The minimization behavior of a toolbar.

## Declaration

```swift
struct ToolbarMinimizationBehavior
```

<a id="overview"></a>

## Overview

Use this type with the [toolbarMinimizationBehavior(\_:for:)](view/toolbarminimizationbehavior%28__for_%29.md) modifier to control how toolbars minimize in response to scrolling.

On iOS, you can minimize the navigation bar using [onScrollDown](toolbarminimizationbehavior/onscrolldown.md) or [onScrollUp](toolbarminimizationbehavior/onscrollup.md):

```swift
NavigationStack {
    ScrollView {
        // ...
    }
    .toolbarMinimizationBehavior(
        .onScrollDown, for: .navigationBar)
}
```

## Topics

### Getting behaviors

- [automatic](toolbarminimizationbehavior/automatic.md): The system determines the minimize behavior. By default, navigation bars on iOS will minimize when the view has a searchable using the [toolbarPrincipal](searchfieldplacement/toolbarprincipal.md) placement.
- [never](toolbarminimizationbehavior/never.md): The toolbar cannot be minimized.
- [onScrollDown](toolbarminimizationbehavior/onscrolldown.md): Minimize when scrolling down.
- [onScrollUp](toolbarminimizationbehavior/onscrollup.md): Minimize when scrolling up.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Minimizing a toolbar

- [toolbarMinimizationBehavior(\_:for:)](view/toolbarminimizationbehavior%28__for_%29.md): Sets the minimize behavior for the specified bars.
- [toolbarMinimizationRestoration(\_:for:)](view/toolbarminimizationrestoration%28__for_%29.md): Sets the restoration behavior for the specified bars during minimization.
- [ToolbarMinimizationRestoration](toolbarminimizationrestoration.md): The restoration behavior during toolbar minimization.
- [toolbarMinimizationSafeAreaAdjustment(\_:for:)](view/toolbarminimizationsafeareaadjustment%28__for_%29.md): Sets the safe area adjustment for the specified bars during minimization.
- [ToolbarMinimizationSafeAreaAdjustment](toolbarminimizationsafeareaadjustment.md): The safe area adjustment during toolbar minimization.
