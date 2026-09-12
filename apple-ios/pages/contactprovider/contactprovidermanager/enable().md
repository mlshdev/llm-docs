> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactprovidermanager/enable()](https://developer.apple.com/documentation/contactprovider/contactprovidermanager/enable())

# enable()

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Requests the person using the app to enable the extension domain.

## Declaration

```swift
func enable() async throws
```

<a id="discussion"></a>

## Discussion

If necessary, this call waits for the person using the app to explicitly approve or deny using the extension domain.

> **Throws**

> `ContactProviderError.deniedByUser` if the person dismisses the prompt without enabling the extension domain.

## See Also

### Managing the domain

- [domain](domain.md): The domain that this instance manages.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the person using the app enabled the extension domain.
- [reset()](reset%28%29.md): Resets the extension domain.
- [disable()](disable%28%29.md): Disables the extension domain.
