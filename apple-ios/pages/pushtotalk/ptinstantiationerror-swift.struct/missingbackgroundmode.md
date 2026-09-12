> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptinstantiationerror-swift.struct/missingbackgroundmode](https://developer.apple.com/documentation/pushtotalk/ptinstantiationerror-swift.struct/missingbackgroundmode)

# missingBackgroundMode

**Framework:** Push to Talk  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

An instantiation error that indicates the app doesn’t have the background mode in an enabled state.

## Declaration

```swift
static var missingBackgroundMode: PTInstantiationError.Code { get }
```

## See Also

### Constants

- [unknown](unknown.md): An instantiation error that indicates an unknown error.
- [invalidPlatform](invalidplatform.md): An instantiation error that indicates the API isn’t available on the simulator or macOS devices.
- [missingPushServerEnvironment](missingpushserverenvironment.md): An instantiation error that indicates the app doesn’t have the push notification capability in an enabled state.
- [missingEntitlement](missingentitlement.md): An instantiation error that indicates the app is missing the entitlement.
- [instantiationAlreadyInProgress](instantiationalreadyinprogress.md): An instantiation error that indicates there’s already an in-flight instantiation request.
