> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentmodes/current](https://developer.apple.com/documentation/appintents/intentmodes/current)

# IntentModes.Current

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The current runtime behavior of an app intent.

## Declaration

```swift
struct Current
```

<a id="overview"></a>

## Overview

This type provides information about an app intent’s current runtime behavior. When an intent runs, its [systemContext](../appintent/systemcontext.md) property contains additional contextual information you can use to make decisions. Specifically, the [currentMode](../intentsystemcontext/currentmode.md) property tells you whether the intent is currently running in the foreground or background.

Don’t create instances of this type yourself. Instead, compare the value in the [currentMode](../intentsystemcontext/currentmode.md) property to the static values this type defines. You can also check the [canContinueInForeground](current/cancontinueinforeground.md) property to determine if a background intent can switch to the foreground. The following code shows how to use this type from an app intent’s [perform()](../appintent/perform%28%29.md) method:

```swift
if systemContext.currentMode == .background {
   if systemContext.currentMode.canContinueInForeground {
      try await continueInForeground()
   } else {
      // The current conditions don't allow the app intent to continue in the foreground,
      // so it needs to continue in the background.
   }
}
```

## Topics

### Instance Properties

- [canContinueInForeground](current/cancontinueinforeground.md): A Boolean value that indicates whether running the app intent in the foreground is possible.

### Type Properties

- [background](current/background.md): A value that indicates the app intent is running in the background.
- [foreground](current/foreground.md): A value that indicates the app intent is running in the foreground.

## Relationships

### Conforms To

- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
