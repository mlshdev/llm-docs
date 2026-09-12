> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/writertfd(tofile:atomically:)](https://developer.apple.com/documentation/appkit/nstext/writertfd(tofile:atomically:))

# writeRTFD(toFile:atomically:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the receiver’s text as RTF with attachments to a file or directory at `path`.

## Declaration

```swift
func writeRTFD(toFile path: String, atomically flag: Bool) -> Bool
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) on success and [false](https://developer.apple.com/documentation/swift/false) on failure. If `atomicFlag` is [true](https://developer.apple.com/documentation/swift/true), attempts to write the file safely so that an existing file at `path` is not overwritten, nor does a new file at `path` actually get created, unless the write is successful.

## See Also

### Reading and writing RTF files

- [readRTFD(fromFile:)](readrtfd%28fromfile_%29.md): Attempts to read the RTFD file at the specified path.
- [rtfd(from:)](rtfd%28from_%29.md): Returns an NSData object that contains an RTFD stream corresponding to the characters and attributes within `aRange`.
- [rtf(from:)](rtf%28from_%29.md): Returns an NSData object that contains an RTF stream corresponding to the characters and attributes within `aRange`, omitting any attachment characters and attributes.

# writeRTFDToFile:atomically: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Writes the receiver’s text as RTF with attachments to a file or directory at `path`.

## Declaration

```objectivec
- (BOOL) writeRTFDToFile:(NSString *) path atomically:(BOOL) flag;
```

<a id="Discussion"></a>

## Discussion

Returns [true](https://developer.apple.com/documentation/swift/true) on success and [false](https://developer.apple.com/documentation/swift/false) on failure. If `atomicFlag` is [true](https://developer.apple.com/documentation/swift/true), attempts to write the file safely so that an existing file at `path` is not overwritten, nor does a new file at `path` actually get created, unless the write is successful.

## See Also

### Reading and writing RTF files

- [readRTFDFromFile:](readrtfd%28fromfile_%29.md): Attempts to read the RTFD file at the specified path.
- [RTFDFromRange:](rtfd%28from_%29.md): Returns an NSData object that contains an RTFD stream corresponding to the characters and attributes within `aRange`.
- [RTFFromRange:](rtf%28from_%29.md): Returns an NSData object that contains an RTF stream corresponding to the characters and attributes within `aRange`, omitting any attachment characters and attributes.
