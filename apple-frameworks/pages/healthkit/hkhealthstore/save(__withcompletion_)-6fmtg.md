> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/save(_:withcompletion:)-6fmtg](https://developer.apple.com/documentation/healthkit/hkhealthstore/save(_:withcompletion:)-6fmtg)

# save(\_:withCompletion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Saves the provided object to the HealthKit store.

## Declaration

```swift
func save(_ object: HKObject, withCompletion completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func save(_ object: HKObject) async throws
```

## Parameters

- `object`: The HealthKit object to be saved. This object can be any concrete subclass of the [HKObject](../hkobject.md) class (any of the [HKCategorySample](../hkcategorysample.md), [HKQuantitySample](../hkquantitysample.md), [HKCorrelation](../hkcorrelation.md), or [HKWorkout](../hkworkout.md) classes).
- `completion`: A block that this method calls as soon as the save operation is complete. This block is passed the following parameters:

  - **success**: A Boolean value. This parameter contains [true](https://developer.apple.com/documentation/swift/true) if the object was successfully saved to the HealthKit store; otherwise, [false](https://developer.apple.com/documentation/swift/false).
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

## Mentioned In

- [Saving data to HealthKit](../saving-data-to-healthkit.md)

<a id="Discussion"></a>

## Discussion

This method operates asynchronously. As soon as the save operation is finished, it calls the completion block on a background queue.

If your app has not requested permission to share the object’s data type, the method fails with an [HKError.Code.errorAuthorizationNotDetermined](../hkerror/code/errorauthorizationnotdetermined.md) error. If your app has been denied permission to save the object’s data type, it fails with an [HKError.Code.errorAuthorizationDenied](../hkerror/code/errorauthorizationdenied.md) error. Saving an object with the same unique identifier as an object already in the HealthKit store fails with an [HKError.Code.errorInvalidArgument](../hkerror/code/errorinvalidargument.md) error.

In iOS 9.0 and later, saving an object to the HealthKit store sets the object’s [sourceRevision](../hkobject/sourcerevision.md) property to a [HKSourceRevision](../hksourcerevision.md) instance representing the saving app. On earlier versions of iOS, saving an object sets the [source](../hkobject/source.md) property to a [HKSource](../hksource.md) instance instead. In both cases, these values are available only after the object is retrieved from the HealthKit store. The original object is not changed.

All samples retrieved by iOS 9.0 and later are given a valid [sourceRevision](../hkobject/sourcerevision.md) property. If the sample was saved using an earlier version of iOS, the source revision’s version is set to `nil`.

## See Also

### Working with HealthKit objects

- [delete(\_:withCompletion:)](delete%28__withcompletion_%29-78l1m.md): Deletes the specified object from the HealthKit store.
- [delete(\_:withCompletion:)](delete%28__withcompletion_%29-17hzm.md): Deletes the specified objects from the HealthKit store.
- [deleteObjects(of:predicate:withCompletion:)](deleteobjects%28of_predicate_withcompletion_%29.md): Deletes objects saved by this application that match the provided type and predicate.
- [save(\_:withCompletion:)](save%28__withcompletion_%29-47iwb.md): Saves an array of objects to the HealthKit store.

# saveObject:withCompletion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Saves the provided object to the HealthKit store.

## Declaration

```objectivec
- (void) saveObject:(HKObject *) object withCompletion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `object`: The HealthKit object to be saved. This object can be any concrete subclass of the [HKObject](../hkobject.md) class (any of the [HKCategorySample](../hkcategorysample.md), [HKQuantitySample](../hkquantitysample.md), [HKCorrelation](../hkcorrelation.md), or [HKWorkout](../hkworkout.md) classes).
- `completion`: A block that this method calls as soon as the save operation is complete. This block is passed the following parameters:

  - **success**: A Boolean value. This parameter contains [true](https://developer.apple.com/documentation/swift/true) if the object was successfully saved to the HealthKit store; otherwise, [false](https://developer.apple.com/documentation/swift/false).
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

## Mentioned In

- [Saving data to HealthKit](../saving-data-to-healthkit.md)

<a id="Discussion"></a>

## Discussion

This method operates asynchronously. As soon as the save operation is finished, it calls the completion block on a background queue.

If your app has not requested permission to share the object’s data type, the method fails with an [HKErrorAuthorizationNotDetermined](../hkerror/code/errorauthorizationnotdetermined.md) error. If your app has been denied permission to save the object’s data type, it fails with an [HKErrorAuthorizationDenied](../hkerror/code/errorauthorizationdenied.md) error. Saving an object with the same unique identifier as an object already in the HealthKit store fails with an [HKErrorInvalidArgument](../hkerror/code/errorinvalidargument.md) error.

In iOS 9.0 and later, saving an object to the HealthKit store sets the object’s [sourceRevision](../hkobject/sourcerevision.md) property to a [HKSourceRevision](../hksourcerevision.md) instance representing the saving app. On earlier versions of iOS, saving an object sets the [source](../hkobject/source.md) property to a [HKSource](../hksource.md) instance instead. In both cases, these values are available only after the object is retrieved from the HealthKit store. The original object is not changed.

All samples retrieved by iOS 9.0 and later are given a valid [sourceRevision](../hkobject/sourcerevision.md) property. If the sample was saved using an earlier version of iOS, the source revision’s version is set to `nil`.

## See Also

### Working with HealthKit objects

- [deleteObject:withCompletion:](delete%28__withcompletion_%29-78l1m.md): Deletes the specified object from the HealthKit store.
- [deleteObjects:withCompletion:](delete%28__withcompletion_%29-17hzm.md): Deletes the specified objects from the HealthKit store.
- [deleteObjectsOfType:predicate:withCompletion:](deleteobjects%28of_predicate_withcompletion_%29.md): Deletes objects saved by this application that match the provided type and predicate.
- [saveObjects:withCompletion:](save%28__withcompletion_%29-47iwb.md): Saves an array of objects to the HealthKit store.
