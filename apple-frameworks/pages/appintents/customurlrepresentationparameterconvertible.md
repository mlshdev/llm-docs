> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/customurlrepresentationparameterconvertible](https://developer.apple.com/documentation/appintents/customurlrepresentationparameterconvertible)

# CustomURLRepresentationParameterConvertible

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An interface that allows a type to express its contents in a URL representation.

## Declaration

```swift
protocol CustomURLRepresentationParameterConvertible
```

<a id="overview"></a>

## Overview

Apply this protocol to the custom types you use to build the URL for an app intent or app entity. When you construct a URL representation, you can incorporate the properties of your app intent or app entity type into the URL you produce. The [EntityURLRepresentation](entityurlrepresentation.md), [IntentURLRepresentation](intenturlrepresentation.md), and [EnumURLRepresentation](enumurlrepresentation.md) types automatically convert properties with [String](https://developer.apple.com/documentation/swift/string), [Int](https://developer.apple.com/documentation/swift/int), or [URL](../foundation/url.md) values to the required string data for the representation. For other types, adopt this protocol and use the [urlRepresentationParameter](customurlrepresentationparameterconvertible/urlrepresentationparameter.md) property to deliver a string that represents your type’s content.

## Topics

### Instance Properties

- [urlRepresentationParameter](customurlrepresentationparameterconvertible/urlrepresentationparameter.md): The string representation of the type’s content.

## Relationships

### Inherited By

- [URLRepresentableEntity](urlrepresentableentity.md)
- [URLRepresentableEnum](urlrepresentableenum.md)

## See Also

### Universal link navigation

- [URLRepresentableEntity](urlrepresentableentity.md): An interface you apply to an app entity type so the system can handle it like a universal link.
- [EntityURLRepresentation](entityurlrepresentation.md): The type that provides the URL for an app entity.
