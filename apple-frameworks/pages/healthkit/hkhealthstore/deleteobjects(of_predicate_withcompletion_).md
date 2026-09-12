> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkhealthstore/deleteobjects(of:predicate:withcompletion:)](https://developer.apple.com/documentation/healthkit/hkhealthstore/deleteobjects(of:predicate:withcompletion:))

# deleteObjects(of:predicate:withCompletion:) (Swift)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Deletes objects saved by this application that match the provided type and predicate.

## Declaration

```swift
func deleteObjects(of objectType: HKObjectType, predicate: NSPredicate, withCompletion completion: @escaping @Sendable (Bool, Int, (any Error)?) -> Void)
```

```swift
func deleteObjects(of objectType: HKObjectType, predicate: NSPredicate) async throws -> Int
```

## Parameters

- `objectType`: The type of object to be deleted.
- `predicate`: A predicate used to filter the objects to be deleted. This method only deletes objects that match the predicate.
- `completion`: A block that this method calls as soon as the delete operation is complete. This block is passed the following parameters:

  - **success**: A Boolean value. This parameter contains [true](https://developer.apple.com/documentation/swift/true) if the objects were successfully deleted; otherwise, [false](https://developer.apple.com/documentation/swift/false).
  - **deletedObjectCount**: The number of objects deleted.
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

<a id="Discussion"></a>

## Discussion

Your app can delete only those objects that it has previously saved to the HealthKit store. If the user revokes sharing permission for an object type, you can no longer delete those objects. This method operates asynchronously. As soon as the delete operation is finished, it calls the completion block on a background queue.

If your app has not requested permission to share an object’s data type, the method fails with an [HKError.Code.errorAuthorizationNotDetermined](../hkerror/code/errorauthorizationnotdetermined.md) error. If your app has been denied permission to share an object’s data type, it fails with an [HKError.Code.errorAuthorizationDenied](../hkerror/code/errorauthorizationdenied.md) error. When deleting multiple objects, if any object cannot be deleted, none of them are deleted.

HealthKit stores temporary [HKDeletedObject](../hkdeletedobject.md) entries, letting you query for recently deleted objects. However, the deleted objects are periodically removed to save storage space. If you want your app to receive notifications about all the deleted objects, set up an observer query, and enable it for background delivery. In the background query’s update handler, create an anchored object query to gather the list of recently deleted objects.

> **Note**

>  Although your app can manage only the objects it created and saved, the users can always delete any data they want using the Health app.

## See Also

### Working with HealthKit objects

- [delete(\_:withCompletion:)](delete%28__withcompletion_%29-78l1m.md): Deletes the specified object from the HealthKit store.
- [delete(\_:withCompletion:)](delete%28__withcompletion_%29-17hzm.md): Deletes the specified objects from the HealthKit store.
- [save(\_:withCompletion:)](save%28__withcompletion_%29-6fmtg.md): Saves the provided object to the HealthKit store.
- [save(\_:withCompletion:)](save%28__withcompletion_%29-47iwb.md): Saves an array of objects to the HealthKit store.

# deleteObjectsOfType:predicate:withCompletion: (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Deletes objects saved by this application that match the provided type and predicate.

## Declaration

```objectivec
- (void) deleteObjectsOfType:(HKObjectType *) objectType predicate:(NSPredicate *) predicate withCompletion:(void (^)(BOOL success, NSUInteger deletedObjectCount, NSError *error)) completion;
```

## Parameters

- `objectType`: The type of object to be deleted.
- `predicate`: A predicate used to filter the objects to be deleted. This method only deletes objects that match the predicate.
- `completion`: A block that this method calls as soon as the delete operation is complete. This block is passed the following parameters:

  - **success**: A Boolean value. This parameter contains [true](https://developer.apple.com/documentation/swift/true) if the objects were successfully deleted; otherwise, [false](https://developer.apple.com/documentation/swift/false).
  - **deletedObjectCount**: The number of objects deleted.
  - **error**: An error object. If an error occurred, this object contains information about the error; otherwise, it is set to `nil`.

<a id="Discussion"></a>

## Discussion

Your app can delete only those objects that it has previously saved to the HealthKit store. If the user revokes sharing permission for an object type, you can no longer delete those objects. This method operates asynchronously. As soon as the delete operation is finished, it calls the completion block on a background queue.

If your app has not requested permission to share an object’s data type, the method fails with an [HKErrorAuthorizationNotDetermined](../hkerror/code/errorauthorizationnotdetermined.md) error. If your app has been denied permission to share an object’s data type, it fails with an [HKErrorAuthorizationDenied](../hkerror/code/errorauthorizationdenied.md) error. When deleting multiple objects, if any object cannot be deleted, none of them are deleted.

HealthKit stores temporary [HKDeletedObject](../hkdeletedobject.md) entries, letting you query for recently deleted objects. However, the deleted objects are periodically removed to save storage space. If you want your app to receive notifications about all the deleted objects, set up an observer query, and enable it for background delivery. In the background query’s update handler, create an anchored object query to gather the list of recently deleted objects.

> **Note**

>  Although your app can manage only the objects it created and saved, the users can always delete any data they want using the Health app.

## See Also

### Working with HealthKit objects

- [deleteObject:withCompletion:](delete%28__withcompletion_%29-78l1m.md): Deletes the specified object from the HealthKit store.
- [deleteObjects:withCompletion:](delete%28__withcompletion_%29-17hzm.md): Deletes the specified objects from the HealthKit store.
- [saveObject:withCompletion:](save%28__withcompletion_%29-6fmtg.md): Saves the provided object to the HealthKit store.
- [saveObjects:withCompletion:](save%28__withcompletion_%29-47iwb.md): Saves an array of objects to the HealthKit store.
