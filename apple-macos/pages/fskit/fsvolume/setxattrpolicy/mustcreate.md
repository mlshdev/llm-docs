> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/setxattrpolicy/mustcreate](https://developer.apple.com/documentation/fskit/fsvolume/setxattrpolicy/mustcreate)

# FSVolume.SetXattrPolicy.mustCreate (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

Set the value, but fail if the extended attribute already exists.

## Declaration

```swift
case mustCreate
```

## See Also

### Declaring a policy

- [FSVolume.SetXattrPolicy.alwaysSet](alwaysset.md): Set the value, regardless of previous state.
- [FSVolume.SetXattrPolicy.mustReplace](mustreplace.md): Set the value, but fail if the extended attribute doesn’t already exist.
- [FSVolume.SetXattrPolicy.delete](delete.md): Delete the value, failing if the extended attribute doesn’t exist.

# FSSetXattrPolicyMustCreate (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Set the value, but fail if the extended attribute already exists.

## Declaration

```objectivec
FSSetXattrPolicyMustCreate
```

## See Also

### Declaring a policy

- [FSSetXattrPolicyAlwaysSet](alwaysset.md): Set the value, regardless of previous state.
- [FSSetXattrPolicyMustReplace](mustreplace.md): Set the value, but fail if the extended attribute doesn’t already exist.
- [FSSetXattrPolicyDelete](delete.md): Delete the value, failing if the extended attribute doesn’t exist.
