> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vninstancemaskobservation](https://developer.apple.com/documentation/vision/vninstancemaskobservation)

# VNInstanceMaskObservation (Swift)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An observation that contains an instance mask that labels instances in the mask.

## Declaration

```swift
class VNInstanceMaskObservation
```

## Topics

### Accessing Instances

- [allInstances](vninstancemaskobservation/allinstances.md): The collection that contains all instances, excluding the background.
- [instanceMask](vninstancemaskobservation/instancemask.md): The resulting mask that represents all instances.

### Creating a Mask

- [generateMask(forInstances:)](vninstancemaskobservation/generatemask%28forinstances_%29.md): Creates a low-resolution mask from the instances you specify.
- [generateMaskedImage(ofInstances:from:croppedToInstancesExtent:)](vninstancemaskobservation/generatemaskedimage%28ofinstances_from_croppedtoinstancesextent_%29.md): Creates a high-resolution image where everything becomes transparent black, except for the instances you specify.
- [generateScaledMaskForImage(forInstances:from:)](vninstancemaskobservation/generatescaledmaskforimage%28forinstances_from_%29.md): Creates a high-resolution mask where everything becomes transparent black, except for the instances you specify.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [VNRequestRevisionProviding](vnrequestrevisionproviding.md)

## See Also

### Image background removal

- [Applying visual effects to foreground subjects](applying-visual-effects-to-foreground-subjects.md): Segment the foreground subjects of an image and composite them to a new background with visual effects.
- [VNGenerateForegroundInstanceMaskRequest](vngenerateforegroundinstancemaskrequest.md): A request that generates an instance mask of noticable objects to separate from the background.
- [VNGenerateForegroundInstanceMaskRequestRevision1](vngenerateforegroundinstancemaskrequestrevision1.md): A constant for specifying the first revision of the foreground instance mask request.

# VNInstanceMaskObservation (Objective-C)

**Framework:** Vision  
**Kind:** Class  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

An observation that contains an instance mask that labels instances in the mask.

## Declaration

```objectivec
@interface VNInstanceMaskObservation : VNObservation
```

## Topics

### Accessing Instances

- [allInstances](vninstancemaskobservation/allinstances.md): The collection that contains all instances, excluding the background.
- [instanceMask](vninstancemaskobservation/instancemask.md): The resulting mask that represents all instances.

### Creating a Mask

- [generateMaskForInstances:error:](vninstancemaskobservation/generatemask%28forinstances_%29.md): Creates a low-resolution mask from the instances you specify.
- [generateMaskedImageOfInstances:fromRequestHandler:croppedToInstancesExtent:error:](vninstancemaskobservation/generatemaskedimage%28ofinstances_from_croppedtoinstancesextent_%29.md): Creates a high-resolution image where everything becomes transparent black, except for the instances you specify.
- [generateScaledMaskForImageForInstances:fromRequestHandler:error:](vninstancemaskobservation/generatescaledmaskforimage%28forinstances_from_%29.md): Creates a high-resolution mask where everything becomes transparent black, except for the instances you specify.

## Relationships

### Inherits From

- [VNObservation](vnobservation.md)

## See Also

### Image background removal

- [Applying visual effects to foreground subjects](applying-visual-effects-to-foreground-subjects.md): Segment the foreground subjects of an image and composite them to a new background with visual effects.
- [VNGenerateForegroundInstanceMaskRequest](vngenerateforegroundinstancemaskrequest.md): A request that generates an instance mask of noticable objects to separate from the background.
- [VNGenerateForegroundInstanceMaskRequestRevision1](vngenerateforegroundinstancemaskrequestrevision1.md): A constant for specifying the first revision of the foreground instance mask request.
