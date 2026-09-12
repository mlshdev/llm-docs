> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/touchcontroller/tcthumbstick/stickcontents](https://developer.apple.com/documentation/touchcontroller/tcthumbstick/stickcontents)

# stickContents (Swift)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+

The contents for the thumbstick itself.

## Declaration

```swift
var stickContents: TCControlContents? { get set }
```

<a id="discussion"></a>

## Discussion

May be `nil`.

## See Also

### Inspecting a thumbstick

- [backgroundContents](backgroundcontents.md): The contents for the background of the thumbstick.
- [hidesWhenNotPressed](hideswhennotpressed.md): A Boolean value that indicates whether to hide the thumbstick when it is not being pressed.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [stickSize](sticksize.md): The size (width, height) of the thumbstick stick itself in points.

# stickContents (Objective-C)

**Framework:** Touch Controller  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+

The contents for the thumbstick itself.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) TCControlContents * stickContents;
```

<a id="discussion"></a>

## Discussion

May be `nil`.

## See Also

### Inspecting a thumbstick

- [backgroundContents](backgroundcontents.md): The contents for the background of the thumbstick.
- [hidesWhenNotPressed](hideswhennotpressed.md): A Boolean value that indicates whether to hide the thumbstick when it is not being pressed.
- [highlightDuration](highlightduration.md): The time it takes for a highlight to fade away, in seconds.
- [stickSize](sticksize.md): The size (width, height) of the thumbstick stick itself in points.
