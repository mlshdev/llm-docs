> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatagetbyteptr(_:)](https://developer.apple.com/documentation/corefoundation/cfdatagetbyteptr(_:))

# CFDataGetBytePtr(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a read-only pointer to the bytes of a CFData object.

## Declaration

```swift
func CFDataGetBytePtr(_ theData: CFData!) -> UnsafePointer<UInt8>!
```

## Parameters

- `theData`: The CFData object to examine.

<a id="return-value"></a>

## Return Value

A read-only pointer to the bytes associated with `theData`.

<a id="Discussion"></a>

## Discussion

This function is guaranteed to return a pointer to a CFData object’s internal bytes. CFData, unlike CFString, does not hide its internal storage.

## See Also

### Examining a CFData Object

- [CFDataGetBytes(\_:\_:\_:)](cfdatagetbytes%28______%29.md): Copies the byte contents of a CFData object to an external buffer.
- [CFDataGetLength(\_:)](cfdatagetlength%28__%29.md): Returns the number of bytes contained by a CFData object.
- [CFDataFind(\_:\_:\_:\_:)](cfdatafind%28________%29.md): Finds and returns the range within a data object of the first occurrence of the given data, within a given range, subject to any given options.

# CFDataGetBytePtr (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns a read-only pointer to the bytes of a CFData object.

## Declaration

```objectivec
extern const UInt8 *CFDataGetBytePtr(CFDataRef theData);
```

## Parameters

- `theData`: The CFData object to examine.

<a id="return-value"></a>

## Return Value

A read-only pointer to the bytes associated with `theData`.

<a id="Discussion"></a>

## Discussion

This function is guaranteed to return a pointer to a CFData object’s internal bytes. CFData, unlike CFString, does not hide its internal storage.

## See Also

### Examining a CFData Object

- [CFDataGetBytes](cfdatagetbytes%28______%29.md): Copies the byte contents of a CFData object to an external buffer.
- [CFDataGetLength](cfdatagetlength%28__%29.md): Returns the number of bytes contained by a CFData object.
- [CFDataFind](cfdatafind%28________%29.md): Finds and returns the range within a data object of the first occurrence of the given data, within a given range, subject to any given options.
