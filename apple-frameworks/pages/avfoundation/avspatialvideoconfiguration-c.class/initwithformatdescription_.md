> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avspatialvideoconfiguration-c.class/initwithformatdescription:

# initWithFormatDescription:

**Interface language:** Objective-C

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Initializes an AVSpatialVideoConfiguration with a format description.

## Declaration

```objectivec
- (instancetype) initWithFormatDescription:(CMFormatDescriptionRef) formatDescription;
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

- [init](init.md)
