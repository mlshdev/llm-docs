> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nehotspothelperresult](https://developer.apple.com/documentation/networkextension/nehotspothelperresult)

# NEHotspotHelperResult (Swift)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The result of handling a hotspot command.

## Declaration

```swift
enum NEHotspotHelperResult
```

## Topics

### Results

- [NEHotspotHelperResult.success](nehotspothelperresult/success.md): The command was handled successfully.
- [NEHotspotHelperResult.failure](nehotspothelperresult/failure.md): The command failed to be handled.
- [NEHotspotHelperResult.uiRequired](nehotspothelperresult/uirequired.md): The operation requires user interaction. This result is only valid in response to a command with type [NEHotspotHelperCommandType.authenticate](nehotspothelpercommandtype/authenticate.md).
- [NEHotspotHelperResult.commandNotRecognized](nehotspothelperresult/commandnotrecognized.md): The helper did not recognize the command type.
- [NEHotspotHelperResult.authenticationRequired](nehotspothelperresult/authenticationrequired.md): The network requires authentication again. This result is only valid in response to a command with type [NEHotspotHelperCommandType.maintain](nehotspothelpercommandtype/maintain.md).
- [NEHotspotHelperResult.unsupportedNetwork](nehotspothelperresult/unsupportednetwork.md): After attempting to authenticate, the Hotspot Helper app determined that it can’t perform the authentication. This result is only valid in response to commands of type [NEHotspotHelperCommandType.authenticate](nehotspothelpercommandtype/authenticate.md) and [NEHotspotHelperCommandType.presentUI](nehotspothelpercommandtype/presentui.md).
- [NEHotspotHelperResult.temporaryFailure](nehotspothelperresult/temporaryfailure.md): The Hotspot Helper app determined that it is temporarily unable to perform the authentication. This result is only valid in response to commands of type [NEHotspotHelperCommandType.authenticate](nehotspothelpercommandtype/authenticate.md) and [NEHotspotHelperCommandType.presentUI](nehotspothelpercommandtype/presentui.md).

### Initializers

- [init(rawValue:)](nehotspothelperresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Response creation

- [createResponse(\_:)](nehotspothelpercommand/createresponse%28__%29.md): Create a response to the command.

# NEHotspotHelperResult (Objective-C)

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The result of handling a hotspot command.

## Declaration

```objectivec
enum NEHotspotHelperResult : NSInteger;
```

## Topics

### Results

- [kNEHotspotHelperResultSuccess](nehotspothelperresult/success.md): The command was handled successfully.
- [kNEHotspotHelperResultFailure](nehotspothelperresult/failure.md): The command failed to be handled.
- [kNEHotspotHelperResultUIRequired](nehotspothelperresult/uirequired.md): The operation requires user interaction. This result is only valid in response to a command with type [kNEHotspotHelperCommandTypeAuthenticate](nehotspothelpercommandtype/authenticate.md).
- [kNEHotspotHelperResultCommandNotRecognized](nehotspothelperresult/commandnotrecognized.md): The helper did not recognize the command type.
- [kNEHotspotHelperResultAuthenticationRequired](nehotspothelperresult/authenticationrequired.md): The network requires authentication again. This result is only valid in response to a command with type [kNEHotspotHelperCommandTypeMaintain](nehotspothelpercommandtype/maintain.md).
- [kNEHotspotHelperResultUnsupportedNetwork](nehotspothelperresult/unsupportednetwork.md): After attempting to authenticate, the Hotspot Helper app determined that it can’t perform the authentication. This result is only valid in response to commands of type [kNEHotspotHelperCommandTypeAuthenticate](nehotspothelpercommandtype/authenticate.md) and [kNEHotspotHelperCommandTypePresentUI](nehotspothelpercommandtype/presentui.md).
- [kNEHotspotHelperResultTemporaryFailure](nehotspothelperresult/temporaryfailure.md): The Hotspot Helper app determined that it is temporarily unable to perform the authentication. This result is only valid in response to commands of type [kNEHotspotHelperCommandTypeAuthenticate](nehotspothelpercommandtype/authenticate.md) and [kNEHotspotHelperCommandTypePresentUI](nehotspothelpercommandtype/presentui.md).

## See Also

### Response creation

- [createResponse:](nehotspothelpercommand/createresponse%28__%29.md): Create a response to the command.
