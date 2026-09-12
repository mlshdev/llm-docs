> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelproviderprotocol/providerconfiguration](https://developer.apple.com/documentation/networkextension/netunnelproviderprotocol/providerconfiguration)

# providerConfiguration (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A dictionary containing keys and values defined by the Tunnel Provider developer.

## Declaration

```swift
var providerConfiguration: [String : Any]? { get set }
```

<a id="Discussion"></a>

## Discussion

All of the keys and values in this dictionary must conform to the [NSSecureCoding](../../foundation/nssecurecoding.md) and [NSCopying](../../foundation/nscopying.md) protocols.

## See Also

### Accessing the tunnel configuration

- [providerBundleIdentifier](providerbundleidentifier.md): A string identifying the specific Tunnel Provider extension that should be used with this configuration.

# providerConfiguration (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A dictionary containing keys and values defined by the Tunnel Provider developer.

## Declaration

```objectivec
@property (copy, nullable) NSDictionary<NSString *,id> * providerConfiguration;
```

<a id="Discussion"></a>

## Discussion

All of the keys and values in this dictionary must conform to the [NSSecureCoding](../../foundation/nssecurecoding.md) and [NSCopying](../../foundation/nscopying.md) protocols.

## See Also

### Accessing the tunnel configuration

- [providerBundleIdentifier](providerbundleidentifier.md): A string identifying the specific Tunnel Provider extension that should be used with this configuration.
