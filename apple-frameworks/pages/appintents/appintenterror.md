> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintenterror](https://developer.apple.com/documentation/appintents/appintenterror)

# AppIntentError

**Framework:** App Intents  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

An error that indicates a problem occurred while performing an app intent.

## Declaration

```swift
struct AppIntentError
```

<a id="Overview"></a>

## Overview

When your app intent encounters an error during execution, throw an `AppIntentError` to communicate structured failure information to the system. Apple Intelligence, Siri, and Shortcuts use this information to determine the appropriate response — such as prompting a person, retrying the operation, or reporting the failure.

You can create an `AppIntentError` in several ways:

- **Predefined errors**: Use values from [AppIntentError.PermissionRequired](appintenterror/permissionrequired.md), [AppIntentError.UserActionRequired](appintenterror/useractionrequired.md), or [AppIntentError.Unrecoverable](appintenterror/unrecoverable.md) for common failure scenarios that the system already knows how to handle.
- **Wrapping a custom error**: If your error type conforms to [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md), pass it to `init(wrapping:)` to provide a localized description.
- **Description string**: Create an error with a localized description directly from a [LocalizedStringResource](../foundation/localizedstringresource.md) and pass it to [init(description:)](appintenterror/init%28description_%29.md).

The recommended approach for most apps is to define an error enumeration that conforms to ``CustomLocalizedStringResourceConvertible` and throw it from your intent's ``AppIntent/perform()\`\` method. The framework automatically wraps conforming errors into an `AppIntentError` with the localized description you provide.

## Topics

### Getting the error codes

- [restartPerform](appintenterror/restartperform.md)

### Initializers

- [init(description:)](appintenterror/init%28description_%29.md): Creates an error with a localized description.
- [init(predefinedError:description:)](appintenterror/init%28predefinederror_description_%29.md): Creates an error from a predefined error with a custom localized description.
- [init(wrapping:)](appintenterror/init%28wrapping_%29-2lmed.md): Creates an error from a custom app intent convertible value.
- [init(wrapping:)](appintenterror/init%28wrapping_%29-4967l.md): Creates an error by wrapping an existing localized error.

### Enumerations

- [AppIntentError.PermissionRequired](appintenterror/permissionrequired.md): Errors that indicate the app doesn’t have the required permission to perform an action.
- [AppIntentError.Unrecoverable](appintenterror/unrecoverable.md): Unknown or unrecoverable errors that might have occurred due to either a system or user error.
- [AppIntentError.UserActionRequired](appintenterror/useractionrequired.md): Errors that represent a state where a person needs to respond to successfully complete the action.

### Default Implementations

- [CustomLocalizedStringResourceConvertible Implementations](appintenterror/customlocalizedstringresourceconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomLocalizedStringResourceConvertible](../foundation/customlocalizedstringresourceconvertible.md)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Errors

- [CustomAppIntentErrorConvertible](customappintenterrorconvertible.md): A type that the system automatically converts to an app intent error.
