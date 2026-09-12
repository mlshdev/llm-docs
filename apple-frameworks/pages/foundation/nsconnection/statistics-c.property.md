> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsconnection/statistics-c.property](https://developer.apple.com/documentation/foundation/nsconnection/statistics-c.property)

# statistics

**Interface language:** Objective-C

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.13)

A dictionary containing various statistics for the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSDictionary<NSString *,NSNumber *> * statistics;
```

<a id="Discussion"></a>

## Discussion

An `NSDictionary` object containing various statistics for the receiver, such as the number of vended objects, the number of requests and replies, and so on.

The statistics dictionary should be used only for debugging purposes.
