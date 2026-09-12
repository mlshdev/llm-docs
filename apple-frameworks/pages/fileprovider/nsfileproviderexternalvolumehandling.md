> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileproviderexternalvolumehandling](https://developer.apple.com/documentation/fileprovider/nsfileproviderexternalvolumehandling)

# NSFileProviderExternalVolumeHandling (Swift)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol that defines the interface for handling external volumes.

## Declaration

```swift
protocol NSFileProviderExternalVolumeHandling : NSObjectProtocol
```

## Topics

### Connecting to external domains

- [shouldConnectExternalDomain(completionHandler:)](nsfileproviderexternalvolumehandling/shouldconnectexternaldomain%28completionhandler_%29.md): Determines whether to connect to a domain from another device.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Working with external volumes

- [stateDirectoryURL()](nsfileprovidermanager/statedirectoryurl%28%29.md): Returns a URL for a directory for storing state information for the domain.
- [checkDomainsCanBeStoredOnVolume(at:)](nsfileprovidermanager/checkdomainscanbestoredonvolume%28at_%29.md): Checks whether the specified URL is eligible for storing a domain.
- [NSFileProviderManager.EligibilityResult](nsfileprovidermanager/eligibilityresult.md): Constants that specify whether a URL is eligible for storing a domain.

# NSFileProviderExternalVolumeHandling (Objective-C)

**Framework:** File Provider  
**Kind:** Protocol  
**Availability:** macOS 15.0+

A protocol that defines the interface for handling external volumes.

## Declaration

```objectivec
@protocol NSFileProviderExternalVolumeHandling <NSObject>
```

## Topics

### Connecting to external domains

- [shouldConnectExternalDomainWithCompletionHandler:](nsfileproviderexternalvolumehandling/shouldconnectexternaldomain%28completionhandler_%29.md): Determines whether to connect to a domain from another device.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Working with external volumes

- [stateDirectoryURLWithError:](nsfileprovidermanager/statedirectoryurl%28%29.md): Returns a URL for a directory for storing state information for the domain.
- [checkDomainsCanBeStored:onVolumeAtURL:unsupportedReason:error:](nsfileprovidermanager/checkdomainscanbestored_onvolumeaturl_unsupportedreason_error_.md): Check if a URL is eligible for storing a domain.
