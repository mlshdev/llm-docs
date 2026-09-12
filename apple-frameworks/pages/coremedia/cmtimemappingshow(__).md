> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemappingshow(_:)](https://developer.apple.com/documentation/coremedia/cmtimemappingshow(_:))

# CMTimeMappingShow(\_:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Prints a description of a time mapping to standard output.

## Declaration

```swift
func CMTimeMappingShow(_ mapping: CMTimeMapping)
```

## Parameters

- `mapping`: The time mapping to show.

<a id="Discussion"></a>

## Discussion

You typically use this function for debugging purposes.

## See Also

### Representing Time Mappings

- [CMTimeMappingCopyAsDictionary(\_:allocator:)](cmtimemappingcopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time mapping.
- [CMTimeMappingCopyDescription(allocator:mapping:)](cmtimemappingcopydescription%28allocator_mapping_%29.md): Copies a string description of a time mapping.

# CMTimeMappingShow (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Prints a description of a time mapping to standard output.

## Declaration

```objectivec
extern void CMTimeMappingShow(CMTimeMapping mapping);
```

## Parameters

- `mapping`: The time mapping to show.

<a id="Discussion"></a>

## Discussion

You typically use this function for debugging purposes.

## See Also

### Representing Time Mappings

- [CMTimeMappingCopyAsDictionary](cmtimemappingcopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time mapping.
- [CMTimeMappingCopyDescription](cmtimemappingcopydescription%28allocator_mapping_%29.md): Copies a string description of a time mapping.
