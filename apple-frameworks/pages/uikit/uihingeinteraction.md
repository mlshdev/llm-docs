> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uihingeinteraction

# UIHingeInteraction (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

An interaction for observing the hinge state associated with the view’s hierarchy.

## Declaration

```swift
@MainActor class UIHingeInteraction
```

<a id="overview"></a>

## Overview

Add a `UIHingeInteraction` to a view to receive hinge state updates. The interaction’s handler is called when the hinge state changes, or when the interaction moves between hierarchies. When the interaction moves out of a hierarchy that provides hinge updates, the update’s `hinge` is nil.

```
override func viewDidLoad() {
    super.viewDidLoad()

    let interaction = UIHingeInteraction { [weak self] _, update in
        guard let self else { return }
        // A nil `hinge` indicates the interaction has left a
        // hierarchy that provides hinge updates.
        guard let hinge = update.hinge else {
            handleHingeUnavailable()
            return
        }

        updateAngleDisplay(with: hinge.angle)
        updateStatusDisplay(with: hinge.status)
    }

    view.addInteraction(interaction)
}
```

In the example above, the current angle and status of the hinge are displayed as the user interacts with the hinge.

## Topics

### Creating a hinge interaction

- [init(updateHandler:)](uihingeinteraction/init%28updatehandler_%29.md): Beta. Creates a new hinge interaction with the provided update handler.

### Configuring the interaction

- [isEnabled](uihingeinteraction/isenabled.md): Beta. Whether the interaction is enabled.

### Getting hinge updates

- [UIHingeInteraction.Update](uihingeinteraction/update.md): Beta. An update for a `UIHingeInteraction`

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [UIInteraction](uiinteraction.md)

## See Also

### Device environment

- [UIDevice](uidevice.md): A representation of the current device.
- [UIStatusBarManager](uistatusbarmanager.md): An object that describes the configuration of the status bar.
- [UIHinge](uihinge.md): Beta. An object encapsulating the state of a single hinge.

# UIHingeInteraction (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

An interaction for observing the hinge state associated with the view’s hierarchy.

## Declaration

```objectivec
@interface UIHingeInteraction : NSObject
```

<a id="overview"></a>

## Overview

Add a `UIHingeInteraction` to a view to receive hinge state updates. The interaction’s handler is called when the hinge state changes, or when the interaction moves between hierarchies. When the interaction moves out of a hierarchy that provides hinge updates, the update’s `hinge` is nil.

```
override func viewDidLoad() {
    super.viewDidLoad()

    let interaction = UIHingeInteraction { [weak self] _, update in
        guard let self else { return }
        // A nil `hinge` indicates the interaction has left a
        // hierarchy that provides hinge updates.
        guard let hinge = update.hinge else {
            handleHingeUnavailable()
            return
        }

        updateAngleDisplay(with: hinge.angle)
        updateStatusDisplay(with: hinge.status)
    }

    view.addInteraction(interaction)
}
```

In the example above, the current angle and status of the hinge are displayed as the user interacts with the hinge.

## Topics

### Creating a hinge interaction

- [initWithUpdateHandler:](uihingeinteraction/init%28updatehandler_%29.md): Beta. Creates a new hinge interaction with the provided update handler.

### Configuring the interaction

- [enabled](uihingeinteraction/isenabled.md): Beta. Whether the interaction is enabled.

### Getting hinge updates

- [UIHingeInteractionUpdate](uihingeinteraction/update.md): Beta. An update for a `UIHingeInteraction`

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [UIInteraction](uiinteraction.md)

## See Also

### Device environment

- [UIDevice](uidevice.md): A representation of the current device.
- [UIStatusBarManager](uistatusbarmanager.md): An object that describes the configuration of the status bar.
- [UIHinge](uihinge.md): Beta. An object encapsulating the state of a single hinge.
