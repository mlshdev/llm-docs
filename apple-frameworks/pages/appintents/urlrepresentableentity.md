> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/urlrepresentableentity](https://developer.apple.com/documentation/appintents/urlrepresentableentity)

# URLRepresentableEntity

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An interface you apply to an app entity type so the system can handle it like a universal link.

## Declaration

```swift
protocol URLRepresentableEntity : AppEntity, CustomURLRepresentationParameterConvertible
```

## Mentioned In

- [Configuring the runtime behavior of your app intents](configuring-the-runtime-behavior-of-your-app-intents.md)

<a id="overview"></a>

## Overview

If your app already supports universal links for content, use this protocol to express your app entity types as URLs. When your app entity supports this protocol, the system can use the provided URL to refer to the item. For example, when an [OpenIntent](openintent.md) type contains the entity, the system can open the item by sending the entity’s URL to your app’s URL handling code. Having a URL representation for your app entity also makes it easier to share the contents of that entity with Siri, Shortcuts, and other system features.

> **Important**

> This protocol requires your app to support universal links. You can’t use this protocol with a custom URL scheme or other approaches. For information about how to add support for universal links, see [Allowing apps and websites to link to your content](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content).

Construct URLs using static text and the content of properties in your app entity. For information on how to create the URL representation, see [EntityURLRepresentation](entityurlrepresentation.md).

## Topics

### Type Aliases

- [URLRepresentableEntity.URLRepresentation](urlrepresentableentity/urlrepresentation-swift.typealias.md): The type that provides the URL for the app entity.

### Type Properties

- [urlRepresentation](urlrepresentableentity/urlrepresentation-swift.type.property.md): The URL representation of the app entity.

## Relationships

### Inherits From

- [AppEntity](appentity.md)
- [AppValue](appvalue.md)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md)
- [DisplayRepresentable](displayrepresentable.md)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [InstanceDisplayRepresentable](instancedisplayrepresentable.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TypeDisplayRepresentable](typedisplayrepresentable.md)

## See Also

### Universal link navigation

- [EntityURLRepresentation](entityurlrepresentation.md): The type that provides the URL for an app entity.
- [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md): An interface that allows a type to express its contents in a URL representation.
