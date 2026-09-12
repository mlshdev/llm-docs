> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiscreen/availablemodes](https://developer.apple.com/documentation/uikit/uiscreen/availablemodes)

# availableModes (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+

The display modes that can be associated with the screen.

## Declaration

```swift
var availableModes: [UIScreenMode] { get }
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="Discussion"></a>

## Discussion

The array contains one or more [UIScreenMode](../uiscreenmode.md) objects, each of which represents a display mode supported by the screen.

## See Also

### Managing screen modes

- [currentMode](currentmode.md): The current screen mode associated with the screen.
- [preferredMode](preferredmode.md): The preferred display mode for the screen.

# availableModes (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+

The display modes that can be associated with the screen.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSArray<UIScreenMode *> * availableModes;
```

## Mentioned In

- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)

<a id="Discussion"></a>

## Discussion

The array contains one or more [UIScreenMode](../uiscreenmode.md) objects, each of which represents a display mode supported by the screen.

## See Also

### Managing screen modes

- [currentMode](currentmode.md): The current screen mode associated with the screen.
- [preferredMode](preferredmode.md): The preferred display mode for the screen.
