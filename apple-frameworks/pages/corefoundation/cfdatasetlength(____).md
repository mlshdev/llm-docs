> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdatasetlength(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdatasetlength(_:_:))

# CFDataSetLength(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Resets the length of a CFMutableData object’s internal byte buffer.

## Declaration

```swift
func CFDataSetLength(_ theData: CFMutableData!, _ length: CFIndex)
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.
- `length`: The new size of `theData`’s byte buffer.

<a id="Discussion"></a>

## Discussion

This function resets the length of a CFMutableData object’s underlying byte buffer to a new size. If that size is less than the current size, it truncates the excess bytes. If that size is greater than the current size, it zero-fills the extension to the byte buffer.

## See Also

### Modifying a Mutable Data Object

- [CFDataAppendBytes(\_:\_:\_:)](cfdataappendbytes%28______%29.md): Appends the bytes from a byte buffer to the contents of a CFData object.
- [CFDataDeleteBytes(\_:\_:)](cfdatadeletebytes%28____%29.md): Deletes the bytes in a CFMutableData object within a specified range.
- [CFDataReplaceBytes(\_:\_:\_:\_:)](cfdatareplacebytes%28________%29.md): Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.
- [CFDataIncreaseLength(\_:\_:)](cfdataincreaselength%28____%29.md): Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.

# CFDataSetLength (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Resets the length of a CFMutableData object’s internal byte buffer.

## Declaration

```objectivec
extern void CFDataSetLength(CFMutableDataRef theData, CFIndex length);
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.
- `length`: The new size of `theData`’s byte buffer.

<a id="Discussion"></a>

## Discussion

This function resets the length of a CFMutableData object’s underlying byte buffer to a new size. If that size is less than the current size, it truncates the excess bytes. If that size is greater than the current size, it zero-fills the extension to the byte buffer.

## See Also

### Modifying a Mutable Data Object

- [CFDataAppendBytes](cfdataappendbytes%28______%29.md): Appends the bytes from a byte buffer to the contents of a CFData object.
- [CFDataDeleteBytes](cfdatadeletebytes%28____%29.md): Deletes the bytes in a CFMutableData object within a specified range.
- [CFDataReplaceBytes](cfdatareplacebytes%28________%29.md): Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.
- [CFDataIncreaseLength](cfdataincreaselength%28____%29.md): Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.
