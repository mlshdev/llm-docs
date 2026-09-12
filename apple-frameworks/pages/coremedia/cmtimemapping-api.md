> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemapping-api](https://developer.apple.com/documentation/coremedia/cmtimemapping-api)

# CMTimeMapping (Swift)

**Framework:** Core Media  
**Kind:** API Collection

A structure that maps a segment of a source time range to a target time range.

## Topics

### Creating Time Mappings

- [CMTimeMappingMake(source:target:)](cmtimemappingmake%28source_target_%29.md): Creates a time mapping with a source and target time range.
- [CMTimeMappingMakeEmpty(target:)](cmtimemappingmakeempty%28target_%29.md): Creates a valid time mapping with an empty source.
- [CMTimeMappingMakeFromDictionary(\_:)](cmtimemappingmakefromdictionary%28__%29.md): Creates a time mapping from a dictionary representation.

### Representing Time Mappings

- [CMTimeMappingCopyAsDictionary(\_:allocator:)](cmtimemappingcopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time mapping.
- [CMTimeMappingCopyDescription(allocator:mapping:)](cmtimemappingcopydescription%28allocator_mapping_%29.md): Copies a string description of a time mapping.
- [CMTimeMappingShow(\_:)](cmtimemappingshow%28__%29.md): Prints a description of a time mapping to standard output.

### Data Types

- [CMTimeMapping](cmtimemapping.md): A structure that maps a segment of a source time range to a target time range.

### Constants

- [invalid](cmtimemapping/invalid.md): An invalid time mapping.
- [kCMTimeMappingSourceKey](kcmtimemappingsourcekey.md): A dictionary key for a source time range.
- [kCMTimeMappingTargetKey](kcmtimemappingtargetkey.md): A dictionary key for a target time range.

## See Also

### Time Representation

- [CMTime](cmtime-api.md): A structure that represents time.
- [CMTimeRange](cmtimerange-api.md): A structure that represents a range of time.

# CMTimeMapping (Objective-C)

**Framework:** Core Media  
**Kind:** API Collection

A structure that maps a segment of a source time range to a target time range.

## Topics

### Creating Time Mappings

- [CMTimeMappingMake](cmtimemappingmake%28source_target_%29.md): Creates a time mapping with a source and target time range.
- [CMTimeMappingMakeEmpty](cmtimemappingmakeempty%28target_%29.md): Creates a valid time mapping with an empty source.
- [CMTimeMappingMakeFromDictionary](cmtimemappingmakefromdictionary%28__%29.md): Creates a time mapping from a dictionary representation.

### Representing Time Mappings

- [CMTimeMappingCopyAsDictionary](cmtimemappingcopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time mapping.
- [CMTimeMappingCopyDescription](cmtimemappingcopydescription%28allocator_mapping_%29.md): Copies a string description of a time mapping.
- [CMTimeMappingShow](cmtimemappingshow%28__%29.md): Prints a description of a time mapping to standard output.

### Data Types

- [CMTimeMapping](cmtimemapping.md): A structure that maps a segment of a source time range to a target time range.

### Constants

- [kCMTimeMappingInvalid](cmtimemapping/invalid.md): An invalid time mapping.
- [kCMTimeMappingSourceKey](kcmtimemappingsourcekey.md): A dictionary key for a source time range.
- [kCMTimeMappingTargetKey](kcmtimemappingtargetkey.md): A dictionary key for a target time range.

## See Also

### Time Representation

- [CMTime](cmtime-api.md): A structure that represents time.
- [CMTimeRange](cmtimerange-api.md): A structure that represents a range of time.
