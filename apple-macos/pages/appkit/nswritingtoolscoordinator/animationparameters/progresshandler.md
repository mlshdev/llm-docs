> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nswritingtoolscoordinator/animationparameters/progresshandler](https://developer.apple.com/documentation/appkit/nswritingtoolscoordinator/animationparameters/progresshandler)

# progressHandler (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 15.2+

A custom block that runs at the same time as the system animations.

## Declaration

```swift
var progressHandler: ((Float) -> Void)? { get set }
```

<a id="discussion"></a>

## Discussion

If you have animations you want to run at the same time as the system animations, assign a block to this property and use it to run your animations. The block you provide must have no return value and take a floating-point value as a parameter. The parameter indicates the current progress of the animations as a percentage value between `0.0` to `1.0`. The system executes your block multiple times during the course of the animations, providing an updated completion value each time.

## See Also

### Creating custom animations

- [completionHandler](completionhandler.md): A custom block to run when the system animations finish.

# progressHandler (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 18.2+ · macOS 15.2+

A custom block that runs at the same time as the system animations.

## Declaration

```objectivec
@property (copy, nullable) void (^progressHandler)(float progress);
```

<a id="discussion"></a>

## Discussion

If you have animations you want to run at the same time as the system animations, assign a block to this property and use it to run your animations. The block you provide must have no return value and take a floating-point value as a parameter. The parameter indicates the current progress of the animations as a percentage value between `0.0` to `1.0`. The system executes your block multiple times during the course of the animations, providing an updated completion value each time.

## See Also

### Creating custom animations

- [completionHandler](completionhandler.md): A custom block to run when the system animations finish.
