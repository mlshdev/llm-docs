> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neipv6route/init(destinationaddress:networkprefixlength:)](https://developer.apple.com/documentation/networkextension/neipv6route/init(destinationaddress:networkprefixlength:))

# init(destinationAddress:networkPrefixLength:) (Swift)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize the NEIPv6Route

## Declaration

```swift
init(destinationAddress address: String, networkPrefixLength: NSNumber)
```

## Parameters

- `address`: An IPv6 address string. This string is combined with `networkPrefixLength` to specify the destination network of the route.
- `networkPrefixLength`: An IPv6 network prefix length. This number is combined with `address` to specify the destination network of the route. The network prefix length must be an integer between 0 and 128.

<a id="return-value"></a>

## Return Value

The initialized `NEIPv6Route` object.

## See Also

### Creating an IPv6 Route

- [default()](default%28%29.md): A convenience method for creating the default IPv4 route.

# initWithDestinationAddress:networkPrefixLength: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 17.0+ · visionOS 1.0+

Initialize the NEIPv6Route

## Declaration

```objectivec
- (instancetype) initWithDestinationAddress:(NSString *) address networkPrefixLength:(NSNumber *) networkPrefixLength;
```

## Parameters

- `address`: An IPv6 address string. This string is combined with `networkPrefixLength` to specify the destination network of the route.
- `networkPrefixLength`: An IPv6 network prefix length. This number is combined with `address` to specify the destination network of the route. The network prefix length must be an integer between 0 and 128.

<a id="return-value"></a>

## Return Value

The initialized `NEIPv6Route` object.

## See Also

### Creating an IPv6 Route

- [defaultRoute](default%28%29.md): A convenience method for creating the default IPv4 route.
