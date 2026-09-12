> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcdirectionpad/isdigital](https://developer.apple.com/documentation/touchcontroller/tcdirectionpad/isdigital)

# isDigital (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the control behaves as a digital button.

## Declaration

```swift
var isDigital: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If `YES`, dpad buttons will report 1 or 0. Ignored if radial is set, as button presses will always be digital.

## See Also

### Inspecting the direction pad

- [compositeLabel](compositelabel.md): A composite control label.
- [downContents](downcontents.md): The contents for the down button.
- [downLabel](downlabel.md): The label for the down button, if the control isn’t a composite direction pad.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [inputIsMutuallyExclusive](inputismutuallyexclusive.md): A Boolean value that indicates whether the control has mutally exclusive input.
- [isRadial](isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](leftcontents.md): The contents for the left button.
- [leftLabel](leftlabel.md): The label for the left button, if the control isn’t a composite direction pad.
- [rightContents](rightcontents.md): The contents for the right button.
- [rightLabel](rightlabel.md): The label for the right button, if the control isn’t a composite direction pad.
- [upContents](upcontents.md): The contents for the up button.
- [upLabel](uplabel.md): The label for the up button, if the control isn’t a composite direction pad.

# digital (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that indicates whether the control behaves as a digital button.

## Declaration

```objectivec
@property (nonatomic, assign, getter=isDigital) BOOL digital;
```

<a id="discussion"></a>

## Discussion

If `YES`, dpad buttons will report 1 or 0. Ignored if radial is set, as button presses will always be digital.

## See Also

### Inspecting the direction pad

- [compositeLabel](compositelabel.md): A composite control label.
- [downContents](downcontents.md): The contents for the down button.
- [downLabel](downlabel.md): The label for the down button, if the control isn’t a composite direction pad.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [mutuallyExclusiveInput](inputismutuallyexclusive.md): A Boolean value that indicates whether the control has mutally exclusive input.
- [radial](isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](leftcontents.md): The contents for the left button.
- [leftLabel](leftlabel.md): The label for the left button, if the control isn’t a composite direction pad.
- [rightContents](rightcontents.md): The contents for the right button.
- [rightLabel](rightlabel.md): The label for the right button, if the control isn’t a composite direction pad.
- [upContents](upcontents.md): The contents for the up button.
- [upLabel](uplabel.md): The label for the up button, if the control isn’t a composite direction pad.
