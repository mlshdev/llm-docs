> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/configurationdescriptor(with:)](https://developer.apple.com/documentation/iousbhost/iousbhostobject/configurationdescriptor(with:))

# configurationDescriptor(with:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func configurationDescriptor(with index: Int) throws -> UnsafePointer<IOUSBConfigurationDescriptor>
```

## See Also

### Instance Methods

- [configurationDescriptor(withConfigurationValue:)](configurationdescriptor%28withconfigurationvalue_%29.md)

# configurationDescriptorWithIndex:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (const IOUSBConfigurationDescriptor *) configurationDescriptorWithIndex:(NSUInteger) index error:(NSError **) error;
```

## See Also

### Instance Methods

- [configurationDescriptorWithConfigurationValue:error:](configurationdescriptor%28withconfigurationvalue_%29.md)
