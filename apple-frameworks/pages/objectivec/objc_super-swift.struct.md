> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_super-swift.struct](https://developer.apple.com/documentation/objectivec/objc_super-swift.struct)

# objc_super (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies the superclass of an instance.

## Declaration

```swift
struct objc_super
```

<a id="Discussion"></a>

## Discussion

The compiler generates an `objc_super` data structure when it encounters the `super` keyword as the receiver of a message. It specifies the class definition of the particular superclass that should be messaged.

## Topics

### Fields

- [receiver](objc_super-swift.struct/receiver.md): A pointer of type [objc_object](objc_object.md). Specifies an instance of a class.
- [super_class](objc_super-swift.struct/super_class.md): A pointer to a [Class](class.md) data structure. Specifies the particular superclass of the instance to message.

### Instance Properties

- [receiver](objc_super-swift.struct/receiver.md): A pointer of type [objc_object](objc_object.md). Specifies an instance of a class.
- [super_class](objc_super-swift.struct/super_class.md): A pointer to a [Class](class.md) data structure. Specifies the particular superclass of the instance to message.

### Initializers

- [init(receiver:super_class:)](objc_super-swift.struct/init%28receiver_super_class_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Instance Data Types

- [objc_object](objc_object.md): Represents an instance of a class.

# objc_super (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Specifies the superclass of an instance.

## Declaration

```objectivec
struct objc_super;
```

<a id="Discussion"></a>

## Discussion

The compiler generates an `objc_super` data structure when it encounters the `super` keyword as the receiver of a message. It specifies the class definition of the particular superclass that should be messaged.

## Topics

### Fields

- [receiver](objc_super-swift.struct/receiver.md): A pointer of type [objc_object](objc_object.md). Specifies an instance of a class.
- [super_class](objc_super-swift.struct/super_class.md): A pointer to a [Class](class.md) data structure. Specifies the particular superclass of the instance to message.

### Instance Properties

- [receiver](objc_super-swift.struct/receiver.md): A pointer of type [objc_object](objc_object.md). Specifies an instance of a class.
- [super_class](objc_super-swift.struct/super_class.md): A pointer to a [Class](class.md) data structure. Specifies the particular superclass of the instance to message.

## See Also

### Instance Data Types

- [objc_object](objc_object.md): Represents an instance of a class.
- [id](id.md): A pointer to an instance of a class.
