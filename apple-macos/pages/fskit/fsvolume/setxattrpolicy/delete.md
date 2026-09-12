> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/setxattrpolicy/delete](https://developer.apple.com/documentation/fskit/fsvolume/setxattrpolicy/delete)

# FSVolume.SetXattrPolicy.delete (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

Delete the value, failing if the extended attribute doesn’t exist.

## Declaration

```swift
case delete
```

## See Also

### Declaring a policy

- [FSVolume.SetXattrPolicy.alwaysSet](alwaysset.md): Set the value, regardless of previous state.
- [FSVolume.SetXattrPolicy.mustCreate](mustcreate.md): Set the value, but fail if the extended attribute already exists.
- [FSVolume.SetXattrPolicy.mustReplace](mustreplace.md): Set the value, but fail if the extended attribute doesn’t already exist.

# FSSetXattrPolicyDelete (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Delete the value, failing if the extended attribute doesn’t exist.

## Declaration

```objectivec
FSSetXattrPolicyDelete
```

## See Also

### Declaring a policy

- [FSSetXattrPolicyAlwaysSet](alwaysset.md): Set the value, regardless of previous state.
- [FSSetXattrPolicyMustCreate](mustcreate.md): Set the value, but fail if the extended attribute already exists.
- [FSSetXattrPolicyMustReplace](mustreplace.md): Set the value, but fail if the extended attribute doesn’t already exist.
