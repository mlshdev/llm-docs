> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arimageanchor/estimatedscalefactor](https://developer.apple.com/documentation/arkit/arimageanchor/estimatedscalefactor)

# estimatedScaleFactor (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A factor between the initial size and the estimated physical size.

## Declaration

```swift
var estimatedScaleFactor: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

The default value is 1.0, which means that a version of this image that ARKit recognizes in the physical environment exactly matches its reference image [physicalSize](../arreferenceimage/physicalsize.md).

Otherwise, ARKit automatically corrects the image anchor’s transform when `estimatedScaleFactor` is a value other than 1.0. This adjustment in turn, corrects ARKit’s understanding of where the image anchor is located in the physical environment.

See [automaticImageScaleEstimationEnabled](../arworldtrackingconfiguration/automaticimagescaleestimationenabled.md).

# estimatedScaleFactor (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

A factor between the initial size and the estimated physical size.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat estimatedScaleFactor;
```

<a id="Discussion"></a>

## Discussion

The default value is 1.0, which means that a version of this image that ARKit recognizes in the physical environment exactly matches its reference image [physicalSize](../arreferenceimage/physicalsize.md).

Otherwise, ARKit automatically corrects the image anchor’s transform when `estimatedScaleFactor` is a value other than 1.0. This adjustment in turn, corrects ARKit’s understanding of where the image anchor is located in the physical environment.

See [automaticImageScaleEstimationEnabled](../arworldtrackingconfiguration/automaticimagescaleestimationenabled.md).
