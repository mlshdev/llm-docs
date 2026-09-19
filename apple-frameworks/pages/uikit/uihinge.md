> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uihinge

# UIHinge (Swift)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

An object encapsulating the state of a single hinge.

## Declaration

```swift
@MainActor class UIHinge
```

<a id="overview"></a>

## Overview

You observe hinge state by adding a `UIHingeInteraction` to a view and reading it from the update delivered to its handler.

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

### Getting the hinge state

- [angle](uihinge/angle.md): Beta. The current angle of the hinge, in radians.
- [status](uihinge/status-swift.property.md): Beta. The current status of the hinge
- [UIHinge.Status](uihinge/status-swift.enum.md): Beta. The status of an individual hinge

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Device environment

- [UIDevice](uidevice.md): A representation of the current device.
- [UIStatusBarManager](uistatusbarmanager.md): An object that describes the configuration of the status bar.
- [UIHingeInteraction](uihingeinteraction.md): Beta. An interaction for observing the hinge state associated with the view’s hierarchy.

# UIHinge (Objective-C)

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 27.1+ beta · iPadOS 27.1+ beta

An object encapsulating the state of a single hinge.

## Declaration

```objectivec
@interface UIHinge : NSObject
```

<a id="overview"></a>

## Overview

You observe hinge state by adding a `UIHingeInteraction` to a view and reading it from the update delivered to its handler.

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

### Getting the hinge state

- [angle](uihinge/angle.md): Beta. The current angle of the hinge, in radians.
- [status](uihinge/status-swift.property.md): Beta. The current status of the hinge
- [UIHingeStatus](uihinge/status-swift.enum.md): Beta. The status of an individual hinge

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Device environment

- [UIDevice](uidevice.md): A representation of the current device.
- [UIStatusBarManager](uistatusbarmanager.md): An object that describes the configuration of the status bar.
- [UIHingeInteraction](uihingeinteraction.md): Beta. An interaction for observing the hinge state associated with the view’s hierarchy.
