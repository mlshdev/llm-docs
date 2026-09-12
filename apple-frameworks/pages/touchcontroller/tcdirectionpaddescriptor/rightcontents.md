> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcdirectionpaddescriptor/rightcontents](https://developer.apple.com/documentation/touchcontroller/tcdirectionpaddescriptor/rightcontents)

# rightContents (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The contents for the right button.

## Declaration

```swift
var rightContents: TCControlContents? { get set }
```

<a id="discussion"></a>

## Discussion

May be `nil`.

## See Also

### Inspecting the descriptor

- [compositeLabel](compositelabel.md): A composite control label.
- [downContents](downcontents.md): The contents for the down button.
- [downLabel](downlabel.md): The label for the down button, if the control is not a composite direction pad.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [inputIsMutuallyExclusive](inputismutuallyexclusive.md): A Boolean value that indicates whether the control has mutally exclusive input.
- [isDigital](isdigital.md): A Boolean value that indicates whether the control behaves as a digital button.
- [isRadial](isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](leftcontents.md): The contents for the left button.
- [leftLabel](leftlabel.md): The label for the left button, if the control is not a composite direction pad.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [rightLabel](rightlabel.md): The label for the right button, if the control is not a composite direction pad.
- [size](size.md): The size (width, height) of the direction pad in points.
- [upContents](upcontents.md): The contents for the up button.
- [upLabel](uplabel.md): The label for the up button, if the control isn’t a composite direction pad.
- [zIndex](zindex.md): The z-index of the direction pad. A lower z-index is drawn first.

# rightContents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The contents for the right button.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlContents * rightContents;
```

<a id="discussion"></a>

## Discussion

May be `nil`.

## See Also

### Inspecting the descriptor

- [compositeLabel](compositelabel.md): A composite control label.
- [downContents](downcontents.md): The contents for the down button.
- [downLabel](downlabel.md): The label for the down button, if the control is not a composite direction pad.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [mutuallyExclusiveInput](inputismutuallyexclusive.md): A Boolean value that indicates whether the control has mutally exclusive input.
- [digital](isdigital.md): A Boolean value that indicates whether the control behaves as a digital button.
- [radial](isradial.md): A Boolean value that indicates whether the control behaves as a swipeable radial button.
- [leftContents](leftcontents.md): The contents for the left button.
- [leftLabel](leftlabel.md): The label for the left button, if the control is not a composite direction pad.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [rightLabel](rightlabel.md): The label for the right button, if the control is not a composite direction pad.
- [size](size.md): The size (width, height) of the direction pad in points.
- [upContents](upcontents.md): The contents for the up button.
- [upLabel](uplabel.md): The label for the up button, if the control isn’t a composite direction pad.
- [zIndex](zindex.md): The z-index of the direction pad. A lower z-index is drawn first.
