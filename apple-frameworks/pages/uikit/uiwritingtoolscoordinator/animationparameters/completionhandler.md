> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolscoordinator/animationparameters/completionhandler](https://developer.apple.com/documentation/uikit/uiwritingtoolscoordinator/animationparameters/completionhandler)

# completionHandler (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

A custom block to run when the system animations finish.

## Declaration

```swift
var completionHandler: (() -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to a block that you want the system to run when any animations finish. The block you provide must have no return value and no parameters. The system executes this block once when the current animation finish.

## See Also

### Creating custom animations

- [progressHandler](progresshandler.md): A custom block that runs at the same time as the system animations.

# completionHandler (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 18.2+ · iPadOS 18.2+ · Mac Catalyst 18.2+ · visionOS 2.4+

A custom block to run when the system animations finish.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^completionHandler)();
```

<a id="discussion"></a>

## Discussion

Set this property to a block that you want the system to run when any animations finish. The block you provide must have no return value and no parameters. The system executes this block once when the current animation finish.

## See Also

### Creating custom animations

- [progressHandler](progresshandler.md): A custom block that runs at the same time as the system animations.
