> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwpath/isequal(to:)](https://developer.apple.com/documentation/networkextension/nwpath/isequal(to:))

# isEqual(to:) (Swift)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Comparison method for [NWPath](../nwpath.md) objects.

> Use the [nw_path_is_equal(\_:\_:)](../../network/nw_path_is_equal%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
func isEqual(to path: NWPath) -> Bool
```

## Parameters

- `path`: Another [NWPath](../nwpath.md) object to compare.

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the objects are equal, [false](https://developer.apple.com/documentation/swift/false) otherwise. If two [NWPath](../nwpath.md) objects are equal, this means that the underlying network configuration (routes, interfaces, address, etc.) are the same between them.

# isEqualToPath: (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

Comparison method for [NWPath](../nwpath.md) objects.

> Use the [nw_path_is_equal](../../network/nw_path_is_equal%28____%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
- (BOOL) isEqualToPath:(NWPath *) path;
```

## Parameters

- `path`: Another [NWPath](../nwpath.md) object to compare.

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) if the objects are equal, [false](https://developer.apple.com/documentation/swift/false) otherwise. If two [NWPath](../nwpath.md) objects are equal, this means that the underlying network configuration (routes, interfaces, address, etc.) are the same between them.
