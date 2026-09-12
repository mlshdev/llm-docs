> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neappproxyudpflow/localendpoint](https://developer.apple.com/documentation/networkextension/neappproxyudpflow/localendpoint)

# localEndpoint (Swift)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An [NWEndpoint](../nwendpoint.md) object containing information about the local endpoint of the flow.

## Declaration

```swift
var localEndpoint: NWEndpoint? { get }
```

<a id="Discussion"></a>

## Discussion

This property may be nil if the corresponding UDP socket was not bound to a port by the application and the App Proxy Provider did not set a local endpoint in [open(withLocalEndpoint:completionHandler:)](../neappproxyflow/open%28withlocalendpoint_completionhandler_%29.md).

# localEndpoint (Objective-C)

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 18.0) · iPadOS 9.0+ (deprecated in 18.0) · Mac Catalyst 13.1+ (deprecated in 18.0) · macOS 10.11+ (deprecated in 15.0) · visionOS 1.0+ (deprecated in 2.0)

An [NWEndpoint](../nwendpoint.md) object containing information about the local endpoint of the flow.

## Declaration

```objectivec
@property (readonly, nullable) NWEndpoint * localEndpoint;
```

<a id="Discussion"></a>

## Discussion

This property may be nil if the corresponding UDP socket was not bound to a port by the application and the App Proxy Provider did not set a local endpoint in [openWithLocalEndpoint:completionHandler:](../neappproxyflow/open%28withlocalendpoint_completionhandler_%29.md).
