> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/arfaceanchor/blendshapelocation/tongueout

# tongueOut (Swift)

**Framework:** ARKit  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The coefficient describing extension of the tongue.

## Declaration

```swift
static let tongueOut: ARFaceAnchor.BlendShapeLocation
```

<a id="Discussion"></a>

## Discussion

A value of `0.0` indicates that the tongue is fully inside the mouth; a value of `1.0` indicates that the tongue is as far out of the mouth as ARKit tracks.

# ARBlendShapeLocationTongueOut (Objective-C)

**Framework:** ARKit  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+

The coefficient describing extension of the tongue.

## Declaration

```objectivec
extern ARBlendShapeLocation const ARBlendShapeLocationTongueOut;
```

<a id="Discussion"></a>

## Discussion

A value of `0.0` indicates that the tongue is fully inside the mouth; a value of `1.0` indicates that the tongue is as far out of the mouth as ARKit tracks.
