> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/intentvaluepropertiescallable](https://developer.apple.com/documentation/appintentstesting/intentvaluepropertiescallable)

# IntentValuePropertiesCallable

**Framework:** App Intents Testing  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A callable wrapper that creates app intent instances from keyword arguments.

## Declaration

```swift
@dynamicCallable struct IntentValuePropertiesCallable<T>
```

<a id="overview"></a>

## Overview

The `IntentValuePropertiesCallable` wrapper uses the `@dynamicCallable` attribute to provide a natural function-call syntax for setting properties on type-erased app intents instances. Don’t create instances of this type directly. Instead, use [makeIntent](appintentdefinition/makeintent.md) or [makeEntity](transientappentitydefinition/makeentity.md).

## Topics

### Instance Methods

- [dynamicallyCall(withKeywordArguments:)](intentvaluepropertiescallable/dynamicallycall%28withkeywordarguments_%29.md): Returns an instance of `T` by applying the provided argument values to the properties.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Supporting types

- [AppIntentTypeDefinition](appintenttypedefinition.md): A protocol that associates a definition type with its corresponding instance type.
- [DynamicPropertyPath](dynamicpropertypath.md): A type-safe, dynamic path to access nested intent values.
- [DynamicPropertyPathCollection](dynamicpropertypathcollection.md): Indexed result items from an intent value query.
