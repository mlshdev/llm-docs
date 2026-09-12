> Snapshot-pinned source for Apple SwiftUI snapshot-5ae2cd850b20: [documentation/swiftui/hoverphase](https://developer.apple.com/documentation/swiftui/hoverphase)

# HoverPhase

**Framework:** SwiftUI  
**Kind:** Enumeration  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The current hovering state and value of the pointer.

## Declaration

```swift
@frozen enum HoverPhase
```

<a id="overview"></a>

## Overview

When you use the [onContinuousHover(coordinateSpace:perform:)](view/oncontinuoushover%28coordinatespace_perform_%29.md) modifier, you can handle the hovering state using the `action` closure. SwiftUI calls the closure with a phase value to indicate the current hovering state. The following example updates `hoverLocation` and `isHovering` based on the phase provided to the closure:

```swift
@State private var hoverLocation: CGPoint = .zero
@State private var isHovering = false

var body: some View {
    VStack {
        Color.red
            .frame(width: 400, height: 400)
            .onContinuousHover { phase in
                switch phase {
                case .active(let location):
                    hoverLocation = location
                    isHovering = true
                case .ended:
                    isHovering = false
                }
            }
            .overlay {
                Rectangle()
                    .frame(width: 50, height: 50)
                    .foregroundColor(isHovering ? .green : .blue)
                    .offset(x: hoverLocation.x, y: hoverLocation.y)
            }
    }
}
```

## Topics

### Getting hover phases

- [HoverPhase.active(\_:)](hoverphase/active%28__%29.md): The pointer’s location moved to the specified point within the view.
- [HoverPhase.ended](hoverphase/ended.md): The pointer exited the view.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Responding to hover events

- [onHover(perform:)](view/onhover%28perform_%29.md): Adds an action to perform when the user moves the pointer over or away from the view’s frame.
- [onContinuousHover(coordinateSpace:perform:)](view/oncontinuoushover%28coordinatespace_perform_%29.md): Adds an action to perform when the pointer enters, moves within, and exits the view’s bounds.
- [hoverEffect(\_:isEnabled:)](view/hovereffect%28__isenabled_%29.md): Applies a hover effect to this view.
- [hoverEffectDisabled(\_:)](view/hovereffectdisabled%28__%29.md): Adds a condition that controls whether this view can display hover effects.
- [defaultHoverEffect(\_:)](view/defaulthovereffect%28__%29.md): Sets the default hover effect to use for views within this view.
- [isHoverEffectEnabled](environmentvalues/ishovereffectenabled.md): A Boolean value that indicates whether the view associated with this environment allows hover effects to be displayed.
- [HoverEffectPhaseOverride](hovereffectphaseoverride.md): Options for overriding a hover effect’s current phase.
- [OrnamentHoverContentEffect](ornamenthovercontenteffect.md): Presents an ornament on hover using a custom effect.
- [OrnamentHoverEffect](ornamenthovereffect.md): Presents an ornament on hover.
