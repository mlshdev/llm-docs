> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedappdistribution/managedapp/licenseagreement

# licenseAgreement

**Framework:** ManagedAppDistribution  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ (deprecated in 27.0) · iPadOS 17.4+ (deprecated in 27.0) · Mac Catalyst 26.4+ (deprecated in 27.0) · macOS 26.4+ (deprecated in 27.0) · visionOS 2.4+ (deprecated in 27.0)

The app’s license agreement URL.

> Use licenseAgreementText instead.

## Declaration

```swift
var licenseAgreement: URL? { get }
```

## See Also

### Obtaining privacy and copyright information

- [privacyPolicy](privacypolicy.md): The app’s privacy policy URL.
- [copyright](copyright.md): The app’s copyright information.
