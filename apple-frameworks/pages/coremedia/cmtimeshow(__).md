> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmtimeshow(_:)

# CMTimeShow(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Prints a description of the time to the console.

## Declaration

```swift
func CMTimeShow(_ time: CMTime)
```

## Parameters

- `time`: A time to show.

<a id="Discussion"></a>

## Discussion

This function is most appropriate to use for debugging purposes.

## See Also

### Representing Times

- [CMTimeCopyDescription(allocator:time:)](cmtimecopydescription%28allocator_time_%29.md): Creates a string representation of the time.
- [CMTimeCopyAsDictionary(\_:allocator:)](cmtimecopyasdictionary%28__allocator_%29.md): Creates a dictionary representation of the time.

# CMTimeShow (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Prints a description of the time to the console.

## Declaration

```objectivec
extern void CMTimeShow(CMTime time);
```

## Parameters

- `time`: A time to show.

<a id="Discussion"></a>

## Discussion

This function is most appropriate to use for debugging purposes.

## See Also

### Representing Times

- [CMTimeCopyDescription](cmtimecopydescription%28allocator_time_%29.md): Creates a string representation of the time.
- [CMTimeCopyAsDictionary](cmtimecopyasdictionary%28__allocator_%29.md): Creates a dictionary representation of the time.
