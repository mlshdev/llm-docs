> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/netservice/hostname

# hostName (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.2+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

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
**Availability:** iOS 2.0+ (deprecated in 27.2) · iPadOS 2.0+ (deprecated in 27.2) · Mac Catalyst 13.1+ (deprecated in 27.2) · macOS 10.2+ (deprecated in 27.2) · tvOS 9.0+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

A string containing the DNS hostname for this service.

> Use nw_connection_t or nw_listener_t in Network framework instead

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * hostName;
```

<a id="Discussion"></a>

## Discussion

This value is `nil` until the service has been resolved (when `addresses` is non-`nil`).
