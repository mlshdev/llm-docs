> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/ckshare/participant/dateaddedtoshare](https://developer.apple.com/documentation/cloudkit/ckshare/participant/dateaddedtoshare)

# dateAddedToShare (Swift)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The date and time when an originator or administrator added this participant to the share.

## Declaration

```swift
var dateAddedToShare: Date? { get }
```

<a id="discussion"></a>

## Discussion

CloudKit sets this timestamp when the share is successfully saved to the server.

# dateAddedToShare (Objective-C)

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The date and time when an originator or administrator added this participant to the share.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSDate * dateAddedToShare;
```

<a id="discussion"></a>

## Discussion

CloudKit sets this timestamp when the share is successfully saved to the server.
