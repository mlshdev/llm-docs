> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avspatialvideoconfiguration-swift.struct/init(formatdescription:)](https://developer.apple.com/documentation/avfoundation/avspatialvideoconfiguration-swift.struct/init(formatdescription:))

# init(formatDescription:)

**Framework:** AVFoundation  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Initializes an AVSpatialVideoConfiguration with a format description.

## Declaration

```swift
init(formatDescription: CMFormatDescription)
```

## Parameters

- `formatDescription`: Format description to use to initialize the AVSpatialVideoConfiguration.

<a id="return-value"></a>

## Return Value

An instance of AVSpatialVideoConfiguration

<a id="discussion"></a>

## Discussion

The format description is not stored.

## See Also

### Creating a configuration

- [init()](init%28%29.md): Initializes an AVSpatialVideoConfiguration instance with all the properties set to nil.
- [nonSpatial](nonspatial.md): A non-spatial video configuration.
