> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelperresult/unsupportednetwork](https://developer.apple.com/documentation/networkextension/nehotspothelperresult/unsupportednetwork)

# NEHotspotHelperResult.unsupportedNetwork (Swift)

**Framework:** Network Extension  
**Kind:** Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

After attempting to authenticate, the Hotspot Helper app determined that it can’t perform the authentication. This result is only valid in response to commands of type [NEHotspotHelperCommandType.authenticate](../nehotspothelpercommandtype/authenticate.md) and [NEHotspotHelperCommandType.presentUI](../nehotspothelpercommandtype/presentui.md).

## Declaration

```swift
case unsupportedNetwork
```

## See Also

### Results

- [NEHotspotHelperResult.success](success.md): The command was handled successfully.
- [NEHotspotHelperResult.failure](failure.md): The command failed to be handled.
- [NEHotspotHelperResult.uiRequired](uirequired.md): The operation requires user interaction. This result is only valid in response to a command with type [NEHotspotHelperCommandType.authenticate](../nehotspothelpercommandtype/authenticate.md).
- [NEHotspotHelperResult.commandNotRecognized](commandnotrecognized.md): The helper did not recognize the command type.
- [NEHotspotHelperResult.authenticationRequired](authenticationrequired.md): The network requires authentication again. This result is only valid in response to a command with type [NEHotspotHelperCommandType.maintain](../nehotspothelpercommandtype/maintain.md).
- [NEHotspotHelperResult.temporaryFailure](temporaryfailure.md): The Hotspot Helper app determined that it is temporarily unable to perform the authentication. This result is only valid in response to commands of type [NEHotspotHelperCommandType.authenticate](../nehotspothelpercommandtype/authenticate.md) and [NEHotspotHelperCommandType.presentUI](../nehotspothelpercommandtype/presentui.md).

# kNEHotspotHelperResultUnsupportedNetwork (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration Case  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

After attempting to authenticate, the Hotspot Helper app determined that it can’t perform the authentication. This result is only valid in response to commands of type [kNEHotspotHelperCommandTypeAuthenticate](../nehotspothelpercommandtype/authenticate.md) and [kNEHotspotHelperCommandTypePresentUI](../nehotspothelpercommandtype/presentui.md).

## Declaration

```objectivec
kNEHotspotHelperResultUnsupportedNetwork
```

## See Also

### Results

- [kNEHotspotHelperResultSuccess](success.md): The command was handled successfully.
- [kNEHotspotHelperResultFailure](failure.md): The command failed to be handled.
- [kNEHotspotHelperResultUIRequired](uirequired.md): The operation requires user interaction. This result is only valid in response to a command with type [kNEHotspotHelperCommandTypeAuthenticate](../nehotspothelpercommandtype/authenticate.md).
- [kNEHotspotHelperResultCommandNotRecognized](commandnotrecognized.md): The helper did not recognize the command type.
- [kNEHotspotHelperResultAuthenticationRequired](authenticationrequired.md): The network requires authentication again. This result is only valid in response to a command with type [kNEHotspotHelperCommandTypeMaintain](../nehotspothelpercommandtype/maintain.md).
- [kNEHotspotHelperResultTemporaryFailure](temporaryfailure.md): The Hotspot Helper app determined that it is temporarily unable to perform the authentication. This result is only valid in response to commands of type [kNEHotspotHelperCommandTypeAuthenticate](../nehotspothelpercommandtype/authenticate.md) and [kNEHotspotHelperCommandTypePresentUI](../nehotspothelpercommandtype/presentui.md).
