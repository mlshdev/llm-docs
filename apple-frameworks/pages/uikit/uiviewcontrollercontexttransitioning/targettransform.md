> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontrollercontexttransitioning/targettransform](https://developer.apple.com/documentation/uikit/uiviewcontrollercontexttransitioning/targettransform)

# targetTransform (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a transform indicating the amount of rotation being applied during the transition.

## Declaration

```swift
var targetTransform: CGAffineTransform { get }
```

<a id="return-value"></a>

## Return Value

An affine transform indicating the amount of rotation being applied to the interface. This transform is the identity transform when no rotation is applied; otherwise, it is a transform that applies a 90 degree, -90 degree, or 180 degree rotation.

# targetTransform (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns a transform indicating the amount of rotation being applied during the transition.

## Declaration

```objectivec
@property (nonatomic, readonly) CGAffineTransform targetTransform;
```

<a id="return-value"></a>

## Return Value

An affine transform indicating the amount of rotation being applied to the interface. This transform is the identity transform when no rotation is applied; otherwise, it is a transform that applies a 90 degree, -90 degree, or 180 degree rotation.
