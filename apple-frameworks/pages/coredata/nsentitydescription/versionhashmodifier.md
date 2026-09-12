> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsentitydescription/versionhashmodifier](https://developer.apple.com/documentation/coredata/nsentitydescription/versionhashmodifier)

# versionHashModifier (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The version hash modifier for the receiver.

## Declaration

```swift
var versionHashModifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

This value is included in the version hash for the entity. You use it to mark or denote an entity as being a different “version” than another even if all of the values which affect persistence are equal. (Such a difference is important in cases where, for example, the structure of an entity is unchanged but the format or content of data has changed.)

## See Also

### Managing versioning

- [versionHash](versionhash.md): The version hash for the receiver.

# versionHashModifier (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The version hash modifier for the receiver.

## Declaration

```objectivec
@property (copy, nullable) NSString * versionHashModifier;
```

<a id="Discussion"></a>

## Discussion

This value is included in the version hash for the entity. You use it to mark or denote an entity as being a different “version” than another even if all of the values which affect persistence are equal. (Such a difference is important in cases where, for example, the structure of an entity is unchanged but the format or content of data has changed.)

## See Also

### Managing versioning

- [versionHash](versionhash.md): The version hash for the receiver.
