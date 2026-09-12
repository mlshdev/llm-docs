> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clregion/notifyonexit](https://developer.apple.com/documentation/corelocation/clregion/notifyonexit)

# notifyOnExit (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · watchOS 2.0+

A Boolean indicating that notifications are generated upon exit from the region.

## Declaration

```swift
var notifyOnExit: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), a device crossing from inside the region to outside the region triggers the delivery of a notification. If the property is [false](https://developer.apple.com/documentation/swift/false), a notification is not generated. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If the app is not running when a boundary crossing occurs, the system launches the app into the background to handle it. Upon launch, your app must configure new location manager and delegate objects to receive the notification. The notification is sent to your delegate’s [locationManager(\_:didExitRegion:)](../cllocationmanagerdelegate/locationmanager%28__didexitregion_%29.md) method.

## See Also

### Specifying the notification conditions

- [notifyOnEntry](notifyonentry.md): A Boolean indicating that notifications are generated upon entry into the region.

# notifyOnExit (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · watchOS 2.0+

A Boolean indicating that notifications are generated upon exit from the region.

## Declaration

```objectivec
@property (atomic, assign) BOOL notifyOnExit;
```

<a id="Discussion"></a>

## Discussion

When this property is [true](https://developer.apple.com/documentation/swift/true), a device crossing from inside the region to outside the region triggers the delivery of a notification. If the property is [false](https://developer.apple.com/documentation/swift/false), a notification is not generated. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

If the app is not running when a boundary crossing occurs, the system launches the app into the background to handle it. Upon launch, your app must configure new location manager and delegate objects to receive the notification. The notification is sent to your delegate’s [locationManager:didExitRegion:](../cllocationmanagerdelegate/locationmanager%28__didexitregion_%29.md) method.

## See Also

### Specifying the notification conditions

- [notifyOnEntry](notifyonentry.md): A Boolean indicating that notifications are generated upon entry into the region.
