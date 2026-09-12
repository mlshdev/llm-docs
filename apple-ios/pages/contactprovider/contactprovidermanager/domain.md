> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactprovidermanager/domain](https://developer.apple.com/documentation/contactprovider/contactprovidermanager/domain)

# domain

**Framework:** ContactProvider  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

The domain that this instance manages.

## Declaration

```swift
var domain: any ContactProviderDomain { get }
```

<a id="discussion"></a>

## Discussion

This value defaults to [DefaultContactProviderDomain](../defaultcontactproviderdomain.md).

## See Also

### Managing the domain

- [enable()](enable%28%29.md): Requests the person using the app to enable the extension domain.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the person using the app enabled the extension domain.
- [reset()](reset%28%29.md): Resets the extension domain.
- [disable()](disable%28%29.md): Disables the extension domain.
