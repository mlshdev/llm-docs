> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/neipv4settings/init(addresses:subnetmasks:)

# init(addresses:subnetMasks:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initializes an IPv4 settings object.

## Declaration

```swift
init(addresses: [String], subnetMasks: [String])
```

## Parameters

- `addresses`: An array of IPv4 address strings. These IPv4 addresses will be assigned to the tunnel’s TUN interface.
- `subnetMasks`: An array of IPv4 network mask strings. Each mask in this array is combined with the IP address in the corresponding index in `addresses` to specify an IPv4 network that the TUN interface is (virtually) connected to.

<a id="return-value"></a>

## Return Value

The initialized NEIPv4Settings object.

# initWithAddresses:subnetMasks: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initializes an IPv4 settings object.

## Declaration

```objectivec
- (instancetype) initWithAddresses:(NSArray<NSString *> *) addresses subnetMasks:(NSArray<NSString *> *) subnetMasks;
```

## Parameters

- `addresses`: An array of IPv4 address strings. These IPv4 addresses will be assigned to the tunnel’s TUN interface.
- `subnetMasks`: An array of IPv4 network mask strings. Each mask in this array is combined with the IP address in the corresponding index in `addresses` to specify an IPv4 network that the TUN interface is (virtually) connected to.

<a id="return-value"></a>

## Return Value

The initialized NEIPv4Settings object.
