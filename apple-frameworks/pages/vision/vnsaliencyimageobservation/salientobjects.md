> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnsaliencyimageobservation/salientobjects](https://developer.apple.com/documentation/vision/vnsaliencyimageobservation/salientobjects)

# salientObjects (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A collection of objects describing the distinct areas of the saliency heat map.

## Declaration

```swift
var salientObjects: [VNRectangleObservation]? { get }
```

<a id="Discussion"></a>

## Discussion

The objects in this array don’t follow any specific ordering. It’s up to your app to iterate across the observations and apply desired ordering.

Requesting this array lazily computes the bounds of salient objects within the image.

# salientObjects (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+

A collection of objects describing the distinct areas of the saliency heat map.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<VNRectangleObservation *> * salientObjects;
```

<a id="Discussion"></a>

## Discussion

The objects in this array don’t follow any specific ordering. It’s up to your app to iterate across the observations and apply desired ordering.

Requesting this array lazily computes the bounds of salient objects within the image.
