> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/readrtfd(fromfile:)](https://developer.apple.com/documentation/appkit/nstext/readrtfd(fromfile:))

# readRTFD(fromFile:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to read the RTFD file at the specified path.

## Declaration

```swift
func readRTFD(fromFile path: String) -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

`path` should be the path for an `.rtf` file or an `.rtfd` file wrapper, not for the RTF file within an `.rtfd` file wrapper.

## See Also

### Reading and writing RTF files

- [writeRTFD(toFile:atomically:)](writertfd%28tofile_atomically_%29.md): Writes the receiver’s text as RTF with attachments to a file or directory at `path`.
- [rtfd(from:)](rtfd%28from_%29.md): Returns an NSData object that contains an RTFD stream corresponding to the characters and attributes within `aRange`.
- [rtf(from:)](rtf%28from_%29.md): Returns an NSData object that contains an RTF stream corresponding to the characters and attributes within `aRange`, omitting any attachment characters and attributes.

# readRTFDFromFile: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Attempts to read the RTFD file at the specified path.

## Declaration

```objectivec
- (BOOL) readRTFDFromFile:(NSString *) path;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

`path` should be the path for an `.rtf` file or an `.rtfd` file wrapper, not for the RTF file within an `.rtfd` file wrapper.

## See Also

### Reading and writing RTF files

- [writeRTFDToFile:atomically:](writertfd%28tofile_atomically_%29.md): Writes the receiver’s text as RTF with attachments to a file or directory at `path`.
- [RTFDFromRange:](rtfd%28from_%29.md): Returns an NSData object that contains an RTFD stream corresponding to the characters and attributes within `aRange`.
- [RTFFromRange:](rtf%28from_%29.md): Returns an NSData object that contains an RTF stream corresponding to the characters and attributes within `aRange`, omitting any attachment characters and attributes.
