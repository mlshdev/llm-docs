> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzguestprovisioningoptions/validate()](https://developer.apple.com/documentation/virtualization/vzguestprovisioningoptions/validate())

# validate() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Validates the provisioning options.

## Declaration

```swift
func validate() throws
```

<a id="discussion"></a>

## Discussion

If validation fails, the error parameter contains a [VZError](../vzerror.md) with a guest provisioning error code.

## See Also

### Related Documentation

- [VZError.Code](../vzerror/code.md): Errors you might encounter when configuring or using a virtual machine.

# validateWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Validates the provisioning options.

## Declaration

```objectivec
- (BOOL) validateWithError:(NSError **) error;
```

## Parameters

- `error`: On input, a pointer to an error object. If an error occurs, this pointer is set to an actual error object containing the error.

<a id="return-value"></a>

## Return Value

`YES` if validation succeeds, `NO` otherwise.

<a id="discussion"></a>

## Discussion

If validation fails, the error parameter contains a [VZError](../vzerror.md) with a guest provisioning error code.

## See Also

### Related Documentation

- [VZErrorCode](../vzerror/code.md): Errors you might encounter when configuring or using a virtual machine.
