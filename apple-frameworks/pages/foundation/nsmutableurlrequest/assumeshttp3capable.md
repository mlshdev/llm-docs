> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableurlrequest/assumeshttp3capable](https://developer.apple.com/documentation/foundation/nsmutableurlrequest/assumeshttp3capable)

# assumesHTTP3Capable (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A Boolean value that indicates whether the server is assumed to support HTTP/3.

## Declaration

```swift
var assumesHTTP3Capable: Bool { get set }
```

<a id="discussion"></a>

## Discussion

When `YES`, enables QUIC racing without HTTP/3 service discovery. Defaults to `NO`. The default may be `YES` in a future OS update.

# assumesHTTP3Capable (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · tvOS 14.5+ · visionOS 1.0+ · watchOS 7.4+

A Boolean value that indicates whether the server is assumed to support HTTP/3.

## Declaration

```objectivec
@property BOOL assumesHTTP3Capable;
```

<a id="discussion"></a>

## Discussion

When `YES`, enables QUIC racing without HTTP/3 service discovery. Defaults to `NO`. The default may be `YES` in a future OS update.
