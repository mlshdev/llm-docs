> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/uuid/random(using:)

# random(using:)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · tvOS 26.4+ · visionOS 26.4+ · watchOS 26.4+

Generates a new random UUID.

## Declaration

```swift
static func random(using generator: inout some RandomNumberGenerator) -> UUID
```

## Parameters

- `generator`: The random number generator to use when creating the new random value.

<a id="return-value"></a>

## Return Value

A random UUID.
