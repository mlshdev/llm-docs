> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostdevice/configurationdescriptor](https://developer.apple.com/documentation/iousbhost/iousbhostdevice/configurationdescriptor)

# configurationDescriptor (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The currently selected configuration descriptor.

## Declaration

```swift
var configurationDescriptor: UnsafePointer<IOUSBConfigurationDescriptor>? { get }
```

<a id="return-value"></a>

## Return Value

A pointer to the device’s configuration descriptor, or `nil` if no matching descriptor returns.

<a id="discussion"></a>

## Discussion

> **Note**

>  The [IOUSBHostDevice](../iousbhostdevice.md) performs memory management. Don’t free the descriptor, and assume it is valid as long as the [IOUSBHostDevice](../iousbhostdevice.md) hasn’t called [destroy()](../iousbhostobject/destroy%28%29.md).

# configurationDescriptor (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

The currently selected configuration descriptor.

## Declaration

```objectivec
@property (readonly, nullable) const IOUSBConfigurationDescriptor * configurationDescriptor;
```

<a id="return-value"></a>

## Return Value

A pointer to the device’s configuration descriptor, or `nil` if no matching descriptor returns.

<a id="discussion"></a>

## Discussion

> **Note**

>  The [IOUSBHostDevice](../iousbhostdevice.md) performs memory management. Don’t free the descriptor, and assume it is valid as long as the [IOUSBHostDevice](../iousbhostdevice.md) hasn’t called [destroy](../iousbhostobject/destroy%28%29.md).
