> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corevideo/kcvzerotime](https://developer.apple.com/documentation/corevideo/kcvzerotime)

# kCVZeroTime (Swift)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Zero time or duration. For example, [CVDisplayLinkGetOutputVideoLatency(\_:)](cvdisplaylinkgetoutputvideolatency%28__%29.md) returns `kCVZeroTime` for zero video latency.

## Declaration

```swift
let kCVZeroTime: CVTime
```

## See Also

### Constants

- [kCVIndefiniteTime](kcvindefinitetime.md): An unknown or indefinite time. For example, [CVDisplayLinkGetNominalOutputVideoRefreshPeriod(\_:)](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md) returns `kCVIndefiniteTime` if the display link specified is not valid.

# kCVZeroTime (Objective-C)

**Framework:** Core Video  
**Kind:** Global Variable  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.0+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 4.0+

Zero time or duration. For example, [CVDisplayLinkGetOutputVideoLatency](cvdisplaylinkgetoutputvideolatency%28__%29.md) returns `kCVZeroTime` for zero video latency.

## Declaration

```objectivec
extern const CVTime kCVZeroTime;
```

## See Also

### Constants

- [kCVIndefiniteTime](kcvindefinitetime.md): An unknown or indefinite time. For example, [CVDisplayLinkGetNominalOutputVideoRefreshPeriod](cvdisplaylinkgetnominaloutputvideorefreshperiod%28__%29.md) returns `kCVIndefiniteTime` if the display link specified is not valid.
