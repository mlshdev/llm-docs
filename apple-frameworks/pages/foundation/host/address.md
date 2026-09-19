> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/host/address

# address (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.2)

Returns one of the network addresses of the receiver.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```swift
var address: String? { get }
```

<a id="return-value"></a>

## Return Value

One of the network address for the receiver. For example, `"192.42.172.1"` or `"fe80::1"`.

## See Also

### Getting Host Information

- [addresses](addresses.md): Deprecated. Returns all the network addresses of the receiver.
- [name](name.md): Deprecated. Returns one of the hostnames of the receiver.
- [localizedName](localizedname.md): Deprecated. Returns the name used as by default when publishing `NSNetServices`.
- [names](names.md): Deprecated. Returns all the hostnames of the receiver.

# address (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.2)

Returns one of the network addresses of the receiver.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * address;
```

<a id="return-value"></a>

## Return Value

One of the network address for the receiver. For example, `"192.42.172.1"` or `"fe80::1"`.

## See Also

### Getting Host Information

- [addresses](addresses.md): Deprecated. Returns all the network addresses of the receiver.
- [name](name.md): Deprecated. Returns one of the hostnames of the receiver.
- [localizedName](localizedname.md): Deprecated. Returns the name used as by default when publishing `NSNetServices`.
- [names](names.md): Deprecated. Returns all the hostnames of the receiver.
