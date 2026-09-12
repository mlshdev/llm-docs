> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdataappendbytes(_:_:_:)](https://developer.apple.com/documentation/corefoundation/cfdataappendbytes(_:_:_:))

# CFDataAppendBytes(\_:\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Appends the bytes from a byte buffer to the contents of a CFData object.

## Declaration

```swift
func CFDataAppendBytes(_ theData: CFMutableData!, _ bytes: UnsafePointer<UInt8>!, _ length: CFIndex)
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.
- `bytes`: A pointer to the buffer of bytes to be added to `theData`.
- `length`: The number of bytes in the byte buffer `bytes`.

## See Also

### Modifying a Mutable Data Object

- [CFDataDeleteBytes(\_:\_:)](cfdatadeletebytes%28____%29.md): Deletes the bytes in a CFMutableData object within a specified range.
- [CFDataReplaceBytes(\_:\_:\_:\_:)](cfdatareplacebytes%28________%29.md): Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.
- [CFDataIncreaseLength(\_:\_:)](cfdataincreaselength%28____%29.md): Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.
- [CFDataSetLength(\_:\_:)](cfdatasetlength%28____%29.md): Resets the length of a CFMutableData object’s internal byte buffer.

# CFDataAppendBytes (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Appends the bytes from a byte buffer to the contents of a CFData object.

## Declaration

```objectivec
extern void CFDataAppendBytes(CFMutableDataRef theData, const UInt8 *bytes, CFIndex length);
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.
- `bytes`: A pointer to the buffer of bytes to be added to `theData`.
- `length`: The number of bytes in the byte buffer `bytes`.

## See Also

### Modifying a Mutable Data Object

- [CFDataDeleteBytes](cfdatadeletebytes%28____%29.md): Deletes the bytes in a CFMutableData object within a specified range.
- [CFDataReplaceBytes](cfdatareplacebytes%28________%29.md): Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.
- [CFDataIncreaseLength](cfdataincreaselength%28____%29.md): Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.
- [CFDataSetLength](cfdatasetlength%28____%29.md): Resets the length of a CFMutableData object’s internal byte buffer.
