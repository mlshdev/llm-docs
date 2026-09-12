> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrelevantshortcutstore/default](https://developer.apple.com/documentation/intents/inrelevantshortcutstore/default)

# default (Swift)

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The default relevant shortcut store.

## Declaration

```swift
class var `default`: INRelevantShortcutStore { get }
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

<a id="Discussion"></a>

## Discussion

Always use [default](default.md) to get a reference to the Relevant Shortcut Store instead of creating an instance of [INRelevantShortcutStore](../inrelevantshortcutstore.md).

# defaultStore (Objective-C)

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

The default relevant shortcut store.

## Declaration

```objectivec
@property (class, strong, readonly) INRelevantShortcutStore * defaultStore;
```

## Mentioned In

- [Defining Relevant Shortcuts for the Siri Watch Face](../../sirikit/defining-relevant-shortcuts-for-the-siri-watch-face.md)

<a id="Discussion"></a>

## Discussion

Always use [defaultStore](default.md) to get a reference to the Relevant Shortcut Store instead of creating an instance of [INRelevantShortcutStore](../inrelevantshortcutstore.md).
