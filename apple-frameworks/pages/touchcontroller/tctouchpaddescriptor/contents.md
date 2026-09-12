> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchpaddescriptor/contents](https://developer.apple.com/documentation/touchcontroller/tctouchpaddescriptor/contents)

# contents (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The contents for the touchpad.

## Declaration

```swift
var contents: TCControlContents? { get set }
```

<a id="discussion"></a>

## Discussion

May be `nil`.

## See Also

### Inspecting the descriptor

- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](label.md): The label associated with the touchpad.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [reportsRelativeValues](reportsrelativevalues.md): A Boolean value that represents the touchpad reports deltas.
- [size](size.md): The size (width, height) of the touchpad in points.
- [zIndex](zindex.md): The z-index of the touchpad. A lower z-index is drawn first.

# contents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The contents for the touchpad.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlContents * contents;
```

<a id="discussion"></a>

## Discussion

May be `nil`.

## See Also

### Inspecting the descriptor

- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](label.md): The label associated with the touchpad.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [reportsRelativeValues](reportsrelativevalues.md): A Boolean value that represents the touchpad reports deltas.
- [size](size.md): The size (width, height) of the touchpad in points.
- [zIndex](zindex.md): The z-index of the touchpad. A lower z-index is drawn first.
