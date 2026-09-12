> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcdirectionpaddescriptor/inputismutuallyexclusive](https://developer.apple.com/documentation/touchcontroller/tcdirectionpaddescriptor/inputismutuallyexclusive)

# inputIsMutuallyExclusive (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that indicates whether the control has mutally exclusive input.

## Declaration

```swift
var inputIsMutuallyExclusive: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If `YES`, only one element of the direction pad can be pressed at a time.

## See Also

### Inspecting the descriptor

- [compositeLabel](compositelabel.md): A composite control label.
- [downContents](downcontents.md): The contents for the down button.
- [downLabel](downlabel.md): The label for the down button, if the control is not a composite direction pad.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [isDigital](isdigital.md): A Boolean value that indicates whether the control behaves as a digital button.
- [isRadial](isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](leftcontents.md): The contents for the left button.
- [leftLabel](leftlabel.md): The label for the left button, if the control is not a composite direction pad.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [rightContents](rightcontents.md): The contents for the right button.
- [rightLabel](rightlabel.md): The label for the right button, if the control is not a composite direction pad.
- [size](size.md): The size (width, height) of the direction pad in points.
- [upContents](upcontents.md): The contents for the up button.
- [upLabel](uplabel.md): The label for the up button, if the control isn’t a composite direction pad.
- [zIndex](zindex.md): The z-index of the direction pad. A lower z-index is drawn first.

# mutuallyExclusiveInput (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that indicates whether the control has mutally exclusive input.

## Declaration

```objectivec
@property (nonatomic, assign, getter=inputIsMutuallyExclusive) BOOL mutuallyExclusiveInput;
```

<a id="discussion"></a>

## Discussion

If `YES`, only one element of the direction pad can be pressed at a time.

## See Also

### Inspecting the descriptor

- [compositeLabel](compositelabel.md): A composite control label.
- [downContents](downcontents.md): The contents for the down button.
- [downLabel](downlabel.md): The label for the down button, if the control is not a composite direction pad.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [digital](isdigital.md): A Boolean value that indicates whether the control behaves as a digital button.
- [radial](isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](leftcontents.md): The contents for the left button.
- [leftLabel](leftlabel.md): The label for the left button, if the control is not a composite direction pad.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [rightContents](rightcontents.md): The contents for the right button.
- [rightLabel](rightlabel.md): The label for the right button, if the control is not a composite direction pad.
- [size](size.md): The size (width, height) of the direction pad in points.
- [upContents](upcontents.md): The contents for the up button.
- [upLabel](uplabel.md): The label for the up button, if the control isn’t a composite direction pad.
- [zIndex](zindex.md): The z-index of the direction pad. A lower z-index is drawn first.
