> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/objecttrackingprovider/init(referenceobjects:trackingconfiguration:)

# init(referenceObjects:trackingConfiguration:)

**Framework:** ARKit  
**Kind:** Initializer  
**Availability:** visionOS 2.0+

Creates an object-tracking provider.

## Declaration

```swift
init(referenceObjects: [ReferenceObject], trackingConfiguration: ObjectTrackingProvider.TrackingConfiguration? = nil)
```

## Parameters

- `referenceObjects`: The reference objects to look for
- `trackingConfiguration`: Optional parameters for configuring object tracking if not provided, the framework applies a set of default values.

<a id="Discussion"></a>

## Discussion

The method clamps the numeric parameter values for configuring tracking if they’re outside their supported range.
