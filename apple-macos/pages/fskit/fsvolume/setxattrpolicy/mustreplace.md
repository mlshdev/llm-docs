> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fsvolume/setxattrpolicy/mustreplace

# FSVolume.SetXattrPolicy.mustReplace (Swift)

**Framework:** FSKit  
**Kind:** Case  
**Availability:** macOS 15.4+

Set the value, but fail if the extended attribute doesn’t already exist.

## Declaration

```swift
case mustReplace
```

## See Also

### Declaring a policy

- [FSVolume.SetXattrPolicy.alwaysSet](alwaysset.md): Set the value, regardless of previous state.
- [FSVolume.SetXattrPolicy.mustCreate](mustcreate.md): Set the value, but fail if the extended attribute already exists.
- [FSVolume.SetXattrPolicy.delete](delete.md): Delete the value, failing if the extended attribute doesn’t exist.

# FSSetXattrPolicyMustReplace (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

Set the value, but fail if the extended attribute doesn’t already exist.

## Declaration

```objectivec
FSSetXattrPolicyMustReplace
```

## See Also

### Declaring a policy

- [FSSetXattrPolicyAlwaysSet](alwaysset.md): Set the value, regardless of previous state.
- [FSSetXattrPolicyMustCreate](mustcreate.md): Set the value, but fail if the extended attribute already exists.
- [FSSetXattrPolicyDelete](delete.md): Delete the value, failing if the extended attribute doesn’t exist.
