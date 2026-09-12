> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/itemdeactivationoptions/always](https://developer.apple.com/documentation/fskit/fsvolume/itemdeactivationoptions/always)

# always (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

An option to always perform deactivation calls.

## Declaration

```swift
static var always: FSVolume.ItemDeactivationOptions { get }
```

<a id="discussion"></a>

## Discussion

Use this option if the file system needs `deactivateItem` calls in circumstances beyond those covered by [forRemovedItems](forremoveditems.md) and [forPreallocatedItems](forpreallocateditems.md).

## See Also

### Declaring deactivation options

- [forRemovedItems](forremoveditems.md): An option to process deactivation for open-unlinked items at the moment of last close.
- [forPreallocatedItems](forpreallocateditems.md): An option to process deactivation for for files with preallocated space.

# FSItemDeactivationAlways (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An option to always perform deactivation calls.

## Declaration

```objectivec
FSItemDeactivationAlways
```

<a id="discussion"></a>

## Discussion

Use this option if the file system needs `deactivateItem` calls in circumstances beyond those covered by [FSItemDeactivationForRemovedItems](forremoveditems.md) and [FSItemDeactivationForPreallocatedItems](forpreallocateditems.md).

## See Also

### Declaring deactivation options

- [FSItemDeactivationNever](../../fsitemdeactivationoptions/fsitemdeactivationnever.md): An option to never perform deactivation.
- [FSItemDeactivationForRemovedItems](forremoveditems.md): An option to process deactivation for open-unlinked items at the moment of last close.
- [FSItemDeactivationForPreallocatedItems](forpreallocateditems.md): An option to process deactivation for for files with preallocated space.
