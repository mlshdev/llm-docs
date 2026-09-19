> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/storekit/producticonphase/success(_:)

# ProductIconPhase.success(\_:)

**Framework:** StoreKit  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The promotional image successfully loaded.

## Declaration

```swift
case success(Image)
```

## See Also

### Getting the promotional image’s load phases

- [ProductIconPhase.loading](loading.md): The promotional image is in the process of loading.
- [ProductIconPhase.unavailable](unavailable.md): The promotional image isn’t available for download.
- [ProductIconPhase.failure(\_:)](failure%28__%29.md): The promotional image failed to load, with an error.
