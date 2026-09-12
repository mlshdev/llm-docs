> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/callkit/cxcalldirectoryextensioncontext/isincremental](https://developer.apple.com/documentation/callkit/cxcalldirectoryextensioncontext/isincremental)

# isIncremental (Swift)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 11.0+ · visionOS 1.0+

A Boolean value that indicates whether the request provides data incrementally.

## Declaration

```swift
var isIncremental: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Before adding or removing any entries, if you call this method and the value is [true](https://developer.apple.com/documentation/swift/true), the request must only add or remove entries relative to the last time the system loaded data for the extension. Otherwise, if you don’t call this method, or if the value is [false](https://developer.apple.com/documentation/swift/false), the request must add the full list of entries without removing any, regardless of whether the system loaded data in the past.

## See Also

### Completing Requests

- [completeRequest(completionHandler:)](completerequest%28completionhandler_%29.md): Completes the request to the extension context.

# incremental (Objective-C)

**Framework:** CallKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the request provides data incrementally.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isIncremental) BOOL incremental;
```

<a id="Discussion"></a>

## Discussion

Before adding or removing any entries, if you call this method and the value is [true](https://developer.apple.com/documentation/swift/true), the request must only add or remove entries relative to the last time the system loaded data for the extension. Otherwise, if you don’t call this method, or if the value is [false](https://developer.apple.com/documentation/swift/false), the request must add the full list of entries without removing any, regardless of whether the system loaded data in the past.

## See Also

### Completing Requests

- [completeRequestWithCompletionHandler:](completerequest%28completionhandler_%29.md): Completes the request to the extension context.
