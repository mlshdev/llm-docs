> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_path_is_ultra_constrained(_:)](https://developer.apple.com/documentation/network/nw_path_is_ultra_constrained(_:))

# nw_path_is_ultra_constrained(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func nw_path_is_ultra_constrained(_ path: nw_path_t) -> Bool
```

## Parameters

- `path`: The path object to check.

<a id="return-value"></a>

## Return Value

Returns true if the path uses any network interface that is considered ultra-constrained, false otherwise.

<a id="discussion"></a>

## Discussion

Checks if the path uses any network interfaces that are considered ultra-constrained.

# nw_path_is_ultra_constrained (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
bool nw_path_is_ultra_constrained(nw_path_t path);
```

## Parameters

- `path`: The path object to check.

<a id="return-value"></a>

## Return Value

Returns true if the path uses any network interface that is considered ultra-constrained, false otherwise.

<a id="discussion"></a>

## Discussion

Checks if the path uses any network interfaces that are considered ultra-constrained.
