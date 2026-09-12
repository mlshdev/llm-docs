> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avkit/avlegiblemediaoptionsmenucontroller](https://developer.apple.com/documentation/avkit/avlegiblemediaoptionsmenucontroller)

# AVLegibleMediaOptionsMenuController (Swift)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```swift
class AVLegibleMediaOptionsMenuController
```

<a id="overview"></a>

## Overview

A menu controller for legible media options (subtitles/captions)

Supports both media track selection and caption appearance customization. When initialized without a player, only caption appearance options are available. When initialized with a player, both media tracks and caption appearance are available.

## Topics

### Creating a menu controller

- [init(player:)](avlegiblemediaoptionsmenucontroller/init%28player_%29.md)

### Managing the menu

- [menu(contents:)](avlegiblemediaoptionsmenucontroller/menu%28contents_%29.md)
- [menuState](avlegiblemediaoptionsmenucontroller/menustate.md)
- [AVLegibleMediaOptionsMenuController.MenuContents](avlegiblemediaoptionsmenucontroller/menucontents.md)
- [AVLegibleMediaOptionsMenuState](avlegiblemediaoptionsmenustate.md)
- [AVLegibleMediaOptionsMenuController.StateChangeReason](avlegiblemediaoptionsmenucontroller/statechangereason.md)

### Accessing the player

- [player](avlegiblemediaoptionsmenucontroller/player.md)

### Configuring a delegate

- [delegate](avlegiblemediaoptionsmenucontroller/delegate-swift.property.md)
- [AVLegibleMediaOptionsMenuController.Delegate](avlegiblemediaoptionsmenucontroller/delegate-swift.protocol.md)

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

### Legible media options

- [AVLegibleMediaOptionsMenuState](avlegiblemediaoptionsmenustate.md)

# AVLegibleMediaOptionsMenuController (Objective-C)

**Framework:** AVKit  
**Kind:** Class  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

## Declaration

```objectivec
@interface AVLegibleMediaOptionsMenuController : NSObject
```

<a id="overview"></a>

## Overview

A menu controller for legible media options (subtitles/captions)

Supports both media track selection and caption appearance customization. When initialized without a player, only caption appearance options are available. When initialized with a player, both media tracks and caption appearance are available.

## Topics

### Creating a menu controller

- [initWithPlayer:](avlegiblemediaoptionsmenucontroller/init%28player_%29.md)

### Managing the menu

- [menuWithContents:](avlegiblemediaoptionsmenucontroller/menu%28contents_%29.md)
- [menuState](avlegiblemediaoptionsmenucontroller/menustate.md)
- [AVLegibleMediaOptionsMenuContents](avlegiblemediaoptionsmenucontroller/menucontents.md)
- [AVLegibleMediaOptionsMenuState](avlegiblemediaoptionsmenustate.md)
- [AVLegibleMediaOptionsMenuStateChangeReason](avlegiblemediaoptionsmenucontroller/statechangereason.md)

### Accessing the player

- [player](avlegiblemediaoptionsmenucontroller/player.md)

### Configuring a delegate

- [delegate](avlegiblemediaoptionsmenucontroller/delegate-swift.property.md)
- [AVLegibleMediaOptionsMenuControllerDelegate](avlegiblemediaoptionsmenucontroller/delegate-swift.protocol.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Legible media options

- [AVLegibleMediaOptionsMenuState](avlegiblemediaoptionsmenustate.md)
