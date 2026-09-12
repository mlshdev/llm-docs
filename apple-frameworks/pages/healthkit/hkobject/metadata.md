> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobject/metadata](https://developer.apple.com/documentation/healthkit/hkobject/metadata)

# metadata (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The metadata for this HealthKit object.

## Declaration

```swift
var metadata: [String : Any]? { get }
```

<a id="Discussion"></a>

## Discussion

The metadata dictionary contains extra information describing this object. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects. The values can be [NSString](../../foundation/nsstring.md) objects, [NSNumber](../../foundation/nsnumber.md) objects or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the HealthKit object’s capabilities.

You set an object’s metadata when you create the object by calling one of these methods (or a related method):

- [init(type:quantity:start:end:metadata:)](../hkquantitysample/init%28type_quantity_start_end_metadata_%29.md)
- [init(type:value:start:end:metadata:)](../hkcategorysample/init%28type_value_start_end_metadata_%29.md)
- [init(type:start:end:objects:metadata:)](../hkcorrelation/init%28type_start_end_objects_metadata_%29.md)
- [init(activityType:start:end:duration:totalEnergyBurned:totalDistance:metadata:)](../hkworkout/init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md)

## See Also

### Accessing Properties

- [uuid](uuid.md): The universally unique identifier (UUID) for this HealthKit object.
- [device](device.md): The device that generated the data for this object.
- [sourceRevision](sourcerevision.md): The app or device that created this object.
- [source](source.md): Deprecated. A HealthKit source, representing the app or device that created this object.

# metadata (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

The metadata for this HealthKit object.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,id> * metadata;
```

<a id="Discussion"></a>

## Discussion

The metadata dictionary contains extra information describing this object. The dictionary’s keys are all [NSString](../../foundation/nsstring.md) objects. The values can be [NSString](../../foundation/nsstring.md) objects, [NSNumber](../../foundation/nsnumber.md) objects or [NSDate](../../foundation/nsdate.md) objects. For a complete list of predefined metadata keys, see [Metadata Keys](../metadata-keys.md).

Using predefined keys helps facilitate sharing data between apps; however, you are also encouraged to create your own, custom keys as needed to extend the HealthKit object’s capabilities.

You set an object’s metadata when you create the object by calling one of these methods (or a related method):

- [quantitySampleWithType:quantity:startDate:endDate:metadata:](../hkquantitysample/init%28type_quantity_start_end_metadata_%29.md)
- [categorySampleWithType:value:startDate:endDate:metadata:](../hkcategorysample/init%28type_value_start_end_metadata_%29.md)
- [correlationWithType:startDate:endDate:objects:metadata:](../hkcorrelation/init%28type_start_end_objects_metadata_%29.md)
- [workoutWithActivityType:startDate:endDate:duration:totalEnergyBurned:totalDistance:metadata:](../hkworkout/init%28activitytype_start_end_duration_totalenergyburned_totaldistance_metadata_%29.md)

## See Also

### Accessing Properties

- [UUID](uuid.md): The universally unique identifier (UUID) for this HealthKit object.
- [device](device.md): The device that generated the data for this object.
- [sourceRevision](sourcerevision.md): The app or device that created this object.
- [source](source.md): Deprecated. A HealthKit source, representing the app or device that created this object.
