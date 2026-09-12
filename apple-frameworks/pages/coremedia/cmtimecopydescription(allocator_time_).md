> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmtimecopydescription(allocator:time:)](https://developer.apple.com/documentation/coremedia/cmtimecopydescription(allocator:time:))

# CMTimeCopyDescription(allocator:time:) (Swift)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a string representation of the time.

## Declaration

```swift
func CMTimeCopyDescription(allocator: CFAllocator?, time: CMTime) -> CFString?
```

## Parameters

- `allocator`: An allocator with which to create the description. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `time`: The time to describe.

<a id="return-value"></a>

## Return Value

A string representation of the time.

## See Also

### Representing Times

- [CMTimeShow(\_:)](cmtimeshow%28__%29.md): Prints a description of the time to the console.
- [CMTimeCopyAsDictionary(\_:allocator:)](cmtimecopyasdictionary%28__allocator_%29.md): Creates a dictionary representation of the time.

# CMTimeCopyDescription (Objective-C)

**Framework:** Core Media  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a string representation of the time.

## Declaration

```objectivec
extern CFStringRefCMTimeCopyDescription(CFAllocatorRef allocator, CMTime time);
```

## Parameters

- `allocator`: An allocator with which to create the description. Pass [kCFAllocatorDefault](../corefoundation/kcfallocatordefault.md) to use the default allocator.
- `time`: The time to describe.

<a id="return-value"></a>

## Return Value

A string representation of the time.

## See Also

### Representing Times

- [CMTimeShow](cmtimeshow%28__%29.md): Prints a description of the time to the console.
- [CMTimeCopyAsDictionary](cmtimecopyasdictionary%28__allocator_%29.md): Creates a dictionary representation of the time.
