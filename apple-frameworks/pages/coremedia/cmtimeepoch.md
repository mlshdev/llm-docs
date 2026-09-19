> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtimeepoch

# CMTimeEpoch (Swift)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An epoch for a time.

## Declaration

```swift
typealias CMTimeEpoch = Int64
```

<a id="Discussion"></a>

## Discussion

The epoch is typically `0`, but you can use a different value — for example to denote a particular iteration of a loop.

## See Also

### Data Types

- [CMTime](cmtime.md): A structure that represents time.
- [CMTimeValue](cmtimevalue.md): An integer time value.
- [CMTimeScale](cmtimescale.md): An integer timescale.
- [CMTimeFlags](cmtimeflags.md): A structure that defines the flags for a time value.

# CMTimeEpoch (Objective-C)

**Framework:** Core Media  
**Kind:** Type Alias  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

An epoch for a time.

## Declaration

```objectivec
typedef int64_t CMTimeEpoch;
```

<a id="Discussion"></a>

## Discussion

The epoch is typically `0`, but you can use a different value — for example to denote a particular iteration of a loop.

## See Also

### Data Types

- [CMTime](cmtime.md): A structure that represents time.
- [CMTimeValue](cmtimevalue.md): An integer time value.
- [CMTimeScale](cmtimescale.md): An integer timescale.
- [CMTimeFlags](cmtimeflags.md): A structure that defines the flags for a time value.
