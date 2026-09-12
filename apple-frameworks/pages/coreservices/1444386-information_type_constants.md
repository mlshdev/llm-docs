> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1444386-information_type_constants](https://developer.apple.com/documentation/coreservices/1444386-information_type_constants)

# Information Type Constants

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.0+ (deprecated in 10.8)

The `GetAliasInfo` function uses these constants in the `index` parameter.

## Declaration

```objectivec
enum : int {
    ...
};
```

## Topics

### Constants

- [asiZoneName](1444386-information_type_constants/asizonename.md): Deprecated. If the record represents a target on an AppleShare volume, retrieve the server’s zone name. Otherwise, return an empty string.
- [asiServerName](1444386-information_type_constants/asiservername.md): Deprecated. If the record represents a target on an AppleShare volume, retrieve the server name. Otherwise, return an empty string.
- [asiVolumeName](1444386-information_type_constants/asivolumename.md): Deprecated. Return the name of the volume on which the target resides.
- [asiAliasName](1444386-information_type_constants/asialiasname.md): Deprecated. Return the name of the target.
- [asiParentName](1444386-information_type_constants/asiparentname.md): Deprecated. Return the name of the parent directory of the target of the record. If the target is a volume, return the volume name.
