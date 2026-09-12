> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_path_get_link_quality(_:)](https://developer.apple.com/documentation/network/nw_path_get_link_quality(_:))

# nw_path_get_link_quality(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func nw_path_get_link_quality(_ path: nw_path_t) -> nw_link_quality_t
```

## Parameters

- `path`: The path object to check.

<a id="return-value"></a>

## Return Value

Returns the link quality measurement of the link layer network attachment. Returns nw_link_quality_unknown if there is no measurement available.

<a id="discussion"></a>

## Discussion

Fetches the link quality measurement for the interface. Link quality measurement is a representation of the expected capabilities of the link layer network attachment. Use this value to tune initial values for algorithms that can scale with the capabilities of the network. Do not use this value to gate connection attempts or to override adjustments that would be made based on actual network performance.

# nw_path_get_link_quality (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
nw_link_quality_t nw_path_get_link_quality(nw_path_t path);
```

## Parameters

- `path`: The path object to check.

<a id="return-value"></a>

## Return Value

Returns the link quality measurement of the link layer network attachment. Returns nw_link_quality_unknown if there is no measurement available.

<a id="discussion"></a>

## Discussion

Fetches the link quality measurement for the interface. Link quality measurement is a representation of the expected capabilities of the link layer network attachment. Use this value to tune initial values for algorithms that can scale with the capabilities of the network. Do not use this value to gate connection attempts or to override adjustments that would be made based on actual network performance.
