> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfdataincreaselength(_:_:)](https://developer.apple.com/documentation/corefoundation/cfdataincreaselength(_:_:))

# CFDataIncreaseLength(\_:\_:) (Swift)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.

## Declaration

```swift
func CFDataIncreaseLength(_ theData: CFMutableData!, _ extraLength: CFIndex)
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.
- `extraLength`: The number of bytes by which to increase the byte buffer.

<a id="Discussion"></a>

## Discussion

This function increases the length of a CFMutableData object’s underlying byte buffer to a new size, initializing the new bytes to `0`.

## See Also

### Modifying a Mutable Data Object

- [CFDataAppendBytes(\_:\_:\_:)](cfdataappendbytes%28______%29.md): Appends the bytes from a byte buffer to the contents of a CFData object.
- [CFDataDeleteBytes(\_:\_:)](cfdatadeletebytes%28____%29.md): Deletes the bytes in a CFMutableData object within a specified range.
- [CFDataReplaceBytes(\_:\_:\_:\_:)](cfdatareplacebytes%28________%29.md): Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.
- [CFDataSetLength(\_:\_:)](cfdatasetlength%28____%29.md): Resets the length of a CFMutableData object’s internal byte buffer.

# CFDataIncreaseLength (Objective-C)

**Framework:** Core Foundation  
**Kind:** Function  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Increases the length of a CFMutableData object’s internal byte buffer, zero-filling the extension to the buffer.

## Declaration

```objectivec
extern void CFDataIncreaseLength(CFMutableDataRef theData, CFIndex extraLength);
```

## Parameters

- `theData`: A CFMutableData object. If you pass an immutable CFData object, the behavior is not defined.
- `extraLength`: The number of bytes by which to increase the byte buffer.

<a id="Discussion"></a>

## Discussion

This function increases the length of a CFMutableData object’s underlying byte buffer to a new size, initializing the new bytes to `0`.

## See Also

### Modifying a Mutable Data Object

- [CFDataAppendBytes](cfdataappendbytes%28______%29.md): Appends the bytes from a byte buffer to the contents of a CFData object.
- [CFDataDeleteBytes](cfdatadeletebytes%28____%29.md): Deletes the bytes in a CFMutableData object within a specified range.
- [CFDataReplaceBytes](cfdatareplacebytes%28________%29.md): Replaces those bytes in a CFMutableData object that fall within a specified range with other bytes.
- [CFDataSetLength](cfdatasetlength%28____%29.md): Resets the length of a CFMutableData object’s internal byte buffer.
