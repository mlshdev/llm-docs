> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrelevantshortcut/watchtemplate](https://developer.apple.com/documentation/intents/inrelevantshortcut/watchtemplate)

# watchTemplate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The template that the Siri watch face uses to display the relevant shortcut.

## Declaration

```swift
@NSCopying var watchTemplate: INDefaultCardTemplate? { get set }
```

## Mentioned In

- [Displaying Shortcut Information in a Siri Watch Face Card](../../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)

<a id="Discussion"></a>

## Discussion

Provide a template when you want to customize the appearance of the relevant shortcut card displayed on the Siri watch face.

The listing below sets the watch template for a relevant shortcut in the Soup Chef sample app.

```swift
let suggestedShortcut = INRelevantShortcut(shortcut: shortcut)

let localizedTitle = NSString.deferredLocalizedIntentsString(with: "ORDER_LUNCH_TITLE") as String
let template = INDefaultCardTemplate(title: localizedTitle)
// Need a different string for the subtitle because of capitalization difference.
template.subtitle = NSString.deferredLocalizedIntentsString(with: menuItem.shortcutNameKey + "_SUBTITLE") as String
template.image = INImage(named: menuItem.iconImageName)

suggestedShortcut.watchTemplate = template
```

# watchTemplate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The template that the Siri watch face uses to display the relevant shortcut.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INDefaultCardTemplate * watchTemplate;
```

```objectivec
@property (atomic, copy, nullable) INDefaultCardTemplate * watchTemplate;
```

## Mentioned In

- [Displaying Shortcut Information in a Siri Watch Face Card](../../sirikit/displaying-shortcut-information-in-a-siri-watch-face-card.md)

<a id="Discussion"></a>

## Discussion

Provide a template when you want to customize the appearance of the relevant shortcut card displayed on the Siri watch face.

The listing below sets the watch template for a relevant shortcut in the Soup Chef sample app.

```swift
let suggestedShortcut = INRelevantShortcut(shortcut: shortcut)

let localizedTitle = NSString.deferredLocalizedIntentsString(with: "ORDER_LUNCH_TITLE") as String
let template = INDefaultCardTemplate(title: localizedTitle)
// Need a different string for the subtitle because of capitalization difference.
template.subtitle = NSString.deferredLocalizedIntentsString(with: menuItem.shortcutNameKey + "_SUBTITLE") as String
template.image = INImage(named: menuItem.iconImageName)

suggestedShortcut.watchTemplate = template
```
