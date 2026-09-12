> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiindirectscribbleinteraction-1nfjm](https://developer.apple.com/documentation/uikit/uiindirectscribbleinteraction-1nfjm)

# UIIndirectScribbleInteraction

**Framework:** UIKit  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS

An interaction for using Scribble to enter text by writing on a view that isn’t formally a text input.

## Declaration

```swift
@MainActor @preconcurrency class UIIndirectScribbleInteraction<Delegate> where Delegate : UIIndirectScribbleInteractionDelegate
```

## Topics

### Creating an indirect Scribble interaction

- [init(delegate:)](uiindirectscribbleinteraction-1nfjm/init%28delegate_%29.md): Creates an indirect Scribble interaction item with the specified delegate.

### Managing indirect Scribble interactions

- [delegate](uiindirectscribbleinteraction-1nfjm/delegate.md): The delegate for the interaction, to supply and customize writable elements in the interaction’s view.

### Detecting writing

- [isHandlingWriting](uiindirectscribbleinteraction-1nfjm/ishandlingwriting.md): A Boolean value that indicates whether the user is actively writing.

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
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [UIInteraction](uiinteraction.md)

## See Also

### Custom views

- [UIIndirectScribbleInteractionDelegate](uiindirectscribbleinteractiondelegate-hdh.md): Methods that customize behavior on views that aren’t formally text input views.
- [ElementIdentifier](uiindirectscribbleinteractiondelegate-hdh/elementidentifier.md): A unique identifier for a control that isn’t a text field in a Scribble interaction.
