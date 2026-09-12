> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpicker/prefersdismisscontrolvisible](https://developer.apple.com/documentation/pencilkit/pktoolpicker/prefersdismisscontrolvisible)

# prefersDismissControlVisible (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

If this is true the tool picker may show UI that allows dismissing it. If this is false the tool picker will not show this UI. By default this resigns first responder, but is customizable by `PKToolPickerDelegate`’s `toolPickerWillDismiss...` method.

## Declaration

```swift
var prefersDismissControlVisible: Bool { get set }
```

<a id="discussion"></a>

## Discussion

By default this is true.

# prefersDismissControlVisible (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

If this is true the tool picker may show UI that allows dismissing it. If this is false the tool picker will not show this UI. By default this resigns first responder, but is customizable by `PKToolPickerDelegate`’s `toolPickerWillDismiss...` method.

## Declaration

```objectivec
@property (nonatomic) BOOL prefersDismissControlVisible;
```

<a id="discussion"></a>

## Discussion

By default this is true.
