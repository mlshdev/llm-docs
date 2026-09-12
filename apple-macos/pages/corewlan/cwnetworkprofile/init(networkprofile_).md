> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwnetworkprofile/init(networkprofile:)](https://developer.apple.com/documentation/corewlan/cwnetworkprofile/init(networkprofile:))

# init(networkProfile:) (Swift)

**Framework:** Core WLAN  
**Kind:** Initializer  
**Availability:** macOS 10.7+

Creates and returns a CWNetworkProfile object initialized with the given CWNetworkProfile object.

## Declaration

```swift
init(networkProfile: CWNetworkProfile)
```

## Parameters

- `networkProfile`: The CWNetworkProfile object to use to initialize a new CWNetworkProfile object.

<a id="return-value"></a>

## Return Value

A CWNetworkProfile object.

## See Also

### Getting a network profile

- [init()](init%28%29.md): Creates and returns a CWNetworkProfile object.

# initWithNetworkProfile: (Objective-C)

**Framework:** Core WLAN  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Creates and returns a CWNetworkProfile object initialized with the given CWNetworkProfile object.

## Declaration

```objectivec
- (instancetype) initWithNetworkProfile:(CWNetworkProfile *) networkProfile;
```

## Parameters

- `networkProfile`: The CWNetworkProfile object to use to initialize a new CWNetworkProfile object.

<a id="return-value"></a>

## Return Value

A CWNetworkProfile object.

## See Also

### Getting a network profile

- [init](init%28%29.md): Creates and returns a CWNetworkProfile object.
- [networkProfile](networkprofile.md): Convenience method for getting a CWNetworkProfile object.
- [networkProfileWithNetworkProfile:](networkprofilewithnetworkprofile_.md): Convenience method for getting a CWNetworkProfile object initialized with the given CWNetworkProfile object.
