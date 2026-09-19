> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/contactprovider/contactprovidermanager/isenabled

# isEnabled

**Framework:** ContactProvider  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+

A Boolean value that indicates whether the person using the app enabled the extension domain.

## Declaration

```swift
var isEnabled: Bool { get }
```

## See Also

### Managing the domain

- [domain](domain.md): The domain that this instance manages.
- [enable()](enable%28%29.md): Requests the person using the app to enable the extension domain.
- [reset()](reset%28%29.md): Resets the extension domain.
- [disable()](disable%28%29.md): Disables the extension domain.
