> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemappingmakefromdictionary(_:)](https://developer.apple.com/documentation/coremedia/cmtimemappingmakefromdictionary(_:))

# CMTimeMappingMakeFromDictionary(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time mapping from a dictionary representation.

## Declaration

```swift
func CMTimeMappingMakeFromDictionary(_ dictionaryRepresentation: CFDictionary) -> CMTimeMapping
```

## Parameters

- `dictionaryRepresentation`: A dictionary representation of a time mapping that you previously created by calling the [CMTimeMappingCopyAsDictionary(\_:allocator:)](cmtimemappingcopyasdictionary%28__allocator_%29.md) function.

<a id="return-value"></a>

## Return Value

A new time mapping.

<a id="Discussion"></a>

## Discussion

If the dictionary you provide doesn’t have the requisite keyed values, the system returns an invalid time mapping.

## See Also

### Creating Time Mappings

- [CMTimeMappingMake(source:target:)](cmtimemappingmake%28source_target_%29.md): Creates a time mapping with a source and target time range.
- [CMTimeMappingMakeEmpty(target:)](cmtimemappingmakeempty%28target_%29.md): Creates a valid time mapping with an empty source.

# CMTimeMappingMakeFromDictionary (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a time mapping from a dictionary representation.

## Declaration

```objectivec
extern CMTimeMapping CMTimeMappingMakeFromDictionary(CFDictionaryRef dictionaryRepresentation);
```

## Parameters

- `dictionaryRepresentation`: A dictionary representation of a time mapping that you previously created by calling the [CMTimeMappingCopyAsDictionary](cmtimemappingcopyasdictionary%28__allocator_%29.md) function.

<a id="return-value"></a>

## Return Value

A new time mapping.

<a id="Discussion"></a>

## Discussion

If the dictionary you provide doesn’t have the requisite keyed values, the system returns an invalid time mapping.

## See Also

### Creating Time Mappings

- [CMTimeMappingMake](cmtimemappingmake%28source_target_%29.md): Creates a time mapping with a source and target time range.
- [CMTimeMappingMakeEmpty](cmtimemappingmakeempty%28target_%29.md): Creates a valid time mapping with an empty source.
