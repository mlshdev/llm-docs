> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/host/current()](https://developer.apple.com/documentation/foundation/host/current())

# current() (Swift)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Returns an `NSHost` object representing the host the process is running on.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```swift
class func current() -> Self
```

<a id="return-value"></a>

## Return Value

`NSHost` object for the process’s host.

<a id="Discussion"></a>

## Discussion

This method executes synchronously. The execution time of this method can be highly variable, depending on the local network configuration, and may block for several seconds if the network is unreachable. To avoid blocking execution on the main thread, you should call this method in an [Operation](../operation.md) or *Grand Central Dispatch* block that executes asynchronously in the background.

## See Also

### Creating Hosts

- [init(address:)](init%28address_%29.md): Deprecated. Returns the `NSHost` with the Internet address `address`.
- [init(name:)](init%28name_%29.md): Deprecated. Returns a host with a specific name.

# currentHost (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.0+ (deprecated in 27.0)

Returns an `NSHost` object representing the host the process is running on.

> Use Network framework instead, see deprecation notice in \<Foundation/NSHost.h\>

## Declaration

```objectivec
+ (instancetype) currentHost;
```

<a id="return-value"></a>

## Return Value

`NSHost` object for the process’s host.

<a id="Discussion"></a>

## Discussion

This method executes synchronously. The execution time of this method can be highly variable, depending on the local network configuration, and may block for several seconds if the network is unreachable. To avoid blocking execution on the main thread, you should call this method in an [NSOperation](../operation.md) or *Grand Central Dispatch* block that executes asynchronously in the background.

## See Also

### Creating Hosts

- [hostWithAddress:](init%28address_%29.md): Deprecated. Returns the `NSHost` with the Internet address `address`.
- [hostWithName:](init%28name_%29.md): Deprecated. Returns a host with a specific name.
