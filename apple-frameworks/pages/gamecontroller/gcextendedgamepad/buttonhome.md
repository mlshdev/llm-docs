> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamecontroller/gcextendedgamepad/buttonhome](https://developer.apple.com/documentation/gamecontroller/gcextendedgamepad/buttonhome)

# buttonHome (Swift)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The main menu button element that players use to enter the secondary menu and pause the game.

## Declaration

```swift
var buttonHome: GCControllerButtonInput? { get }
```

<a id="Discussion"></a>

## Discussion

If the system doesn’t process the main menu events, it passes the events to your app.

## See Also

### Getting face button inputs

- [buttonMenu](buttonmenu.md): The primary menu button element that players use to enter the main menu and pause the game.
- [buttonOptions](buttonoptions.md): The controller’s secondary menu button element.
- [buttonA](buttona.md): The bottom face button that uses *A* or another indicator as its label.
- [buttonB](buttonb.md): The right face button that uses *B* or another indicator as its label.
- [buttonX](buttonx.md): The left face button that uses *X* or another indicator as its label.
- [buttonY](buttony.md): The top face button that uses *Y* or another indicator as its label.

# buttonHome (Objective-C)

**Framework:** Game Controller  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The main menu button element that players use to enter the secondary menu and pause the game.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) GCControllerButtonInput * buttonHome;
```

<a id="Discussion"></a>

## Discussion

If the system doesn’t process the main menu events, it passes the events to your app.

## See Also

### Getting face button inputs

- [buttonMenu](buttonmenu.md): The primary menu button element that players use to enter the main menu and pause the game.
- [buttonOptions](buttonoptions.md): The controller’s secondary menu button element.
- [buttonA](buttona.md): The bottom face button that uses *A* or another indicator as its label.
- [buttonB](buttonb.md): The right face button that uses *B* or another indicator as its label.
- [buttonX](buttonx.md): The left face button that uses *X* or another indicator as its label.
- [buttonY](buttony.md): The top face button that uses *Y* or another indicator as its label.
