> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corefoundation/cftypeid](https://developer.apple.com/documentation/corefoundation/cftypeid)

# CFTypeID (Swift)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type for unique, constant integer values that identify particular Core Foundation opaque types.

## Declaration

```swift
typealias CFTypeID = UInt
```

<a id="Discussion"></a>

## Discussion

Defines a type identifier in Core Foundation. A type ID is an integer that identifies the opaque type to which a Core Foundation object “belongs.” You use type IDs in various contexts, such as when you are operating on heterogeneous collections. Core Foundation provides programmatic interfaces for obtaining and evaluating type IDs.

Because the value for a type ID can change from release to release, your code should not rely on stored or hard-coded type IDs nor should it hard-code any observed properties of a type ID (such as, for example, it being a small integer).

## See Also

### Data Types

- [CFHashCode](cfhashcode.md): A type for hash codes returned by the `CFHash` function.

# CFTypeID (Objective-C)

**Framework:** Core Foundation  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A type for unique, constant integer values that identify particular Core Foundation opaque types.

## Declaration

```objectivec
typedef unsigned long CFTypeID;
```

<a id="Discussion"></a>

## Discussion

Defines a type identifier in Core Foundation. A type ID is an integer that identifies the opaque type to which a Core Foundation object “belongs.” You use type IDs in various contexts, such as when you are operating on heterogeneous collections. Core Foundation provides programmatic interfaces for obtaining and evaluating type IDs.

Because the value for a type ID can change from release to release, your code should not rely on stored or hard-coded type IDs nor should it hard-code any observed properties of a type ID (such as, for example, it being a small integer).

## See Also

### Data Types

- [CFHashCode](cfhashcode.md): A type for hash codes returned by the `CFHash` function.
