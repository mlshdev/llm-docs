> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/netservice/hostname](https://developer.apple.com/documentation/foundation/netservice/hostname)

# hostName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A string containing the DNS hostname for this service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```swift
var hostName: String? { get }
```

<a id="Discussion"></a>

## Discussion

This value is `nil` until the service has been resolved (when `addresses` is non-`nil`).

# hostName (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.2+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A string containing the DNS hostname for this service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * hostName;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` until the service has been resolved (when `addresses` is non-`nil`).
