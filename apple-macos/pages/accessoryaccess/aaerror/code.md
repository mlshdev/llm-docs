> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/accessoryaccess/aaerror/code](https://developer.apple.com/documentation/accessoryaccess/aaerror/code)

# AAError.Code (Swift)

**Framework:** Accessory Access  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Values that represent error codes that the AccessoryAccess framework returns.

## Declaration

```swift
enum Code
```

<a id="overview"></a>

## Overview

The AccessoryAccess framework can also report errors from other domains when the error originates from a lower level component. The `NSError` domain for the AccessoryAccess framework is `AAErrorDomain`, the code is one of the `AAErrorCode` constants.

## Topics

### Error codes

- [AAError.Code.accessoryListenerAlreadyRegistered](code/accessorylisteneralreadyregistered.md): An error code that indicates there’s already an accessory listener for the USB accessory.
- [AAError.Code.accessoryNotAccessible](code/accessorynotaccessible.md): An error code that indicates the USB accessory isn’t accessible since it may already be in use.
- [AAError.Code.internalError](code/internalerror.md): An error value that represents an internal error.
- [AAError.Code.invalidAccessoryState](code/invalidaccessorystate.md): An error value that indicates the accessory isn’t in the correct state for the current operation.

### Creating an error code

- [init(rawValue:)](code/init%28rawvalue_%29.md): Creates a new error code with the provided value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [accessoryListenerAlreadyRegistered](accessorylisteneralreadyregistered.md): An error that indicates the accessory listener is already registered, and therefore the app can’t re-register it.
- [accessoryNotAccessible](accessorynotaccessible.md): An error that indicates the USB accessory isn’t accessible.
- [internalError](internalerror.md): An error that represents an internal error.
- [invalidAccessoryState](invalidaccessorystate.md): An error that indicates the accessory isn’t in the correct state for the current operation.

# AAErrorCode (Objective-C)

**Framework:** Accessory Access  
**Kind:** Enumeration  
**Availability:** macOS 27.0+

Values that represent error codes that the AccessoryAccess framework returns.

## Declaration

```objectivec
enum AAErrorCode : NSInteger;
```

<a id="overview"></a>

## Overview

The AccessoryAccess framework can also report errors from other domains when the error originates from a lower level component. The `NSError` domain for the AccessoryAccess framework is `AAErrorDomain`, the code is one of the `AAErrorCode` constants.

## Topics

### Error codes

- [AAErrorCodeAccessoryListenerAlreadyRegistered](code/accessorylisteneralreadyregistered.md): An error code that indicates there’s already an accessory listener for the USB accessory.
- [AAErrorCodeAccessoryNotAccessible](code/accessorynotaccessible.md): An error code that indicates the USB accessory isn’t accessible since it may already be in use.
- [AAErrorCodeInternal](code/internalerror.md): An error value that represents an internal error.
- [AAErrorCodeInvalidAccessoryState](code/invalidaccessorystate.md): An error value that indicates the accessory isn’t in the correct state for the current operation.
