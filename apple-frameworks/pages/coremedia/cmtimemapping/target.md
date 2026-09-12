> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemapping/target](https://developer.apple.com/documentation/coremedia/cmtimemapping/target)

# target (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A time range on the target timeline.

## Declaration

```swift
var target: CMTimeRange
```

<a id="Discussion"></a>

## Discussion

If the target and source have different durations, the source segment should play at a rate of `source.duration / target.duration` to fit.

## See Also

### Accessing Time Ranges

- [source](source.md): A time range on the source timeline.

# target (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A time range on the target timeline.

## Declaration

```objectivec
CMTimeRange target;
```

<a id="Discussion"></a>

## Discussion

If the target and source have different durations, the source segment should play at a rate of `source.duration / target.duration` to fit.

## See Also

### Accessing Time Ranges

- [source](source.md): A time range on the source timeline.
