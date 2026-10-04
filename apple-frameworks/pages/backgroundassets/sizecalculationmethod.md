> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/backgroundassets/sizecalculationmethod

# SizeCalculationMethod (Swift)

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** iOS 27.2+ beta · iPadOS 27.2+ beta · Mac Catalyst 27.2+ beta · macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

Methods for calculating a file’s size.

## Declaration

```swift
enum SizeCalculationMethod
```

## Topics

### Enumeration Cases

- [SizeCalculationMethod.allocated](sizecalculationmethod/allocated.md): Beta. A calculation method that counts the number of bytes that the file system allocated for a file.
- [SizeCalculationMethod.logical](sizecalculationmethod/logical.md): Beta. A calculation method that counts the number of bytes in a file.

### Initializers

- [init(rawValue:)](sizecalculationmethod/init%28rawvalue_%29.md): Beta.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# BASizeCalculationMethod (Objective-C)

**Framework:** Background Assets  
**Kind:** Enumeration  
**Availability:** macOS 27.2+ beta · tvOS 27.2+ beta · visionOS 27.2+ beta

Methods for calculating a file’s size.

## Declaration

```objectivec
enum BASizeCalculationMethod : NSInteger;
```

## Topics

### Enumeration Cases

- [BASizeCalculationMethodAllocated](sizecalculationmethod/allocated.md): Beta. A calculation method that counts the number of bytes that the file system allocated for a file.
- [BASizeCalculationMethodLogical](sizecalculationmethod/logical.md): Beta. A calculation method that counts the number of bytes in a file.
