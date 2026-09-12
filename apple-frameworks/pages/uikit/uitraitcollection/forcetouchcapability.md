> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitraitcollection/forcetouchcapability](https://developer.apple.com/documentation/uikit/uitraitcollection/forcetouchcapability)

# forceTouchCapability (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The force touch capability value of the trait collection.

## Declaration

```swift
var forceTouchCapability: UIForceTouchCapability { get }
```

## Mentioned In

- [Checking the availability of 3D Touch](../checking-the-availability-of-3d-touch.md)

<a id="Discussion"></a>

## Discussion

3D Touch is available only on certain devices. On those devices, availability is determined by the user’s associated accessibility setting in the Settings app. Check this property’s value on app launch, and in your implementation of the [traitCollectionDidChange(\_:)](../uitraitenvironment/traitcollectiondidchange%28__%29.md) method.

If this property does not contain a value, the meaning is equivalent to the value [UIForceTouchCapability.unknown](../uiforcetouchcapability/unknown.md).

## See Also

### Retrieving the force touch capability traits

- [UIForceTouchCapability](../uiforcetouchcapability.md): Keys that indicate the availability of 3D Touch on a device.

# forceTouchCapability (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

The force touch capability value of the trait collection.

## Declaration

```objectivec
@property (nonatomic, readonly) UIForceTouchCapability forceTouchCapability;
```

## Mentioned In

- [Checking the availability of 3D Touch](../checking-the-availability-of-3d-touch.md)

<a id="Discussion"></a>

## Discussion

3D Touch is available only on certain devices. On those devices, availability is determined by the user’s associated accessibility setting in the Settings app. Check this property’s value on app launch, and in your implementation of the [traitCollectionDidChange:](../uitraitenvironment/traitcollectiondidchange%28__%29.md) method.

If this property does not contain a value, the meaning is equivalent to the value [UIForceTouchCapabilityUnknown](../uiforcetouchcapability/unknown.md).

## See Also

### Retrieving the force touch capability traits

- [UIForceTouchCapability](../uiforcetouchcapability.md): Keys that indicate the availability of 3D Touch on a device.
