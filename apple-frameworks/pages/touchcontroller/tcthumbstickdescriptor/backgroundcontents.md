> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/touchcontroller/tcthumbstickdescriptor/backgroundcontents

# backgroundContents (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The contents for the background of the thumbstick.

## Declaration

```swift
var backgroundContents: TCControlContents? { get set }
```

<a id="discussion"></a>

## Discussion

May be `nil`.

## See Also

### Inspecting the descriptor

- [hidesWhenNotPressed](hideswhennotpressed.md): Whether to hide the thumbstick when it is not being pressed.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](label.md): The label associated with the thumbstick.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [size](size.md): The size (width, height) of the thumbstick in points.
- [stickContents](stickcontents.md): The contents for the thumbstick itself.
- [stickSize](sticksize.md): The size (width, height) of the thumbstick stick itself in points.
- [zIndex](zindex.md): The z-index of the thumbstick. A lower z-index is drawn first.

# backgroundContents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The contents for the background of the thumbstick.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlContents * backgroundContents;
```

<a id="discussion"></a>

## Discussion

May be `nil`.

## See Also

### Inspecting the descriptor

- [hidesWhenNotPressed](hideswhennotpressed.md): Whether to hide the thumbstick when it is not being pressed.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [label](label.md): The label associated with the thumbstick.
- [offset](offset.md): The control’s offset from the anchor, which determines its position.
- [size](size.md): The size (width, height) of the thumbstick in points.
- [stickContents](stickcontents.md): The contents for the thumbstick itself.
- [stickSize](sticksize.md): The size (width, height) of the thumbstick stick itself in points.
- [zIndex](zindex.md): The z-index of the thumbstick. A lower z-index is drawn first.
