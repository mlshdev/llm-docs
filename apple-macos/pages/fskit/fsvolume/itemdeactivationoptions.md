> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fsvolume/itemdeactivationoptions](https://developer.apple.com/documentation/fskit/fsvolume/itemdeactivationoptions)

# FSVolume.ItemDeactivationOptions (Swift)

**Framework:** FSKit  
**Kind:** Structure  
**Availability:** macOS 15.4+

Options to specify the item deactivation policy.

## Declaration

```swift
struct ItemDeactivationOptions
```

<a id="overview"></a>

## Overview

Callers may want to set a deactivation policy because `FSVolume/ItemDeactivation/deactivateItem(_:)` processing blocks the kernel. Setting a deactivation policy allows the file system to take action at a definitive point in the item’s life cycle. These options allow the file system to instruct the FSKit kernel of which circumstances require the expense of a round-trip call to the module.

> **Note**

> To avoid performing deactivation calls, Objective-C developers use the value `FSItemDeactivationNever`. In Swift, use an empty option set (`[]`).

## Topics

### Declaring deactivation options

- [forRemovedItems](itemdeactivationoptions/forremoveditems.md): An option to process deactivation for open-unlinked items at the moment of last close.
- [forPreallocatedItems](itemdeactivationoptions/forpreallocateditems.md): An option to process deactivation for for files with preallocated space.
- [always](itemdeactivationoptions/always.md): An option to always perform deactivation calls.

### Working with raw values

- [init(rawValue:)](itemdeactivationoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Setting deactivation policy

- [itemDeactivationPolicy](itemdeactivation/itemdeactivationpolicy.md): Deprecated. A property that tells FSKit to which types of items the deactivation applies, if any.

# FSItemDeactivationOptions (Objective-C)

**Framework:** FSKit  
**Kind:** Enumeration  
**Availability:** macOS 15.4+

Options to specify the item deactivation policy.

## Declaration

```objectivec
enum FSItemDeactivationOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

Callers may want to set a deactivation policy because `FSVolume/ItemDeactivation/deactivateItem(_:)` processing blocks the kernel. Setting a deactivation policy allows the file system to take action at a definitive point in the item’s life cycle. These options allow the file system to instruct the FSKit kernel of which circumstances require the expense of a round-trip call to the module.

> **Note**

> To avoid performing deactivation calls, Objective-C developers use the value `FSItemDeactivationNever`. In Swift, use an empty option set (`[]`).

## Topics

### Declaring deactivation options

- [FSItemDeactivationNever](../fsitemdeactivationoptions/fsitemdeactivationnever.md): An option to never perform deactivation.
- [FSItemDeactivationForRemovedItems](itemdeactivationoptions/forremoveditems.md): An option to process deactivation for open-unlinked items at the moment of last close.
- [FSItemDeactivationForPreallocatedItems](itemdeactivationoptions/forpreallocateditems.md): An option to process deactivation for for files with preallocated space.
- [FSItemDeactivationAlways](itemdeactivationoptions/always.md): An option to always perform deactivation calls.

## See Also

### Setting deactivation policy

- [itemDeactivationPolicy](itemdeactivation/itemdeactivationpolicy.md): Deprecated. A property that tells FSKit to which types of items the deactivation applies, if any.
