> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/setvalueintent](https://developer.apple.com/documentation/appintents/setvalueintent)

# SetValueIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An intent that contains a value which can be set.

## Declaration

```swift
protocol SetValueIntent<ValueType> : AppIntent
```

<a id="overview"></a>

## Overview

```swift
struct ToggleSilentMode: SetValueIntent {
   static var title = LocalizedStringResource("Silent Mode")

   @Parameter(title: "Silent")
   var value: Bool
}
```

## Topics

### Associated Types

- [ValueType](setvalueintent/valuetype.md)

### Instance Properties

- [value](setvalueintent/value.md)

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Common actions

- [OpenIntent](openintent.md): An app intent that opens and displays a specific item in your app’s interface.
- [OpenURLIntent](openurlintent.md): An app intent that opens one of your universal links and displays its contents.
- [DeleteIntent](deleteintent.md): Delete the associated entity(s).
- [DeprecatedAppIntent](deprecatedappintent.md): An app intent that marks an action as deprecated and informs people which action to use instead.
