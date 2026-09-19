> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arimageanchor/referenceimage

# referenceImage (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The detected image referenced by the image anchor.

## Declaration

```swift
var referenceImage: ARReferenceImage { get }
```

<a id="Discussion"></a>

## Discussion

This object is always one of the [ARReferenceImage](../arreferenceimage.md) objects you provided in the [detectionImages](../arworldtrackingconfiguration/detectionimages.md) array when configuring the session.

# referenceImage (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+

The detected image referenced by the image anchor.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) ARReferenceImage * referenceImage;
```

<a id="Discussion"></a>

## Discussion

This object is always one of the [ARReferenceImage](../arreferenceimage.md) objects you provided in the [detectionImages](../arworldtrackingconfiguration/detectionimages.md) array when configuring the session.
