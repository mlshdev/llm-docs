> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/arscnview/delegate](https://developer.apple.com/documentation/arkit/arscnview/delegate)

# delegate (Swift)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An object you provide to mediate synchronization of the view’s AR scene information with SceneKit content.

## Declaration

```swift
weak var delegate: (any ARSCNViewDelegate)? { get set }
```

## See Also

### Responding to AR Updates

- [ARSCNViewDelegate](../arscnviewdelegate.md): Deprecated. Methods you can implement to mediate the automatic synchronization of SceneKit content with an AR session.

# delegate (Objective-C)

**Framework:** ARKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+

An object you provide to mediate synchronization of the view’s AR scene information with SceneKit content.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) id<ARSCNViewDelegate> delegate;
```

## See Also

### Responding to AR Updates

- [ARSCNViewDelegate](../arscnviewdelegate.md): Deprecated. Methods you can implement to mediate the automatic synchronization of SceneKit content with an AR session.
