> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactprovidererror/enumerationtimeout

# ContactProviderError.enumerationTimeout

**Framework:** ContactProvider  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The extension enumeration timed out.

## Declaration

```swift
case enumerationTimeout
```

<a id="discussion"></a>

## Discussion

This can occur if the [ContactItemEnumerator](../contactitemenumerator.md) takes too long to enumerate a batch of content or changes.

## See Also

### Enumeration errors

- [ContactProviderError.cannotEnumerate](cannotenumerate.md): The extension is unable to enumerate.
