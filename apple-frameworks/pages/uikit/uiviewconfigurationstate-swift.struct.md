> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewconfigurationstate-swift.struct](https://developer.apple.com/documentation/uikit/uiviewconfigurationstate-swift.struct)

# UIViewConfigurationState

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

A structure that encapsulates a view’s state.

## Declaration

```swift
struct UIViewConfigurationState
```

<a id="overview"></a>

## Overview

A view configuration state encompasses a trait collection along with all of the common states that affect a view’s appearance — states like selected, focused, or disabled. A view configuration state encapsulates the inputs that configure a view for any possible state or combination of states. You use a view configuration state with background and content configurations to obtain the default appearance for a specific state.

Typically, you don’t create a configuration state yourself. To obtain a configuration state, override the [updateConfiguration(using:)](uicollectionviewcell/updateconfiguration%28using_%29.md) method in your view subclass and use the state parameter. Outside of this method, you can get a view’s configuration state by using its [configurationState](uicollectionviewcell/configurationstate-4u37h.md) property.

You can create your own custom states to add to a view configuration state by defining a custom state key using [UIConfigurationStateCustomKey](uiconfigurationstatecustomkey.md).

## Topics

### Managing view configuration states

- [isSelected](uiviewconfigurationstate-swift.struct/isselected.md): A Boolean value that indicates whether the view is in a selected state.
- [isHighlighted](uiviewconfigurationstate-swift.struct/ishighlighted.md): A Boolean value that indicates whether the view is in a highlighted state.
- [isFocused](uiviewconfigurationstate-swift.struct/isfocused.md): A Boolean value that indicates whether the view is in a focused state.
- [isDisabled](uiviewconfigurationstate-swift.struct/isdisabled.md): A Boolean value that indicates whether the view is in a disabled state.
- [isPinned](uiviewconfigurationstate-swift.struct/ispinned.md): A Boolean value that indicates whether the view is in a pinned state.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomReflectable](https://developer.apple.com/documentation/swift/customreflectable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [UIConfigurationState](uiconfigurationstate-8d7pd.md)

## See Also

### Configuration states

- [UICellConfigurationState](uicellconfigurationstate-swift.struct.md): A structure that encapsulates a cell’s state.
- [UIConfigurationState](uiconfigurationstate-8d7pd.md): The requirements for an object that encapsulates a view’s state.
- [UIConfigurationStateCustomKey](uiconfigurationstatecustomkey.md): A key that defines a custom state for a view.
