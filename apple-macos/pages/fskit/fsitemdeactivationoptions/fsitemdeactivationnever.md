> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsitemdeactivationoptions/fsitemdeactivationnever](https://developer.apple.com/documentation/fskit/fsitemdeactivationoptions/fsitemdeactivationnever)

# FSItemDeactivationNever

**Interface language:** Objective-C

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An option to never perform deactivation.

## Declaration

```objectivec
FSItemDeactivationNever
```

<a id="discussion"></a>

## Discussion

With this deactivation option, FSKit never issues `deactivateItem` calls, even though the volume conforms to [FSVolumeItemDeactivation](../fsvolume/itemdeactivation.md).

## See Also

### Declaring deactivation options

- [FSItemDeactivationForRemovedItems](../fsvolume/itemdeactivationoptions/forremoveditems.md): An option to process deactivation for open-unlinked items at the moment of last close.
- [FSItemDeactivationForPreallocatedItems](../fsvolume/itemdeactivationoptions/forpreallocateditems.md): An option to process deactivation for for files with preallocated space.
- [FSItemDeactivationAlways](../fsvolume/itemdeactivationoptions/always.md): An option to always perform deactivation calls.
