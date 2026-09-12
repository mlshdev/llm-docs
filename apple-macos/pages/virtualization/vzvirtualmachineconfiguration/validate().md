> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/validate()](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/validate())

# validate() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS

Validates the current configuration settings and reports any issues that might prevent the successful initialization of the VM.

## Declaration

```swift
func validate() throws
```

## See Also

### Validating the configuration

- [validateSaveRestoreSupport()](validatesaverestoresupport%28%29.md): Determines whether the framework can save or restore the VM’s current configuration.

# validateWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS

Validates the current configuration settings and reports any issues that might prevent the successful initialization of the VM.

## Declaration

```objectivec
- (BOOL) validateWithError:(NSError **) error;
```

## Parameters

- `error`: An error object if validation failed, or `nil` if the configuration is valid. The value of the [NSDebugDescriptionErrorKey](https://developer.apple.com/documentation/foundation/nsdebugdescriptionerrorkey) key in the error’s [userInfo](https://developer.apple.com/documentation/foundation/nserror/userinfo) dictionary contains the reason the configuration is invalid.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the configuration is valid, or [false](https://developer.apple.com/documentation/swift/false) if it’s invalid.

## See Also

### Validating the configuration

- [validateSaveRestoreSupportWithError:](validatesaverestoresupport%28%29.md): Determines whether the framework can save or restore the VM’s current configuration.
