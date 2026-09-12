> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/delete(_:withcompletion:)-17hzm](https://developer.apple.com/documentation/healthkit/hkhealthstore/delete(_:withcompletion:)-17hzm)

# delete(\_:withCompletion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Deletes the specified objects from the HealthKit store.

## Declaration

```swift
func delete(_ objects: [HKObject], withCompletion completion: @escaping @Sendable (Bool, (any Error)?) -> Void)
```

```swift
func delete(_ objects: [HKObject]) async throws
```

## Parameters

- `objects`: An array of objects that this app has previously saved to HealthKit. Deleting an empty array fails with an [HKError.Code.errorInvalidArgument](../hkerror/code/errorinvalidargument.md) error.
- `completion`: A block that this method calls as soon as the delete operation is complete. This block is passed the following parameters:

  - **success**: A Boolean value. This parameter contains [true](https://developer.apple.com/documentation/swift/true) if the objects were successfully deleted; otherwise, [false](https://developer.apple.com/documentation/swift/false).
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

<a id="Discussion"></a>

## Discussion

Your app can delete only those objects that it has previously saved to the HealthKit store. If the user revokes sharing permission for an object type, you can no longer delete those objects. This method operates asynchronously. As soon as the delete operation is finished, it calls the completion block on a background queue.

If your app has not requested permission to share an object’s data type, the method fails with an [HKError.Code.errorAuthorizationNotDetermined](../hkerror/code/errorauthorizationnotdetermined.md) error. If your app has been denied permission to share an object’s data type, it fails with an [HKError.Code.errorAuthorizationDenied](../hkerror/code/errorauthorizationdenied.md) error. Deleting objects that are not stored in the HealthKit store fails with an [HKError.Code.errorInvalidArgument](../hkerror/code/errorinvalidargument.md) error. When deleting multiple objects, if any object cannot be deleted, none of them are deleted.

HealthKit stores temporary [HKDeletedObject](../hkdeletedobject.md) entries, letting you query for recently deleted objects. However, the deleted objects are periodically removed to save storage space. If you want your app to receive notifications about all the deleted objects, set up an observer query, and enable it for background delivery. In the background query’s update handler, create an anchored object  query to gather the list of recently deleted objects.

> **Note**

>  Although your app can manage only the objects it created and saved, the users can always delete any data they want using the Health app.

## See Also

### Working with HealthKit objects

- [delete(\_:withCompletion:)](delete%28__withcompletion_%29-78l1m.md): Deletes the specified object from the HealthKit store.
- [deleteObjects(of:predicate:withCompletion:)](deleteobjects%28of_predicate_withcompletion_%29.md): Deletes objects saved by this application that match the provided type and predicate.
- [save(\_:withCompletion:)](save%28__withcompletion_%29-6fmtg.md): Saves the provided object to the HealthKit store.
- [save(\_:withCompletion:)](save%28__withcompletion_%29-47iwb.md): Saves an array of objects to the HealthKit store.

# deleteObjects:withCompletion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Deletes the specified objects from the HealthKit store.

## Declaration

```objectivec
- (void) deleteObjects:(NSArray<HKObject *> *) objects withCompletion:(void (^)(BOOL success, NSError *error)) completion;
```

## Parameters

- `objects`: An array of objects that this app has previously saved to HealthKit. Deleting an empty array fails with an [HKErrorInvalidArgument](../hkerror/code/errorinvalidargument.md) error.
- `completion`: A block that this method calls as soon as the delete operation is complete. This block is passed the following parameters:

  - **success**: A Boolean value. This parameter contains [true](https://developer.apple.com/documentation/swift/true) if the objects were successfully deleted; otherwise, [false](https://developer.apple.com/documentation/swift/false).
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

<a id="Discussion"></a>

## Discussion

Your app can delete only those objects that it has previously saved to the HealthKit store. If the user revokes sharing permission for an object type, you can no longer delete those objects. This method operates asynchronously. As soon as the delete operation is finished, it calls the completion block on a background queue.

If your app has not requested permission to share an object’s data type, the method fails with an [HKErrorAuthorizationNotDetermined](../hkerror/code/errorauthorizationnotdetermined.md) error. If your app has been denied permission to share an object’s data type, it fails with an [HKErrorAuthorizationDenied](../hkerror/code/errorauthorizationdenied.md) error. Deleting objects that are not stored in the HealthKit store fails with an [HKErrorInvalidArgument](../hkerror/code/errorinvalidargument.md) error. When deleting multiple objects, if any object cannot be deleted, none of them are deleted.

HealthKit stores temporary [HKDeletedObject](../hkdeletedobject.md) entries, letting you query for recently deleted objects. However, the deleted objects are periodically removed to save storage space. If you want your app to receive notifications about all the deleted objects, set up an observer query, and enable it for background delivery. In the background query’s update handler, create an anchored object  query to gather the list of recently deleted objects.

> **Note**

>  Although your app can manage only the objects it created and saved, the users can always delete any data they want using the Health app.

## See Also

### Working with HealthKit objects

- [deleteObject:withCompletion:](delete%28__withcompletion_%29-78l1m.md): Deletes the specified object from the HealthKit store.
- [deleteObjectsOfType:predicate:withCompletion:](deleteobjects%28of_predicate_withcompletion_%29.md): Deletes objects saved by this application that match the provided type and predicate.
- [saveObject:withCompletion:](save%28__withcompletion_%29-6fmtg.md): Saves the provided object to the HealthKit store.
- [saveObjects:withCompletion:](save%28__withcompletion_%29-47iwb.md): Saves an array of objects to the HealthKit store.
