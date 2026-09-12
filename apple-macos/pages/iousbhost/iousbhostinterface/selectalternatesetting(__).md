> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostinterface/selectalternatesetting(_:)](https://developer.apple.com/documentation/iousbhost/iousbhostinterface/selectalternatesetting(_:))

# selectAlternateSetting(\_:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Selects an alternative setting for the interface.

## Declaration

```swift
func selectAlternateSetting(_ alternateSetting: Int) throws
```

## Parameters

- `alternateSetting`: The alternative interface number to activate.

<a id="Discussion"></a>

## Discussion

Use this method to select an alternative setting for the interface. The operation aborts all pending input/output requests on the interface’s pipes, and closes all open pipes. It also selects the new alternative setting through the `SET_INTERFACE` control request (See USB 3.2, 9.4.10.).

> **Note**

>  Any [IOUSBHostPipe](../iousbhostpipe.md) objects that already exist are no longer valid.

## See Also

### Managing Pipes

- [copyPipe(withAddress:)](copypipe%28withaddress_%29.md): Copies a pipe for a specific endpoint address.

# selectAlternateSetting:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Selects an alternative setting for the interface.

## Declaration

```objectivec
- (BOOL) selectAlternateSetting:(NSUInteger) alternateSetting error:(NSError **) error;
```

## Parameters

- `alternateSetting`: The alternative interface number to activate.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) in Objective-C that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Use this method to select an alternative setting for the interface. The operation aborts all pending input/output requests on the interface’s pipes, and closes all open pipes. It also selects the new alternative setting through the `SET_INTERFACE` control request (See USB 3.2, 9.4.10.).

> **Note**

>  Any [IOUSBHostPipe](../iousbhostpipe.md) objects that already exist are no longer valid.

## See Also

### Managing Pipes

- [copyPipeWithAddress:error:](copypipe%28withaddress_%29.md): Copies a pipe for a specific endpoint address.
