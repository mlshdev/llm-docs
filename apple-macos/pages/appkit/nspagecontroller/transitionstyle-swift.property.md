> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspagecontroller/transitionstyle-swift.property](https://developer.apple.com/documentation/appkit/nspagecontroller/transitionstyle-swift.property)

# transitionStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The transition style the page controller uses when changing pages.

## Declaration

```swift
var transitionStyle: NSPageController.TransitionStyle { get set }
```

<a id="Discussion"></a>

## Discussion

The possible values for the transition style are discussed in [NSPageController.TransitionStyle](transitionstyle-swift.enum.md).

The default value is [NSPageController.TransitionStyle.stackHistory](transitionstyle-swift.enum/stackhistory.md).

# transitionStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The transition style the page controller uses when changing pages.

## Declaration

```objectivec
@property NSPageControllerTransitionStyle transitionStyle;
```

<a id="Discussion"></a>

## Discussion

The possible values for the transition style are discussed in [NSPageControllerTransitionStyle](transitionstyle-swift.enum.md).

The default value is [NSPageControllerTransitionStyleStackHistory](transitionstyle-swift.enum/stackhistory.md).
