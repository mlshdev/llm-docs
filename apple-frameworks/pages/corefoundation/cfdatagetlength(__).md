> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatagetlength(_:)](https://developer.apple.com/documentation/corefoundation/cfdatagetlength(_:))

# CFDataGetLength(\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of bytes contained by a CFData object.

## Declaration

```swift
func CFDataGetLength(_ theData: CFData!) -> CFIndex
```

## Parameters

- `theData`: The CFData object to examine.

<a id="return-value"></a>

## Return Value

An index that specifies the number of bytes in `theData`.

## See Also

### Examining a CFData Object

- [CFDataGetBytePtr(\_:)](cfdatagetbyteptr%28__%29.md): Returns a read-only pointer to the bytes of a CFData object.
- [CFDataGetBytes(\_:\_:\_:)](cfdatagetbytes%28______%29.md): Copies the byte contents of a CFData object to an external buffer.
- [CFDataFind(\_:\_:\_:\_:)](cfdatafind%28________%29.md): Finds and returns the range within a data object of the first occurrence of the given data, within a given range, subject to any given options.

# CFDataGetLength (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the number of bytes contained by a CFData object.

## Declaration

```objectivec
extern CFIndex CFDataGetLength(CFDataRef theData);
```

## Parameters

- `theData`: The CFData object to examine.

<a id="return-value"></a>

## Return Value

An index that specifies the number of bytes in `theData`.

## See Also

### Examining a CFData Object

- [CFDataGetBytePtr](cfdatagetbyteptr%28__%29.md): Returns a read-only pointer to the bytes of a CFData object.
- [CFDataGetBytes](cfdatagetbytes%28______%29.md): Copies the byte contents of a CFData object to an external buffer.
- [CFDataFind](cfdatafind%28________%29.md): Finds and returns the range within a data object of the first occurrence of the given data, within a given range, subject to any given options.
