> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentmodes/foregroundmode](https://developer.apple.com/documentation/appintents/intentmodes/foregroundmode)

# IntentModes.ForegroundMode

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A type that defines the available foreground behaviors for an app intent.

## Declaration

```swift
struct ForegroundMode
```

<a id="overview"></a>

## Overview

Use this type to specify the foreground behaviors you want to apply to your app intent. Each option specifies when and how the system brings your app to the foreground to perform the app intent’s action.

## Topics

### Type Properties

- [deferred](foregroundmode/deferred.md): An option to bring the app to the foreground while running the intent’s action or shortly before the action completes.
- [dynamic](foregroundmode/dynamic.md): An option to bring the app to the foreground if conditions permit it.
- [immediate](foregroundmode/immediate.md): An option to bring the app to the foreground immediately after the system resolves the intent’s parameters.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
