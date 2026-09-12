> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiconfigurationstate-8d7pd](https://developer.apple.com/documentation/uikit/uiconfigurationstate-8d7pd)

# UIConfigurationState

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · tvOS 14.0+ · visionOS

The requirements for an object that encapsulates a view’s state.

## Declaration

```swift
protocol UIConfigurationState
```

<a id="overview"></a>

## Overview

This protocol provides a blueprint for a configuration state object, which encompasses a trait collection along with all of the common states that affect a view’s appearance. A configuration state encapsulates the inputs that configure a view for any possible state or combination of states. You use a configuration state with background and content configurations to obtain the default appearance for a specific state.

Typically, you don’t create a configuration state yourself. To obtain a configuration state, override the [updateConfiguration(using:)](uicollectionviewcell/updateconfiguration%28using_%29.md) method in your view subclass and use the state parameter. Outside of this method, you can get a view’s configuration state by using its [configurationState](uicollectionviewcell/configurationstate-4u37h.md) property.

For more information, see [UIViewConfigurationState](uiviewconfigurationstate-swift.struct.md) and [UICellConfigurationState](uicellconfigurationstate-swift.struct.md).

## Topics

### Managing configuration states

- [traitCollection](uiconfigurationstate-8d7pd/traitcollection.md): The traits that describe the current layout environment of the view, such as the user interface style and layout direction.
- [subscript(\_:)](uiconfigurationstate-8d7pd/subscript%28__%29.md): Accesses custom states by key.

### Creating a configuration state manually

- [init(traitCollection:)](uiconfigurationstate-8d7pd/init%28traitcollection_%29.md): Creates a view configuration state with the specified trait collection.

## Relationships

### Conforming Types

- [UICellConfigurationState](uicellconfigurationstate-swift.struct.md)
- [UIContentUnavailableConfigurationState](uicontentunavailableconfigurationstate-swift.struct.md)
- [UIViewConfigurationState](uiviewconfigurationstate-swift.struct.md)

## See Also

### Configuration states

- [UIViewConfigurationState](uiviewconfigurationstate-swift.struct.md): A structure that encapsulates a view’s state.
- [UICellConfigurationState](uicellconfigurationstate-swift.struct.md): A structure that encapsulates a cell’s state.
- [UIConfigurationStateCustomKey](uiconfigurationstatecustomkey.md): A key that defines a custom state for a view.
