> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdata/readingoptions](https://developer.apple.com/documentation/foundation/nsdata/readingoptions)

# NSData.ReadingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for methods used to read data objects.

## Declaration

```swift
struct ReadingOptions
```

## Topics

### Initializers

- [init(rawValue:)](readingoptions/init%28rawvalue_%29.md)

### Constants

- [mappedIfSafe](readingoptions/mappedifsafe.md): A hint indicating the file should be mapped into virtual memory, if possible and safe.
- [uncached](readingoptions/uncached.md): A hint indicating the file should not be stored in the file-system caches.
- [alwaysMapped](readingoptions/alwaysmapped.md): Hint to map the file in if possible.

### Legacy Constants

- [dataReadingMapped](readingoptions/datareadingmapped.md): Deprecated. Deprecated name for [mappedIfSafe](readingoptions/mappedifsafe.md).
- [mappedRead](readingoptions/mappedread.md): Deprecated. Deprecated name for [dataReadingMapped](readingoptions/datareadingmapped.md).
- [uncachedRead](readingoptions/uncachedread.md): Deprecated. Deprecated name for [uncached](readingoptions/uncached.md).

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Reading Data from a File

- [init(contentsOfFile:)](init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [init(contentsOfFile:options:)](init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [init(contentsOfMappedFile:)](init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
- [dataWithContentsOfMappedFile(\_:)](datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.

# NSDataReadingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Options for methods used to read data objects.

## Declaration

```objectivec
enum NSDataReadingOptions : NSUInteger;
```

## Topics

### Constants

- [NSDataReadingMappedIfSafe](readingoptions/mappedifsafe.md): A hint indicating the file should be mapped into virtual memory, if possible and safe.
- [NSDataReadingUncached](readingoptions/uncached.md): A hint indicating the file should not be stored in the file-system caches.
- [NSDataReadingMappedAlways](readingoptions/alwaysmapped.md): Hint to map the file in if possible.

### Legacy Constants

- [NSDataReadingMapped](readingoptions/datareadingmapped.md): Deprecated. Deprecated name for [NSDataReadingMappedIfSafe](readingoptions/mappedifsafe.md).
- [NSMappedRead](readingoptions/mappedread.md): Deprecated. Deprecated name for [NSDataReadingMapped](readingoptions/datareadingmapped.md).
- [NSUncachedRead](readingoptions/uncachedread.md): Deprecated. Deprecated name for [NSDataReadingUncached](readingoptions/uncached.md).

## See Also

### Reading Data from a File

- [dataWithContentsOfFile:](datawithcontentsoffile_.md): Creates a data object by reading every byte from the file at a given path.
- [dataWithContentsOfFile:options:error:](datawithcontentsoffile_options_error_.md): Creates a data object by reading every byte from the file at a given path.
- [initWithContentsOfFile:](init%28contentsoffile_%29.md): Initializes a data object with the content of the file at a given path.
- [initWithContentsOfFile:options:error:](init%28contentsoffile_options_%29.md): Initializes a data object with the content of the file at a given path.
- [initWithContentsOfMappedFile:](init%28contentsofmappedfile_%29.md): Deprecated. Initializes a data object with the contents of the mapped file specified by a given path.
- [dataWithContentsOfMappedFile:](datawithcontentsofmappedfile%28__%29.md): Deprecated. Creates a data object from the mapped file at a given path.
