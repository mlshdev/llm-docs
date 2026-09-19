> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretelephony/cterror/init(domain:error:)

# init(domain:error:)

**Framework:** Core Telephony  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ · macOS 10.10+

Creates a Core Telephony error instance with the given values.

## Declaration

```swift
init(domain: Int32, error: Int32)
```

## Parameters

- `domain`: The domain of the error. See Error Domains for possible values of this parameter.
- `error`: The code of the error.
