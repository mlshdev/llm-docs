> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/appintenttypedefinition/isinstance(_:)](https://developer.apple.com/documentation/appintentstesting/appintenttypedefinition/isinstance(_:))

# isInstance(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Validates that the provided value matches this definition’s type.

## Declaration

```swift
func isInstance(_ value: Self.Instance) throws
```

## Parameters

- `value`: The value to validate.

<a id="discussion"></a>

## Discussion

If validation fails, this method throws an error.
