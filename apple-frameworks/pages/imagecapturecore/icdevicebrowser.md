> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/imagecapturecore/icdevicebrowser](https://developer.apple.com/documentation/imagecapturecore/icdevicebrowser)

# ICDeviceBrowser (Swift)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An object for finding digital cameras and scanners.

## Declaration

```swift
class ICDeviceBrowser
```

## Topics

### Creating a Device Browser

- [init()](icdevicebrowser/init%28%29.md): Creates an ImageCaptureCore device browser.

### Managing Device Browsing

- [delegate](icdevicebrowser/delegate.md): The object that acts as the delegate of the device browser.
- [ICDeviceBrowserDelegate](icdevicebrowserdelegate.md): Methods for managing the addition and removal of devices and responding to device changes.

### Browsing Devices

- [isBrowsing](icdevicebrowser/isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [devices](icdevicebrowser/devices.md): All devices found by the browser.
- [ICDevice](icdevice.md): An abstract object that represents a device.
- [browsedDeviceTypeMask](icdevicebrowser/browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [start()](icdevicebrowser/start%28%29.md): Tells the delegate to start looking for devices.
- [stop()](icdevicebrowser/stop%28%29.md): Tells the delegate to stop looking for devices.

### Setting a Preferred Device

- [preferredDevice](icdevicebrowser/preferreddevice.md): Returns a device object that the client application should select when it launches.

### Instance Properties

- [contentsAuthorizationStatus](icdevicebrowser/contentsauthorizationstatus.md)
- [controlAuthorizationStatus](icdevicebrowser/controlauthorizationstatus.md)
- [isSuspended](icdevicebrowser/issuspended.md)

### Instance Methods

- [requestContentsAuthorization(completion:)](icdevicebrowser/requestcontentsauthorization%28completion_%29.md)
- [requestControlAuthorization(completion:)](icdevicebrowser/requestcontrolauthorization%28completion_%29.md)
- [resetContentsAuthorization(completion:)](icdevicebrowser/resetcontentsauthorization%28completion_%29.md)
- [resetControlAuthorization(completion:)](icdevicebrowser/resetcontrolauthorization%28completion_%29.md)

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

### Essentials

- [Photos Library Entitlement](../bundleresources/entitlements/com.apple.security.personal-information.photos-library.md): A Boolean value that indicates whether the app has read-write access to the user’s Photos library.
- [NSCameraUsageDescription](../bundleresources/information-property-list/nscamerausagedescription.md): A message that tells people why the app is requesting access to the device’s camera.

# ICDeviceBrowser (Objective-C)

**Framework:** ImageCaptureCore  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · visionOS 1.0+

An object for finding digital cameras and scanners.

## Declaration

```objectivec
@interface ICDeviceBrowser : NSObject
```

## Topics

### Creating a Device Browser

- [init](icdevicebrowser/init%28%29.md): Creates an ImageCaptureCore device browser.

### Managing Device Browsing

- [delegate](icdevicebrowser/delegate.md): The object that acts as the delegate of the device browser.
- [ICDeviceBrowserDelegate](icdevicebrowserdelegate.md): Methods for managing the addition and removal of devices and responding to device changes.

### Browsing Devices

- [browsing](icdevicebrowser/isbrowsing.md): A Boolean value indicating whether the device browser is browsing for devices.
- [devices](icdevicebrowser/devices.md): All devices found by the browser.
- [ICDevice](icdevice.md): An abstract object that represents a device.
- [browsedDeviceTypeMask](icdevicebrowser/browseddevicetypemask.md): A mask whose set bits indicate the type of devices being browsed after the delegate receives the start message.
- [start](icdevicebrowser/start%28%29.md): Tells the delegate to start looking for devices.
- [stop](icdevicebrowser/stop%28%29.md): Tells the delegate to stop looking for devices.

### Setting a Preferred Device

- [preferredDevice](icdevicebrowser/preferreddevice.md): Returns a device object that the client application should select when it launches.

### Instance Properties

- [contentsAuthorizationStatus](icdevicebrowser/contentsauthorizationstatus.md)
- [controlAuthorizationStatus](icdevicebrowser/controlauthorizationstatus.md)
- [suspended](icdevicebrowser/issuspended.md)

### Instance Methods

- [requestContentsAuthorizationWithCompletion:](icdevicebrowser/requestcontentsauthorization%28completion_%29.md)
- [requestControlAuthorizationWithCompletion:](icdevicebrowser/requestcontrolauthorization%28completion_%29.md)
- [resetContentsAuthorizationWithCompletion:](icdevicebrowser/resetcontentsauthorization%28completion_%29.md)
- [resetControlAuthorizationWithCompletion:](icdevicebrowser/resetcontrolauthorization%28completion_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [Photos Library Entitlement](../bundleresources/entitlements/com.apple.security.personal-information.photos-library.md): A Boolean value that indicates whether the app has read-write access to the user’s Photos library.
- [NSCameraUsageDescription](../bundleresources/information-property-list/nscamerausagedescription.md): A message that tells people why the app is requesting access to the device’s camera.
