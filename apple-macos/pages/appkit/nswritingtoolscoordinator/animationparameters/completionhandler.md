> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/animationparameters/completionhandler](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/animationparameters/completionhandler)

# completionHandler (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

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

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 15.2+

A custom block to run when the system animations finish.

## Declaration

```objectivec
@property (copy, nullable) void (^completionHandler)();
```

<a id="discussion"></a>

## Discussion

Set this property to a block that you want the system to run when any animations finish. The block you provide must have no return value and no parameters. The system executes this block once when the current animation finish.

## See Also

### Creating custom animations

- [progressHandler](progresshandler.md): A custom block that runs at the same time as the system animations.
