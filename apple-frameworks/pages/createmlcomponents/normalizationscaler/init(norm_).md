> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/createmlcomponents/normalizationscaler/init(norm:)

# init(norm:)

**Framework:** Create ML Components  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 11.0+

Creates a normalization scaler.

## Declaration

```swift
init(norm: NormalizationScaler<Element>.NormalizationStrategy = .l2)
```

## Parameters

- `norm`: A selected NormalizationStrategy to scale by. Defaults as `l2`.

## See Also

### Creating a scaler

- [NormalizationScaler.NormalizationStrategy](normalizationstrategy.md): A normalization strategy.
