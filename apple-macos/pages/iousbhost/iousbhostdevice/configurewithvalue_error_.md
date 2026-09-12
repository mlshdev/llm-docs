> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostdevice/configurewithvalue:error:](https://developer.apple.com/documentation/iousbhost/iousbhostdevice/configurewithvalue:error:)

# configureWithValue:error:

**Interface language:** Objective-C

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

Selects a new configuration for the device and registers the interfaces for matching.

## Declaration

```objectivec
- (BOOL) configureWithValue:(NSUInteger) value error:(NSError **) error;
```

## Parameters

- `value`: A configuration value to select.
- `error`: An [NSError](https://developer.apple.com/documentation/foundation/nserror) that contains an [IOReturn](../../kernel/ioreturn.md) value on failure.

<a id="return-value"></a>

## Return Value

`YES` if the request completes successfully; otherwise, `NO`.

## See Also

### Configuring the Device

- [configureWithValue:matchInterfaces:error:](configurewithvalue_matchinterfaces_error_.md): Selects a new configuration for the device.
