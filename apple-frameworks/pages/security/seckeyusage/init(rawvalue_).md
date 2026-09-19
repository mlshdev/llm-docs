> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/seckeyusage/init(rawvalue:)

# init(rawValue:)

**Framework:** Security  
**Kind:** Initializer  
**Availability:** macOS 10.0+

Initializes a key usage structure.

## Declaration

```swift
init(rawValue: UInt32)
```

## Parameters

- `rawValue`: The initial value for the structure composed as the bitwise `OR` of zero or more of the defined flags.
