> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/videotoolbox/vtsuperresolutionscalerconfiguration/supportedrevisions

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
