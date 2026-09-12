> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/id](https://developer.apple.com/documentation/objectivec/id)

# id

**Interface language:** Objective-C

**Framework:** Objective-C Runtime  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A pointer to an instance of a class.

## Declaration

```objectivec
typedef struct objc_object * id;
```

<a id="discussion"></a>

## Discussion

When you create an instance of a particular class, the allocated memory contains an `objc_object` data structure, which is directly followed by the data for the instance variables of the class.

The `alloc` and `allocWithZone:` methods of the Foundation framework class NSObject use the function [class_createInstance](class_createinstance%28____%29.md) to create `objc_object` data structures.

## See Also

### Instance Data Types

- [objc_object](objc_object.md): Represents an instance of a class.
- [objc_super](objc_super-swift.struct.md): Specifies the superclass of an instance.
