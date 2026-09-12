> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/corewlan/cwnetworkprofile/networkprofilewithnetworkprofile:](https://developer.apple.com/documentation/corewlan/cwnetworkprofile/networkprofilewithnetworkprofile:)

# networkProfileWithNetworkProfile:

**Interface language:** Objective-C

**Framework:** Core WLAN  
**Kind:** Type Method  
**Availability:** macOS 10.7+

Convenience method for getting a CWNetworkProfile object initialized with the given CWNetworkProfile object.

## Declaration

```objectivec
+ (instancetype) networkProfileWithNetworkProfile:(CWNetworkProfile *) networkProfile;
```

## Parameters

- `networkProfile`: The CWNetworkProfile object to use to initialize a new CWNetworkProfile object.

<a id="return-value"></a>

## Return Value

A CWNetworkProfile object.

## See Also

### Getting a network profile

- [init](init%28%29.md): Creates and returns a CWNetworkProfile object.
- [initWithNetworkProfile:](init%28networkprofile_%29.md): Creates and returns a CWNetworkProfile object initialized with the given CWNetworkProfile object.
- [networkProfile](networkprofile.md): Convenience method for getting a CWNetworkProfile object.
