> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uicontentunavailableconfigurationstate-swift.struct](https://developer.apple.com/documentation/uikit/uicontentunavailableconfigurationstate-swift.struct)

# UIContentUnavailableConfigurationState

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · tvOS 17.0+ · visionOS

A structure that encapsulates state for a content-unavailable view.

## Declaration

```swift
struct UIContentUnavailableConfigurationState
```

<a id="overview"></a>

## Overview

Typically, you don’t create a configuration state yourself. To obtain a configuration state, override [updateContentUnavailableConfiguration(using:)](uiviewcontroller/updatecontentunavailableconfiguration%28using_%29.md) in your view controller subclass and use the state parameter. Outside of this method, you can get a view controller’s configuration state from the [contentUnavailableConfigurationState](uiviewcontroller/contentunavailableconfigurationstate-7sczw.md) property.

You can create your own custom states to add to a content-unavailable configuration state by defining a custom state key with [UIConfigurationStateCustomKey](uiconfigurationstatecustomkey.md).

## Topics

### Instance Properties

- [searchText](uicontentunavailableconfigurationstate-swift.struct/searchtext.md): The search text.

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

### Unavailable content configurations

- [UIContentUnavailableConfiguration](uicontentunavailableconfiguration-swift.struct.md): A content configuration for a content-unavailable view.
