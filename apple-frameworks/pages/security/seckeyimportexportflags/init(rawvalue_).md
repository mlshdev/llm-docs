> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeyimportexportflags/init(rawvalue:)

# init(rawValue:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Initialize a key import/export flag structure.

## Declaration

```swift
init(rawValue: UInt32)
```

## Parameters

- `rawValue`: An initial value for the structure composed as the bitwise `OR` of zero or more of the valid values.
