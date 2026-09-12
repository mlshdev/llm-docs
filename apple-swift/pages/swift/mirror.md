> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/mirror](https://developer.apple.com/documentation/swift/mirror)

# Mirror

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A representation of the substructure and display style of an instance of any type.

## Declaration

```swift
struct Mirror
```

<a id="overview"></a>

## Overview

A mirror describes the parts that make up a particular instance, such as the instance’s stored properties, collection or tuple elements, or its active enumeration case. Mirrors also provide a “display style” property that suggests how this mirror might be rendered.

Playgrounds and the debugger use the `Mirror` type to display representations of values of any type. For example, when you pass an instance to the `dump(_:_:_:_:)` function, a mirror is used to render that instance’s runtime contents.

```swift
struct Point {
    let x: Int, y: Int
}

let p = Point(x: 21, y: 30)
print(String(reflecting: p))
// Prints "▿ Point
//           - x: 21
//           - y: 30"
```

To customize the mirror representation of a custom type, add conformance to the `CustomReflectable` protocol.

## Topics

### Querying Descendants

- [descendant(\_:\_:)](mirror/descendant%28____%29.md): Returns a specific descendant of the reflected subject, or `nil` if no such descendant exists.
- [MirrorPath](mirrorpath.md): A protocol for legitimate arguments to `Mirror`’s `descendant` method.

### Initializers

- [init(\_:children:displayStyle:ancestorRepresentation:)](mirror/init%28__children_displaystyle_ancestorrepresentation_%29-34d91.md): Creates a mirror representing the given subject using a dictionary literal for the structure.
- [init(\_:children:displayStyle:ancestorRepresentation:)](mirror/init%28__children_displaystyle_ancestorrepresentation_%29-4af97.md): Creates a mirror representing the given subject with a specified structure.
- [init(\_:unlabeledChildren:displayStyle:ancestorRepresentation:)](mirror/init%28__unlabeledchildren_displaystyle_ancestorrepresentation_%29.md): Creates a mirror representing the given subject with unlabeled children.
- [init(reflecting:)](mirror/init%28reflecting_%29.md): Creates a mirror that reflects on the given instance.
- [init(reflectingForTest:)](mirror/init%28reflectingfortest_%29-5t8yc.md): Initialize this instance so that it can be presented in a test’s output.
- [init(reflectingForTest:)](mirror/init%28reflectingfortest_%29-6nh7d.md): Initialize this instance so that it can be presented in a test’s output.

### Instance Properties

- [children](mirror/children-swift.property.md): A collection of `Child` elements describing the structure of the reflected subject.
- [displayStyle](mirror/displaystyle-swift.property.md): A suggested display style for the reflected subject.
- [subjectType](mirror/subjecttype.md): The static type of the subject being reflected.
- [superclassMirror](mirror/superclassmirror.md): A mirror of the subject’s superclass, if one exists.

### Type Aliases

- [Mirror.Child](mirror/child.md): An element of the reflected instance’s structure.
- [Mirror.Children](mirror/children-swift.typealias.md): The type used to represent substructure.

### Enumerations

- [Mirror.AncestorRepresentation](mirror/ancestorrepresentation.md): The representation to use for ancestor classes.
- [Mirror.DisplayStyle](mirror/displaystyle-swift.enum.md): A suggestion of how a mirror’s subject is to be interpreted.

### Default Implementations

- [CustomReflectable Implementations](mirror/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](mirror/customstringconvertible-implementations.md)

## Relationships

### Conforms To

- [Copyable](copyable.md)
- [CustomReflectable](customreflectable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Escapable](escapable.md)

## See Also

### Querying Runtime Values

- [ObjectIdentifier](objectidentifier.md): A unique identifier for a class instance, actor instance, or metatype.
- [type(of:)](type%28of_%29.md): Returns the dynamic type of a value.
