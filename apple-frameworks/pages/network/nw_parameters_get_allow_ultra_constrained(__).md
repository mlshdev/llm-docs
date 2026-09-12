> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_get_allow_ultra_constrained(_:)](https://developer.apple.com/documentation/network/nw_parameters_get_allow_ultra_constrained(_:))

# nw_parameters_get_allow_ultra_constrained(\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func nw_parameters_get_allow_ultra_constrained(_ parameters: nw_parameters_t) -> Bool
```

## Parameters

- `parameters`: The parameters to check.

<a id="return-value"></a>

## Return Value

Returns whether or not ultra-constrained interfaces are allowed.

<a id="discussion"></a>

## Discussion

Check if the parameters explicitly allow connectivity over ultra-constrained interfaces.

# nw_parameters_get_allow_ultra_constrained (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
bool nw_parameters_get_allow_ultra_constrained(nw_parameters_t parameters);
```

## Parameters

- `parameters`: The parameters to check.

<a id="return-value"></a>

## Return Value

Returns whether or not ultra-constrained interfaces are allowed.

<a id="discussion"></a>

## Discussion

Check if the parameters explicitly allow connectivity over ultra-constrained interfaces.
