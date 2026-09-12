> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerconfiguration/revision-swift.enum](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerconfiguration/revision-swift.enum)

# VTSuperResolutionScalerConfiguration.Revision (Swift)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Available algorithm revisions.

## Declaration

```swift
enum Revision
```

<a id="overview"></a>

## Overview

A new enum case with a higher revision number is added when the processing algorithm is updated. The [defaultRevision](defaultrevision.md) property provides the default algorithm revision.

## Topics

### Enumeration Cases

- [VTSuperResolutionScalerConfiguration.Revision.revision1](revision-swift.enum/revision1.md)

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

- [revision](revision-swift.property.md): The specific algorithm or configuration revision you use to perform the request.
- [defaultRevision](defaultrevision.md): Provides the default revision of a specific algorithm or configuration.
- [supportedRevisions](supportedrevisions.md): Provides the collection of currently supported algorithms or configuration revisions for the class of configuration.

# VTSuperResolutionScalerConfigurationRevision (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Enumeration  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.0+ · macOS 10.8+ · tvOS 10.2+ · visionOS 1.0+

Available algorithm revisions.

## Declaration

```objectivec
enum VTSuperResolutionScalerConfigurationRevision : NSInteger;
```

<a id="overview"></a>

## Overview

A new enum case with a higher revision number is added when the processing algorithm is updated. The [defaultRevision](defaultrevision.md) property provides the default algorithm revision.

## Topics

### Enumeration Cases

- [VTSuperResolutionScalerConfigurationRevision1](revision-swift.enum/revision1.md)

## See Also

### Inspecting revision information

- [revision](revision-swift.property.md): The specific algorithm or configuration revision you use to perform the request.
- [defaultRevision](defaultrevision.md): Provides the default revision of a specific algorithm or configuration.
- [supportedRevisions](supportedrevisions.md): Provides the collection of currently supported algorithms or configuration revisions for the class of configuration.
