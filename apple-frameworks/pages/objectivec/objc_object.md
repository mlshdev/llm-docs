> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_object](https://developer.apple.com/documentation/objectivec/objc_object)

# objc_object (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Represents an instance of a class.

## Declaration

```swift
struct objc_object
```

## Topics

### Initializers

- [init(isa:)](objc_object/init%28isa_%29.md)

### Instance Properties

- [isa](objc_object/isa.md): Deprecated. A pointer to the class definition of which this object is an instance.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Instance Data Types

- [objc_super](objc_super-swift.struct.md): Specifies the superclass of an instance.

# objc_object (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Represents an instance of a class.

## Declaration

```objectivec
struct objc_object;
```

## Topics

### Instance Properties

- [isa](objc_object/isa.md): Deprecated. A pointer to the class definition of which this object is an instance.

## See Also

### Instance Data Types

- [id](id.md): A pointer to an instance of a class.
- [objc_super](objc_super-swift.struct.md): Specifies the superclass of an instance.
