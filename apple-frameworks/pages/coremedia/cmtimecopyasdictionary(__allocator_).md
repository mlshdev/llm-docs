> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimecopyasdictionary(_:allocator:)](https://developer.apple.com/documentation/coremedia/cmtimecopyasdictionary(_:allocator:))

# CMTimeCopyAsDictionary(\_:allocator:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a dictionary representation of the time.

## Declaration

```swift
func CMTimeCopyAsDictionary(_ time: CMTime, allocator: CFAllocator?) -> CFDictionary?
```

## Parameters

- `time`: A time from which to create a dictionary.
- `allocator`: An allocator with which to create the dictionary. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.

<a id="return-value"></a>

## Return Value

A dictionary representation of the time.

## See Also

### Representing Times

- [CMTimeShow(\_:)](cmtimeshow%28__%29.md): Prints a description of the time to the console.
- [CMTimeCopyDescription(allocator:time:)](cmtimecopydescription%28allocator_time_%29.md): Creates a string representation of the time.

# CMTimeCopyAsDictionary (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a dictionary representation of the time.

## Declaration

```objectivec
extern CFDictionaryRefCMTimeCopyAsDictionary(CMTime time, CFAllocatorRef allocator);
```

## Parameters

- `time`: A time from which to create a dictionary.
- `allocator`: An allocator with which to create the dictionary. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.

<a id="return-value"></a>

## Return Value

A dictionary representation of the time.

## See Also

### Representing Times

- [CMTimeShow](cmtimeshow%28__%29.md): Prints a description of the time to the console.
- [CMTimeCopyDescription](cmtimecopydescription%28allocator_time_%29.md): Creates a string representation of the time.
