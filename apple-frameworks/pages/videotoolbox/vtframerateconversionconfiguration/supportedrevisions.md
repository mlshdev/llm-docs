> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/videotoolbox/vtframerateconversionconfiguration/supportedrevisions](https://developer.apple.com/documentation/videotoolbox/vtframerateconversionconfiguration/supportedrevisions)

# supportedRevisions (Swift)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The collection of currently-supported algorithms or configuration revisions for the class of configurations.

## Declaration

```swift
class var supportedRevisions: IndexSet { get }
```

<a id="discussion"></a>

## Discussion

Use this property to determine the supported revisions for each configuration at runtime.

## See Also

### Inspecting revision information

- [revision](revision-swift.property.md): The specific algorithm or configuration revision to use to perform the request.
- [defaultRevision](defaultrevision.md): The default revision of a particular algorithm or configuration.
- [VTFrameRateConversionConfiguration.Revision](revision-swift.enum.md): The specific algorithm or configuration revision that is to be used to perform the request.

# supportedRevisions (Objective-C)

**Framework:** Video Toolbox  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 15.4+

The collection of currently-supported algorithms or configuration revisions for the class of configurations.

## Declaration

```objectivec
@property (class, nonatomic, readonly) NSIndexSet * supportedRevisions;
```

<a id="discussion"></a>

## Discussion

Use this property to determine the supported revisions for each configuration at runtime.

## See Also

### Inspecting revision information

- [revision](revision-swift.property.md): The specific algorithm or configuration revision to use to perform the request.
- [defaultRevision](defaultrevision.md): The default revision of a particular algorithm or configuration.
- [VTFrameRateConversionConfigurationRevision](revision-swift.enum.md): The specific algorithm or configuration revision that is to be used to perform the request.
