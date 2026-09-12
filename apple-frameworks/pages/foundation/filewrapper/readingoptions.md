> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/readingoptions](https://developer.apple.com/documentation/foundation/filewrapper/readingoptions)

# FileWrapper.ReadingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reading options that can be set by the [init(url:options:)](init%28url_options_%29-70161.md) and [read(from:options:)](read%28from_options_%29.md) methods.

## Declaration

```swift
struct ReadingOptions
```

<a id="overview"></a>

## Overview

You can use the `NSFileWrapperReadingImmediate` and `NSFileWrapperReadingWithoutMapping` reading options together to take an exact snapshot of a file-system hierarchy that is safe from all errors (including the ones mentioned above) once reading has succeeded. If reading with both options succeeds, then subsequent invocations of the methods listed in the comment for the `NSFileWrapperReadingImmediate` reading option to the receiver and all its descendant file wrappers will never fail. However, note that reading with both options together is expensive in terms of both I/O and memory for large files, or directories containing large files, or even directories containing many small files.

## Topics

### Constants

- [immediate](readingoptions/immediate.md): The option to read files immediately after creating a file wrapper.
- [withoutMapping](readingoptions/withoutmapping.md): Whether file mapping for regular file wrappers is disallowed.

### Initializers

- [init(rawValue:)](readingoptions/init%28rawvalue_%29.md)

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

### Constants

- [FileWrapper.WritingOptions](writingoptions.md): Writing options that can be set by the [write(to:options:originalContentsURL:)](write%28to_options_originalcontentsurl_%29.md) method.

# NSFileWrapperReadingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Reading options that can be set by the [initWithURL:options:error:](init%28url_options_%29-70161.md) and [readFromURL:options:error:](read%28from_options_%29.md) methods.

## Declaration

```objectivec
enum NSFileWrapperReadingOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

You can use the `NSFileWrapperReadingImmediate` and `NSFileWrapperReadingWithoutMapping` reading options together to take an exact snapshot of a file-system hierarchy that is safe from all errors (including the ones mentioned above) once reading has succeeded. If reading with both options succeeds, then subsequent invocations of the methods listed in the comment for the `NSFileWrapperReadingImmediate` reading option to the receiver and all its descendant file wrappers will never fail. However, note that reading with both options together is expensive in terms of both I/O and memory for large files, or directories containing large files, or even directories containing many small files.

## Topics

### Constants

- [NSFileWrapperReadingImmediate](readingoptions/immediate.md): The option to read files immediately after creating a file wrapper.
- [NSFileWrapperReadingWithoutMapping](readingoptions/withoutmapping.md): Whether file mapping for regular file wrappers is disallowed.

## See Also

### Constants

- [NSFileWrapperWritingOptions](writingoptions.md): Writing options that can be set by the [writeToURL:options:originalContentsURL:error:](write%28to_options_originalcontentsurl_%29.md) method.
