> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/host/init(address:)](https://developer.apple.com/documentation/foundation/host/init(address:))

# init(address:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Returns the `NSHost` with the Internet address `address`.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```swift
convenience init(address: String)
```

## Parameters

- `address`: Network address to look up. For example, `"127.0.0.1"` or `"fe80::1"`.

<a id="return-value"></a>

## Return Value

The host for `address`.

## See Also

### Creating Hosts

- [current()](current%28%29.md): Deprecated. Returns an `NSHost` object representing the host the process is running on.
- [init(name:)](init%28name_%29.md): Deprecated. Returns a host with a specific name.

# hostWithAddress: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Returns the `NSHost` with the Internet address `address`.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```objectivec
+ (instancetype) hostWithAddress:(NSString *) address;
```

## Parameters

- `address`: Network address to look up. For example, `"127.0.0.1"` or `"fe80::1"`.

<a id="return-value"></a>

## Return Value

The host for `address`.

## See Also

### Creating Hosts

- [currentHost](current%28%29.md): Deprecated. Returns an `NSHost` object representing the host the process is running on.
- [hostWithName:](init%28name_%29.md): Deprecated. Returns a host with a specific name.
