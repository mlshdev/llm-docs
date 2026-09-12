> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arcoachingoverlayview/delegate](https://developer.apple.com/documentation/arkit/arcoachingoverlayview/delegate)

# delegate (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An object you supply that implements coaching event callbacks.

## Declaration

```swift
@IBOutlet weak var delegate: (any ARCoachingOverlayViewDelegate)? { get set }
```

<a id="Discussion"></a>

## Discussion

Normally, you set the value of this property to your app’s view controller.

## See Also

### Delegating Events

- [ARCoachingOverlayViewDelegate](../arcoachingoverlayviewdelegate.md): Deprecated. A set of callbacks you implement to be notified of coaching events.

# delegate (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+

An object you supply that implements coaching event callbacks.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<ARCoachingOverlayViewDelegate> delegate;
```

<a id="Discussion"></a>

## Discussion

Normally, you set the value of this property to your app’s view controller.

## See Also

### Delegating Events

- [ARCoachingOverlayViewDelegate](../arcoachingoverlayviewdelegate.md): Deprecated. A set of callbacks you implement to be notified of coaching events.
