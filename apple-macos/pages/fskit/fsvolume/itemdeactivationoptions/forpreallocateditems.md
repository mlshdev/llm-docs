> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/itemdeactivationoptions/forpreallocateditems](https://developer.apple.com/documentation/fskit/fsvolume/itemdeactivationoptions/forpreallocateditems)

# forPreallocatedItems (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

An option to process deactivation for for files with preallocated space.

## Declaration

```swift
static var forPreallocatedItems: FSVolume.ItemDeactivationOptions { get }
```

<a id="discussion"></a>

## Discussion

This option facilitates a sort of trim-on-close behavior. It is only meaningful for volumes that conform to [FSVolume.PreallocateHandler](../preallocatehandler.md).

## See Also

### Declaring deactivation options

- [forRemovedItems](forremoveditems.md): An option to process deactivation for open-unlinked items at the moment of last close.
- [always](always.md): An option to always perform deactivation calls.

# FSItemDeactivationForPreallocatedItems (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An option to process deactivation for for files with preallocated space.

## Declaration

```objectivec
FSItemDeactivationForPreallocatedItems
```

<a id="discussion"></a>

## Discussion

This option facilitates a sort of trim-on-close behavior. It is only meaningful for volumes that conform to [FSVolumePreallocateHandler](../preallocatehandler.md).

## See Also

### Declaring deactivation options

- [FSItemDeactivationNever](../../fsitemdeactivationoptions/fsitemdeactivationnever.md): An option to never perform deactivation.
- [FSItemDeactivationForRemovedItems](forremoveditems.md): An option to process deactivation for open-unlinked items at the moment of last close.
- [FSItemDeactivationAlways](always.md): An option to always perform deactivation calls.
