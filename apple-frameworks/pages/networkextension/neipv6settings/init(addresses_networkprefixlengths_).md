> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv6settings/init(addresses:networkprefixlengths:)](https://developer.apple.com/documentation/networkextension/neipv6settings/init(addresses:networkprefixlengths:))

# init(addresses:networkPrefixLengths:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initializes the IPv6 settings object.

## Declaration

```swift
init(addresses: [String], networkPrefixLengths: [NSNumber])
```

## Parameters

- `addresses`: An array of IPv6 address strings. These IPv6 addresses will be assigned to the tunnel’s TUN interface.
- `networkPrefixLengths`: An array of IPv6 network prefix lengths. Each prefix length in this array is combined with the IP address in the corresponding index in `addresses` to specify an IPv6 network that the TUN interface is (virtually) connected to. Each prefix length must be set to an integer between 0 and 128.

<a id="return-value"></a>

## Return Value

The initialized `NEIPv6Settings` object.

# initWithAddresses:networkPrefixLengths: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initializes the IPv6 settings object.

## Declaration

```objectivec
- (instancetype) initWithAddresses:(NSArray<NSString *> *) addresses networkPrefixLengths:(NSArray<NSNumber *> *) networkPrefixLengths;
```

## Parameters

- `addresses`: An array of IPv6 address strings. These IPv6 addresses will be assigned to the tunnel’s TUN interface.
- `networkPrefixLengths`: An array of IPv6 network prefix lengths. Each prefix length in this array is combined with the IP address in the corresponding index in `addresses` to specify an IPv6 network that the TUN interface is (virtually) connected to. Each prefix length must be set to an integer between 0 and 128.

<a id="return-value"></a>

## Return Value

The initialized `NEIPv6Settings` object.
