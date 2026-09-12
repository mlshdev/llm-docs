> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremotion/cmerror](https://developer.apple.com/documentation/coremotion/cmerror)

# CMError (Swift)

**Framework:** Core Motion  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Defines motion errors.

## Declaration

```swift
struct CMError
```

## Topics

### Errors

- [CMErrorDeviceRequiresMovement](cmerrordevicerequiresmovement.md): The device must move for a sampling of motion data to occur.
- [CMErrorInvalidAction](cmerrorinvalidaction.md): The specified action is invalid.
- [CMErrorInvalidParameter](cmerrorinvalidparameter.md): The specified parameter is invalid.
- [CMErrorMotionActivityNotAuthorized](cmerrormotionactivitynotauthorized.md): The app isn’t currently authorized to use motion activity support.
- [CMErrorMotionActivityNotAvailable](cmerrormotionactivitynotavailable.md): Motion activity support isn’t available on the current device.
- [CMErrorMotionActivityNotEntitled](cmerrormotionactivitynotentitled.md): The app is missing an entitlement for the requested activity.
- [CMErrorNilData](cmerrornildata.md): Core Motion didn’t return any data.
- [CMErrorNULL](cmerrornull.md): No error occurred.
- [CMErrorNotAuthorized](cmerrornotauthorized.md): The app isn’t authorized to use the Core Motion framework.
- [CMErrorNotAvailable](cmerrornotavailable.md): The requested service isn’t available on this device.
- [CMErrorNotEntitled](cmerrornotentitled.md): The app is missing a required entitlement.
- [CMErrorSize](cmerrorsize.md): The data is the incorrect size.
- [CMErrorTrueNorthNotAvailable](cmerrortruenorthnotavailable.md): True north isn’t available on this device.
- [CMErrorUnknown](cmerrorunknown.md): An unknown error occurred.

### Initializers

- [init(\_:)](cmerror/init%28__%29.md)
- [init(rawValue:)](cmerror/init%28rawvalue_%29.md)

### Instance Properties

- [rawValue](cmerror/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Understanding Errors

- [CMErrorDomain](cmerrordomain.md): The error domain for Core Motion.

# CMError (Objective-C)

**Framework:** Core Motion  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+ · watchOS 2.0+

Defines motion errors.

## Declaration

```objectivec
typedef enum { ... } CMError;
```

## Topics

### Errors

- [CMErrorDeviceRequiresMovement](cmerrordevicerequiresmovement.md): The device must move for a sampling of motion data to occur.
- [CMErrorInvalidAction](cmerrorinvalidaction.md): The specified action is invalid.
- [CMErrorInvalidParameter](cmerrorinvalidparameter.md): The specified parameter is invalid.
- [CMErrorMotionActivityNotAuthorized](cmerrormotionactivitynotauthorized.md): The app isn’t currently authorized to use motion activity support.
- [CMErrorMotionActivityNotAvailable](cmerrormotionactivitynotavailable.md): Motion activity support isn’t available on the current device.
- [CMErrorMotionActivityNotEntitled](cmerrormotionactivitynotentitled.md): The app is missing an entitlement for the requested activity.
- [CMErrorNilData](cmerrornildata.md): Core Motion didn’t return any data.
- [CMErrorNULL](cmerrornull.md): No error occurred.
- [CMErrorNotAuthorized](cmerrornotauthorized.md): The app isn’t authorized to use the Core Motion framework.
- [CMErrorNotAvailable](cmerrornotavailable.md): The requested service isn’t available on this device.
- [CMErrorNotEntitled](cmerrornotentitled.md): The app is missing a required entitlement.
- [CMErrorSize](cmerrorsize.md): The data is the incorrect size.
- [CMErrorTrueNorthNotAvailable](cmerrortruenorthnotavailable.md): True north isn’t available on this device.
- [CMErrorUnknown](cmerrorunknown.md): An unknown error occurred.

## See Also

### Understanding Errors

- [CMErrorDomain](cmerrordomain.md): The error domain for Core Motion.
