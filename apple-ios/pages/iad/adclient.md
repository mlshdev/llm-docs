> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/iad/adclient](https://developer.apple.com/documentation/iad/adclient)

# ADClient

**Interface language:** Objective-C

**Framework:** iAd  
**Kind:** Class

The parent class you use to request an attribution response.

## Declaration

```objectivec
@interface ADClient : NSObject
```

<a id="overview"></a>

## Overview

To use this class, fetch the shared client object, `shared()`. Then call its `requestAttributionDetails(_:)` method, passing in a block to be called with the result.

## Topics

### Instance Methods

- [requestAttributionDetailsWithBlock:](adclient/requestattributiondetailswithblock_.md): Deprecated.

### Type Methods

- [sharedClient](adclient/sharedclient.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Essentials

- [iAd Changelog](iad-changelog.md): Learn what’s new in the Apple Search Ads iAd Attribution API.
- [Setting Up Apple Search Ads Attribution](setting-up-apple-search-ads-attribution.md): Retrieve the attribution dictionary.
