> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtioblockdeviceconfiguration/validateblockdeviceidentifier(_:)](https://developer.apple.com/documentation/virtualization/vzvirtioblockdeviceconfiguration/validateblockdeviceidentifier(_:))

# validateBlockDeviceIdentifier(\_:) (Swift)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.3+

Checks the validity of a block device identifier.

## Declaration

```swift
class func validateBlockDeviceIdentifier(_ blockDeviceIdentifier: String) throws
```

## Parameters

- `blockDeviceIdentifier`: The device identifier to validate. In the case of an invalid identifier string, the method throws an error that describes why the device identifier isn’t valid.

<a id="Discussion"></a>

## Discussion

Use [validateBlockDeviceIdentifier(\_:)](validateblockdeviceidentifier%28__%29.md) to validate an identifier string before trying to set the [blockDeviceIdentifier](blockdeviceidentifier.md) property. The identifier must be an ASCII encodable string of 20 bytes or less.

# validateBlockDeviceIdentifier:error: (Objective-C)

**Framework:** Virtualization  
**Kind:** Type Method  
**Availability:** macOS 12.3+

Checks the validity of a block device identifier.

## Declaration

```objectivec
+ (BOOL) validateBlockDeviceIdentifier:(NSString *) blockDeviceIdentifier error:(NSError **) error;
```

## Parameters

- `blockDeviceIdentifier`: The device identifier to validate. In the case of an invalid identifier string, the method throws an error that describes why the device identifier isn’t valid.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="Discussion"></a>

## Discussion

Use [validateBlockDeviceIdentifier:error:](validateblockdeviceidentifier%28__%29.md) to validate an identifier string before trying to set the [blockDeviceIdentifier](blockdeviceidentifier.md) property. The identifier must be an ASCII encodable string of 20 bytes or less.
