> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtopticalflowconfiguration/revision-swift.enum](https://developer.apple.com/documentation/videotoolbox/vtopticalflowconfiguration/revision-swift.enum)

# VTOpticalFlowConfiguration.Revision (Swift)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The specific algorithm or configuration revision that is to be used to perform the request.

## Declaration

```swift
enum Revision
```

## Topics

### Enumeration Cases

- [VTOpticalFlowConfiguration.Revision.revision1](revision-swift.enum/revision1.md): An algorithm or implementation that represents the first revision.

### Initializers

- [init(rawValue:)](revision-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Inspecting revision information

- [revision](revision-swift.property.md): The specific algorithm or configuration revision that is to be used to perform the request.
- [defaultRevision](defaultrevision.md): The default revision of a particular algorithm or configuration.
- [supportedRevisions](supportedrevisions.md): A boolean value that indicates whether the processor supported on the current configuration.

# VTOpticalFlowConfigurationRevision (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

The specific algorithm or configuration revision that is to be used to perform the request.

## Declaration

```objectivec
enum VTOpticalFlowConfigurationRevision : NSInteger;
```

## Topics

### Enumeration Cases

- [VTOpticalFlowConfigurationRevision1](revision-swift.enum/revision1.md): An algorithm or implementation that represents the first revision.

## See Also

### Inspecting revision information

- [revision](revision-swift.property.md): The specific algorithm or configuration revision that is to be used to perform the request.
- [defaultRevision](defaultrevision.md): The default revision of a particular algorithm or configuration.
- [supportedRevisions](supportedrevisions.md): A boolean value that indicates whether the processor supported on the current configuration.
