> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/automaticassessmentconfiguration/aemenubaritem](https://developer.apple.com/documentation/automaticassessmentconfiguration/aemenubaritem)

# AEMenuBarItem (Swift)

**Framework:** Automatic Assessment Configuration  
**Kind:** Structure  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Identifies a menu bar item that can remain visible during an assessment session.

## Declaration

```swift
struct AEMenuBarItem
```

<a id="overview"></a>

## Overview

Use these constants with [allowedMenuBarItems](aeassessmentconfiguration/allowedmenubaritems.md) to control which menu bar items stay visible while [allowsMenuBar](aeassessmentconfiguration/allowsmenubar.md) is enabled. To allow a third-party menu extra, use its bundle identifier as the raw value.

## Topics

### Initializers

- [init(\_:)](aemenubaritem/init%28__%29.md)
- [init(rawValue:)](aemenubaritem/init%28rawvalue_%29.md)

### Type Properties

- [battery](aemenubaritem/battery.md): The Battery system menu bar item.
- [bluetooth](aemenubaritem/bluetooth.md): The Bluetooth system menu bar item.
- [clock](aemenubaritem/clock.md): The Clock system menu bar item.
- [displays](aemenubaritem/displays.md): The Displays system menu bar item.
- [keyboard](aemenubaritem/keyboard.md): The Input Menu system menu bar item, which selects keyboard layouts.
- [volume](aemenubaritem/volume.md): The Volume system menu bar item.
- [wifi](aemenubaritem/wifi.md): The Wi-Fi system menu bar item.

### Type Methods

- [menuBarExtra(bundleIdentifier:)](aemenubaritem/menubarextra%28bundleidentifier_%29.md): Creates a menu bar extra item representing a custom menu extra.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# AEMenuBarItem (Objective-C)

**Framework:** Automatic Assessment Configuration  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 27.0+ · macOS 27.0+

Identifies a menu bar item that can remain visible during an assessment session.

## Declaration

```objectivec
typedef NSString * AEMenuBarItem;
```

<a id="overview"></a>

## Overview

Use these constants with [allowedMenuBarItems](aeassessmentconfiguration/allowedmenubaritems.md) to control which menu bar items stay visible while [allowsMenuBar](aeassessmentconfiguration/allowsmenubar.md) is enabled. To allow a third-party menu extra, use its bundle identifier as the raw value.
