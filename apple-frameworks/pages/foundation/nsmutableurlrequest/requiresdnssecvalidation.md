> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/requiresdnssecvalidation](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/requiresdnssecvalidation)

# requiresDNSSECValidation (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

A Boolean value that indicates whether a request requires DNSSEC validation during DNS lookup.

## Declaration

```swift
var requiresDNSSECValidation: Bool { get set }
```

<a id="discussion"></a>

## Discussion

`YES` if the DNS lookup for this request should require DNSSEC validation. Defaults to `NO`.

# requiresDNSSECValidation (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 16.1+ · iPadOS 16.1+ · Mac Catalyst 16.1+ · macOS 13.0+ · tvOS 16.1+ · visionOS 1.0+ · watchOS 9.1+

A Boolean value that indicates whether a request requires DNSSEC validation during DNS lookup.

## Declaration

```objectivec
@property BOOL requiresDNSSECValidation;
```

<a id="discussion"></a>

## Discussion

`YES` if the DNS lookup for this request should require DNSSEC validation. Defaults to `NO`.
