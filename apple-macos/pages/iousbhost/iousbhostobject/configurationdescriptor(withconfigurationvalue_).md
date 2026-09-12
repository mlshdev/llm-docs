> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/iousbhost/iousbhostobject/configurationdescriptor(withconfigurationvalue:)](https://developer.apple.com/documentation/iousbhost/iousbhostobject/configurationdescriptor(withconfigurationvalue:))

# configurationDescriptor(withConfigurationValue:) (Swift)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```swift
func configurationDescriptor(withConfigurationValue configurationValue: Int) throws -> UnsafePointer<IOUSBConfigurationDescriptor>
```

## See Also

### Instance Methods

- [configurationDescriptor(with:)](configurationdescriptor%28with_%29.md)

# configurationDescriptorWithConfigurationValue:error: (Objective-C)

**Framework:** IOUSBHost  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 14.0+ · macOS 10.15+

## Declaration

```objectivec
- (const IOUSBConfigurationDescriptor *) configurationDescriptorWithConfigurationValue:(NSUInteger) configurationValue error:(NSError **) error;
```

## See Also

### Instance Methods

- [configurationDescriptorWithIndex:error:](configurationdescriptor%28with_%29.md)
