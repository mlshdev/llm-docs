> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inshortcutreference/intent](https://developer.apple.com/documentation/intents/inshortcutreference/intent)

# intent (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The intent that performs the action when invoking the shortcut.

## Declaration

```swift
@NSCopying var intent: INIntent? { get }
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when you create the shortcut with an [NSUserActivity](../../foundation/nsuseractivity.md) object.

# intent (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 5.0+

The intent that performs the action when invoking the shortcut.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INIntent * intent;
```

```objectivec
@property (atomic, copy, readonly, nullable) INIntent * intent;
```

<a id="Discussion"></a>

## Discussion

This property is `nil` when you create the shortcut with an [NSUserActivity](../../foundation/nsuseractivity.md) object.
