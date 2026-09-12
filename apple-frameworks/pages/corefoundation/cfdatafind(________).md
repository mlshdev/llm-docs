> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatafind(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatafind(_:_:_:_:))

# CFDataFind(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds and returns the range within a data object of the first occurrence of the given data, within a given range, subject to any given options.

## Declaration

```swift
func CFDataFind(_ theData: CFData!, _ dataToFind: CFData!, _ searchRange: CFRange, _ compareOptions: CFDataSearchFlags) -> CFRange
```

## Parameters

- `theData`: The data object within which to search.
- `dataToFind`: The data to find. Must not be `NULL`.
- `searchRange`: The range within `theData` to be searched.
- `compareOptions`: A bit mask specifying search options. The [CFDataSearchFlags](cfdatasearchflags.md) options can be specified singly or combined with the C bitwise `OR` operator

<a id="return-value"></a>

## Return Value

The range representing the location and length of `dataToFind` within `searchRange`, modulo the options in `compareOptions`. The range returned is relative to the start of the searched data, not the passed-in search range. Returns [kCFNotFound](kcfnotfound.md) if `dataToFind` is not found.

## See Also

### Examining a CFData Object

- [CFDataGetBytePtr(\_:)](cfdatagetbyteptr%28__%29.md): Returns a read-only pointer to the bytes of a CFData object.
- [CFDataGetBytes(\_:\_:\_:)](cfdatagetbytes%28______%29.md): Copies the byte contents of a CFData object to an external buffer.
- [CFDataGetLength(\_:)](cfdatagetlength%28__%29.md): Returns the number of bytes contained by a CFData object.

# CFDataFind (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Finds and returns the range within a data object of the first occurrence of the given data, within a given range, subject to any given options.

## Declaration

```objectivec
extern CFRange CFDataFind(CFDataRef theData, CFDataRef dataToFind, CFRange searchRange, CFDataSearchFlags compareOptions);
```

## Parameters

- `theData`: The data object within which to search.
- `dataToFind`: The data to find. Must not be `NULL`.
- `searchRange`: The range within `theData` to be searched.
- `compareOptions`: A bit mask specifying search options. The [CFDataSearchFlags](cfdatasearchflags.md) options can be specified singly or combined with the C bitwise `OR` operator

<a id="return-value"></a>

## Return Value

The range representing the location and length of `dataToFind` within `searchRange`, modulo the options in `compareOptions`. The range returned is relative to the start of the searched data, not the passed-in search range. Returns [kCFNotFound](kcfnotfound.md) if `dataToFind` is not found.

## See Also

### Examining a CFData Object

- [CFDataGetBytePtr](cfdatagetbyteptr%28__%29.md): Returns a read-only pointer to the bytes of a CFData object.
- [CFDataGetBytes](cfdatagetbytes%28______%29.md): Copies the byte contents of a CFData object to an external buffer.
- [CFDataGetLength](cfdatagetlength%28__%29.md): Returns the number of bytes contained by a CFData object.
