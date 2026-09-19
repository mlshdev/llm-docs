> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsmutableurlrequest/allowspersistentdns

# allowsPersistentDNS (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A Boolean value that indicates whether storing and usage of DNS answers in a persistent per-process cache is allowed.

## Declaration

```swift
var allowsPersistentDNS: Bool { get set }
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
@property BOOL allowsPersistentDNS;
```

<a id="discussion"></a>

## Discussion

This should only be set for hostnames whose resolutions are not expected to change across networks. Defaults to `NO`.
