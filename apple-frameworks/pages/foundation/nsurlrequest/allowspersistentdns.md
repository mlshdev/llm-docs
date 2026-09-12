> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsurlrequest/allowspersistentdns](https://developer.apple.com/documentation/foundation/nsurlrequest/allowspersistentdns)

# allowsPersistentDNS (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether storing and usage of DNS answers in a persistent per-process cache is allowed.

## Declaration

```swift
var allowsPersistentDNS: Bool { get }
```

<a id="discussion"></a>

## Discussion

This should only be set for hostnames whose resolutions are not expected to change across networks. Defaults to `NO`.

# allowsPersistentDNS (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether storing and usage of DNS answers in a persistent per-process cache is allowed.

## Declaration

```objectivec
@property (readonly) BOOL allowsPersistentDNS;
```

<a id="discussion"></a>

## Discussion

This should only be set for hostnames whose resolutions are not expected to change across networks. Defaults to `NO`.
