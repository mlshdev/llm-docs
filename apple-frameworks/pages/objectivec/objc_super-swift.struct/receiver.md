> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/objc_super-swift.struct/receiver](https://developer.apple.com/documentation/objectivec/objc_super-swift.struct/receiver)

# receiver (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer of type [objc_object](../objc_object.md). Specifies an instance of a class.

## Declaration

```swift
var receiver: Unmanaged<AnyObject>
```

## See Also

### Fields

- [super_class](super_class.md): A pointer to a [Class](../class.md) data structure. Specifies the particular superclass of the instance to message.

# receiver (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer of type [objc_object](../objc_object.md). Specifies an instance of a class.

## Declaration

```objectivec
id receiver;
```

## See Also

### Fields

- [super_class](super_class.md): A pointer to a [Class](../class.md) data structure. Specifies the particular superclass of the instance to message.
