> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/renamingidentifier](https://developer.apple.com/documentation/coredata/nspropertydescription/renamingidentifier)

# renamingIdentifier (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The renaming identifier for the receiver.

## Declaration

```swift
var renamingIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This is used to resolve naming conflicts between models. When creating an entity mapping between entities in two managed object models, a source entity property and a destination entity property that share the same identifier indicate that a property mapping should be configured to migrate from the source to the destination. If unset, the identifier will return the property’s name.

## See Also

### Supporting Versioning

- [versionHash](versionhash.md): The version hash for the receiver.
- [versionHashModifier](versionhashmodifier.md): The version hash modifier for the receiver.

# renamingIdentifier (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.6+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The renaming identifier for the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * renamingIdentifier;
```

<a id="Discussion"></a>

## Discussion

This is used to resolve naming conflicts between models. When creating an entity mapping between entities in two managed object models, a source entity property and a destination entity property that share the same identifier indicate that a property mapping should be configured to migrate from the source to the destination. If unset, the identifier will return the property’s name.

## See Also

### Supporting Versioning

- [versionHash](versionhash.md): The version hash for the receiver.
- [versionHashModifier](versionhashmodifier.md): The version hash modifier for the receiver.
