> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemappingcopyasdictionary(_:allocator:)](https://developer.apple.com/documentation/coremedia/cmtimemappingcopyasdictionary(_:allocator:))

# CMTimeMappingCopyAsDictionary(\_:allocator:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a dictionary representation of a time mapping.

## Declaration

```swift
func CMTimeMappingCopyAsDictionary(_ mapping: CMTimeMapping, allocator: CFAllocator?) -> CFDictionary?
```

## Parameters

- `mapping`: The time mapping for which to create a dictionary representation.
- `allocator`: An allocator to use to create a dictionary. Pass `kCFAllocatorDefault` to use the default allocator.

<a id="return-value"></a>

## Return Value

A dictionary representation of a time mapping.

## See Also

### Representing Time Mappings

- [CMTimeMappingCopyDescription(allocator:mapping:)](cmtimemappingcopydescription%28allocator_mapping_%29.md): Copies a string description of a time mapping.
- [CMTimeMappingShow(\_:)](cmtimemappingshow%28__%29.md): Prints a description of a time mapping to standard output.

# CMTimeMappingCopyAsDictionary (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Returns a dictionary representation of a time mapping.

## Declaration

```objectivec
extern CFDictionaryRefCMTimeMappingCopyAsDictionary(CMTimeMapping mapping, CFAllocatorRef allocator);
```

## Parameters

- `mapping`: The time mapping for which to create a dictionary representation.
- `allocator`: An allocator to use to create a dictionary. Pass `kCFAllocatorDefault` to use the default allocator.

<a id="return-value"></a>

## Return Value

A dictionary representation of a time mapping.

## See Also

### Representing Time Mappings

- [CMTimeMappingCopyDescription](cmtimemappingcopydescription%28allocator_mapping_%29.md): Copies a string description of a time mapping.
- [CMTimeMappingShow](cmtimemappingshow%28__%29.md): Prints a description of a time mapping to standard output.
