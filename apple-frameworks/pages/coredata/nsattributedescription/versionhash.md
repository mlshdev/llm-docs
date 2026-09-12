> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsattributedescription/versionhash](https://developer.apple.com/documentation/coredata/nsattributedescription/versionhash)

# versionHash (Swift)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The version hash for the attribute.

## Declaration

```swift
var versionHash: Data { get }
```

<a id="Discussion"></a>

## Discussion

The version hash is used to uniquely identify an attribute based on its configuration. This value includes the [versionHash](../nspropertydescription/versionhash.md) information from [NSPropertyDescription](../nspropertydescription.md) and the attribute type.

## See Also

### Related Documentation

- [versionHash](../nspropertydescription/versionhash.md): The version hash for the receiver.

# versionHash (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Property  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS · visionOS 1.0+ · watchOS 2.0+

The version hash for the attribute.

## Declaration

```objectivec
@property (copy, readonly) NSData * versionHash;
```

<a id="Discussion"></a>

## Discussion

The version hash is used to uniquely identify an attribute based on its configuration. This value includes the [versionHash](../nspropertydescription/versionhash.md) information from [NSPropertyDescription](../nspropertydescription.md) and the attribute type.

## See Also

### Related Documentation

- [versionHash](../nspropertydescription/versionhash.md): The version hash for the receiver.
