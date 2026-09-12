> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/checkdomainscanbestoredonvolume(at:)](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/checkdomainscanbestoredonvolume(at:))

# checkDomainsCanBeStoredOnVolume(at:)

**Framework:** File Provider  
**Kind:** Type Method  
**Availability:** macOS 15.0+

Checks whether the specified URL is eligible for storing a domain.

## Declaration

```swift
class func checkDomainsCanBeStoredOnVolume(at url: URL) throws -> NSFileProviderManager.EligibilityResult
```

## See Also

### Working with external volumes

- [stateDirectoryURL()](statedirectoryurl%28%29.md): Returns a URL for a directory for storing state information for the domain.
- [NSFileProviderManager.EligibilityResult](eligibilityresult.md): Constants that specify whether a URL is eligible for storing a domain.
- [NSFileProviderExternalVolumeHandling](../nsfileproviderexternalvolumehandling.md): A protocol that defines the interface for handling external volumes.
