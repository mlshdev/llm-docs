> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/appintents/appintenterror/init(wrapping:)-2lmed](https://developer.apple.com/documentation/appintents/appintenterror/init(wrapping:)-2lmed)

# init(wrapping:)

**Framework:** App Intents  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates an error from a custom app intent convertible value.

## Declaration

```swift
init(wrapping convertible: some CustomAppIntentErrorConvertible)
```

## Parameters

- `convertible`: The object to wrap.

<a id="discussion"></a>

## Discussion

The system calls this initializer for errors thrown from [perform()](../appintent/perform%28%29.md) that conform to [CustomAppIntentErrorConvertible](../customappintenterrorconvertible.md).

If the error conforms to both [CustomLocalizedStringResourceConvertible](../../foundation/customlocalizedstringresourceconvertible.md) and [CustomAppIntentErrorConvertible](../customappintenterrorconvertible.md), the system uses only [CustomAppIntentErrorConvertible](../customappintenterrorconvertible.md).
