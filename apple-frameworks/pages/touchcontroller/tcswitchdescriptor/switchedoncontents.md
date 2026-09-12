> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcswitchdescriptor/switchedoncontents](https://developer.apple.com/documentation/touchcontroller/tcswitchdescriptor/switchedoncontents)

# switchedOnContents (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The contents for the switch when it is switched on.

## Declaration

```swift
var switchedOnContents: TCControlContents? { get set }
```

<a id="discussion"></a>

## Discussion

This value can be `nil`.

## See Also

### Inspecting the descriptor

- [contents](contents.md): The contents for the switch in its normal state.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](label.md): The label you associate with the switch.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [size](size.md): The size (width, height) of the switch in points.
- [zIndex](zindex.md): The z-index of the switch. A lower z-index is drawn first.

# switchedOnContents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The contents for the switch when it is switched on.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlContents * switchedOnContents;
```

<a id="discussion"></a>

## Discussion

This value can be `nil`.

## See Also

### Inspecting the descriptor

- [contents](contents.md): The contents for the switch in its normal state.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](label.md): The label you associate with the switch.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [size](size.md): The size (width, height) of the switch in points.
- [zIndex](zindex.md): The z-index of the switch. A lower z-index is drawn first.
