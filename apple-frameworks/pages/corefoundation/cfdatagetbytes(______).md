> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatagetbytes(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatagetbytes(_:_:_:))

# CFDataGetBytes(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Copies the byte contents of a CFData object to an external buffer.

## Declaration

```swift
func CFDataGetBytes(_ theData: CFData!, _ range: CFRange, _ buffer: UnsafeMutablePointer<UInt8>!)
```

## Parameters

- `theData`: The CFData object to examine.
- `range`: The range of bytes in `theData` to get. To get all of the contents, pass `CFRangeMake(0,CFDataGetLength(theData))`.
- `buffer`: A pointer to the byte buffer of length `range.length` that is allocated on the stack or heap. On return, the buffer contains the requested range of bytes.

## See Also

### Examining a CFData Object

- [CFDataGetBytePtr(\_:)](cfdatagetbyteptr%28__%29.md): Returns a read-only pointer to the bytes of a CFData object.
- [CFDataGetLength(\_:)](cfdatagetlength%28__%29.md): Returns the number of bytes contained by a CFData object.
- [CFDataFind(\_:\_:\_:\_:)](cfdatafind%28________%29.md): Finds and returns the range within a data object of the first occurrence of the given data, within a given range, subject to any given options.

# CFDataGetBytes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Copies the byte contents of a CFData object to an external buffer.

## Declaration

```objectivec
extern void CFDataGetBytes(CFDataRef theData, CFRange range, UInt8 *buffer);
```

## Parameters

- `theData`: The CFData object to examine.
- `range`: The range of bytes in `theData` to get. To get all of the contents, pass `CFRangeMake(0,CFDataGetLength(theData))`.
- `buffer`: A pointer to the byte buffer of length `range.length` that is allocated on the stack or heap. On return, the buffer contains the requested range of bytes.

## See Also

### Examining a CFData Object

- [CFDataGetBytePtr](cfdatagetbyteptr%28__%29.md): Returns a read-only pointer to the bytes of a CFData object.
- [CFDataGetLength](cfdatagetlength%28__%29.md): Returns the number of bytes contained by a CFData object.
- [CFDataFind](cfdatafind%28________%29.md): Finds and returns the range within a data object of the first occurrence of the given data, within a given range, subject to any given options.
