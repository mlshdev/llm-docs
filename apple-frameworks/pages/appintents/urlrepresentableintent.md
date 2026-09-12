> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/urlrepresentableintent](https://developer.apple.com/documentation/appintents/urlrepresentableintent)

# URLRepresentableIntent

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

An interface you add to an app intent type so the system can handle it like a universal link.

## Declaration

```swift
protocol URLRepresentableIntent : AppIntent
```

## Mentioned In

- [Configuring the runtime behavior of your app intents](configuring-the-runtime-behavior-of-your-app-intents.md)

<a id="overview"></a>

## Overview

If your app already supports universal links for content, use this protocol to express your app intent types as URLs. When your app intent supports this protocol, the system can use the provided URL to process it. For example, if your app intent supports this protocol and the [OpenIntent](openintent.md) protocol, the system opens the contained item by sending the URL to your app’s URL handling code, allowing you to omit the [perform()](appintent/perform%28%29.md) method in your type. Having a URL representation for your app intent also makes it easier to share its contents with Siri, Shortcuts, and other system features.

> **Important**

> This protocol requires your app to support universal links. You can’t use this protocol with a custom URL scheme or other approaches. For information about how to add support for universal links, see [Allowing apps and websites to link to your content](https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content).

Construct URLs using static text and the content of your app intent’s properties. For information on how to create the URL representation, see [IntentURLRepresentation](intenturlrepresentation.md).

## Topics

### Type Aliases

- [URLRepresentableIntent.URLRepresentation](urlrepresentableintent/urlrepresentation-swift.typealias.md): The type that provides the URL for the app intent.

### Type Properties

- [urlRepresentation](urlrepresentableintent/urlrepresentation-4fzwq.md): The URL representation of the app intent.

## Relationships

### Inherits From

- [AppIntent](appintent.md)
- [PersistentlyIdentifiable](persistentlyidentifiable.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [OpenURLIntent](openurlintent.md)

## See Also

### Universal link navigation

- [IntentURLRepresentation](intenturlrepresentation.md): The type that provides the URL for an app intent.
- [CustomURLRepresentationParameterConvertible](customurlrepresentationparameterconvertible.md): An interface that allows a type to express its contents in a URL representation.
