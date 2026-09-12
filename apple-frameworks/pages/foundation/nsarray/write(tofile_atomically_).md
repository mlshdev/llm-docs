> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsarray/write(tofile:atomically:)](https://developer.apple.com/documentation/foundation/nsarray/write(tofile:atomically:))

# write(toFile:atomically:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Writes the contents of the array to a file at a given path.

## Declaration

```swift
func write(toFile path: String, atomically useAuxiliaryFile: Bool) -> Bool
```

## Parameters

- `path`: The path at which to write the contents of the array.

  If `path` contains a tilde (~) character, you must expand it with [expandingTildeInPath](../nsstring/expandingtildeinpath.md) before invoking this method.
- `useAuxiliaryFile`: If [true](https://developer.apple.com/documentation/swift/true), the array is written to an auxiliary file, and then the auxiliary file is renamed to `path`. If [false](https://developer.apple.com/documentation/swift/false), the array is written directly to `path`. The [true](https://developer.apple.com/documentation/swift/true) option guarantees that `path`, if it exists at all, won’t be corrupted even if the system should crash during writing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file is written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the array’s contents are all property list objects (`NSString`, `NSData`, `NSArray`, or `NSDictionary` objects), the file written by this method can be used to initialize a new array with the class method [arrayWithContentsOfFile:](arraywithcontentsoffile_.md) or the instance method [init(contentsOfFile:)](init%28contentsoffile_%29.md). This method recursively validates that all the contained objects are property list objects before writing out the file, and returns [false](https://developer.apple.com/documentation/swift/false) if all the objects are not property list objects, since the resultant file would not be a valid property list.

## See Also

### Related Documentation

- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated array with the contents of the file specified by a given path.

### Storing Arrays

- [write(to:atomically:)](write%28to_atomically_%29.md): Deprecated. Writes the contents of the array to the location specified by a given URL.

# writeToFile:atomically: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.0+ (deprecated in 27.0) · tvOS 9.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0) · watchOS 2.0+ (deprecated in 27.0)

Writes the contents of the array to a file at a given path.

## Declaration

```objectivec
- (BOOL) writeToFile:(NSString *) path atomically:(BOOL) useAuxiliaryFile;
```

## Parameters

- `path`: The path at which to write the contents of the array.

  If `path` contains a tilde (~) character, you must expand it with [stringByExpandingTildeInPath](../nsstring/expandingtildeinpath.md) before invoking this method.
- `useAuxiliaryFile`: If [true](https://developer.apple.com/documentation/swift/true), the array is written to an auxiliary file, and then the auxiliary file is renamed to `path`. If [false](https://developer.apple.com/documentation/swift/false), the array is written directly to `path`. The [true](https://developer.apple.com/documentation/swift/true) option guarantees that `path`, if it exists at all, won’t be corrupted even if the system should crash during writing.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the file is written successfully, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

If the array’s contents are all property list objects (`NSString`, `NSData`, `NSArray`, or `NSDictionary` objects), the file written by this method can be used to initialize a new array with the class method [arrayWithContentsOfFile:](arraywithcontentsoffile_.md) or the instance method [initWithContentsOfFile:](init%28contentsoffile_%29.md). This method recursively validates that all the contained objects are property list objects before writing out the file, and returns [false](https://developer.apple.com/documentation/swift/false) if all the objects are not property list objects, since the resultant file would not be a valid property list.

## See Also

### Related Documentation

- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Deprecated. Initializes a newly allocated array with the contents of the file specified by a given path.

### Storing Arrays

- [writeToURL:atomically:](write%28to_atomically_%29.md): Deprecated. Writes the contents of the array to the location specified by a given URL.
