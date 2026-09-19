> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtimemapping/source

# source (Swift)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

A time range on the source timeline.

## Declaration

```swift
var source: CMTimeRange
```

<a id="Discussion"></a>

## Discussion

For an empty edit, `source.start` is an invalid `CMTime`, in which case the system ignores `source.duration`. Otherwise, `source.start` is the starting time within the source, and `source.duration` is the duration of the source timeline to map to the target time range.

## See Also

### Accessing Time Ranges

- [target](target.md): A time range on the target timeline.

# source (Objective-C)

**Framework:** Core Media  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A time range on the source timeline.

## Declaration

```objectivec
CMTimeRange source;
```

<a id="Discussion"></a>

## Discussion

For an empty edit, `source.start` is an invalid `CMTime`, in which case the system ignores `source.duration`. Otherwise, `source.start` is the starting time within the source, and `source.duration` is the duration of the source timeline to map to the target time range.

## See Also

### Accessing Time Ranges

- [target](target.md): A time range on the target timeline.
