> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/incar/headunit-swift.property](https://developer.apple.com/documentation/intents/incar/headunit-swift.property)

# headUnit (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The Bluetooth and iAP2 identifiers of the electric vehicle’s physical head unit.

## Declaration

```swift
@NSCopying var headUnit: INCar.HeadUnit? { get }
```

<a id="Discussion"></a>

## Discussion

The system receives the physical head unit’s Bluetooth identifier when the user’s iPhone connects to the vehicle through CarPlay. The system can then find the corresponding vehicle in the user’s Virtual Garage by matching the value it receives against the `bluetoothIdentifier` property of this object.

## See Also

### Getting the Car’s Head Unit

- [INCar.HeadUnit](headunit-swift.class.md): An object that contains the Bluetooth and iAP2 identifiers of the vehicle’s physical head unit.

# headUnit (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+ · watchOS 7.0+

The Bluetooth and iAP2 identifiers of the electric vehicle’s physical head unit.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INCarHeadUnit * headUnit;
```

```objectivec
@property (atomic, copy, readonly, nullable) INCarHeadUnit * headUnit;
```

<a id="Discussion"></a>

## Discussion

The system receives the physical head unit’s Bluetooth identifier when the user’s iPhone connects to the vehicle through CarPlay. The system can then find the corresponding vehicle in the user’s Virtual Garage by matching the value it receives against the `bluetoothIdentifier` property of this object.

## See Also

### Getting the Car’s Head Unit

- [INCarHeadUnit](headunit-swift.class.md): An object that contains the Bluetooth and iAP2 identifiers of the vehicle’s physical head unit.
