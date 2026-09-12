> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_parameters_set_allow_ultra_constrained(_:_:)](https://developer.apple.com/documentation/network/nw_parameters_set_allow_ultra_constrained(_:_:))

# nw_parameters_set_allow_ultra_constrained(\_:\_:) (Swift)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
func nw_parameters_set_allow_ultra_constrained(_ parameters: nw_parameters_t, _ allow_ultra_constrained: Bool)
```

## Parameters

- `parameters`: The parameters to modify.
- `allow_ultra_constrained`: Whether or not ultra-constrained interfaces are allowed.

<a id="discussion"></a>

## Discussion

Explicitly allow connectivity over ultra-constrained interfaces. Without this being set, connections are not allowed to use these interfaces.

# nw_parameters_set_allow_ultra_constrained (Objective-C)

**Framework:** Network  
**Kind:** Function  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```objectivec
void nw_parameters_set_allow_ultra_constrained(nw_parameters_t parameters, bool allow_ultra_constrained);
```

## Parameters

- `parameters`: The parameters to modify.
- `allow_ultra_constrained`: Whether or not ultra-constrained interfaces are allowed.

<a id="discussion"></a>

## Discussion

Explicitly allow connectivity over ultra-constrained interfaces. Without this being set, connections are not allowed to use these interfaces.
