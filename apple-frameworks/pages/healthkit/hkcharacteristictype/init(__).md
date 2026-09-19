> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/healthkit/hkcharacteristictype/init(_:)

# init(\_:)

**Framework:** HealthKit  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS · watchOS 8.0+

Creates a characteristic type using the provided identifier.

## Declaration

```swift
convenience init(_ identifier: HKCharacteristicTypeIdentifier)
```

## Parameters

- `identifier`: An identifier that specifies the type of characteristic data. For a complete list of characteristic type identifiers, see [HKCharacteristicTypeIdentifier](../hkcharacteristictypeidentifier.md).
