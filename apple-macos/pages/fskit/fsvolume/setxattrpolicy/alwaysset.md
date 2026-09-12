> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/setxattrpolicy/alwaysset](https://developer.apple.com/documentation/fskit/fsvolume/setxattrpolicy/alwaysset)

# FSVolume.SetXattrPolicy.alwaysSet (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

Set the value, regardless of previous state.

## Declaration

```swift
case alwaysSet
```

## See Also

### Declaring a policy

- [FSVolume.SetXattrPolicy.mustCreate](mustcreate.md): Set the value, but fail if the extended attribute already exists.
- [FSVolume.SetXattrPolicy.mustReplace](mustreplace.md): Set the value, but fail if the extended attribute doesn’t already exist.
- [FSVolume.SetXattrPolicy.delete](delete.md): Delete the value, failing if the extended attribute doesn’t exist.

# FSSetXattrPolicyAlwaysSet (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Set the value, regardless of previous state.

## Declaration

```objectivec
FSSetXattrPolicyAlwaysSet
```

## See Also

### Declaring a policy

- [FSSetXattrPolicyMustCreate](mustcreate.md): Set the value, but fail if the extended attribute already exists.
- [FSSetXattrPolicyMustReplace](mustreplace.md): Set the value, but fail if the extended attribute doesn’t already exist.
- [FSSetXattrPolicyDelete](delete.md): Delete the value, failing if the extended attribute doesn’t exist.
