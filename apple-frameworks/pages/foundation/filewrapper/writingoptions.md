> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/filewrapper/writingoptions](https://developer.apple.com/documentation/foundation/filewrapper/writingoptions)

# FileWrapper.WritingOptions (Swift)

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writing options that can be set by the [write(to:options:originalContentsURL:)](write%28to_options_originalcontentsurl_%29.md) method.

## Declaration

```swift
struct WritingOptions
```

## Topics

### Constants

- [atomic](writingoptions/atomic.md): Whether writing is done atomically.
- [withNameUpdating](writingoptions/withnameupdating.md): Whether descendant file wrappers’[filename](filename.md) properties are set if the writing succeeds.

### Initializers

- [init(rawValue:)](writingoptions/init%28rawvalue_%29.md)

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

- [FileWrapper.ReadingOptions](readingoptions.md): Reading options that can be set by the [init(url:options:)](init%28url_options_%29-70161.md) and [read(from:options:)](read%28from_options_%29.md) methods.

# NSFileWrapperWritingOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Writing options that can be set by the [writeToURL:options:originalContentsURL:error:](write%28to_options_originalcontentsurl_%29.md) method.

## Declaration

```objectivec
enum NSFileWrapperWritingOptions : NSUInteger;
```

## Topics

### Constants

- [NSFileWrapperWritingAtomic](writingoptions/atomic.md): Whether writing is done atomically.
- [NSFileWrapperWritingWithNameUpdating](writingoptions/withnameupdating.md): Whether descendant file wrappers’[filename](filename.md) properties are set if the writing succeeds.

## See Also

### Constants

- [NSFileWrapperReadingOptions](readingoptions.md): Reading options that can be set by the [initWithURL:options:error:](init%28url_options_%29-70161.md) and [readFromURL:options:error:](read%28from_options_%29.md) methods.
