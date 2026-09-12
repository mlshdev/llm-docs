> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/netunnelproviderprotocol/providerbundleidentifier](https://developer.apple.com/documentation/networkextension/netunnelproviderprotocol/providerbundleidentifier)

# providerBundleIdentifier (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A string identifying the specific Tunnel Provider extension that should be used with this configuration.

## Declaration

```swift
var providerBundleIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

A single app may contain multiple Tunnel Provider extensions. This property is used to specify which Tunnel Provider extension should be used with this configuration.

## See Also

### Accessing the tunnel configuration

- [providerConfiguration](providerconfiguration.md): A dictionary containing keys and values defined by the Tunnel Provider developer.

# providerBundleIdentifier (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

A string identifying the specific Tunnel Provider extension that should be used with this configuration.

## Declaration

```objectivec
@property (copy, nullable) NSString * providerBundleIdentifier;
```

<a id="Discussion"></a>

## Discussion

A single app may contain multiple Tunnel Provider extensions. This property is used to specify which Tunnel Provider extension should be used with this configuration.

## See Also

### Accessing the tunnel configuration

- [providerConfiguration](providerconfiguration.md): A dictionary containing keys and values defined by the Tunnel Provider developer.
