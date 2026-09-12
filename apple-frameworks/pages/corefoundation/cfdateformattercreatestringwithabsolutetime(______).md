> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattercreatestringwithabsolutetime(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattercreatestringwithabsolutetime(_:_:_:))

# CFDateFormatterCreateStringWithAbsoluteTime(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a string representation of the given absolute time using the specified date formatter.

## Declaration

```swift
func CFDateFormatterCreateStringWithAbsoluteTime(_ allocator: CFAllocator!, _ formatter: CFDateFormatter!, _ at: CFAbsoluteTime) -> CFString!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `formatter`: The date formatter object that specifies the format of the returned string.
- `at`: The absolute time for which to generate a string representation.

<a id="return-value"></a>

## Return Value

A new string that represents `at` in the specified format. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Strings From Data

- [CFDateFormatterCreateStringWithDate(\_:\_:\_:)](cfdateformattercreatestringwithdate%28______%29.md): Returns a string representation of the given date using the specified date formatter.
- [CFDateFormatterCreateDateFormatFromTemplate(\_:\_:\_:\_:)](cfdateformattercreatedateformatfromtemplate%28________%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.

# CFDateFormatterCreateStringWithAbsoluteTime (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a string representation of the given absolute time using the specified date formatter.

## Declaration

```objectivec
extern CFStringRefCFDateFormatterCreateStringWithAbsoluteTime(CFAllocatorRef allocator, CFDateFormatterRef formatter, CFAbsoluteTime at);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `formatter`: The date formatter object that specifies the format of the returned string.
- `at`: The absolute time for which to generate a string representation.

<a id="return-value"></a>

## Return Value

A new string that represents `at` in the specified format. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Strings From Data

- [CFDateFormatterCreateStringWithDate](cfdateformattercreatestringwithdate%28______%29.md): Returns a string representation of the given date using the specified date formatter.
- [CFDateFormatterCreateDateFormatFromTemplate](cfdateformattercreatedateformatfromtemplate%28________%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.
