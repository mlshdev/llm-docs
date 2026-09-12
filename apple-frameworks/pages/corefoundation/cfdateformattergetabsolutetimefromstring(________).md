> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdateformattergetabsolutetimefromstring(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdateformattergetabsolutetimefromstring(_:_:_:_:))

# CFDateFormatterGetAbsoluteTimeFromString(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an absolute time object representing a given string.

## Declaration

```swift
func CFDateFormatterGetAbsoluteTimeFromString(_ formatter: CFDateFormatter!, _ string: CFString!, _ rangep: UnsafeMutablePointer<CFRange>!, _ atp: UnsafeMutablePointer<CFAbsoluteTime>!) -> Bool
```

## Parameters

- `formatter`: The date formatter object to use to parse `string`.
- `string`: The string that contains the time to be parsed.
- `rangep`: Reference to the range within the string specifying the substring to be parsed. If `NULL`, the whole string is parsed. On return, the range that defines the extent of the parse (may be less than the given range).
- `atp`: An absolute time value, returned by reference, that represents `string`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="return-value"></a>

## Return Value

`true` if the string was parsed successfully, otherwise `false`.

## See Also

### Parsing Strings

- [CFDateFormatterCreateDateFromString(\_:\_:\_:\_:)](cfdateformattercreatedatefromstring%28________%29.md): Returns a date object representing a given string.

# CFDateFormatterGetAbsoluteTimeFromString (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns an absolute time object representing a given string.

## Declaration

```objectivec
extern Boolean CFDateFormatterGetAbsoluteTimeFromString(CFDateFormatterRef formatter, CFStringRef string, CFRange *rangep, CFAbsoluteTime *atp);
```

## Parameters

- `formatter`: The date formatter object to use to parse `string`.
- `string`: The string that contains the time to be parsed.
- `rangep`: Reference to the range within the string specifying the substring to be parsed. If `NULL`, the whole string is parsed. On return, the range that defines the extent of the parse (may be less than the given range).
- `atp`: An absolute time value, returned by reference, that represents `string`. Ownership follows the [The Get Rule](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFMemoryMgmt/Concepts/Ownership.html#//apple_ref/doc/uid/20001148-SW1).

<a id="return-value"></a>

## Return Value

`true` if the string was parsed successfully, otherwise `false`.

## See Also

### Parsing Strings

- [CFDateFormatterCreateDateFromString](cfdateformattercreatedatefromstring%28________%29.md): Returns a date object representing a given string.
