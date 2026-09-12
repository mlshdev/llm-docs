> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corebluetooth/cbmanager/authorization-swift.type.property](https://developer.apple.com/documentation/corebluetooth/cbmanager/authorization-swift.type.property)

# authorization (Swift)

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 13.1+ · iPadOS 13.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current authorization status for using Bluetooth.

## Declaration

```swift
class var authorization: CBManagerAuthorization { get }
```

<a id="Discussion"></a>

## Discussion

Check this property in your implementation of the delegate methods [centralManagerDidUpdateState(\_:)](../cbcentralmanagerdelegate/centralmanagerdidupdatestate%28__%29.md) and [peripheralManagerDidUpdateState(\_:)](../cbperipheralmanagerdelegate/peripheralmanagerdidupdatestate%28__%29.md) to determine whether your app can use Core Bluetooth. You can also use it to check the app’s authorization status before creating a [CBManager](../cbmanager.md) instance.

The initial value of this property is [CBManagerAuthorization.notDetermined](../cbmanagerauthorization/notdetermined.md).

## See Also

### Determining Authorization State

- [CBManagerAuthorization](../cbmanagerauthorization.md): The current authorization state of a Core Bluetooth manager.

# authorization (Objective-C)

**Framework:** Core Bluetooth  
**Kind:** Type Property  
**Availability:** iOS 13.1+ · iPadOS 13.1+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The current authorization status for using Bluetooth.

## Declaration

```objectivec
@property (class, nonatomic, assign, readonly) CBManagerAuthorization authorization;
```

<a id="Discussion"></a>

## Discussion

Check this property in your implementation of the delegate methods [centralManagerDidUpdateState:](../cbcentralmanagerdelegate/centralmanagerdidupdatestate%28__%29.md) and [peripheralManagerDidUpdateState:](../cbperipheralmanagerdelegate/peripheralmanagerdidupdatestate%28__%29.md) to determine whether your app can use Core Bluetooth. You can also use it to check the app’s authorization status before creating a [CBManager](../cbmanager.md) instance.

The initial value of this property is [CBManagerAuthorizationNotDetermined](../cbmanagerauthorization/notdetermined.md).

## See Also

### Determining Authorization State

- [CBManagerAuthorization](../cbmanagerauthorization.md): The current authorization state of a Core Bluetooth manager.
