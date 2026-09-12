> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/write(tofile:atomically:)](https://developer.apple.com/documentation/foundation/nsdata/write(tofile:atomically:))

# write(toFile:atomically:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the data object’s bytes to the file specified by a given path.

## Declaration

```swift
func write(toFile path: String, atomically useAuxiliaryFile: Bool) -> Bool
```

## Parameters

- `path`: The location to which to write the receiver’s bytes. If `path` contains a tilde (~) character, you must expand it with [expandingTildeInPath](../nsstring/expandingtildeinpath.md) before invoking this method.
- `useAuxiliaryFile`: If [true](https://developer.apple.com/documentation/swift/true), the data is written to a backup file, and then—assuming no errors occur—the backup file is renamed to the name specified by `path`; otherwise, the data is written directly to `path`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may not be appropriate when writing to publicly accessible files. To securely write data to a public location, use [FileHandle](../filehandle.md) instead. For more information, see [Securing File Operations](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585-SW9) in [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).

## See Also

### Writing Data to a File

- [write(toFile:options:)](write%28tofile_options_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [write(to:atomically:)](write%28to_atomically_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [write(to:options:)](write%28to_options_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [NSData.WritingOptions](writingoptions.md): Options for methods used to write data objects.

# writeToFile:atomically: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the data object’s bytes to the file specified by a given path.

## Declaration

```objectivec
- (BOOL) writeToFile:(NSString *) path atomically:(BOOL) useAuxiliaryFile;
```

## Parameters

- `path`: The location to which to write the receiver’s bytes. If `path` contains a tilde (~) character, you must expand it with [stringByExpandingTildeInPath](../nsstring/expandingtildeinpath.md) before invoking this method.
- `useAuxiliaryFile`: If [true](https://developer.apple.com/documentation/swift/true), the data is written to a backup file, and then—assuming no errors occur—the backup file is renamed to the name specified by `path`; otherwise, the data is written directly to `path`.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

This method may not be appropriate when writing to publicly accessible files. To securely write data to a public location, use [NSFileHandle](../filehandle.md) instead. For more information, see [Securing File Operations](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585-SW9) in [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).

## See Also

### Writing Data to a File

- [writeToFile:options:error:](write%28tofile_options_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [writeToURL:atomically:](write%28to_atomically_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [writeToURL:options:error:](write%28to_options_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [NSDataWritingOptions](writingoptions.md): Options for methods used to write data objects.
