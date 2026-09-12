> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/setxattrpolicy](https://developer.apple.com/documentation/fskit/fsvolume/setxattrpolicy)

# FSVolume.SetXattrPolicy (Swift)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Flags to specify the policy when setting extended file attributes.

## Declaration

```swift
enum SetXattrPolicy
```

## Topics

### Declaring a policy

- [FSVolume.SetXattrPolicy.alwaysSet](setxattrpolicy/alwaysset.md): Set the value, regardless of previous state.
- [FSVolume.SetXattrPolicy.mustCreate](setxattrpolicy/mustcreate.md): Set the value, but fail if the extended attribute already exists.
- [FSVolume.SetXattrPolicy.mustReplace](setxattrpolicy/mustreplace.md): Set the value, but fail if the extended attribute doesn’t already exist.
- [FSVolume.SetXattrPolicy.delete](setxattrpolicy/delete.md): Delete the value, failing if the extended attribute doesn’t exist.

### Initializers

- [init(rawValue:)](setxattrpolicy/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Reading and writing

- [getXattr(named:of:context:replyHandler:)](xattrhandler/getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrs(of:context:replyHandler:)](xattrhandler/listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattr(named:to:on:policy:context:replyHandler:)](xattrhandler/setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSSetXattrResult](../fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNames(for:)](xattrhandler/supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.

# FSSetXattrPolicy (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Flags to specify the policy when setting extended file attributes.

## Declaration

```objectivec
enum FSSetXattrPolicy : NSUInteger;
```

## Topics

### Declaring a policy

- [FSSetXattrPolicyAlwaysSet](setxattrpolicy/alwaysset.md): Set the value, regardless of previous state.
- [FSSetXattrPolicyMustCreate](setxattrpolicy/mustcreate.md): Set the value, but fail if the extended attribute already exists.
- [FSSetXattrPolicyMustReplace](setxattrpolicy/mustreplace.md): Set the value, but fail if the extended attribute doesn’t already exist.
- [FSSetXattrPolicyDelete](setxattrpolicy/delete.md): Delete the value, failing if the extended attribute doesn’t exist.

## See Also

### Reading and writing

- [getXattrNamed:ofItem:context:replyHandler:](xattrhandler/getxattr%28named_of_context_replyhandler_%29.md): Gets the specified extended attribute of the given item.
- [FSGetXattrResult](../fsgetxattrresult.md): The result of a get-extended-attributes call.
- [listXattrsOfItem:context:replyHandler:](xattrhandler/listxattrs%28of_context_replyhandler_%29.md): Gets the list of extended attributes currently set on the given item.
- [FSListXattrsResult](../fslistxattrsresult.md): The result of a list-extended-attributes call.
- [setXattrNamed:toData:onItem:policy:context:replyHandler:](xattrhandler/setxattr%28named_to_on_policy_context_replyhandler_%29.md): Sets the specified extended attribute data on the given item.
- [FSSetXattrResult](../fssetxattrresult.md): The result of a set-extended-attributes call.
- [supportedXattrNamesForItem:](xattrhandler/supportedxattrnames%28for_%29.md): Returns an array that specifies the extended attribute names the given item supports.
