> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cloudkit/cksyncenginedidfetchrecordzonechangesevent/error](https://developer.apple.com/documentation/cloudkit/cksyncenginedidfetchrecordzonechangesevent/error)

# error

**Interface language:** Objective-C

**Framework:** CloudKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

An error that describes the cause of a failed fetch operation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSError * error;
```

<a id="discussion"></a>

## Discussion

A `nil` value indicates a successful fetch.
