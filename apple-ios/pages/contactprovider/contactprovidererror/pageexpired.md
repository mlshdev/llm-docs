> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-d0d1b2f13e0d; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactprovidererror/pageexpired

# ContactProviderError.pageExpired

**Framework:** ContactProvider  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The page expired and is no longer valid.

## Declaration

```swift
case pageExpired
```

<a id="discussion"></a>

## Discussion

When this error occurs, the system discards locally cached data and restarts a content enumeration.

## See Also

### Expiration errors

- [ContactProviderError.changeAnchorExpired](changeanchorexpired.md): The change anchor expired and is no longer valid.
