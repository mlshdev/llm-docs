> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/visibility](https://developer.apple.com/documentation/swiftui/visibility)

# Visibility

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

The visibility of a UI element, chosen automatically based on the platform, current context, and other factors.

## Declaration

```swift
@frozen enum Visibility
```

<a id="overview"></a>

## Overview

For example, the preferred visibility of list row separators can be configured using the [listRowSeparator(\_:edges:)](view/listrowseparator%28__edges_%29.md).

## Topics

### Getting visibility options

- [Visibility.automatic](visibility/automatic.md): The element may be visible or hidden depending on the policies of the component accepting the visibility configuration.
- [Visibility.visible](visibility/visible.md): The element may be visible.
- [Visibility.hidden](visibility/hidden.md): The element may be hidden.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Hiding system elements

- [labelsHidden()](view/labelshidden%28%29.md): Hides the labels of any controls contained within this view.
- [labelsVisibility(\_:)](view/labelsvisibility%28__%29.md): Controls the visibility of labels of any controls contained within this view.
- [labelsVisibility](environmentvalues/labelsvisibility.md): The labels visibility set by [labelsVisibility(\_:)](view/labelsvisibility%28__%29.md).
- [menuIndicator(\_:)](view/menuindicator%28__%29.md): Sets the menu indicator visibility for controls within this view.
- [statusBarHidden(\_:)](view/statusbarhidden%28__%29.md): Deprecated. Sets the visibility of the status bar.
- [persistentSystemOverlays(\_:)](view/persistentsystemoverlays%28__%29.md): Sets the preferred visibility of the non-transient system views overlaying the app.
