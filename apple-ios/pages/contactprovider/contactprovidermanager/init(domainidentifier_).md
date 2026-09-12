> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactprovidermanager/init(domainidentifier:)](https://developer.apple.com/documentation/contactprovider/contactprovidermanager/init(domainidentifier:))

# init(domainIdentifier:)

**Framework:** ContactProvider  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Creates a provider manager.

## Declaration

```swift
init(domainIdentifier: String = DefaultContactProviderDomain.identifier) throws
```

## Parameters

- `domainIdentifier`: A string to identify a domain of contacts to provide. Defaults to [identifier](../defaultcontactproviderdomain/identifier.md).

<a id="discussion"></a>

## Discussion

If needed, the manager registers the [DefaultContactProviderDomain](../defaultcontactproviderdomain.md) for the extension.

> **Throws**

> [ContactProviderError.extensionNotFound](../contactprovidererror/extensionnotfound.md) if discovering the extension fails.

> **Throws**

> [ContactProviderError.featureNotAvailable](../contactprovidererror/featurenotavailable.md) when running on an unsupported platform.
