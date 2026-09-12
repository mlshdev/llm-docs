> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattercreatedatefromstring(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattercreatedatefromstring(_:_:_:_:))

# CFDateFormatterCreateDateFromString(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a date object representing a given string.

## Declaration

```swift
func CFDateFormatterCreateDateFromString(_ allocator: CFAllocator!, _ formatter: CFDateFormatter!, _ string: CFString!, _ rangep: UnsafeMutablePointer<CFRange>!) -> CFDate!
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `formatter`: The date formatter object to use to parse `string`.
- `string`: The string that contains the date.
- `rangep`: A reference to the range within the string specifying the substring to be parsed. If `NULL`, the whole string is parsed. Upon return, contains the range that defines the extent of the parse (may be less than the given range).

<a id="return-value"></a>

## Return Value

A new date that represents `string`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Parsing Strings

- [CFDateFormatterGetAbsoluteTimeFromString(\_:\_:\_:\_:)](cfdateformattergetabsolutetimefromstring%28________%29.md): Returns an absolute time object representing a given string.

# CFDateFormatterCreateDateFromString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a date object representing a given string.

## Declaration

```objectivec
extern CFDateRefCFDateFormatterCreateDateFromString(CFAllocatorRef allocator, CFDateFormatterRef formatter, CFStringRef string, CFRange *rangep);
```

## Parameters

- `allocator`: The allocator to use to allocate memory for the new object. Pass `NULL` or kCFAllocatorDefault to use the current default allocator.
- `formatter`: The date formatter object to use to parse `string`.
- `string`: The string that contains the date.
- `rangep`: A reference to the range within the string specifying the substring to be parsed. If `NULL`, the whole string is parsed. Upon return, contains the range that defines the extent of the parse (may be less than the given range).

<a id="return-value"></a>

## Return Value

A new date that represents `string`, or `NULL` if there was a problem creating the object. Ownership follows the [The Create Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-103029).

## See Also

### Parsing Strings

- [CFDateFormatterGetAbsoluteTimeFromString](cfdateformattergetabsolutetimefromstring%28________%29.md): Returns an absolute time object representing a given string.
