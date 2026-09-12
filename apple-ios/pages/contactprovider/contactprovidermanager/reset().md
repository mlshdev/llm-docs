> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/contactprovider/contactprovidermanager/reset()](https://developer.apple.com/documentation/contactprovider/contactprovidermanager/reset())

# reset()

**Framework:** ContactProvider  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+

Resets the extension domain.

## Declaration

```swift
func reset() async throws
```

<a id="discussion"></a>

## Discussion

You typically call this when you need to delete all previously-provided contacts for the domain. The next invocation of the app extension restarts content enumeration for the domain.

## See Also

### Managing the domain

- [domain](domain.md): The domain that this instance manages.
- [enable()](enable%28%29.md): Requests the person using the app to enable the extension domain.
- [isEnabled](isenabled.md): A Boolean value that indicates whether the person using the app enabled the extension domain.
- [disable()](disable%28%29.md): Disables the extension domain.
