> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatareplacebytes(_:_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatareplacebytes(_:_:_:_:))

# CFDataReplaceBytes(\_:\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.

## Declaration

```swift
func CFDataReplaceBytes(_ theData: CFMutableData!, _ range: CFRange, _ newBytes: UnsafePointer<UInt8>!, _ newLength: CFIndex)
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.
- `range`: The range of bytes (that is, the starting byte and the number of bytes from that point) to delete from `theData`’s byte buffer.
- `newBytes`: A pointer to the buffer containing the replacement bytes.
- `newLength`: The number of bytes in the byte buffer `newBytes`.

## See Also

### Modifying a Mutable Data Object

- [CFDataAppendBytes(\_:\_:\_:)](cfdataappendbytes%28______%29.md): Appends the bytes from a byte buffer to the contents of a CFData object.
- [CFDataDeleteBytes(\_:\_:)](cfdatadeletebytes%28____%29.md): Deletes the bytes in a CFMutableData object within a specified range.
- [CFDataIncreaseLength(\_:\_:)](cfdataincreaselength%28____%29.md): Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.
- [CFDataSetLength(\_:\_:)](cfdatasetlength%28____%29.md): Resets the length of a CFMutableData object’s internal byte buffer.

# CFDataReplaceBytes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.

## Declaration

```objectivec
extern void CFDataReplaceBytes(CFMutableDataRef theData, CFRange range, const UInt8 *newBytes, CFIndex newLength);
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.
- `range`: The range of bytes (that is, the starting byte and the number of bytes from that point) to delete from `theData`’s byte buffer.
- `newBytes`: A pointer to the buffer containing the replacement bytes.
- `newLength`: The number of bytes in the byte buffer `newBytes`.

## See Also

### Modifying a Mutable Data Object

- [CFDataAppendBytes](cfdataappendbytes%28______%29.md): Appends the bytes from a byte buffer to the contents of a CFData object.
- [CFDataDeleteBytes](cfdatadeletebytes%28____%29.md): Deletes the bytes in a CFMutableData object within a specified range.
- [CFDataIncreaseLength](cfdataincreaselength%28____%29.md): Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.
- [CFDataSetLength](cfdatasetlength%28____%29.md): Resets the length of a CFMutableData object’s internal byte buffer.
