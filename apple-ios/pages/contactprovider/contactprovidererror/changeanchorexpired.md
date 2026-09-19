> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactprovidererror/changeanchorexpired

# ContactProviderError.changeAnchorExpired

**Framework:** ContactProvider  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The change anchor expired and is no longer valid.

## Declaration

```swift
case changeAnchorExpired
```

<a id="discussion"></a>

## Discussion

When this error occurs, the system discards locally cached data and restarts a content enumeration.

## See Also

### Expiration errors

- [ContactProviderError.pageExpired](pageexpired.md): The page expired and is no longer valid.
