> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattercreatestringwithdate(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattercreatestringwithdate(_:_:_:))

# CFDateFormatterCreateStringWithDate(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a string representation of the given date using the specified date formatter.

## Declaration

```swift
func CFDateFormatterCreateStringWithDate(_ allocator: CFAllocator!, _ formatter: CFDateFormatter!, _ date: CFDate!) -> CFString!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `formatter`: The date formatter object that specifies the format of the returned string.
- `date`: The date object for which to create a string representation.

<a id="return-value"></a>

## Return Value

A new string that represents `date` in the specified format. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Strings From Data

- [CFDateFormatterCreateStringWithAbsoluteTime(\_:\_:\_:)](cfdateformattercreatestringwithabsolutetime%28______%29.md): Returns a string representation of the given absolute time using the specified date formatter.
- [CFDateFormatterCreateDateFormatFromTemplate(\_:\_:\_:\_:)](cfdateformattercreatedateformatfromtemplate%28________%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.

# CFDateFormatterCreateStringWithDate (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a string representation of the given date using the specified date formatter.

## Declaration

```objectivec
extern CFStringRefCFDateFormatterCreateStringWithDate(CFAllocatorRef allocator, CFDateFormatterRef formatter, CFDateRef date);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `formatter`: The date formatter object that specifies the format of the returned string.
- `date`: The date object for which to create a string representation.

<a id="return-value"></a>

## Return Value

A new string that represents `date` in the specified format. Returns `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Creating Strings From Data

- [CFDateFormatterCreateStringWithAbsoluteTime](cfdateformattercreatestringwithabsolutetime%28______%29.md): Returns a string representation of the given absolute time using the specified date formatter.
- [CFDateFormatterCreateDateFormatFromTemplate](cfdateformattercreatedateformatfromtemplate%28________%29.md): Returns a localized date format string representing the given date format components arranged appropriately for the specified locale.
