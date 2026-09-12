> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/calayer/delegate](https://developer.apple.com/documentation/quartzcore/calayer/delegate)

# delegate (Swift)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The layer’s delegate object.

## Declaration

```swift
weak var delegate: (any CALayerDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use a delegate object to provide the layer’s contents, handle the layout of any sublayers, and provide custom actions in response to layer-related changes. The object you assign to this property should implement one or more of the methods of the [CALayerDelegate](../calayerdelegate.md) informal protocol. For more information about that protocol, see `CALayerDelegate`

In iOS, if the layer is associated with a [UIView](../../uikit/uiview.md) object, this property *must* be set to the view that owns the layer.

# delegate (Objective-C)

**Framework:** Core Animation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

The layer’s delegate object.

## Declaration

```objectivec
@property (weak, nullable) id<CALayerDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

You can use a delegate object to provide the layer’s contents, handle the layout of any sublayers, and provide custom actions in response to layer-related changes. The object you assign to this property should implement one or more of the methods of the [CALayerDelegate](../calayerdelegate.md) informal protocol. For more information about that protocol, see `CALayerDelegate`

In iOS, if the layer is associated with a [UIView](../../uikit/uiview.md) object, this property *must* be set to the view that owns the layer.
