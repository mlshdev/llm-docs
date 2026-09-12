> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostinterface/copypipe(withaddress:)](https://developer.apple.com/documentation/iousbhost/iousbhostinterface/copypipe(withaddress:))

# copyPipe(withAddress:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Copies a pipe for a specific endpoint address.

## Declaration

```swift
func copyPipe(withAddress address: Int) throws -> IOUSBHostPipe
```

## Parameters

- `address`: The endpoint address of the pipe.

<a id="return-value"></a>

## Return Value

An [IOUSBHostPipe](../iousbhostpipe.md) or [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) if the system can’t create the pipe.

<a id="Discussion"></a>

## Discussion

If the pipe returns successfully, the method maintains a reference to the [IOUSBHostInterface](../iousbhostinterface.md).

## See Also

### Managing Pipes

- [selectAlternateSetting(\_:)](selectalternatesetting%28__%29.md): Selects an alternative setting for the interface.

# copyPipeWithAddress:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Copies a pipe for a specific endpoint address.

## Declaration

```objectivec
- (IOUSBHostPipe *) copyPipeWithAddress:(NSUInteger) address error:(NSError **) error;
```

## Parameters

- `address`: The endpoint address of the pipe.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) in Objective-C that contains an [IOReturn](https://developer.apple.com/documentation/iokit/ioreturn) value on failure.

<a id="return-value"></a>

## Return Value

An [IOUSBHostPipe](../iousbhostpipe.md) or [nil](https://developer.apple.com/documentation/objectivec/nil-227m0) if the system can’t create the pipe.

<a id="Discussion"></a>

## Discussion

If the pipe returns successfully, the method maintains a reference to the [IOUSBHostInterface](../iousbhostinterface.md).

## See Also

### Managing Pipes

- [selectAlternateSetting:error:](selectalternatesetting%28__%29.md): Selects an alternative setting for the interface.
