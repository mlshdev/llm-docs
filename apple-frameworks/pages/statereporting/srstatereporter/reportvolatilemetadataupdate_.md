> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/statereporting/srstatereporter/reportvolatilemetadataupdate:](https://developer.apple.com/documentation/statereporting/srstatereporter/reportvolatilemetadataupdate:)

# reportVolatileMetadataUpdate:

**Interface language:** Objective-C

**Framework:** StateReporting  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Updates the volatile metadata within the current state without beginning a new transition.

## Declaration

```objectivec
- (void) reportVolatileMetadataUpdate:(NSDictionary<NSString *,NSObject *> *) updatedMetadata;
```

## Parameters

- `updatedMetadata`: The updated volatile context, or `nil` to clear volatile metadata without ending the current state. Dictionary values must be `NSNumber`, `NSString`, or `NSDate`. Passing values of any other type is a programmer error and will raise an exception.

<a id="discussion"></a>

## Discussion

Use this method to update rapidly-changing data — such as a progress value or a running count — while staying within the same state. If no state is currently active, this call is a no-op. Calling this method more frequently than user interaction timescales can trigger rate limiting, causing updates to go unlogged.
