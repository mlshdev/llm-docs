> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nspropertydescription/versionhashmodifier](https://developer.apple.com/documentation/coredata/nspropertydescription/versionhashmodifier)

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

This value is included in the version hash for the property. You use it to mark or denote a property as being a different “version” than another even if all of the values which affect persistence are equal. (Such a difference is important in cases where the attributes of a property are unchanged but the format or content of its data are changed.)

## See Also

### Supporting Versioning

- [versionHash](versionhash.md): The version hash for the receiver.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.

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

This value is included in the version hash for the property. You use it to mark or denote a property as being a different “version” than another even if all of the values which affect persistence are equal. (Such a difference is important in cases where the attributes of a property are unchanged but the format or content of its data are changed.)

## See Also

### Supporting Versioning

- [versionHash](versionhash.md): The version hash for the receiver.
- [renamingIdentifier](renamingidentifier.md): The renaming identifier for the receiver.
