> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelperresult/failure](https://developer.apple.com/documentation/networkextension/nehotspothelperresult/failure)

# NEHotspotHelperResult.failure (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The command failed to be handled.

## Declaration

```swift
case failure
```

## See Also

### Results

- [NEHotspotHelperResult.success](success.md): The command was handled successfully.
- [NEHotspotHelperResult.uiRequired](uirequired.md): The operation requires user interaction. This result is only valid in response to a command with type [NEHotspotHelperCommandType.authenticate](../nehotspothelpercommandtype/authenticate.md).
- [NEHotspotHelperResult.commandNotRecognized](commandnotrecognized.md): The helper did not recognize the command type.
- [NEHotspotHelperResult.authenticationRequired](authenticationrequired.md): The network requires authentication again. This result is only valid in response to a command with type [NEHotspotHelperCommandType.maintain](../nehotspothelpercommandtype/maintain.md).
- [NEHotspotHelperResult.unsupportedNetwork](unsupportednetwork.md): After attempting to authenticate, the Hotspot Helper app determined that it can’t perform the authentication. This result is only valid in response to commands of type [NEHotspotHelperCommandType.authenticate](../nehotspothelpercommandtype/authenticate.md) and [NEHotspotHelperCommandType.presentUI](../nehotspothelpercommandtype/presentui.md).
- [NEHotspotHelperResult.temporaryFailure](temporaryfailure.md): The Hotspot Helper app determined that it is temporarily unable to perform the authentication. This result is only valid in response to commands of type [NEHotspotHelperCommandType.authenticate](../nehotspothelpercommandtype/authenticate.md) and [NEHotspotHelperCommandType.presentUI](../nehotspothelpercommandtype/presentui.md).

# kNEHotspotHelperResultFailure (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The command failed to be handled.

## Declaration

```objectivec
kNEHotspotHelperResultFailure
```

## See Also

### Results

- [kNEHotspotHelperResultSuccess](success.md): The command was handled successfully.
- [kNEHotspotHelperResultUIRequired](uirequired.md): The operation requires user interaction. This result is only valid in response to a command with type [kNEHotspotHelperCommandTypeAuthenticate](../nehotspothelpercommandtype/authenticate.md).
- [kNEHotspotHelperResultCommandNotRecognized](commandnotrecognized.md): The helper did not recognize the command type.
- [kNEHotspotHelperResultAuthenticationRequired](authenticationrequired.md): The network requires authentication again. This result is only valid in response to a command with type [kNEHotspotHelperCommandTypeMaintain](../nehotspothelpercommandtype/maintain.md).
- [kNEHotspotHelperResultUnsupportedNetwork](unsupportednetwork.md): After attempting to authenticate, the Hotspot Helper app determined that it can’t perform the authentication. This result is only valid in response to commands of type [kNEHotspotHelperCommandTypeAuthenticate](../nehotspothelpercommandtype/authenticate.md) and [kNEHotspotHelperCommandTypePresentUI](../nehotspothelpercommandtype/presentui.md).
- [kNEHotspotHelperResultTemporaryFailure](temporaryfailure.md): The Hotspot Helper app determined that it is temporarily unable to perform the authentication. This result is only valid in response to commands of type [kNEHotspotHelperCommandTypeAuthenticate](../nehotspothelpercommandtype/authenticate.md) and [kNEHotspotHelperCommandTypePresentUI](../nehotspothelpercommandtype/presentui.md).
