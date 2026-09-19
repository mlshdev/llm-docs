> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cinematic/cnrenderingsessionframeattributes/initwithtimedmetadatagroup:sessionattributes:

# initWithTimedMetadataGroup:sessionAttributes:

**Interface language:** Objective-C

**Framework:** Cinematic  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

Initializes the rendering frame attributes from a timed metadata group read from a Cinematic metadata track.

## Declaration

```objectivec
- (instancetype) initWithTimedMetadataGroup:(AVTimedMetadataGroup *) metadataGroup sessionAttributes:(CNRenderingSessionAttributes *) sessionAttributes;
```

## Parameters

- `metadataGroup`: The audio and video metadata group read from the timed Cinematic metadata track of a cinematic asset.
- `sessionAttributes`: Rendering session attributes loaded from a Cinematic asset.

<a id="return-value"></a>

## Return Value

An object representing the rendering frame attributes from a timed metadata group, read from a Cinematic metadata track.
