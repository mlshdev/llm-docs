> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimemappingcopydescription(allocator:mapping:)](https://developer.apple.com/documentation/coremedia/cmtimemappingcopydescription(allocator:mapping:))

# CMTimeMappingCopyDescription(allocator:mapping:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies a string description of a time mapping.

## Declaration

```swift
func CMTimeMappingCopyDescription(allocator: CFAllocator?, mapping: CMTimeMapping) -> CFString?
```

## Parameters

- `allocator`: An allocator to use to create a dictionary. Pass `kCFAllocatorDefault` to use the default allocator.
- `mapping`: The time mapping from which to copy a description.

<a id="return-value"></a>

## Return Value

A string description of a time mapping.

## See Also

### Representing Time Mappings

- [CMTimeMappingCopyAsDictionary(\_:allocator:)](cmtimemappingcopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time mapping.
- [CMTimeMappingShow(\_:)](cmtimemappingshow%28__%29.md): Prints a description of a time mapping to standard output.

# CMTimeMappingCopyDescription (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Copies a string description of a time mapping.

## Declaration

```objectivec
extern CFStringRefCMTimeMappingCopyDescription(CFAllocatorRef allocator, CMTimeMapping mapping);
```

## Parameters

- `allocator`: An allocator to use to create a dictionary. Pass `kCFAllocatorDefault` to use the default allocator.
- `mapping`: The time mapping from which to copy a description.

<a id="return-value"></a>

## Return Value

A string description of a time mapping.

## See Also

### Representing Time Mappings

- [CMTimeMappingCopyAsDictionary](cmtimemappingcopyasdictionary%28__allocator_%29.md): Returns a dictionary representation of a time mapping.
- [CMTimeMappingShow](cmtimemappingshow%28__%29.md): Prints a description of a time mapping to standard output.
