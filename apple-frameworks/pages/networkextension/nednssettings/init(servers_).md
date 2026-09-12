> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nednssettings/init(servers:)](https://developer.apple.com/documentation/networkextension/nednssettings/init(servers:))

# init(servers:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize the `NEDNSSetting` object.

## Declaration

```swift
init(servers: [String])
```

## Parameters

- `servers`: An array of DNS server IP address strings. These IP addresses can be a mixture of IPv4 and IPv6 addresses.

<a id="return-value"></a>

## Return Value

The initialized `NEDNSSettings` object.

# initWithServers: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize the `NEDNSSetting` object.

## Declaration

```objectivec
- (instancetype) initWithServers:(NSArray<NSString *> *) servers;
```

## Parameters

- `servers`: An array of DNS server IP address strings. These IP addresses can be a mixture of IPv4 and IPv6 addresses.

<a id="return-value"></a>

## Return Value

The initialized `NEDNSSettings` object.
