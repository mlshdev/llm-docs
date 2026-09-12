> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowconfiguration/supportedrevisions](https://developer.apple.com/documentation/videotoolbox/vtopticalflowconfiguration/supportedrevisions)

# supportedRevisions (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A boolean value that indicates whether the processor supported on the current configuration.

## Declaration

```swift
class var supportedRevisions: IndexSet { get }
```

## See Also

### Inspecting revision information

- [revision](revision-swift.property.md): The specific algorithm or configuration revision that is to be used to perform the request.
- [defaultRevision](defaultrevision.md): The default revision of a particular algorithm or configuration.
- [VTOpticalFlowConfiguration.Revision](revision-swift.enum.md): The specific algorithm or configuration revision that is to be used to perform the request.

# supportedRevisions (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

A boolean value that indicates whether the processor supported on the current configuration.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSIndexSet * supportedRevisions;
```

## See Also

### Inspecting revision information

- [revision](revision-swift.property.md): The specific algorithm or configuration revision that is to be used to perform the request.
- [defaultRevision](defaultrevision.md): The default revision of a particular algorithm or configuration.
- [VTOpticalFlowConfigurationRevision](revision-swift.enum.md): The specific algorithm or configuration revision that is to be used to perform the request.
