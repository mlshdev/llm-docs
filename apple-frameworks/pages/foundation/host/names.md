> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/host/names

# names (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.2)

Returns all the hostnames of the receiver.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```swift
var names: [String] { get }
```

<a id="return-value"></a>

## Return Value

All the hostnames of the receiver.

## See Also

### Getting Host Information

- [address](address.md): Deprecated. Returns one of the network addresses of the receiver.
- [addresses](addresses.md): Deprecated. Returns all the network addresses of the receiver.
- [name](name.md): Deprecated. Returns one of the hostnames of the receiver.
- [localizedName](localizedname.md): Deprecated. Returns the name used as by default when publishing `NSNetServices`.

# names (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.0+ (deprecated in 27.2)

Returns all the hostnames of the receiver.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * names;
```

<a id="return-value"></a>

## Return Value

All the hostnames of the receiver.

## See Also

### Getting Host Information

- [address](address.md): Deprecated. Returns one of the network addresses of the receiver.
- [addresses](addresses.md): Deprecated. Returns all the network addresses of the receiver.
- [name](name.md): Deprecated. Returns one of the hostnames of the receiver.
- [localizedName](localizedname.md): Deprecated. Returns the name used as by default when publishing `NSNetServices`.
