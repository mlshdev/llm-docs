> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arskview/delegate](https://developer.apple.com/documentation/arkit/arskview/delegate)

# delegate (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An object you provide to mediate synchronization of the view’s AR scene information with SpriteKit content.

## Declaration

```swift
weak var delegate: (any ARSKViewDelegate)? { get set }
```

## See Also

### Responding to AR Updates

- [ARSKViewDelegate](../arskviewdelegate.md): Deprecated. Methods you can implement to mediate the automatic synchronization of SpriteKit content with an AR session.

# delegate (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An object you provide to mediate synchronization of the view’s AR scene information with SpriteKit content.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) NSObject<ARSKViewDelegate> * delegate;
```

## See Also

### Responding to AR Updates

- [ARSKViewDelegate](../arskviewdelegate.md): Deprecated. Methods you can implement to mediate the automatic synchronization of SpriteKit content with an AR session.
