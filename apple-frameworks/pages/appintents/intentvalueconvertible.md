> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/intentvalueconvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)

# IntentValueConvertible

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A protocol that allows the system to use types to as app intent parameters or properties.

## Declaration

```swift
protocol IntentValueConvertible : IntentValueExpressing
```

<a id="overview"></a>

## Overview

A type that conforms to `IntentValueConvertible` enables the App Intents framework to convert it to and from intent value containers. This protocol forms the foundation of the App Intents type conversion system, enabling seamless data exchange between your app and the AppIntents framework.

To make a custom type usable in AppIntents, conform it to this protocol by implementing the required [makeContainer(context:)](intentvalueconvertible/makecontainer%28context_%29.md) method.

## Topics

### Instance Methods

- [makeContainer(context:)](intentvalueconvertible/makecontainer%28context_%29.md): Creates an intent value container that represents this value.

## Relationships

### Inherits From

- [IntentValueExpressing](intentvalueexpressing.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [IntentValueConvertibleWrapper](intentvalueconvertiblewrapper.md)

### Conforming Types

- [IntentCurrencyAmount](intentcurrencyamount.md)
- [IntentFile](intentfile.md)
- [IntentPaymentMethod](intentpaymentmethod.md)
- [IntentPerson](intentperson.md)
- [StringSearchCriteria](stringsearchcriteria.md)
- [SystemShortcut](systemshortcut.md)

## See Also

### Type conversions

- [IntentValueConvertibleWrapper](intentvalueconvertiblewrapper.md): A protocol for types that wrap another intent value that supports conversion.
- [IntentValueExpressing](intentvalueexpressing.md): A protocol for types that can create intent value expressions.
