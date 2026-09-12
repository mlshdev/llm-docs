> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatadeletebytes(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatadeletebytes(_:_:))

# CFDataDeleteBytes(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Deletes the bytes in a CFMutableData object within a specified range.

## Declaration

```swift
func CFDataDeleteBytes(_ theData: CFMutableData!, _ range: CFRange)
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.
- `range`: The range of bytes (that is, the starting byte and the number of bytes from that point) to delete from `theData`’s byte buffer.

## See Also

### Modifying a Mutable Data Object

- [CFDataAppendBytes(\_:\_:\_:)](cfdataappendbytes%28______%29.md): Appends the bytes from a byte buffer to the contents of a CFData object.
- [CFDataReplaceBytes(\_:\_:\_:\_:)](cfdatareplacebytes%28________%29.md): Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.
- [CFDataIncreaseLength(\_:\_:)](cfdataincreaselength%28____%29.md): Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.
- [CFDataSetLength(\_:\_:)](cfdatasetlength%28____%29.md): Resets the length of a CFMutableData object’s internal byte buffer.

# CFDataDeleteBytes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Deletes the bytes in a CFMutableData object within a specified range.

## Declaration

```objectivec
extern void CFDataDeleteBytes(CFMutableDataRef theData, CFRange range);
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.
- `range`: The range of bytes (that is, the starting byte and the number of bytes from that point) to delete from `theData`’s byte buffer.

## See Also

### Modifying a Mutable Data Object

- [CFDataAppendBytes](cfdataappendbytes%28______%29.md): Appends the bytes from a byte buffer to the contents of a CFData object.
- [CFDataReplaceBytes](cfdatareplacebytes%28________%29.md): Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.
- [CFDataIncreaseLength](cfdataincreaselength%28____%29.md): Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.
- [CFDataSetLength](cfdatasetlength%28____%29.md): Resets the length of a CFMutableData object’s internal byte buffer.
