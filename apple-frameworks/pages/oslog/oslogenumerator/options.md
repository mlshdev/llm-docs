> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogenumerator/options](https://developer.apple.com/documentation/oslog/oslogenumerator/options)

# OSLogEnumerator.Options (Swift)

**Framework:** OSLog  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Option to control the direction of the iteration.

## Declaration

```swift
struct Options
```

## Topics

### Changing Directions

- [reverse](options/reverse.md): Tells the framework to iterate backwards.

### Initializers

- [init(rawValue:)](options/init%28rawvalue_%29.md)

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

# OSLogEnumeratorOptions (Objective-C)

**Framework:** OSLog  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Option to control the direction of the iteration.

## Declaration

```objectivec
enum OSLogEnumeratorOptions : NSUInteger;
```

## Topics

### Changing Directions

- [OSLogEnumeratorReverse](options/reverse.md): Tells the framework to iterate backwards.
