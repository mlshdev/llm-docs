> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemappingmake(source:target:)](https://developer.apple.com/documentation/coremedia/cmtimemappingmake(source:target:))

# CMTimeMappingMake(source:target:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time mapping with a source and target time range.

## Declaration

```swift
func CMTimeMappingMake(source: CMTimeRange, target: CMTimeRange) -> CMTimeMapping
```

## Parameters

- `source`: A time range on the source timeline.
- `target`: A time range on the target timeline.

<a id="return-value"></a>

## Return Value

A new time mapping.

<a id="Discussion"></a>

## Discussion

The source and target parameters must have durations whose epoch is `0`, otherwise the system returns an invalid time mapping.

## See Also

### Creating Time Mappings

- [CMTimeMappingMakeEmpty(target:)](cmtimemappingmakeempty%28target_%29.md): Creates a valid time mapping with an empty source.
- [CMTimeMappingMakeFromDictionary(\_:)](cmtimemappingmakefromdictionary%28__%29.md): Creates a time mapping from a dictionary representation.

# CMTimeMappingMake (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time mapping with a source and target time range.

## Declaration

```objectivec
extern CMTimeMapping CMTimeMappingMake(CMTimeRange source, CMTimeRange target);
```

## Parameters

- `source`: A time range on the source timeline.
- `target`: A time range on the target timeline.

<a id="return-value"></a>

## Return Value

A new time mapping.

<a id="Discussion"></a>

## Discussion

The source and target parameters must have durations whose epoch is `0`, otherwise the system returns an invalid time mapping.

## See Also

### Creating Time Mappings

- [CMTimeMappingMakeEmpty](cmtimemappingmakeempty%28target_%29.md): Creates a valid time mapping with an empty source.
- [CMTimeMappingMakeFromDictionary](cmtimemappingmakefromdictionary%28__%29.md): Creates a time mapping from a dictionary representation.
