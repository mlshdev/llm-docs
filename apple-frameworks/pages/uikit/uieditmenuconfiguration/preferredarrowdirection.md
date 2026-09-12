> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuconfiguration/preferredarrowdirection](https://developer.apple.com/documentation/uikit/uieditmenuconfiguration/preferredarrowdirection)

# preferredArrowDirection (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The preferred direction the arrow of the edit menu is pointing.

## Declaration

```swift
var preferredArrowDirection: UIEditMenuArrowDirection { get set }
```

<a id="Discussion"></a>

## Discussion

The default, [UIEditMenuArrowDirection.automatic](../uieditmenuarrowdirection/automatic.md), is an arrow pointing up or down at the object of focus, based on its location in the screen.

## See Also

### Configuring the menu

- [UIEditMenuArrowDirection](../uieditmenuarrowdirection.md): Constants that describe the direction the arrow of the edit menu is pointing.
- [sourcePoint](sourcepoint.md): The source location of the interaction.

# preferredArrowDirection (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The preferred direction the arrow of the edit menu is pointing.

## Declaration

```objectivec
@property (nonatomic, assign) UIEditMenuArrowDirection preferredArrowDirection;
```

<a id="Discussion"></a>

## Discussion

The default, [UIEditMenuArrowDirectionAutomatic](../uieditmenuarrowdirection/automatic.md), is an arrow pointing up or down at the object of focus, based on its location in the screen.

## See Also

### Configuring the menu

- [UIEditMenuArrowDirection](../uieditmenuarrowdirection.md): Constants that describe the direction the arrow of the edit menu is pointing.
- [sourcePoint](sourcepoint.md): The source location of the interaction.
