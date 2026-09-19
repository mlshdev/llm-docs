> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coretelephony/ctcellularplancapability/init(rawvalue:)

# init(rawValue:)

**Framework:** Core Telephony  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 10.10+

Creates a new instance with the specified raw value.

## Declaration

```swift
init?(rawValue: Int)
```

## Parameters

- `rawValue`: The raw value to use for the new instance.

## See Also

### Defining cellular data plans

- [CTCellularPlanCapability.dataAndVoice](dataandvoice.md): The cellular plan is available for data and voice.
- [CTCellularPlanCapability.dataOnly](dataonly.md): The cellular plan is available for data only.
