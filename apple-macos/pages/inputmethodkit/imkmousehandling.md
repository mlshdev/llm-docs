> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/inputmethodkit/imkmousehandling](https://developer.apple.com/documentation/inputmethodkit/imkmousehandling)

# IMKMouseHandling (Swift)

**Framework:** InputMethodKit  
**Kind:** Protocol  
**Availability:** macOS 10.5+

The `IMKMouseHandling` protocol defines methods that your input method can implement to handle mouse events.

## Declaration

```swift
protocol IMKMouseHandling
```

## Topics

### Handling Mouse Events

- [mouseDown(onCharacterIndex:coordinate:withModifier:continueTracking:client:)](imkmousehandling/mousedown%28oncharacterindex_coordinate_withmodifier_continuetracking_client_%29.md): Handles mouse-down event send to an input method.
- [mouseUp(onCharacterIndex:coordinate:withModifier:client:)](imkmousehandling/mouseup%28oncharacterindex_coordinate_withmodifier_client_%29.md): Handles a mouse-up event sent to an input method.
- [mouseMoved(onCharacterIndex:coordinate:withModifier:client:)](imkmousehandling/mousemoved%28oncharacterindex_coordinate_withmodifier_client_%29.md): Handles a mouse-moved event sent to an input method.

## Relationships

### Conforming Types

- [IMKInputController](imkinputcontroller.md)

## See Also

### Protocols

- [IMKServerInput](imkserverinput.md): `IMKServerInput` is an informal protocol that defines methods for receiving text events. This is intentionally not a formal protocol because there are three ways to receive events. An input method chooses one of the following approaches and implements the appropriate methods:
- [IMKStateSetting](imkstatesetting.md): The `IMKStateSetting` protocol defines methods for setting or accessing values that indicate the state of an input method.

# IMKMouseHandling (Objective-C)

**Framework:** InputMethodKit  
**Kind:** Protocol  
**Availability:** macOS 10.5+

The `IMKMouseHandling` protocol defines methods that your input method can implement to handle mouse events.

## Declaration

```objectivec
@protocol IMKMouseHandling
```

## Topics

### Handling Mouse Events

- [mouseDownOnCharacterIndex:coordinate:withModifier:continueTracking:client:](imkmousehandling/mousedown%28oncharacterindex_coordinate_withmodifier_continuetracking_client_%29.md): Handles mouse-down event send to an input method.
- [mouseUpOnCharacterIndex:coordinate:withModifier:client:](imkmousehandling/mouseup%28oncharacterindex_coordinate_withmodifier_client_%29.md): Handles a mouse-up event sent to an input method.
- [mouseMovedOnCharacterIndex:coordinate:withModifier:client:](imkmousehandling/mousemoved%28oncharacterindex_coordinate_withmodifier_client_%29.md): Handles a mouse-moved event sent to an input method.

## Relationships

### Conforming Types

- [IMKInputController](imkinputcontroller.md)

## See Also

### Protocols

- [IMKServerInput](imkserverinput.md): `IMKServerInput` is an informal protocol that defines methods for receiving text events. This is intentionally not a formal protocol because there are three ways to receive events. An input method chooses one of the following approaches and implements the appropriate methods:
- [IMKStateSetting](imkstatesetting.md): The `IMKStateSetting` protocol defines methods for setting or accessing values that indicate the state of an input method.
