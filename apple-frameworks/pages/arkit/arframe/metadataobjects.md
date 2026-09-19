> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arframe/metadataobjects

# metadataObjects (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Metadata objects associated with the current frame.

## Declaration

```swift
var metadataObjects: [AVMetadataObject] { get }
```

<a id="discussion"></a>

## Discussion

This array contains `AVMetadataFaceObject`s for detected faces when running an `ARFaceTrackingConfiguration` and face tracking is not active (`maximumNumberOfTrackedFaces` set to 0).

> **See Also**

> [maximumNumberOfTrackedFaces](../arfacetrackingconfiguration/maximumnumberoftrackedfaces.md)

# metadataObjects (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+

Metadata objects associated with the current frame.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<__kindof AVMetadataObject *> * metadataObjects;
```

<a id="discussion"></a>

## Discussion

This array contains `AVMetadataFaceObject`s for detected faces when running an `ARFaceTrackingConfiguration` and face tracking is not active (`maximumNumberOfTrackedFaces` set to 0).

> **See Also**

> [maximumNumberOfTrackedFaces](../arfacetrackingconfiguration/maximumnumberoftrackedfaces.md)
