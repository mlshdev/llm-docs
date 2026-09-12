> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/toolbarminimizationsafeareaadjustment](https://developer.apple.com/documentation/swiftui/toolbarminimizationsafeareaadjustment)

# ToolbarMinimizationSafeAreaAdjustment

**Framework:** SwiftUI  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The safe area adjustment during toolbar minimization.

## Declaration

```swift
struct ToolbarMinimizationSafeAreaAdjustment
```

<a id="overview"></a>

## Overview

Use this type with the [toolbarMinimizationSafeAreaAdjustment(\_:for:)](view/toolbarminimizationsafeareaadjustment%28__for_%29.md) modifier to control whether the safe area updates as bars minimize. By default the safe area adjusts interactively, but you can disable this to keep content in place – for example, when displaying full-bleed media beneath a minimizing bar.

```swift
.toolbarMinimizationBehavior(
    .onScrollDown, for: .navigationBar)
.toolbarMinimizationSafeAreaAdjustment(
    .disabled, for: .navigationBar)
```

## Topics

### Minimization adjustment options

- [automatic](toolbarminimizationsafeareaadjustment/automatic.md): The system determines the safe area adjustment.
- [disabled](toolbarminimizationsafeareaadjustment/disabled.md): The safe area remains unchanged as bars minimize.
- [enabled](toolbarminimizationsafeareaadjustment/enabled.md): The safe area adjusts interactively as bars minimize.

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
- [ToolbarMinimizationRestoration](toolbarminimizationrestoration.md): The restoration behavior during toolbar minimization.
- [toolbarMinimizationSafeAreaAdjustment(\_:for:)](view/toolbarminimizationsafeareaadjustment%28__for_%29.md): Sets the safe area adjustment for the specified bars during minimization.
