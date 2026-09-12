> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstitlebaraccessoryviewcontroller/preferredscrolledgeeffectstyle](https://developer.apple.com/documentation/appkit/nstitlebaraccessoryviewcontroller/preferredscrolledgeeffectstyle)

# preferredScrollEdgeEffectStyle (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.1+

The titlebar accessory’s preferred effect for content scrolling behind it.

## Declaration

```swift
var preferredScrollEdgeEffectStyle: NSScrollEdgeEffectStyle { get set }
```

<a id="discussion"></a>

## Discussion

To allow for a soft edge on the bottom edge of a titlebar accessory:

```
titlebarAccessoryViewController.preferredScrollEdgeEffectStyle = NSScrollEdgeEffectStyle.softStyle;
```

## See Also

### Configuring the scroll edge effect

- [NSScrollEdgeEffectStyle](../nsscrolledgeeffectstyle.md): Styles for a scroll view’s edge effect.

# preferredScrollEdgeEffectStyle (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 26.1+

The titlebar accessory’s preferred effect for content scrolling behind it.

## Declaration

```objectivec
@property (strong) NSScrollEdgeEffectStyle * preferredScrollEdgeEffectStyle;
```

<a id="discussion"></a>

## Discussion

To allow for a soft edge on the bottom edge of a titlebar accessory:

```
titlebarAccessoryViewController.preferredScrollEdgeEffectStyle = NSScrollEdgeEffectStyle.softStyle;
```

## See Also

### Configuring the scroll edge effect

- [NSScrollEdgeEffectStyle](../nsscrolledgeeffectstyle.md): Styles for a scroll view’s edge effect.
