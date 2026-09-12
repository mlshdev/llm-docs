> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkanchoredobjectquery/updatehandler](https://developer.apple.com/documentation/healthkit/hkanchoredobjectquery/updatehandler)

# updateHandler (Swift)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS · visionOS 1.0+ · watchOS 2.0+

Handler for monitoring updates to the HealthKit store.

## Declaration

```swift
var updateHandler: (@Sendable (HKAnchoredObjectQuery, [HKSample]?, [HKDeletedObject]?, HKQueryAnchor?, (any Error)?) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

If this property is set to `nil`, the anchor query automatically stops as soon as it finishes calculating the initial results. If this property is not `nil`, the query behaves similarly to the observer query: it continues to run, monitoring the HealthKit store. The system executes the update handler on a background queue whenever matching samples are saved to or deleted from the HealthKit store.

# updateHandler (Objective-C)

**Framework:** HealthKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 13.0+ · visionOS 1.0+ · watchOS 2.0+

Handler for monitoring updates to the HealthKit store.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) void (^updateHandler)(HKAnchoredObjectQuery *query, NSArray<__kindof HKSample *> *addedObjects, NSArray<HKDeletedObject *> *deletedObjects, HKQueryAnchor *newAnchor, NSError *error);
```

<a id="Discussion"></a>

## Discussion

If this property is set to `nil`, the anchor query automatically stops as soon as it finishes calculating the initial results. If this property is not `nil`, the query behaves similarly to the observer query: it continues to run, monitoring the HealthKit store. The system executes the update handler on a background queue whenever matching samples are saved to or deleted from the HealthKit store.
