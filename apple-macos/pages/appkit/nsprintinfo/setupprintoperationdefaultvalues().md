> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nsprintinfo/setupprintoperationdefaultvalues()

# setUpPrintOperationDefaultValues() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Validates the attributes encapsulated by the print info.

## Declaration

```swift
func setUpPrintOperationDefaultValues()
```

<a id="Discussion"></a>

## Discussion

Invoked when the print operation is about to start. Subclasses may override this method to set default values for any attributes that are not set.

## See Also

### Controlling Printing

- [jobDisposition](jobdisposition-swift.property.md): The action specified for the job.
- [NSPrintInfo.JobDisposition](jobdisposition-swift.struct.md): Constants that specify values for the print job disposition.

# setUpPrintOperationDefaultValues (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Validates the attributes encapsulated by the print info.

## Declaration

```objectivec
- (void) setUpPrintOperationDefaultValues;
```

<a id="Discussion"></a>

## Discussion

Invoked when the print operation is about to start. Subclasses may override this method to set default values for any attributes that are not set.

## See Also

### Controlling Printing

- [jobDisposition](jobdisposition-swift.property.md): The action specified for the job.
- [NSPrintJobDispositionValue](jobdisposition-swift.struct.md): Constants that specify values for the print job disposition.
