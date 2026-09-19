> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inrelevantshortcut/init(shortcut:)

# init(shortcut:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Creates a relevant shortcut with the specified shortcut.

## Declaration

```swift
init(shortcut: INShortcut)
```

## Parameters

- `shortcut`: A shortcut that defines the action as either an intent or user activity.

<a id="return-value"></a>

## Return Value

A newly initialized relevant shortcut object.

# initWithShortcut: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 5.0+

Creates a relevant shortcut with the specified shortcut.

## Declaration

```objectivec
- (instancetype) initWithShortcut:(INShortcut *) shortcut;
```

## Parameters

- `shortcut`: A shortcut that defines the action as either an intent or user activity.

<a id="return-value"></a>

## Return Value

A newly initialized relevant shortcut object.
