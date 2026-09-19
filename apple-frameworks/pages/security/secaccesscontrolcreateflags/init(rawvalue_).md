> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/secaccesscontrolcreateflags/init(rawvalue:)

# init(rawValue:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Initialize an access control creation flags object.

## Declaration

```swift
init(rawValue: CFOptionFlags)
```

## Parameters

- `rawValue`: The logical `OR` of one or more of the defined access flags values.
