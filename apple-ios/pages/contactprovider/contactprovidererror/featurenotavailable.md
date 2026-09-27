> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactprovidererror/featurenotavailable

# ContactProviderError.featureNotAvailable

**Framework:** ContactProvider  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The extension can’t run because the feature isn’t available.

## Declaration

```swift
case featureNotAvailable
```

<a id="discussion"></a>

## Discussion

This can occur if the feature is unavailable on the current platform.

## See Also

### Availability errors

- [ContactProviderError.deniedByUser](deniedbyuser.md): The person using the app denied the action.
