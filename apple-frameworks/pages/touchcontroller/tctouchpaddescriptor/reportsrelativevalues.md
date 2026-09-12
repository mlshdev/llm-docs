> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tctouchpaddescriptor/reportsrelativevalues](https://developer.apple.com/documentation/touchcontroller/tctouchpaddescriptor/reportsrelativevalues)

# reportsRelativeValues (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

A Boolean value that represents the touchpad reports deltas.

## Declaration

```swift
var reportsRelativeValues: Bool { get set }
```

<a id="discussion"></a>

## Discussion

If `YES`, the touchpad will report delta values as touch moves instead of absolute positions.

## See Also

### Inspecting the descriptor

- [contents](contents.md): The contents for the touchpad.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](label.md): The label associated with the touchpad.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [size](size.md): The size (width, height) of the touchpad in points.
- [zIndex](zindex.md): The z-index of the touchpad. A lower z-index is drawn first.

# reportsRelativeValues (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

A Boolean value that represents the touchpad reports deltas.

## Declaration

```objectivec
@property (nonatomic, assign) BOOL reportsRelativeValues;
```

<a id="discussion"></a>

## Discussion

If `YES`, the touchpad will report delta values as touch moves instead of absolute positions.

## See Also

### Inspecting the descriptor

- [contents](contents.md): The contents for the touchpad.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](label.md): The label associated with the touchpad.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [size](size.md): The size (width, height) of the touchpad in points.
- [zIndex](zindex.md): The z-index of the touchpad. A lower z-index is drawn first.
