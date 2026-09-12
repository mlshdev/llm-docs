> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintenterror/init(wrapping:)-4967l](https://developer.apple.com/documentation/appintents/appintenterror/init(wrapping:)-4967l)

# init(wrapping:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an error by wrapping an existing localized error.

## Declaration

```swift
init(wrapping error: some CustomLocalizedStringResourceConvertible & Error)
```

## Parameters

- `error`: The error to wrap.

<a id="discussion"></a>

## Discussion

Conform your custom `Error` to [CustomLocalizedStringResourceConvertible](../../foundation/customlocalizedstringresourceconvertible.md) to provide a localized description of the error.

The system calls this initializer for errors thrown from [perform()](../appintent/perform%28%29.md) that conform to `CustomLocalizedStringResourceConvertible`.

If the error conforms to both `CustomLocalizedStringResourceConvertible` and [CustomAppIntentErrorConvertible](../customappintenterrorconvertible.md), the system uses only [CustomAppIntentErrorConvertible](../customappintenterrorconvertible.md).
