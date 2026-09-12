> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsflags](https://developer.apple.com/documentation/accelerate/bnnsflags)

# BNNSFlags (Swift)

**Framework:** Accelerate  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that control the behavior of a filter parameter.

## Declaration

```swift
struct BNNSFlags
```

## Topics

### Filter Flags

- [useClientPointer](bnnsflags/useclientpointer.md): A flag that instructs the filter to use pointers to data you provide at creation time.

### Raw Values

- [init(\_:)](bnnsflags/init%28__%29.md)
- [rawValue](bnnsflags/rawvalue.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

# BNNSFlags (Objective-C)

**Framework:** Accelerate  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Options that control the behavior of a filter parameter.

## Declaration

```objectivec
typedef enum { ... } BNNSFlags;
```

## Topics

### Raw Values

- [BNNSFlagsUseClientPtr](bnnsflags/bnnsflagsuseclientptr.md): A flag that instructs the filter to use pointers to data you provide at creation time.
