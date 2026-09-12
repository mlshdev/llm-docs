> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/destroy(options:)](https://developer.apple.com/documentation/iousbhost/iousbhostobject/destroy(options:))

# destroy(options:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func destroy(options: IOUSBHostObjectDestroyOptions = [])
```

<a id="discussion"></a>

## Discussion

Removes underlying allocations of the IOUSBHostObject object along with user client

Extends destroy to take an options to modify the destroy behavior.  Currently only the IOUSBHostObjectDestroyOptionsDeviceSurrender is defined to support surrendering ownersip of the kernel service.  To be used when accepting the kUSBHostMessageDeviceIsRequestingClose message.

# destroyWithOptions: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (void) destroyWithOptions:(IOUSBHostObjectDestroyOptions) options;
```

<a id="discussion"></a>

## Discussion

Removes underlying allocations of the IOUSBHostObject object along with user client

Extends destroy to take an options to modify the destroy behavior.  Currently only the IOUSBHostObjectDestroyOptionsDeviceSurrender is defined to support surrendering ownersip of the kernel service.  To be used when accepting the kUSBHostMessageDeviceIsRequestingClose message.
