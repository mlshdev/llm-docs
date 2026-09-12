> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/statereporting/statereporter/reporter(for:stablemetadata:volatilemetadata:)](https://developer.apple.com/documentation/statereporting/statereporter/reporter(for:stablemetadata:volatilemetadata:))

# reporter(for:stableMetadata:volatileMetadata:)

**Framework:** StateReporting  
**Kind:** Type Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns the reporter instance unique to the given domain and metadata types.

## Declaration

```swift
static func reporter(for domain: String, stableMetadata stableMetadataType: StableMetadata.Type = Never.self, volatileMetadata volatileMetadataType: VolatileMetadata.Type = Never.self) -> StateReporter<StableMetadata, VolatileMetadata>
```

## Parameters

- `domain`: The reverse DNS-style domain name.
- `stableMetadataType`: The type to use for stable metadata (defaults to `Never`).
- `volatileMetadataType`: The type to use for volatile metadata (defaults to `Never`).

<a id="return-value"></a>

## Return Value

The reporter instance for the specified domain.

## Mentioned In

- [Getting started with StateReporting](../getting-started-with-statereporting.md)

<a id="discussion"></a>

## Discussion

This method is the only way to obtain a `StateReporter`. Calling it multiple times with the same domain string always returns the same object. Calling it with a domain string that was previously registered under different generic type arguments is a fatal error.
