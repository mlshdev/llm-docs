> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactprovidermanager/disable()](https://developer.apple.com/documentation/contactprovider/contactprovidermanager/disable())

# disable()

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Disables the extension domain.

## Declaration

```swift
func disable() async throws
```

<a id="discussion"></a>

## Discussion

Disabling the extension deletes all previously-provided contacts for the domain.

## See Also

### Managing the domain

- [domain](domain.md): The domain that this instance manages.
- [enable()](enable%28%29.md): Requests the person using the app to enable the extension domain.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the person using the app enabled the extension domain.
- [reset()](reset%28%29.md): Resets the extension domain.
