> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/oslog/oslogenumerator](https://developer.apple.com/documentation/oslog/oslogenumerator)

# OSLogEnumerator (Swift)

**Framework:** OSLog  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An enumerator that can access and list log entries.

## Declaration

```swift
class OSLogEnumerator
```

## Topics

### Enumerator Options

- [OSLogEnumerator.Options](oslogenumerator/options.md): Option to control the direction of the iteration.

## Relationships

### Inherits From

- [NSEnumerator](../foundation/nsenumerator.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSFastEnumeration](../foundation/nsfastenumeration.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Read Log Entries

- [OSLogStore](oslogstore.md): A set of entries from the unified logging system.

# OSLogEnumerator (Objective-C)

**Framework:** OSLog  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

An enumerator that can access and list log entries.

## Declaration

```objectivec
@interface OSLogEnumerator : NSEnumerator
```

## Topics

### Enumerator Options

- [OSLogEnumeratorOptions](oslogenumerator/options.md): Option to control the direction of the iteration.

## Relationships

### Inherits From

- [NSEnumerator](../foundation/nsenumerator.md)

## See Also

### Read Log Entries

- [OSLogStore](oslogstore.md): A set of entries from the unified logging system.
