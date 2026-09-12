> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/versionhash](https://developer.apple.com/documentation/coredata/nspropertydescription/versionhash)

# versionHash (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The version hash for the receiver.

## Declaration

```swift
var versionHash: Data { get }
```

<a id="Discussion"></a>

## Discussion

The version hash is used to uniquely identify a property based on its configuration. The version hash uses only values which affect the persistence of data and the user-defined [versionHashModifier](versionhashmodifier.md) value. (The values which affect persistence are the name of the property, and the flags for `isOptional`, `isTransient`, and `isReadOnly`.) This value is stored as part of the version information in the metadata for stores, as well as a definition of a property involved in an `NSPropertyMapping` object.

## See Also

### Supporting Versioning

- [versionHashModifier](versionhashmodifier.md): The version hash modifier for the receiver.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.

# versionHash (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The version hash for the receiver.

## Declaration

```objectivec
@property (copy, readonly) NSData * versionHash;
```

<a id="Discussion"></a>

## Discussion

The version hash is used to uniquely identify a property based on its configuration. The version hash uses only values which affect the persistence of data and the user-defined [versionHashModifier](versionhashmodifier.md) value. (The values which affect persistence are the name of the property, and the flags for `isOptional`, `isTransient`, and `isReadOnly`.) This value is stored as part of the version information in the metadata for stores, as well as a definition of a property involved in an `NSPropertyMapping` object.

## See Also

### Supporting Versioning

- [versionHashModifier](versionhashmodifier.md): The version hash modifier for the receiver.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.
