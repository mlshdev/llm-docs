> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcbuttondescriptor/contents](https://developer.apple.com/documentation/touchcontroller/tcbuttondescriptor/contents)

# contents (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The contents for the button in its normal state.

## Declaration

```swift
var contents: TCControlContents? { get set }
```

<a id="discussion"></a>

## Discussion

This value can be `nil`.

## See Also

### Inspecting the descriptor

- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [zIndex](zindex.md): The z-index of the button. A lower z-index is drawn first.
- [label](label.md): The label you associate with the button.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [size](size.md): The size (width, height) of the button in points.

# contents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The contents for the button in its normal state.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlContents * contents;
```

<a id="discussion"></a>

## Discussion

This value can be `nil`.

## See Also

### Inspecting the descriptor

- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [zIndex](zindex.md): The z-index of the button. A lower z-index is drawn first.
- [label](label.md): The label you associate with the button.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [size](size.md): The size (width, height) of the button in points.
