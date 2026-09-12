> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpskipintervalcommand/preferredintervals](https://developer.apple.com/documentation/mediaplayer/mpskipintervalcommand/preferredintervals)

# preferredIntervals (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The available skip intervals, in seconds, for a media item.

## Declaration

```swift
var preferredIntervals: [NSNumber] { get set }
```

<a id="Discussion"></a>

## Discussion

The `preferredIntervals` property holds an array of [TimeInterval](../../foundation/timeinterval.md) objects that designate different skip intervals for a media item. The skip intervals are defined in seconds.

# preferredIntervals (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The available skip intervals, in seconds, for a media item.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<NSNumber *> * preferredIntervals;
```

<a id="Discussion"></a>

## Discussion

The `preferredIntervals` property holds an array of [NSTimeInterval](../../foundation/timeinterval.md) objects that designate different skip intervals for a media item. The skip intervals are defined in seconds.
