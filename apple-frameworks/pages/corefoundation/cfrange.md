> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cfrange](https://developer.apple.com/documentation/corefoundation/cfrange)

# CFRange (Swift)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure representing a range of sequential items in a container, such as characters in a buffer or elements in a collection.

## Declaration

```swift
struct CFRange
```

## Topics

### Initializers

- [init()](cfrange/init%28%29.md)
- [init(location:length:)](cfrange/init%28location_length_%29.md)

### Instance Properties

- [length](cfrange/length.md): An integer representing the number of items in the range. For type compatibility with the rest of the system, `LONG_MAX` is the maximum value you should use for length.
- [location](cfrange/location.md): An integer representing the starting location of the range. For type compatibility with the rest of the system, `LONG_MAX` is the maximum value you should use for location.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Data Types

- [CFIndex](cfindex.md): Priority values used for kAXPriorityKey
- [CFOptionFlags](cfoptionflags.md): A bitfield used for passing special allocation and other requests into Core Foundation functions.

# CFRange (Objective-C)

**Framework:** Core Foundation  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A structure representing a range of sequential items in a container, such as characters in a buffer or elements in a collection.

## Declaration

```objectivec
typedef struct { ... } CFRange;
```

## Topics

### Instance Properties

- [length](cfrange/length.md): An integer representing the number of items in the range. For type compatibility with the rest of the system, `LONG_MAX` is the maximum value you should use for length.
- [location](cfrange/location.md): An integer representing the starting location of the range. For type compatibility with the rest of the system, `LONG_MAX` is the maximum value you should use for location.

## See Also

### Data Types

- [CFIndex](cfindex.md): Priority values used for kAXPriorityKey
- [CFOptionFlags](cfoptionflags.md): A bitfield used for passing special allocation and other requests into Core Foundation functions.
