> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/customappintenterrorconvertible](https://developer.apple.com/documentation/appintents/customappintenterrorconvertible)

# CustomAppIntentErrorConvertible

**Framework:** App Intents  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that the system automatically converts to an app intent error.

## Declaration

```swift
protocol CustomAppIntentErrorConvertible
```

<a id="overview"></a>

## Overview

Conform your custom type to this protocol when you need full control over the [AppIntentError](appintenterror.md) that the system produces — including the error kind and localized description. When you throw a conforming error from a method such as [perform()](appintent/perform%28%29.md) or [entities(for:)](entityquery/entities%28for_%29.md), the framework reads the [appIntentError](customappintenterrorconvertible/appintenterror.md) property and uses it directly.

If an error conforms to both [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md) and [CustomAppIntentErrorConvertible](customappintenterrorconvertible.md), the system uses only [CustomAppIntentErrorConvertible](customappintenterrorconvertible.md).

## Topics

### Instance Properties

- [appIntentError](customappintenterrorconvertible/appintenterror.md)

## See Also

### Errors

- [AppIntentError](appintenterror.md): An error that indicates a problem occurred while performing an app intent.
