> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/social/slcomposesheetconfigurationitem](https://developer.apple.com/documentation/social/slcomposesheetconfigurationitem)

# SLComposeSheetConfigurationItem (Swift)

**Framework:** Social  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

An object that provides additional configuration details to use when configuring a composition interface.

## Declaration

```swift
class SLComposeSheetConfigurationItem
```

<a id="overview"></a>

## Overview

The [SLComposeSheetConfigurationItem](slcomposesheetconfigurationitem.md) class gives users a way to configure the properties of a post before posting it. For example, you can use these objects to let users choose an account from which to post, an album to which to post, or a location to add to a post.

To provide support for post configurations in your [SLComposeServiceViewController](slcomposeserviceviewcontroller.md) view, create as many configuration items as you need, place them in an array, and return the array in your implementation of `configurationItems`. Note that only one configuration item can be displayed at a time.

## Topics

### Creating a Configuration Item

- [init()](slcomposesheetconfigurationitem/init%28%29.md): Returns a configuration item.

### Responding to User Interaction

- [tapHandler](slcomposesheetconfigurationitem/taphandler.md): A custom tap handler block that handles user interaction with a configuration item.
- [SLComposeSheetConfigurationItemTapHandler](slcomposesheetconfigurationitemtaphandler.md): The method signature for a configuration item’s tap handler block.

### Specifying Configuration Information

- [title](slcomposesheetconfigurationitem/title.md): The name of the configuration item stored as a localized string.
- [value](slcomposesheetconfigurationitem/value.md): The current value or setting of the configuration item.
- [valuePending](slcomposesheetconfigurationitem/valuepending.md): A Boolean value that indicates whether the configuration item’s value is ready for display.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Configuring the Post Details

- [configurationItems()](slcomposeserviceviewcontroller/configurationitems%28%29.md): Returns configuration items to display in the compose view.
- [reloadConfigurationItems()](slcomposeserviceviewcontroller/reloadconfigurationitems%28%29.md): Reloads the list of configuration items.

# SLComposeSheetConfigurationItem (Objective-C)

**Framework:** Social  
**Kind:** Class  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+

An object that provides additional configuration details to use when configuring a composition interface.

## Declaration

```objectivec
@interface SLComposeSheetConfigurationItem : NSObject
```

<a id="overview"></a>

## Overview

The [SLComposeSheetConfigurationItem](slcomposesheetconfigurationitem.md) class gives users a way to configure the properties of a post before posting it. For example, you can use these objects to let users choose an account from which to post, an album to which to post, or a location to add to a post.

To provide support for post configurations in your [SLComposeServiceViewController](slcomposeserviceviewcontroller.md) view, create as many configuration items as you need, place them in an array, and return the array in your implementation of `configurationItems`. Note that only one configuration item can be displayed at a time.

## Topics

### Creating a Configuration Item

- [init](slcomposesheetconfigurationitem/init%28%29.md): Returns a configuration item.

### Responding to User Interaction

- [tapHandler](slcomposesheetconfigurationitem/taphandler.md): A custom tap handler block that handles user interaction with a configuration item.
- [SLComposeSheetConfigurationItemTapHandler](slcomposesheetconfigurationitemtaphandler.md): The method signature for a configuration item’s tap handler block.

### Specifying Configuration Information

- [title](slcomposesheetconfigurationitem/title.md): The name of the configuration item stored as a localized string.
- [value](slcomposesheetconfigurationitem/value.md): The current value or setting of the configuration item.
- [valuePending](slcomposesheetconfigurationitem/valuepending.md): A Boolean value that indicates whether the configuration item’s value is ready for display.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Configuring the Post Details

- [configurationItems](slcomposeserviceviewcontroller/configurationitems%28%29.md): Returns configuration items to display in the compose view.
- [reloadConfigurationItems](slcomposeserviceviewcontroller/reloadconfigurationitems%28%29.md): Reloads the list of configuration items.
