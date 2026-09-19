> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/oslog/oslogposition

# OSLogPosition (Swift)

**Framework:** OSLog  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A representation of a point in a sequence of entries in the unified logging system.

## Declaration

```swift
class OSLogPosition
```

<a id="overview"></a>

## Overview

Generate positions with [OSLogStore](oslogstore.md) instance methods and use them to view entries from a particular starting point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Entry Data

- [OSLogMessageComponent](oslogmessagecomponent.md): The message arguments for a particular entry.

# OSLogPosition (Objective-C)

**Framework:** OSLog  
**Kind:** Class  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 10.15+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A representation of a point in a sequence of entries in the unified logging system.

## Declaration

```objectivec
@interface OSLogPosition : NSObject
```

<a id="overview"></a>

## Overview

Generate positions with [OSLogStore](oslogstore.md) instance methods and use them to view entries from a particular starting point.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Entry Data

- [OSLogMessageComponent](oslogmessagecomponent.md): The message arguments for a particular entry.
