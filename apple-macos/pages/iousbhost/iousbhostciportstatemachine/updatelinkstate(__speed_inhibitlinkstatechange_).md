> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostciportstatemachine/updatelinkstate(_:speed:inhibitlinkstatechange:)](https://developer.apple.com/documentation/iousbhost/iousbhostciportstatemachine/updatelinkstate(_:speed:inhibitlinkstatechange:))

# updateLinkState(\_:speed:inhibitLinkStateChange:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func updateLinkState(_ linkState: IOUSBHostCILinkState, speed: IOUSBHostCIDeviceSpeed, inhibitLinkStateChange: Bool) throws
```

## See Also

### Instance Methods

- [inspectCommand(\_:)](inspectcommand%28__%29.md)
- [respond(toCommand:status:)](respond%28tocommand_status_%29.md)

# updateLinkState:speed:inhibitLinkStateChange:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (BOOL) updateLinkState:(const IOUSBHostCILinkState) linkState speed:(const IOUSBHostCIDeviceSpeed) speed inhibitLinkStateChange:(const BOOL) inhibitLinkStateChange error:(NSError **) error;
```

## See Also

### Instance Methods

- [inspectCommand:error:](inspectcommand%28__%29.md)
- [respondToCommand:status:error:](respond%28tocommand_status_%29.md)
- [initWithInterface:portNumber:error:](initwithinterface_portnumber_error_.md)
