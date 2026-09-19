> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactprovidererror/extensioninvalidated

# ContactProviderError.extensionInvalidated

**Framework:** ContactProvider  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The app invalidated the extension while it was enumerating content or changes.

## Declaration

```swift
case extensionInvalidated
```

<a id="discussion"></a>

## Discussion

A loaded and enumerating extension can become invalidated for many reasons, including:

- The app invalidates the extension by calling [invalidate()](../contactprovidermanager/invalidate%28%29.md).
- The app disables the domain by calling [disable()](../contactprovidermanager/disable%28%29.md).
- The app resets the domain by calling [reset()](../contactprovidermanager/reset%28%29.md).
- The person using the app disables the domain in the Settings app.

## See Also

### Invalidation errors

- [ContactProviderError.extensionInvalidateTimeout](extensioninvalidatetimeout.md): The extension invalidate operation timed out.
