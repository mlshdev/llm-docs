> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostdevice/configurewithvalue:matchinterfaces:error:](https://developer.apple.com/documentation/iousbhost/iousbhostdevice/configurewithvalue:matchinterfaces:error:)

# configureWithValue:matchInterfaces:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Selects a new configuration for the device.

## Declaration

```objectivec
- (BOOL) configureWithValue:(NSUInteger) value matchInterfaces:(BOOL) matchInterfaces error:(NSError **) error;
```

## Parameters

- `value`: The configuration value to select.
- `matchInterfaces`: A Boolean to register the new interfaces for matching. If `YES`, any interfaces within the new configuration register for matching. The default value is `YES`.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](https://developer.apple.com/documentation/iokit/ioreturn) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

## See Also

### Configuring the Device

- [configureWithValue:error:](configurewithvalue_error_.md): Selects a new configuration for the device and registers the interfaces for matching.
