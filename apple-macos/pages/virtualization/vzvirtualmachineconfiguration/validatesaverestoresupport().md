> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/validatesaverestoresupport()](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/validatesaverestoresupport())

# validateSaveRestoreSupport() (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Determines whether the framework can save or restore the VM’s current configuration.

## Declaration

```swift
func validateSaveRestoreSupport() throws
```

<a id="Discussion"></a>

## Discussion

Use this method to verify that a virtual machine with this configuration is savable.

- Not all configuration options can be safely saved and restored from the configuration file on disk.
- If this method returns `false`, the caller should expect future calls to [saveMachineStateTo(url:completionHandler:)](../vzvirtualmachine/savemachinestateto%28url_completionhandler_%29.md) to fail.

## See Also

### Validating the configuration

- [validate()](validate%28%29.md): Validates the current configuration settings and reports any issues that might prevent the successful initialization of the VM.

# validateSaveRestoreSupportWithError: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Determines whether the framework can save or restore the VM’s current configuration.

## Declaration

```objectivec
- (BOOL) validateSaveRestoreSupportWithError:(NSError **) error;
```

## Parameters

- `error`: If not `nil`, the framework returns an [NSError](https://developer.apple.com/documentation/foundation/nserror) object that describes the unsupported configuration option.

<a id="return-value"></a>

## Return Value

Returns [true](https://developer.apple.com/documentation/swift/true) if the framework can save or restore the current configuration.

<a id="Discussion"></a>

## Discussion

Use this method to verify that a virtual machine with this configuration is savable.

- Not all configuration options can be safely saved and restored from the configuration file on disk.
- If this method returns `false`, the caller should expect future calls to [saveMachineStateToURL:completionHandler:](../vzvirtualmachine/savemachinestateto%28url_completionhandler_%29.md) to fail.

## See Also

### Validating the configuration

- [validateWithError:](validate%28%29.md): Validates the current configuration settings and reports any issues that might prevent the successful initialization of the VM.
