> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/indefaultcardtemplate](https://developer.apple.com/documentation/intents/indefaultcardtemplate)

# INDefaultCardTemplate (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

A card template for customizing the Siri watch face for a shortcut.

## Declaration

```swift
class INDefaultCardTemplate
```

## Mentioned In

- [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)

<a id="overview"></a>

## Overview

The Siri watch face displays a relevant shortcut using information from the [INIntent](inintent.md) or [NSUserActivity](../foundation/nsuseractivity.md) provided when creating the shortcut. If you want to provide watch specific information—for example, to display a shorter title—provide the relevant shortcut a default card template by setting the [watchTemplate](inrelevantshortcut/watchtemplate.md) property. The template allows your app to set the [title](indefaultcardtemplate/title.md), [subtitle](indefaultcardtemplate/subtitle.md), and [image](indefaultcardtemplate/image.md). For more information, see [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md).

![A screenshot of the Siri watch face showing a custom default card template with callouts for image, title, and subtitle.](https://developer.apple.com/images/com.apple.sirikit/media-3030289@2x.png)

## Topics

### Creating a Default Card Template

- [init(title:)](indefaultcardtemplate/init%28title_%29.md): Creates a default card template with the specified title.

### Managing Template Information

- [title](indefaultcardtemplate/title.md): The title displayed in the Siri watch face card.
- [subtitle](indefaultcardtemplate/subtitle.md): The subtitle displayed in the Siri watch face card.
- [image](indefaultcardtemplate/image.md): The image displayed in the Siri watch face card.

### Initializers

- [init(coder:)](indefaultcardtemplate/init%28coder_%29.md)

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
- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md): Deprecated. Inform Siri when your app’s shortcuts may be useful to the user.
- [INRelevantShortcut](inrelevantshortcut.md): An object that defines a shortcut and its relevance to the user.
- [INRelevantShortcutStore](inrelevantshortcutstore.md): An object that saves relevant shortcuts.

# INDefaultCardTemplate (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

A card template for customizing the Siri watch face for a shortcut.

## Declaration

```objectivec
@interface INDefaultCardTemplate : NSObject
```

## Mentioned In

- [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)

<a id="overview"></a>

## Overview

The Siri watch face displays a relevant shortcut using information from the [INIntent](inintent.md) or [NSUserActivity](../foundation/nsuseractivity.md) provided when creating the shortcut. If you want to provide watch specific information—for example, to display a shorter title—provide the relevant shortcut a default card template by setting the [watchTemplate](inrelevantshortcut/watchtemplate.md) property. The template allows your app to set the [title](indefaultcardtemplate/title.md), [subtitle](indefaultcardtemplate/subtitle.md), and [image](indefaultcardtemplate/image.md). For more information, see [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md).

![A screenshot of the Siri watch face showing a custom default card template with callouts for image, title, and subtitle.](https://developer.apple.com/images/com.apple.sirikit/media-3030289@2x.png)

## Topics

### Creating a Default Card Template

- [initWithTitle:](indefaultcardtemplate/init%28title_%29.md): Creates a default card template with the specified title.

### Managing Template Information

- [title](indefaultcardtemplate/title.md): The title displayed in the Siri watch face card.
- [subtitle](indefaultcardtemplate/subtitle.md): The subtitle displayed in the Siri watch face card.
- [image](indefaultcardtemplate/image.md): The image displayed in the Siri watch face card.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Siri watch face

- [Displaying Shortcut Information in a Siri Watch Face Card](../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md): Deprecated. Display and customize watch-specific shortcut information with a default card template.
- [Defining Relevant Shortcuts for the Siri Watch Face](../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md): Deprecated. Inform Siri when your app’s shortcuts may be useful to the user.
- [INRelevantShortcut](inrelevantshortcut.md): An object that defines a shortcut and its relevance to the user.
- [INRelevantShortcutStore](inrelevantshortcutstore.md): An object that saves relevant shortcuts.
