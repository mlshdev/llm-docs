> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmcharacteristic/value](https://developer.apple.com/documentation/homekit/hmcharacteristic/value)

# value (Swift)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The current value of the characteristic.

## Declaration

```swift
var value: Any? { get }
```

<a id="Discussion"></a>

## Discussion

This is the last value that the system saw for the characteristic. Because multiple apps can access a given home, this value may change without your app changing it. To be sure you have the current value, call [readValue(completionHandler:)](readvalue%28completionhandler_%29.md) and wait for the response before checking the [value](value.md) property.

You can also learn about external changes to the [value](value.md) when they happen by adopting the [HMAccessoryDelegate](../hmaccessorydelegate.md) protocol. Call the [enableNotification(\_:completionHandler:)](enablenotification%28__completionhandler_%29.md) method to enable updates for a particular characteristic. Then implement the [accessory(\_:service:didUpdateValueFor:)](../hmaccessorydelegate/accessory%28__service_didupdatevaluefor_%29.md) method to receive the updates. You only receive updates for changes made outside your app, for example by Apple’s Home app, or by the accessory itself.

How you interpret the value depends on the [characteristicType](characteristictype.md). From this, you can tell what the value represents, and infer whether the value contain a string, integer, floating point number, or Boolean. The characteristic’s [metadata](metadata.md) gives you additional information about how to interpret and present the [value](value.md).

## See Also

### Controlling a characteristic

- [readValue(completionHandler:)](readvalue%28completionhandler_%29.md): Reads the value for the characteristic.
- [writeValue(\_:completionHandler:)](writevalue%28__completionhandler_%29.md): Modifies the value of the characteristic.
- [updateAuthorizationData(\_:completionHandler:)](updateauthorizationdata%28__completionhandler_%29.md): Sets or clears authorization data used when writing to the characteristic.

# value (Objective-C)

**Framework:** HomeKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 14.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

The current value of the characteristic.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) id value;
```

<a id="Discussion"></a>

## Discussion

This is the last value that the system saw for the characteristic. Because multiple apps can access a given home, this value may change without your app changing it. To be sure you have the current value, call [readValueWithCompletionHandler:](readvalue%28completionhandler_%29.md) and wait for the response before checking the [value](value.md) property.

You can also learn about external changes to the [value](value.md) when they happen by adopting the [HMAccessoryDelegate](../hmaccessorydelegate.md) protocol. Call the [enableNotification:completionHandler:](enablenotification%28__completionhandler_%29.md) method to enable updates for a particular characteristic. Then implement the [accessory:service:didUpdateValueForCharacteristic:](../hmaccessorydelegate/accessory%28__service_didupdatevaluefor_%29.md) method to receive the updates. You only receive updates for changes made outside your app, for example by Apple’s Home app, or by the accessory itself.

How you interpret the value depends on the [characteristicType](characteristictype.md). From this, you can tell what the value represents, and infer whether the value contain a string, integer, floating point number, or Boolean. The characteristic’s [metadata](metadata.md) gives you additional information about how to interpret and present the [value](value.md).

## See Also

### Controlling a characteristic

- [readValueWithCompletionHandler:](readvalue%28completionhandler_%29.md): Reads the value for the characteristic.
- [writeValue:completionHandler:](writevalue%28__completionhandler_%29.md): Modifies the value of the characteristic.
- [updateAuthorizationData:completionHandler:](updateauthorizationdata%28__completionhandler_%29.md): Sets or clears authorization data used when writing to the characteristic.
