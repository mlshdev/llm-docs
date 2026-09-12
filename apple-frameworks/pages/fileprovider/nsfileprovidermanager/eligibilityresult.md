> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/eligibilityresult](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/eligibilityresult)

# NSFileProviderManager.EligibilityResult

**Framework:** File Provider  
**Kind:** Enumeration  
**Availability:** macOS 15.0+

Constants that specify whether a URL is eligible for storing a domain.

## Declaration

```swift
enum EligibilityResult
```

## Topics

### Determining eligibility

- [NSFileProviderManager.EligibilityResult.eligible](eligibilityresult/eligible.md)
- [NSFileProviderManager.EligibilityResult.ineligible(\_:)](eligibilityresult/ineligible%28__%29.md)
- [NSFileProviderVolumeUnsupportedReason](../nsfileprovidervolumeunsupportedreason.md): Constants that describe why an external volume might not be eligible for storing a domain.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Working with external volumes

- [stateDirectoryURL()](statedirectoryurl%28%29.md): Returns a URL for a directory for storing state information for the domain.
- [checkDomainsCanBeStoredOnVolume(at:)](checkdomainscanbestoredonvolume%28at_%29.md): Checks whether the specified URL is eligible for storing a domain.
- [NSFileProviderExternalVolumeHandling](../nsfileproviderexternalvolumehandling.md): A protocol that defines the interface for handling external volumes.
