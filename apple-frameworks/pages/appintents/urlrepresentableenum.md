> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/urlrepresentableenum](https://developer.apple.com/documentation/appintents/urlrepresentableenum)

# URLRepresentableEnum

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An interface you apply to an app enum type so the system can handle it like a universal link.

## Declaration

```swift
protocol URLRepresentableEnum : AppEnum, CustomURLRepresentationParameterConvertible
```

<a id="overview"></a>

## Overview

If your app already supports universal links for content, use this protocol to express your app enum types as URLs. When your app enum supports this protocol, the system can use the provided URL to refer to the item. Having a URL representation for your app entity also makes it easier to share the contents of that entity with Siri, Shortcuts, and other system features.

> **Important**

> This protocol requires your app to support universal links. You can’t use this protocol with a custom URL scheme or other approaches. For information about how to add support for universal links, see [Allowing apps and websites to link to your content](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content).

Construct URLs using static text and the value of your app enum. For more information on how to create the URL representation, see [EnumURLRepresentation](enumurlrepresentation.md).

## Topics

### Type Aliases

- [URLRepresentableEnum.URLRepresentation](urlrepresentableenum/urlrepresentation-swift.typealias.md): The type that provides the URL for the app enum.

### Type Properties

- [urlRepresentation](urlrepresentableenum/urlrepresentation-swift.type.property.md): The URL representation of the app enum.

## Relationships

### Inherits From

- [AppEnum](appenum.md)
- [AppValue](appvalue.md)
- [CaseDisplayRepresentable](casedisplayrepresentable.md)
- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [StaticDisplayRepresentable](staticdisplayrepresentable.md)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

## See Also

### Universal link navigation

- [EnumURLRepresentation](enumurlrepresentation.md): The type that provides the URL for an app enum.
- [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md): An interface that allows a type to express its contents in a URL representation.
