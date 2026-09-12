> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/itemdeactivationoptions/forremoveditems](https://developer.apple.com/documentation/fskit/fsvolume/itemdeactivationoptions/forremoveditems)

# forRemovedItems (Swift)

**Framework:** FSKit  
**Kind:** Type Property  
**Availability:** macOS 15.4+

An option to process deactivation for open-unlinked items at the moment of last close.

## Declaration

```swift
static var forRemovedItems: FSVolume.ItemDeactivationOptions { get }
```

## See Also

### Declaring deactivation options

- [forPreallocatedItems](forpreallocateditems.md): An option to process deactivation for for files with preallocated space.
- [always](always.md): An option to always perform deactivation calls.

# FSItemDeactivationForRemovedItems (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration Case  
**Availability:** macOS 15.4+

An option to process deactivation for open-unlinked items at the moment of last close.

## Declaration

```objectivec
FSItemDeactivationForRemovedItems
```

## See Also

### Declaring deactivation options

- [FSItemDeactivationNever](../../fsitemdeactivationoptions/fsitemdeactivationnever.md): An option to never perform deactivation.
- [FSItemDeactivationForPreallocatedItems](forpreallocateditems.md): An option to process deactivation for for files with preallocated space.
- [FSItemDeactivationAlways](always.md): An option to always perform deactivation calls.
