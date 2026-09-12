> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrelevantshortcut](https://developer.apple.com/documentation/intents/inrelevantshortcut)

# INRelevantShortcut (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

An object that defines a shortcut and its relevance to the user.

## Declaration

```swift
class INRelevantShortcut
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

## Topics

### Creating a Relevant Shortcut

- [init(shortcut:)](inrelevantshortcut/init%28shortcut_%29.md): Creates a relevant shortcut with the specified shortcut.

### Accessing Relevant Shortcut Information

- [shortcut](inrelevantshortcut/shortcut.md): A reference to the shortcut used to create the relevant shortcut.
- [shortcutRole](inrelevantshortcut/shortcutrole.md): The role of the relevant shortcut.
- [INRelevantShortcutRole](inrelevantshortcutrole.md): Roles for a relevant shortcut.

### Managing Relevance Providers

- [relevanceProviders](inrelevantshortcut/relevanceproviders.md): Additional relevance information attached to the shortcut.

### Managing the Siri Watch Face

- [watchTemplate](inrelevantshortcut/watchtemplate.md): The template that the Siri watch face uses to display the relevant shortcut.

### Managing Widget Information

- [widgetKind](inrelevantshortcut/widgetkind.md): An identifier that associates the shortcut with the widget it influences.

### Initializers

- [init(coder:)](inrelevantshortcut/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Siri watch face

- [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md): Deprecated. Display and customize watch-specific shortcut information with a default card template.
- [INDefaultCardTemplate](indefaultcardtemplate.md): A card template for customizing the Siri watch face for a shortcut.
- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md): Deprecated. Inform Siri when your app’s shortcuts may be useful to the user.
- [INRelevantShortcutStore](inrelevantshortcutstore.md): An object that saves relevant shortcuts.

# INRelevantShortcut (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

An object that defines a shortcut and its relevance to the user.

## Declaration

```objectivec
@interface INRelevantShortcut : NSObject
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

## Topics

### Creating a Relevant Shortcut

- [initWithShortcut:](inrelevantshortcut/init%28shortcut_%29.md): Creates a relevant shortcut with the specified shortcut.

### Accessing Relevant Shortcut Information

- [shortcut](inrelevantshortcut/shortcut.md): A reference to the shortcut used to create the relevant shortcut.
- [shortcutRole](inrelevantshortcut/shortcutrole.md): The role of the relevant shortcut.
- [INRelevantShortcutRole](inrelevantshortcutrole.md): Roles for a relevant shortcut.

### Managing Relevance Providers

- [relevanceProviders](inrelevantshortcut/relevanceproviders.md): Additional relevance information attached to the shortcut.

### Managing the Siri Watch Face

- [watchTemplate](inrelevantshortcut/watchtemplate.md): The template that the Siri watch face uses to display the relevant shortcut.

### Managing Widget Information

- [widgetKind](inrelevantshortcut/widgetkind.md): An identifier that associates the shortcut with the widget it influences.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Siri watch face

- [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md): Deprecated. Display and customize watch-specific shortcut information with a default card template.
- [INDefaultCardTemplate](indefaultcardtemplate.md): A card template for customizing the Siri watch face for a shortcut.
- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md): Deprecated. Inform Siri when your app’s shortcuts may be useful to the user.
- [INRelevantShortcutStore](inrelevantshortcutstore.md): An object that saves relevant shortcuts.
