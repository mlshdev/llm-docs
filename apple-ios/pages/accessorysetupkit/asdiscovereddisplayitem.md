> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessorysetupkit/asdiscovereddisplayitem](https://developer.apple.com/documentation/accessorysetupkit/asdiscovereddisplayitem)

# ASDiscoveredDisplayItem (Swift)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 26.1+ · iPadOS 26.1+

A picker display item created from customizing a discovered accessory.

## Declaration

```swift
class ASDiscoveredDisplayItem
```

## Mentioned In

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md)

<a id="overview"></a>

## Overview

Use this type when your app’s picker uses the [filterDiscoveryResults](aspickerdisplaysettings/options-swift.struct/filterdiscoveryresults.md) option. With this option enabled, your discovery session receives [ASAccessoryEventType.accessoryDiscovered](asaccessoryeventtype/accessorydiscovered.md) events with discovered accessories. To include a discovered accessory in the picker, create an instance of this class, optionally using the Bluetooth properties of the event’s [ASDiscoveredAccessory](asdiscoveredaccessory.md) to provide a more specific name or product image. Then send the `ASDiscoveredDisplayItem` to the picker with the session’s [updatePicker(showing:completionHandler:)](asaccessorysession/updatepicker%28showing_completionhandler_%29.md) method.

## Topics

### Creating an updated display item

- [init(name:productImage:accessory:)](asdiscovereddisplayitem/init%28name_productimage_accessory_%29.md): Creates a discovered picker display item with a name and image to display and a descriptor to match discovered accessories.

## Relationships

### Inherits From

- [ASPickerDisplayItem](aspickerdisplayitem.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Displaying picker items

- [ASPickerDisplayItem](aspickerdisplayitem.md): An accessory as presented by the discovery picker.
- [ASMigrationDisplayItem](asmigrationdisplayitem.md): A previously-discovered accessory as presented by the discovery picker, for use when migrating it to AccessorySetupKit.

# ASDiscoveredDisplayItem (Objective-C)

**Framework:** AccessorySetupKit  
**Kind:** Class  
**Availability:** iOS 26.1+ · iPadOS 26.1+

A picker display item created from customizing a discovered accessory.

## Declaration

```objectivec
@interface ASDiscoveredDisplayItem : ASPickerDisplayItem
```

## Mentioned In

- [Discovering and configuring accessories](discovering-and-configuring-accessories.md)

<a id="overview"></a>

## Overview

Use this type when your app’s picker uses the [ASPickerDisplaySettingsOptionFilterDiscoveryResults](aspickerdisplaysettings/options-swift.struct/filterdiscoveryresults.md) option. With this option enabled, your discovery session receives [ASAccessoryEventTypeAccessoryDiscovered](asaccessoryeventtype/accessorydiscovered.md) events with discovered accessories. To include a discovered accessory in the picker, create an instance of this class, optionally using the Bluetooth properties of the event’s [ASDiscoveredAccessory](asdiscoveredaccessory.md) to provide a more specific name or product image. Then send the `ASDiscoveredDisplayItem` to the picker with the session’s [updatePickerShowingDiscoveredDisplayItems:completionHandler:](asaccessorysession/updatepicker%28showing_completionhandler_%29.md) method.

## Topics

### Creating an updated display item

- [initWithName:productImage:accessory:](asdiscovereddisplayitem/init%28name_productimage_accessory_%29.md): Creates a discovered picker display item with a name and image to display and a descriptor to match discovered accessories.

## Relationships

### Inherits From

- [ASPickerDisplayItem](aspickerdisplayitem.md)

## See Also

### Displaying picker items

- [ASPickerDisplayItem](aspickerdisplayitem.md): An accessory as presented by the discovery picker.
- [ASMigrationDisplayItem](asmigrationdisplayitem.md): A previously-discovered accessory as presented by the discovery picker, for use when migrating it to AccessorySetupKit.
