> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/touchcontroller/tcthumbstick/backgroundcontents

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

### Inspecting a thumbstick

- [hidesWhenNotPressed](hideswhennotpressed.md): A Boolean value that indicates whether to hide the thumbstick when it is not being pressed.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [stickContents](stickcontents.md): The contents for the thumbstick itself.
- [stickSize](sticksize.md): The size (width, height) of the thumbstick stick itself in points.

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

### Inspecting a thumbstick

- [hidesWhenNotPressed](hideswhennotpressed.md): A Boolean value that indicates whether to hide the thumbstick when it is not being pressed.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [stickContents](stickcontents.md): The contents for the thumbstick itself.
- [stickSize](sticksize.md): The size (width, height) of the thumbstick stick itself in points.
