> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/write(to:atomically:)](https://developer.apple.com/documentation/foundation/nsdata/write(to:atomically:))

# write(to:atomically:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the data object’s bytes to the location specified by a given URL.

## Declaration

```swift
func write(to url: URL, atomically: Bool) -> Bool
```

## Parameters

- `url`: The location to which to write the receiver’s bytes. Only `file://` URLs are supported.
- `atomically`: If [true](https://developer.apple.com/documentation/swift/true), the data is written to a backup location, and then—assuming no errors occur—the backup location is renamed to the name specified by `aURL`; otherwise, the data is written directly to `aURL`. `atomically` is ignored if `aURL` is not of a type the supports atomic writes.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Since at present only `file://` URLs are supported, there is no difference between this method and [write(toFile:atomically:)](write%28tofile_atomically_%29.md), except for the type of the first argument.

This method may not be appropriate when writing to publicly accessible files. To securely write data to a public location, use [FileHandle](../filehandle.md) instead. For more information, see [Securing File Operations](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585-SW9) in [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).

## See Also

### Writing Data to a File

- [write(toFile:atomically:)](write%28tofile_atomically_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [write(toFile:options:)](write%28tofile_options_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [write(to:options:)](write%28to_options_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [NSData.WritingOptions](writingoptions.md): Options for methods used to write data objects.

# writeToURL:atomically: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writes the data object’s bytes to the location specified by a given URL.

## Declaration

```objectivec
- (BOOL) writeToURL:(NSURL *) url atomically:(BOOL) atomically;
```

## Parameters

- `url`: The location to which to write the receiver’s bytes. Only `file://` URLs are supported.
- `atomically`: If [true](https://developer.apple.com/documentation/swift/true), the data is written to a backup location, and then—assuming no errors occur—the backup location is renamed to the name specified by `aURL`; otherwise, the data is written directly to `aURL`. `atomically` is ignored if `aURL` is not of a type the supports atomic writes.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the operation succeeds, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Since at present only `file://` URLs are supported, there is no difference between this method and [writeToFile:atomically:](write%28tofile_atomically_%29.md), except for the type of the first argument.

This method may not be appropriate when writing to publicly accessible files. To securely write data to a public location, use [NSFileHandle](../filehandle.md) instead. For more information, see [Securing File Operations](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Articles/RaceConditions.html#//apple_ref/doc/uid/TP40002585-SW9) in [Secure Coding Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html#//apple_ref/doc/uid/TP40002415).

## See Also

### Writing Data to a File

- [writeToFile:atomically:](write%28tofile_atomically_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [writeToFile:options:error:](write%28tofile_options_%29.md): Writes the data object’s bytes to the file specified by a given path.
- [writeToURL:options:error:](write%28to_options_%29.md): Writes the data object’s bytes to the location specified by a given URL.
- [NSDataWritingOptions](writingoptions.md): Options for methods used to write data objects.
