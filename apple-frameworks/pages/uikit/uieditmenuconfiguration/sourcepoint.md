> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uieditmenuconfiguration/sourcepoint](https://developer.apple.com/documentation/uikit/uieditmenuconfiguration/sourcepoint)

# sourcePoint (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The source location of the interaction.

## Declaration

```swift
var sourcePoint: CGPoint { get }
```

<a id="Discussion"></a>

## Discussion

The system derives the suggested actions list from this point in the interaction’s view. By default, the menu also presents from this location. You can change the presentation source of the menu by implementing the delegate method [editMenuInteraction(\_:targetRectFor:)](../uieditmenuinteractiondelegate/editmenuinteraction%28__targetrectfor_%29.md).

## See Also

### Configuring the menu

- [preferredArrowDirection](preferredarrowdirection.md): The preferred direction the arrow of the edit menu is pointing.
- [UIEditMenuArrowDirection](../uieditmenuarrowdirection.md): Constants that describe the direction the arrow of the edit menu is pointing.

# sourcePoint (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

The source location of the interaction.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) CGPoint sourcePoint;
```

<a id="Discussion"></a>

## Discussion

The system derives the suggested actions list from this point in the interaction’s view. By default, the menu also presents from this location. You can change the presentation source of the menu by implementing the delegate method [editMenuInteraction:targetRectForConfiguration:](../uieditmenuinteractiondelegate/editmenuinteraction%28__targetrectfor_%29.md).

## See Also

### Configuring the menu

- [preferredArrowDirection](preferredarrowdirection.md): The preferred direction the arrow of the edit menu is pointing.
- [UIEditMenuArrowDirection](../uieditmenuarrowdirection.md): Constants that describe the direction the arrow of the edit menu is pointing.
