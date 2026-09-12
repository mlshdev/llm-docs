> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtsuperresolutionscalerconfiguration/supportedrevisions](https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerconfiguration/supportedrevisions)

# supportedRevisions (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Provides the collection of currently supported algorithms or configuration revisions for the class of configuration.

## Declaration

```swift
class var supportedRevisions: IndexSet { get }
```

<a id="discussion"></a>

## Discussion

A property you use to introspect at runtime which revisions are available for each configuration.

## See Also

### Inspecting revision information

- [revision](revision-swift.property.md): The specific algorithm or configuration revision you use to perform the request.
- [defaultRevision](defaultrevision.md): Provides the default revision of a specific algorithm or configuration.
- [VTSuperResolutionScalerConfiguration.Revision](revision-swift.enum.md): Available algorithm revisions.

# supportedRevisions (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Provides the collection of currently supported algorithms or configuration revisions for the class of configuration.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSIndexSet * supportedRevisions;
```

<a id="discussion"></a>

## Discussion

A property you use to introspect at runtime which revisions are available for each configuration.

## See Also

### Inspecting revision information

- [revision](revision-swift.property.md): The specific algorithm or configuration revision you use to perform the request.
- [defaultRevision](defaultrevision.md): Provides the default revision of a specific algorithm or configuration.
- [VTSuperResolutionScalerConfigurationRevision](revision-swift.enum.md): Available algorithm revisions.
