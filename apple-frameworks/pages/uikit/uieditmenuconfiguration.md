> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuconfiguration](https://developer.apple.com/documentation/uikit/uieditmenuconfiguration)

# UIEditMenuConfiguration (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object containing the configuration details for the menu your app presents in response to an edit menu interaction.

## Declaration

```swift
@MainActor class UIEditMenuConfiguration
```

<a id="overview"></a>

## Overview

You use this object when calling the [presentEditMenu(with:)](uieditmenuinteraction/presenteditmenu%28with_%29.md) method of [UIEditMenuInteraction](uieditmenuinteraction.md) to provide the configuration details the interaction’s delegate uses to construct the menu that the interaction displays.

## Topics

### Creating an edit menu configuration

- [init(identifier:sourcePoint:)](uieditmenuconfiguration/init%28identifier_sourcepoint_%29.md): Initializes a new configuration with the source location you specify.

### Getting the configuration identifier

- [identifier](uieditmenuconfiguration/identifier-cjqj.md): The unique identifier for this configuration object.

### Configuring the menu

- [preferredArrowDirection](uieditmenuconfiguration/preferredarrowdirection.md): The preferred direction the arrow of the edit menu is pointing.
- [UIEditMenuArrowDirection](uieditmenuarrowdirection.md): Constants that describe the direction the arrow of the edit menu is pointing.
- [sourcePoint](uieditmenuconfiguration/sourcepoint.md): The source location of the interaction.

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
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Edit menus

- [UIEditMenuInteraction](uieditmenuinteraction.md): An interaction that provides edit operations using a menu.
- [UIEditMenuInteractionDelegate](uieditmenuinteractiondelegate.md): The methods for customizing the menu the interaction displays.
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md): A set of standard methods that apps can adopt to support editing.

# UIEditMenuConfiguration (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

An object containing the configuration details for the menu your app presents in response to an edit menu interaction.

## Declaration

```objectivec
@interface UIEditMenuConfiguration : NSObject
```

<a id="overview"></a>

## Overview

You use this object when calling the [presentEditMenuWithConfiguration:](uieditmenuinteraction/presenteditmenu%28with_%29.md) method of [UIEditMenuInteraction](uieditmenuinteraction.md) to provide the configuration details the interaction’s delegate uses to construct the menu that the interaction displays.

## Topics

### Creating an edit menu configuration

- [configurationWithIdentifier:sourcePoint:](uieditmenuconfiguration/configurationwithidentifier_sourcepoint_.md): Creates a new configuration with the source location you specify.

### Getting the configuration identifier

- [identifier](uieditmenuconfiguration/identifier-1vhk9.md): The unique identifier for this configuration object.

### Configuring the menu

- [preferredArrowDirection](uieditmenuconfiguration/preferredarrowdirection.md): The preferred direction the arrow of the edit menu is pointing.
- [UIEditMenuArrowDirection](uieditmenuarrowdirection.md): Constants that describe the direction the arrow of the edit menu is pointing.
- [sourcePoint](uieditmenuconfiguration/sourcepoint.md): The source location of the interaction.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Edit menus

- [UIEditMenuInteraction](uieditmenuinteraction.md): An interaction that provides edit operations using a menu.
- [UIEditMenuInteractionDelegate](uieditmenuinteractiondelegate.md): The methods for customizing the menu the interaction displays.
- [UIResponderStandardEditActions](uiresponderstandardeditactions.md): A set of standard methods that apps can adopt to support editing.
