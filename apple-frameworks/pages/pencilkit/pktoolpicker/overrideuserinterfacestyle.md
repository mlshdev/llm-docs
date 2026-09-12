> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpicker/overrideuserinterfacestyle](https://developer.apple.com/documentation/pencilkit/pktoolpicker/overrideuserinterfacestyle)

# overrideUserInterfaceStyle (Swift)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The specific user interface style to apply to the tool picker.

## Declaration

```swift
var overrideUserInterfaceStyle: UIUserInterfaceStyle { get set }
```

<a id="Discussion"></a>

## Discussion

If you set this property, consider if you need to set [colorUserInterfaceStyle](coloruserinterfacestyle.md) to a select a different user interface style. The default user interface style is [UIUserInterfaceStyle.unspecified](../../uikit/uiuserinterfacestyle/unspecified.md).

## See Also

### Customizing picker behavior

- [isRulerActive](isruleractive.md): A Boolean value that indicates whether the ruler is visible on the canvas.
- [colorUserInterfaceStyle](coloruserinterfacestyle.md): The user interface style for the tool picker.
- [showsDrawingPolicyControls](showsdrawingpolicycontrols.md): A Boolean value that indicates whether the default drawing policy UI is visible.
- [stateAutosaveName](stateautosavename.md): The name used to automatically save the tool picker’s state in the defaults system.

# overrideUserInterfaceStyle (Objective-C)

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The specific user interface style to apply to the tool picker.

## Declaration

```objectivec
@property (nonatomic) UIUserInterfaceStyle overrideUserInterfaceStyle;
```

<a id="Discussion"></a>

## Discussion

If you set this property, consider if you need to set [colorUserInterfaceStyle](coloruserinterfacestyle.md) to a select a different user interface style. The default user interface style is [UIUserInterfaceStyleUnspecified](../../uikit/uiuserinterfacestyle/unspecified.md).

## See Also

### Customizing picker behavior

- [rulerActive](isruleractive.md): A Boolean value that indicates whether the ruler is visible on the canvas.
- [colorUserInterfaceStyle](coloruserinterfacestyle.md): The user interface style for the tool picker.
- [showsDrawingPolicyControls](showsdrawingpolicycontrols.md): A Boolean value that indicates whether the default drawing policy UI is visible.
- [stateAutosaveName](stateautosavename.md): The name used to automatically save the tool picker’s state in the defaults system.
