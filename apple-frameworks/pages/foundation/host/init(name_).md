> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/host/init(name:)](https://developer.apple.com/documentation/foundation/host/init(name:))

# init(name:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Returns a host with a specific name.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```swift
convenience init(name: String?)
```

## Parameters

- `name`: Name of the host to look up. Can be either a simple hostname, such as `"sales"`, or a fully qualified domain name, such as `"sales.anycorp.com"`.

<a id="return-value"></a>

## Return Value

The host named `hostname`.

## See Also

### Creating Hosts

- [current()](current%28%29.md): Deprecated. Returns an `NSHost` object representing the host the process is running on.
- [init(address:)](init%28address_%29.md): Deprecated. Returns the `NSHost` with the Internet address `address`.

# hostWithName: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Returns a host with a specific name.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```objectivec
+ (instancetype) hostWithName:(NSString *) name;
```

## Parameters

- `name`: Name of the host to look up. Can be either a simple hostname, such as `"sales"`, or a fully qualified domain name, such as `"sales.anycorp.com"`.

<a id="return-value"></a>

## Return Value

The host named `hostname`.

## See Also

### Creating Hosts

- [currentHost](current%28%29.md): Deprecated. Returns an `NSHost` object representing the host the process is running on.
- [hostWithAddress:](init%28address_%29.md): Deprecated. Returns the `NSHost` with the Internet address `address`.
