> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrelevantshortcut/relevanceproviders](https://developer.apple.com/documentation/intents/inrelevantshortcut/relevanceproviders)

# relevanceProviders (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Additional relevance information attached to the shortcut.

## Declaration

```swift
var relevanceProviders: [INRelevanceProvider] { get set }
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

<a id="Discussion"></a>

## Discussion

To attach relevance information to the shortcut, like a daily routine or location, set this property to an array of [INRelevanceProvider](../inrelevanceprovider.md) objects. The system uses this relevance information to suggest widgets on a Smart Stack, or offer shortcuts on the Siri watch face. If you provide an empty array, the system relies on other relevance cues like user interactions to determine what widget to suggest or shortcut to offer.

# relevanceProviders (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Additional relevance information attached to the shortcut.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<INRelevanceProvider *> * relevanceProviders;
```

```objectivec
@property (atomic, copy) NSArray<INRelevanceProvider *> * relevanceProviders;
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

<a id="Discussion"></a>

## Discussion

To attach relevance information to the shortcut, like a daily routine or location, set this property to an array of [INRelevanceProvider](../inrelevanceprovider.md) objects. The system uses this relevance information to suggest widgets on a Smart Stack, or offer shortcuts on the Siri watch face. If you provide an empty array, the system relies on other relevance cues like user interactions to determine what widget to suggest or shortcut to offer.
