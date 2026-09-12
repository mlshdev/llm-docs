> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednsproxyproviderprotocol/providerbundleidentifier](https://developer.apple.com/documentation/networkextension/nednsproxyproviderprotocol/providerbundleidentifier)

# providerBundleIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A string containing the bundle identifier of the proxy provider to be used by this configuration.

## Declaration

```swift
var providerBundleIdentifier: String? { get set }
```

## See Also

### Accessing the DNS proxy configuration

- [providerConfiguration](providerconfiguration.md): A dictionary containing vendor-specific configuration parameters for a proxy provider.

# providerBundleIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+

A string containing the bundle identifier of the proxy provider to be used by this configuration.

## Declaration

```objectivec
@property (copy, nullable) NSString * providerBundleIdentifier;
```

## See Also

### Accessing the DNS proxy configuration

- [providerConfiguration](providerconfiguration.md): A dictionary containing vendor-specific configuration parameters for a proxy provider.
