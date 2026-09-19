> Snapshot-pinned source payload for Apple Xcode and developer tools snapshot-d045c48ba442; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appintentstesting/appenumdefinition/isinstance(_:)

# isInstance(\_:)

**Framework:** App Intents Testing  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Validates that the provided enumeration instance matches the definition’s type.

## Declaration

```swift
func isInstance(_ value: AnyAppEnum) throws
```

## Parameters

- `value`: The enum instance to validate.
