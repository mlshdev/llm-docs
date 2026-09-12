> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovidermanager/statedirectoryurl()](https://developer.apple.com/documentation/fileprovider/nsfileprovidermanager/statedirectoryurl())

# stateDirectoryURL() (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Returns a URL for a directory for storing state information for the domain.

## Declaration

```swift
func stateDirectoryURL() throws -> URL
```

## See Also

### Working with external volumes

- [checkDomainsCanBeStoredOnVolume(at:)](checkdomainscanbestoredonvolume%28at_%29.md): Checks whether the specified URL is eligible for storing a domain.
- [NSFileProviderManager.EligibilityResult](eligibilityresult.md): Constants that specify whether a URL is eligible for storing a domain.
- [NSFileProviderExternalVolumeHandling](../nsfileproviderexternalvolumehandling.md): A protocol that defines the interface for handling external volumes.

# stateDirectoryURLWithError: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 15.0+

Returns a URL for a directory for storing state information for the domain.

## Declaration

```objectivec
- (NSURL *) stateDirectoryURLWithError:(NSError **) error;
```

## See Also

### Working with external volumes

- [checkDomainsCanBeStored:onVolumeAtURL:unsupportedReason:error:](checkdomainscanbestored_onvolumeaturl_unsupportedreason_error_.md): Check if a URL is eligible for storing a domain.
- [NSFileProviderExternalVolumeHandling](../nsfileproviderexternalvolumehandling.md): A protocol that defines the interface for handling external volumes.
