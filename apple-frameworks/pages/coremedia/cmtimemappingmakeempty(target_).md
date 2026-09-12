> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemappingmakeempty(target:)](https://developer.apple.com/documentation/coremedia/cmtimemappingmakeempty(target:))

# CMTimeMappingMakeEmpty(target:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a valid time mapping with an empty source.

## Declaration

```swift
func CMTimeMappingMakeEmpty(target: CMTimeRange) -> CMTimeMapping
```

## Parameters

- `target`: A time range on the target timeline.

<a id="return-value"></a>

## Return Value

A new time mapping.

<a id="Discussion"></a>

## Discussion

The target time range must have a duration whose epoch is `0`, otherwise the system returns an invalid time mapping.

## See Also

### Creating Time Mappings

- [CMTimeMappingMake(source:target:)](cmtimemappingmake%28source_target_%29.md): Creates a time mapping with a source and target time range.
- [CMTimeMappingMakeFromDictionary(\_:)](cmtimemappingmakefromdictionary%28__%29.md): Creates a time mapping from a dictionary representation.

# CMTimeMappingMakeEmpty (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a valid time mapping with an empty source.

## Declaration

```objectivec
extern CMTimeMapping CMTimeMappingMakeEmpty(CMTimeRange target);
```

## Parameters

- `target`: A time range on the target timeline.

<a id="return-value"></a>

## Return Value

A new time mapping.

<a id="Discussion"></a>

## Discussion

The target time range must have a duration whose epoch is `0`, otherwise the system returns an invalid time mapping.

## See Also

### Creating Time Mappings

- [CMTimeMappingMake](cmtimemappingmake%28source_target_%29.md): Creates a time mapping with a source and target time range.
- [CMTimeMappingMakeFromDictionary](cmtimemappingmakefromdictionary%28__%29.md): Creates a time mapping from a dictionary representation.
