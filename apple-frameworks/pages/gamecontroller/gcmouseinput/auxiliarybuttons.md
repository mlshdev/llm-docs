> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcmouseinput/auxiliarybuttons](https://developer.apple.com/documentation/gamecontroller/gcmouseinput/auxiliarybuttons)

# auxiliaryButtons (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The optional additional buttons on the mouse.

## Declaration

```swift
var auxiliaryButtons: [GCControllerButtonInput]? { get }
```

<a id="Discussion"></a>

## Discussion

If the mouse doesn’t have additional buttons, this property is `nil`.

## See Also

### Accessing Buttons

- [leftButton](leftbutton.md): The left button on the mouse.
- [rightButton](rightbutton.md): The optional right button on the mouse.
- [middleButton](middlebutton.md): The optional middle button on the mouse.

# auxiliaryButtons (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The optional additional buttons on the mouse.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSArray<GCControllerButtonInput *> * auxiliaryButtons;
```

<a id="Discussion"></a>

## Discussion

If the mouse doesn’t have additional buttons, this property is `nil`.

## See Also

### Accessing Buttons

- [leftButton](leftbutton.md): The left button on the mouse.
- [rightButton](rightbutton.md): The optional right button on the mouse.
- [middleButton](middlebutton.md): The optional middle button on the mouse.
