> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/systemshortcut](https://developer.apple.com/documentation/appintents/systemshortcut)

# SystemShortcut

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

An opaque reference to a user-configured action for use in a widget button.

## Declaration

```swift
struct SystemShortcut
```

## Mentioned In

- [Adding parameters to an app intent](adding-parameters-to-an-app-intent.md)
- [Defining app entities for your custom data types](defining-app-entities-for-your-custom-data-types.md)

<a id="overview"></a>

## Overview

The system creates `SystemShortcut` instances to represent a person’s choice when they configure the action for a button in a widget. It can represent a custom shortcut, App Shortcut, system action, or an installed app. `SystemShortcut` only exposes metadata that the system needs to fill the configuration UI, for example, the action’s display representation. It doesn’t provide the app or widget with a custom shortcut’s actions, parameters, or implementation details.

## Topics

### Resolving the type

- [defaultResolverSpecification](systemshortcut/defaultresolverspecification.md)
- [SystemShortcut.Specification](systemshortcut/specification.md)
- [SystemShortcut.ValueType](systemshortcut/valuetype.md)
- [SystemShortcut.UnwrappedType](systemshortcut/unwrappedtype.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [DisplayRepresentable](displayrepresentable.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md)
- [IntentValueConvertible](intentvalueconvertible.md)
- [IntentValueExpressing](intentvalueexpressing.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

## See Also

### Creating the intent

- [init(shortcut:)](runsystemshortcutintent/init%28shortcut_%29.md): Creates an intent that performs a person’s configured action.
