> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/rtf(from:)](https://developer.apple.com/documentation/appkit/nstext/rtf(from:))

# rtf(from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an NSData object that contains an RTF stream corresponding to the characters and attributes within `aRange`, omitting any attachment characters and attributes.

## Declaration

```swift
func rtf(from range: NSRange) -> Data?
```

<a id="Discussion"></a>

## Discussion

Raises an `NSRangeException` if any part of `aRange` lies beyond the end of the receiver’s characters.

When writing data to the pasteboard, you can use the NSData object as the first argument to `NSPasteboard`’s [setData(\_:forType:)](../nspasteboard/setdata%28__fortype_%29.md) method, with a second argument of `NSRTFPboardType`.

## See Also

### Reading and writing RTF files

- [readRTFD(fromFile:)](readrtfd%28fromfile_%29.md): Attempts to read the RTFD file at the specified path.
- [writeRTFD(toFile:atomically:)](writertfd%28tofile_atomically_%29.md): Writes the receiver’s text as RTF with attachments to a file or directory at `path`.
- [rtfd(from:)](rtfd%28from_%29.md): Returns an NSData object that contains an RTFD stream corresponding to the characters and attributes within `aRange`.

# RTFFromRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns an NSData object that contains an RTF stream corresponding to the characters and attributes within `aRange`, omitting any attachment characters and attributes.

## Declaration

```objectivec
- (NSData *) RTFFromRange:(NSRange) range;
```

<a id="Discussion"></a>

## Discussion

Raises an `NSRangeException` if any part of `aRange` lies beyond the end of the receiver’s characters.

When writing data to the pasteboard, you can use the NSData object as the first argument to `NSPasteboard`’s [setData:forType:](../nspasteboard/setdata%28__fortype_%29.md) method, with a second argument of `NSRTFPboardType`.

## See Also

### Reading and writing RTF files

- [readRTFDFromFile:](readrtfd%28fromfile_%29.md): Attempts to read the RTFD file at the specified path.
- [writeRTFDToFile:atomically:](writertfd%28tofile_atomically_%29.md): Writes the receiver’s text as RTF with attachments to a file or directory at `path`.
- [RTFDFromRange:](rtfd%28from_%29.md): Returns an NSData object that contains an RTFD stream corresponding to the characters and attributes within `aRange`.
