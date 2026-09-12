> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactprovidererror/extensioninvalidatetimeout](https://developer.apple.com/documentation/contactprovider/contactprovidererror/extensioninvalidatetimeout)

# ContactProviderError.extensionInvalidateTimeout

**Framework:** ContactProvider  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The extension invalidate operation timed out.

## Declaration

```swift
case extensionInvalidateTimeout
```

<a id="discussion"></a>

## Discussion

This can occur if the extension takes too long to return from [invalidate()](../contactproviderextension/invalidate%28%29.md).

## See Also

### Invalidation errors

- [ContactProviderError.extensionInvalidated](extensioninvalidated.md): The app invalidated the extension while it was enumerating content or changes.
