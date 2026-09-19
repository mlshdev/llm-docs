> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/invoiceshortcutcenter/shared

# shared (Swift)

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The shared shortcut center.

## Declaration

```swift
class var shared: INVoiceShortcutCenter { get }
```

<a id="Discussion"></a>

## Discussion

To get an instance of [INVoiceShortcutCenter](../invoiceshortcutcenter.md), always use the [shared](shared.md) class property. Creating an instance of the shortcut center isn’t allowed.

# sharedCenter (Objective-C)

**Framework:** Intents  
**Kind:** Type Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

The shared shortcut center.

## Declaration

```objectivec
@property (class, strong, readonly) INVoiceShortcutCenter * sharedCenter;
```

<a id="Discussion"></a>

## Discussion

To get an instance of [INVoiceShortcutCenter](../invoiceshortcutcenter.md), always use the [sharedCenter](shared.md) class property. Creating an instance of the shortcut center isn’t allowed.
