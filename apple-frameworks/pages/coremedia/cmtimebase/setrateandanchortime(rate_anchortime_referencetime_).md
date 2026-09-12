> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimebase/setrateandanchortime(rate:anchortime:referencetime:)](https://developer.apple.com/documentation/coremedia/cmtimebase/setrateandanchortime(rate:anchortime:referencetime:))

# setRateAndAnchorTime(rate:anchorTime:referenceTime:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Sets the time at a particular primary time, and changes the rate at exactly that time.

## Declaration

```swift
func setRateAndAnchorTime(rate: Double, anchorTime: CMTime, referenceTime: CMTime) throws
```

## See Also

### Getting and Setting the Timebase Rate

- [setRate(\_:)](setrate%28__%29.md): Sets the rate.
