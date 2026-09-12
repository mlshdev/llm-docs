> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/nwudpsession/resolvedendpoint](https://developer.apple.com/documentation/networkextension/nwudpsession/resolvedendpoint)

# resolvedEndpoint (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The currently targeted remote endpoint.

> Use the [nw_connection_copy_current_path(\_:)](../../network/nw_connection_copy_current_path%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```swift
var resolvedEndpoint: NWEndpoint? { get }
```

<a id="Discussion"></a>

## Discussion

Use Key-Value Observing (KVO) to watch this property.

## See Also

### Selecting remote endpoints

- [tryNextResolvedEndpoint()](trynextresolvedendpoint%28%29.md): Deprecated. Mark the current value of resolvedEndpoint as unusable, and try to switch to the next available endpoint.

# resolvedEndpoint (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · tvOS 17.0+ (deprecated in 18.0) · visionOS 1.0+ (deprecated in 2.0)

The currently targeted remote endpoint.

> Use the [nw_connection_copy_current_path](../../network/nw_connection_copy_current_path%28__%29.md) function from the [Network](../../network.md) framework instead.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NWEndpoint * resolvedEndpoint;
```

<a id="Discussion"></a>

## Discussion

Use Key-Value Observing (KVO) to watch this property.

## See Also

### Selecting remote endpoints

- [tryNextResolvedEndpoint](trynextresolvedendpoint%28%29.md): Deprecated. Mark the current value of resolvedEndpoint as unusable, and try to switch to the next available endpoint.
