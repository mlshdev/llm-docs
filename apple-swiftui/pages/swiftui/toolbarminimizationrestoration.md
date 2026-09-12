> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarminimizationrestoration](https://developer.apple.com/documentation/swiftui/toolbarminimizationrestoration)

# ToolbarMinimizationRestoration

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The restoration behavior during toolbar minimization.

## Declaration

```swift
struct ToolbarMinimizationRestoration
```

<a id="overview"></a>

## Overview

Use this type with the [toolbarMinimizationRestoration(\_:for:)](view/toolbarminimizationrestoration%28__for_%29.md) modifier to control when a minimized toolbar restores. By default the toolbar restores when the user reverses scroll direction; with [atScrollEdge](toolbarminimizationrestoration/atscrolledge.md), the toolbar instead restores only when the scroll view’s content reaches the scroll edge – appropriate for screens where the bar is mostly chrome that doesn’t need to follow the user.

```swift
.toolbarMinimizationBehavior(
    .onScrollDown, for: .navigationBar)
.toolbarMinimizationRestoration(
    .atScrollEdge, for: .navigationBar)
```

## Topics

### Getting restoration options

- [atScrollEdge](toolbarminimizationrestoration/atscrolledge.md): The toolbar restores only when the scroll view’s content reaches the scroll edge.
- [automatic](toolbarminimizationrestoration/automatic.md): The system determines the restoration behavior.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Minimizing a toolbar

- [toolbarMinimizationBehavior(\_:for:)](view/toolbarminimizationbehavior%28__for_%29.md): Sets the minimize behavior for the specified bars.
- [ToolbarMinimizationBehavior](toolbarminimizationbehavior.md): The minimization behavior of a toolbar.
- [toolbarMinimizationRestoration(\_:for:)](view/toolbarminimizationrestoration%28__for_%29.md): Sets the restoration behavior for the specified bars during minimization.
- [toolbarMinimizationSafeAreaAdjustment(\_:for:)](view/toolbarminimizationsafeareaadjustment%28__for_%29.md): Sets the safe area adjustment for the specified bars during minimization.
- [ToolbarMinimizationSafeAreaAdjustment](toolbarminimizationsafeareaadjustment.md): The safe area adjustment during toolbar minimization.
