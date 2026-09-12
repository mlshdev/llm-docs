> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar/headunit-swift.class](https://developer.apple.com/documentation/intents/incar/headunit-swift.class)

# INCar.HeadUnit (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object that contains the Bluetooth and iAP2 identifiers of the vehicle’s physical head unit.

## Declaration

```swift
class HeadUnit
```

<a id="overview"></a>

## Overview

When the system connects to a vehicle’s physical head unit through CarPlay, it uses the head unit’s Bluetooth identifier to find the corresponding vehicle in the user’s My Vehicles collection by matching on the `bluetoothIdentifier` property of this object.

You create instances of this class when handling [INListCarsIntent](../inlistcarsintent.md) requests. For more information on handling the intent, see [INListCarsIntentHandling](../inlistcarsintenthandling.md).

## Topics

### Creating a Head Unit

- [init(bluetoothIdentifier:iAP2Identifier:)](headunit-swift.class/init%28bluetoothidentifier_iap2identifier_%29.md): Creates a head unit object with the specified Bluetooth and iAP2 identifiers.

### Getting the Head Unit’s Attributes

- [bluetoothIdentifier](headunit-swift.class/bluetoothidentifier.md): The physical head unit’s Bluetooth identifier.
- [iAP2Identifier](headunit-swift.class/iap2identifier.md): The head unit’s iAP2 identifier.

### Initializers

- [init(coder:)](headunit-swift.class/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Getting the Car’s Head Unit

- [headUnit](headunit-swift.property.md): The Bluetooth and iAP2 identifiers of the electric vehicle’s physical head unit.

# INCarHeadUnit (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

An object that contains the Bluetooth and iAP2 identifiers of the vehicle’s physical head unit.

## Declaration

```objectivec
@interface INCarHeadUnit : NSObject
```

<a id="overview"></a>

## Overview

When the system connects to a vehicle’s physical head unit through CarPlay, it uses the head unit’s Bluetooth identifier to find the corresponding vehicle in the user’s My Vehicles collection by matching on the `bluetoothIdentifier` property of this object.

You create instances of this class when handling [INListCarsIntent](../inlistcarsintent.md) requests. For more information on handling the intent, see [INListCarsIntentHandling](../inlistcarsintenthandling.md).

## Topics

### Creating a Head Unit

- [initWithBluetoothIdentifier:iAP2Identifier:](headunit-swift.class/init%28bluetoothidentifier_iap2identifier_%29.md): Creates a head unit object with the specified Bluetooth and iAP2 identifiers.

### Getting the Head Unit’s Attributes

- [bluetoothIdentifier](headunit-swift.class/bluetoothidentifier.md): The physical head unit’s Bluetooth identifier.
- [iAP2Identifier](headunit-swift.class/iap2identifier.md): The head unit’s iAP2 identifier.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Getting the Car’s Head Unit

- [headUnit](headunit-swift.property.md): The Bluetooth and iAP2 identifiers of the electric vehicle’s physical head unit.
