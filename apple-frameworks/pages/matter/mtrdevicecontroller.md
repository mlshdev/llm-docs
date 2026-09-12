> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/matter/mtrdevicecontroller](https://developer.apple.com/documentation/matter/mtrdevicecontroller)

# MTRDeviceController (Swift)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```swift
class MTRDeviceController
```

## Mentioned In

- [Onboarding a Matter device](onboarding-a-matter-device.md)

## Topics

### Initializers

- [init(parameters:)](mtrdevicecontroller/init%28parameters_%29.md)

### Instance Properties

- [controllerNodeID](mtrdevicecontroller/controllernodeid-6a04u.md)
- [controllerNodeId](mtrdevicecontroller/controllernodeid-6a03y.md): Deprecated.
- [isRunning](mtrdevicecontroller/isrunning.md)
- [uniqueIdentifier](mtrdevicecontroller/uniqueidentifier.md)
- [devices](mtrdevicecontroller/devices.md): Returns the list of MTRDevice instances that this controller has loaded into memory. Returns an empty array if no devices are in memory.
- [isSuspended](mtrdevicecontroller/issuspended.md): If true, the controller has been suspended via `suspend` and not resumed yet.
- [nodesWithStoredData](mtrdevicecontroller/nodeswithstoreddata.md): Returns the list of node IDs for which this controller has stored information. Returns empty list if the controller does not have any information stored.

### Instance Methods

- [add(\_:)](mtrdevicecontroller/add%28__%29.md)
- [attestationChallenge(forDeviceID:)](mtrdevicecontroller/attestationchallenge%28fordeviceid_%29.md)
- [cancelCommissioning(forNodeID:)](mtrdevicecontroller/cancelcommissioning%28fornodeid_%29.md)
- [commissionDevice(\_:commissioningParams:)](mtrdevicecontroller/commissiondevice%28__commissioningparams_%29.md): Deprecated.
- [commissionNode(withID:commissioningParams:)](mtrdevicecontroller/commissionnode%28withid_commissioningparams_%29.md)
- [computePaseVerifier(\_:iterations:salt:)](mtrdevicecontroller/computepaseverifier%28__iterations_salt_%29.md): Deprecated.
- [continueCommissioningDevice(\_:ignoreAttestationFailure:)](mtrdevicecontroller/continuecommissioningdevice%28__ignoreattestationfailure_%29.md)
- [deviceBeingCommissioned(withNodeID:)](mtrdevicecontroller/devicebeingcommissioned%28withnodeid_%29.md)
- [fetchAttestationChallenge(forDeviceId:)](mtrdevicecontroller/fetchattestationchallenge%28fordeviceid_%29.md): Deprecated.
- [getBaseDevice(\_:queue:completionHandler:)](mtrdevicecontroller/getbasedevice%28__queue_completionhandler_%29.md): Deprecated.
- [getDeviceBeingCommissioned(\_:)](mtrdevicecontroller/getdevicebeingcommissioned%28__%29.md): Deprecated.
- [openPairingWindow(\_:duration:)](mtrdevicecontroller/openpairingwindow%28__duration_%29.md): Deprecated.
- [openPairingWindow(withPIN:duration:discriminator:setupPIN:)](mtrdevicecontroller/openpairingwindow%28withpin_duration_discriminator_setuppin_%29.md): Deprecated.
- [pairDevice(\_:address:port:setupPINCode:)](mtrdevicecontroller/pairdevice%28__address_port_setuppincode_%29.md): Deprecated.
- [pairDevice(\_:discriminator:setupPINCode:)](mtrdevicecontroller/pairdevice%28__discriminator_setuppincode_%29.md): Deprecated.
- [pairDevice(\_:onboardingPayload:)](mtrdevicecontroller/pairdevice%28__onboardingpayload_%29.md): Deprecated.
- [preWarmCommissioningSession()](mtrdevicecontroller/prewarmcommissioningsession%28%29.md): Deprecated.
- [remove(\_:queue:completion:)](mtrdevicecontroller/remove%28__queue_completion_%29.md)
- [setDeviceControllerDelegate(\_:queue:)](mtrdevicecontroller/setdevicecontrollerdelegate%28__queue_%29.md)
- [setNocChainIssuer(\_:queue:)](mtrdevicecontroller/setnocchainissuer%28__queue_%29.md): Deprecated.
- [setPairingDelegate(\_:queue:)](mtrdevicecontroller/setpairingdelegate%28__queue_%29.md): Deprecated.
- [setupCommissioningSession(with:newNodeID:)](mtrdevicecontroller/setupcommissioningsession%28with_newnodeid_%29.md)
- [setupCommissioningSession(withDiscoveredDevice:payload:newNodeID:)](mtrdevicecontroller/setupcommissioningsession%28withdiscovereddevice_payload_newnodeid_%29.md)
- [shutdown()](mtrdevicecontroller/shutdown%28%29.md)
- [startBrowse(forCommissionables:queue:)](mtrdevicecontroller/startbrowse%28forcommissionables_queue_%29.md)
- [stopBrowseForCommissionables()](mtrdevicecontroller/stopbrowseforcommissionables%28%29.md)
- [stopDevicePairing(\_:)](mtrdevicecontroller/stopdevicepairing%28__%29.md): Deprecated.
- [add(\_:queue:)](mtrdevicecontroller/add%28__queue_%29.md): Adds a Delegate to the device controller as well as the Queue on which the Delegate callbacks will be triggered
- [forgetDevice(withNodeID:)](mtrdevicecontroller/forgetdevice%28withnodeid_%29.md): Forget any information we have about the device with the given node ID. That includes clearing any information we have stored about it.
- [remove(\_:)](mtrdevicecontroller/remove%28__%29-2i5l5.md): Remove the given server endpoint without being notified when the removal completes.
- [remove(\_:)](mtrdevicecontroller/remove%28__%29-8pxve.md): Removes a Delegate from the device controller
- [resume()](mtrdevicecontroller/resume%28%29.md): Resume the controller. This has no effect if the controller is not suspended.
- [suspend()](mtrdevicecontroller/suspend%28%29.md): Suspend the controller. This will attempt to stop all network traffic associated with the controller. The controller will remain suspended until it is resumed.

### Type Methods

- [computePASEVerifier(forSetupPasscode:iterations:salt:)](mtrdevicecontroller/computepaseverifier%28forsetuppasscode_iterations_salt_%29.md)
- [decodeXPCReadParams(\_:)](mtrdevicecontroller/decodexpcreadparams%28__%29.md)
- [decodeXPCResponseValues(\_:)](mtrdevicecontroller/decodexpcresponsevalues%28__%29.md)
- [decodeXPCSubscribeParams(\_:)](mtrdevicecontroller/decodexpcsubscribeparams%28__%29.md)
- [encodeXPCReadParams(\_:)](mtrdevicecontroller/encodexpcreadparams%28__%29.md)
- [encodeXPCResponseValues(\_:)](mtrdevicecontroller/encodexpcresponsevalues%28__%29.md)
- [encodeXPCSubscribeParams(\_:)](mtrdevicecontroller/encodexpcsubscribeparams%28__%29.md)
- [sharedController(withID:xpcConnect:)](mtrdevicecontroller/sharedcontroller%28withid_xpcconnect_%29-5yhq4.md)
- [sharedController(withId:xpcConnect:)](mtrdevicecontroller/sharedcontroller%28withid_xpcconnect_%29-6rg64.md): Deprecated.
- [xpcInterfaceForClientProtocol()](mtrdevicecontroller/xpcinterfaceforclientprotocol%28%29.md)
- [xpcInterfaceForServerProtocol()](mtrdevicecontroller/xpcinterfaceforserverprotocol%28%29.md)

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

# MTRDeviceController (Objective-C)

**Framework:** Matter  
**Kind:** Class  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

## Declaration

```objectivec
@interface MTRDeviceController : NSObject
```

## Mentioned In

- [Onboarding a Matter device](onboarding-a-matter-device.md)

## Topics

### Initializers

- [initWithParameters:error:](mtrdevicecontroller/init%28parameters_%29.md)

### Instance Properties

- [controllerNodeID](mtrdevicecontroller/controllernodeid-6a04u.md)
- [controllerNodeId](mtrdevicecontroller/controllernodeid-6a03y.md): Deprecated.
- [running](mtrdevicecontroller/isrunning.md)
- [uniqueIdentifier](mtrdevicecontroller/uniqueidentifier.md)
- [devices](mtrdevicecontroller/devices.md): Returns the list of MTRDevice instances that this controller has loaded into memory. Returns an empty array if no devices are in memory.
- [suspended](mtrdevicecontroller/issuspended.md): If true, the controller has been suspended via `suspend` and not resumed yet.
- [nodesWithStoredData](mtrdevicecontroller/nodeswithstoreddata.md): Returns the list of node IDs for which this controller has stored information. Returns empty list if the controller does not have any information stored.

### Instance Methods

- [addServerEndpoint:](mtrdevicecontroller/add%28__%29.md)
- [attestationChallengeForDeviceID:](mtrdevicecontroller/attestationchallenge%28fordeviceid_%29.md)
- [cancelCommissioningForNodeID:error:](mtrdevicecontroller/cancelcommissioning%28fornodeid_%29.md)
- [commissionDevice:commissioningParams:error:](mtrdevicecontroller/commissiondevice%28__commissioningparams_%29.md): Deprecated.
- [commissionNodeWithID:commissioningParams:error:](mtrdevicecontroller/commissionnode%28withid_commissioningparams_%29.md)
- [computePaseVerifier:iterations:salt:](mtrdevicecontroller/computepaseverifier%28__iterations_salt_%29.md): Deprecated.
- [continueCommissioningDevice:ignoreAttestationFailure:error:](mtrdevicecontroller/continuecommissioningdevice%28__ignoreattestationfailure_%29.md)
- [deviceBeingCommissionedWithNodeID:error:](mtrdevicecontroller/devicebeingcommissioned%28withnodeid_%29.md)
- [fetchAttestationChallengeForDeviceId:](mtrdevicecontroller/fetchattestationchallenge%28fordeviceid_%29.md): Deprecated.
- [getBaseDevice:queue:completionHandler:](mtrdevicecontroller/getbasedevice%28__queue_completionhandler_%29.md): Deprecated.
- [getDeviceBeingCommissioned:error:](mtrdevicecontroller/getdevicebeingcommissioned%28__%29.md): Deprecated.
- [openPairingWindow:duration:error:](mtrdevicecontroller/openpairingwindow%28__duration_%29.md): Deprecated.
- [openPairingWindowWithPIN:duration:discriminator:setupPIN:error:](mtrdevicecontroller/openpairingwindow%28withpin_duration_discriminator_setuppin_%29.md): Deprecated.
- [pairDevice:address:port:setupPINCode:error:](mtrdevicecontroller/pairdevice%28__address_port_setuppincode_%29.md): Deprecated.
- [pairDevice:discriminator:setupPINCode:error:](mtrdevicecontroller/pairdevice%28__discriminator_setuppincode_%29.md): Deprecated.
- [pairDevice:onboardingPayload:error:](mtrdevicecontroller/pairdevice%28__onboardingpayload_%29.md): Deprecated.
- [preWarmCommissioningSession](mtrdevicecontroller/prewarmcommissioningsession%28%29.md): Deprecated.
- [removeServerEndpoint:queue:completion:](mtrdevicecontroller/remove%28__queue_completion_%29.md)
- [setDeviceControllerDelegate:queue:](mtrdevicecontroller/setdevicecontrollerdelegate%28__queue_%29.md)
- [setNocChainIssuer:queue:](mtrdevicecontroller/setnocchainissuer%28__queue_%29.md): Deprecated.
- [setPairingDelegate:queue:](mtrdevicecontroller/setpairingdelegate%28__queue_%29.md): Deprecated.
- [setupCommissioningSessionWithPayload:newNodeID:error:](mtrdevicecontroller/setupcommissioningsession%28with_newnodeid_%29.md)
- [setupCommissioningSessionWithDiscoveredDevice:payload:newNodeID:error:](mtrdevicecontroller/setupcommissioningsession%28withdiscovereddevice_payload_newnodeid_%29.md)
- [shutdown](mtrdevicecontroller/shutdown%28%29.md)
- [startBrowseForCommissionables:queue:](mtrdevicecontroller/startbrowse%28forcommissionables_queue_%29.md)
- [stopBrowseForCommissionables](mtrdevicecontroller/stopbrowseforcommissionables%28%29.md)
- [stopDevicePairing:error:](mtrdevicecontroller/stopdevicepairing%28__%29.md): Deprecated.
- [addDeviceControllerDelegate:queue:](mtrdevicecontroller/add%28__queue_%29.md): Adds a Delegate to the device controller as well as the Queue on which the Delegate callbacks will be triggered
- [forgetDeviceWithNodeID:](mtrdevicecontroller/forgetdevice%28withnodeid_%29.md): Forget any information we have about the device with the given node ID. That includes clearing any information we have stored about it.
- [removeServerEndpoint:](mtrdevicecontroller/remove%28__%29-2i5l5.md): Remove the given server endpoint without being notified when the removal completes.
- [removeDeviceControllerDelegate:](mtrdevicecontroller/remove%28__%29-8pxve.md): Removes a Delegate from the device controller
- [resume](mtrdevicecontroller/resume%28%29.md): Resume the controller. This has no effect if the controller is not suspended.
- [suspend](mtrdevicecontroller/suspend%28%29.md): Suspend the controller. This will attempt to stop all network traffic associated with the controller. The controller will remain suspended until it is resumed.

### Type Methods

- [computePASEVerifierForSetupPasscode:iterations:salt:error:](mtrdevicecontroller/computepaseverifier%28forsetuppasscode_iterations_salt_%29.md)
- [decodeXPCReadParams:](mtrdevicecontroller/decodexpcreadparams%28__%29.md)
- [decodeXPCResponseValues:](mtrdevicecontroller/decodexpcresponsevalues%28__%29.md)
- [decodeXPCSubscribeParams:](mtrdevicecontroller/decodexpcsubscribeparams%28__%29.md)
- [encodeXPCReadParams:](mtrdevicecontroller/encodexpcreadparams%28__%29.md)
- [encodeXPCResponseValues:](mtrdevicecontroller/encodexpcresponsevalues%28__%29.md)
- [encodeXPCSubscribeParams:](mtrdevicecontroller/encodexpcsubscribeparams%28__%29.md)
- [sharedControllerWithID:xpcConnectBlock:](mtrdevicecontroller/sharedcontroller%28withid_xpcconnect_%29-5yhq4.md)
- [sharedControllerWithId:xpcConnectBlock:](mtrdevicecontroller/sharedcontroller%28withid_xpcconnect_%29-6rg64.md): Deprecated.
- [xpcInterfaceForClientProtocol](mtrdevicecontroller/xpcinterfaceforclientprotocol%28%29.md)
- [xpcInterfaceForServerProtocol](mtrdevicecontroller/xpcinterfaceforserverprotocol%28%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
