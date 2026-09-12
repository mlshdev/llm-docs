> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uimainmenusystem](https://developer.apple.com/documentation/uikit/uimainmenusystem)

# UIMainMenuSystem (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

The main menu system.

## Declaration

```swift
@MainActor class UIMainMenuSystem
```

## Topics

### Accessing the main menu system

- [shared](uimainmenusystem/shared.md): The shared main menu system.

### Configuring a main menu system

- [setBuildConfiguration(\_:buildHandler:)](uimainmenusystem/setbuildconfiguration%28__buildhandler_%29.md)
- [UIMainMenuSystem.Configuration](uimainmenusystem/configuration.md): A configuration for the main menu system. You can specify whether or not certain elements are present in the initial main menu, as well as a block to build the menu using a UIMenuBuilder.

### Inspecting a configuration of find elements

- [UIMenuSystem.FindElementGroupConfiguration](uimenusystem/findelementgroupconfiguration.md): Represents a configuration for find elements, should they be present. You don’t create one of these directly. A configuration is provided as part of a `UIMainMenuSystemConfiguration`.
- [UIMenuSystem.FindElementGroupConfiguration.Style](uimenusystem/findelementgroupconfiguration/style-swift.enum.md): Represents a preference for the structure of Find elements in the main menu.

## Relationships

### Inherits From

- [UIMenuSystem](uimenusystem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### App menus

- [UIMenu](uimenu.md): A container for grouping related menu elements in an app menu or contextual menu.
- [UIMenuBuilder](uimenubuilder.md): An interface for adding and removing menus from a menu system.
- [UIMenuSystem](uimenusystem.md): An object representing a main or contextual menu system.

# UIMainMenuSystem (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · tvOS 26.0+ · visionOS 26.0+

The main menu system.

## Declaration

```objectivec
@interface UIMainMenuSystem : UIMenuSystem
```

## Topics

### Accessing the main menu system

- [sharedSystem](uimainmenusystem/shared.md): The shared main menu system.

### Configuring a main menu system

- [setBuildConfiguration:buildHandler:](uimainmenusystem/setbuildconfiguration_buildhandler_.md): Specifies that the main menu system should be built using the specified configuration. A build handler can be optionally provided, which the main menu system will use instead of calling `-buildMenuWithBuilder:`. Setting this will invalidate and rebuild the main menu system. Ideally it should be set once, and as early as possible, preferably in `-application:didFinishLaunchingWithOptions:`. Subsequent rebuilds of the main menu system will continue to use this `configuration` and `buildHandler`. It is a developer error to set the `configuration` while the main menu system is building. Doing so will assert.
- [UIMainMenuSystemConfiguration](uimainmenusystem/configuration.md): A configuration for the main menu system. You can specify whether or not certain elements are present in the initial main menu, as well as a block to build the menu using a UIMenuBuilder.

### Inspecting a configuration of find elements

- [UIMenuSystemFindElementGroupConfiguration](uimenusystem/findelementgroupconfiguration.md): Represents a configuration for find elements, should they be present. You don’t create one of these directly. A configuration is provided as part of a `UIMainMenuSystemConfiguration`.
- [UIMenuSystemFindElementGroupConfigurationStyle](uimenusystem/findelementgroupconfiguration/style-swift.enum.md): Represents a preference for the structure of Find elements in the main menu.

## Relationships

### Inherits From

- [UIMenuSystem](uimenusystem.md)

## See Also

### App menus

- [UIMenu](uimenu.md): A container for grouping related menu elements in an app menu or contextual menu.
- [UIMenuBuilder](uimenubuilder.md): An interface for adding and removing menus from a menu system.
- [UIMenuSystem](uimenusystem.md): An object representing a main or contextual menu system.
