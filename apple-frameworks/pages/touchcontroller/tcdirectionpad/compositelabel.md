> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcdirectionpad/compositelabel](https://developer.apple.com/documentation/touchcontroller/tcdirectionpad/compositelabel)

# compositeLabel (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A composite control label.

## Declaration

```swift
var compositeLabel: TCControlLabel? { get set }
```

<a id="discussion"></a>

## Discussion

If set, the control will behave as a `GCControllerDirectionPad`; otherwise, it behaves as separate buttons.

## See Also

### Inspecting the direction pad

- [downContents](downcontents.md): The contents for the down button.
- [downLabel](downlabel.md): The label for the down button, if the control isn’t a composite direction pad.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [inputIsMutuallyExclusive](inputismutuallyexclusive.md): A Boolean value that indicates whether the control has mutally exclusive input.
- [isDigital](isdigital.md): A Boolean value that indicates whether the control behaves as a digital button.
- [isRadial](isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](leftcontents.md): The contents for the left button.
- [leftLabel](leftlabel.md): The label for the left button, if the control isn’t a composite direction pad.
- [rightContents](rightcontents.md): The contents for the right button.
- [rightLabel](rightlabel.md): The label for the right button, if the control isn’t a composite direction pad.
- [upContents](upcontents.md): The contents for the up button.
- [upLabel](uplabel.md): The label for the up button, if the control isn’t a composite direction pad.

# compositeLabel (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A composite control label.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlLabel * compositeLabel;
```

<a id="discussion"></a>

## Discussion

If set, the control will behave as a `GCControllerDirectionPad`; otherwise, it behaves as separate buttons.

## See Also

### Inspecting the direction pad

- [downContents](downcontents.md): The contents for the down button.
- [downLabel](downlabel.md): The label for the down button, if the control isn’t a composite direction pad.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [mutuallyExclusiveInput](inputismutuallyexclusive.md): A Boolean value that indicates whether the control has mutally exclusive input.
- [digital](isdigital.md): A Boolean value that indicates whether the control behaves as a digital button.
- [radial](isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](leftcontents.md): The contents for the left button.
- [leftLabel](leftlabel.md): The label for the left button, if the control isn’t a composite direction pad.
- [rightContents](rightcontents.md): The contents for the right button.
- [rightLabel](rightlabel.md): The label for the right button, if the control isn’t a composite direction pad.
- [upContents](upcontents.md): The contents for the up button.
- [upLabel](uplabel.md): The label for the up button, if the control isn’t a composite direction pad.
