> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uihovereffectlayer/containerview](https://developer.apple.com/documentation/uikit/uihovereffectlayer/containerview)

# containerView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The [UIView](../uiview.md) in which this layer is contained. This view is used to derive traits and other properties for applying the correct hover effect to the layer. It may also be used to assist with applying some kinds of hover effects to the layer.

## Declaration

```swift
weak var containerView: UIView? { get set }
```

<a id="discussion"></a>

## Discussion

The [containerView](containerview.md) should be an ancestor of this layer (once it has been added to a layer hierarchy) to behave correctly, but does not need to be the immediate parent of this layer. If the [containerView](containerview.md) is set to nil or is deallocated, some aspects of this layer’s hover effect may no longer work correctly.

# containerView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** visionOS 1.0+

The [UIView](../uiview.md) in which this layer is contained. This view is used to derive traits and other properties for applying the correct hover effect to the layer. It may also be used to assist with applying some kinds of hover effects to the layer.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) UIView * containerView;
```

<a id="discussion"></a>

## Discussion

The [containerView](containerview.md) should be an ancestor of this layer (once it has been added to a layer hierarchy) to behave correctly, but does not need to be the immediate parent of this layer. If the [containerView](containerview.md) is set to nil or is deallocated, some aspects of this layer’s hover effect may no longer work correctly.
