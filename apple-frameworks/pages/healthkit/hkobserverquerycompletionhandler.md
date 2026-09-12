> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkobserverquerycompletionhandler](https://developer.apple.com/documentation/healthkit/hkobserverquerycompletionhandler)

# HKObserverQueryCompletionHandler (Swift)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The completion handler for background deliveries.

## Declaration

```swift
typealias HKObserverQueryCompletionHandler = () -> Void
```

## Mentioned In

- [Executing Observer Queries](executing-observer-queries.md)

<a id="Discussion"></a>

## Discussion

This completion handler defines a block that can be called when responding to background deliveries. If your app registers for background deliveries, HealthKit wakes your app when new data has been saved to the HealthKit store. You can specify a maximum frequency for background deliveries. HealthKit wakes your app only once during each time period that is defined by the frequency.

When HealthKit wakes your app, it calls the update handler on any observer queries that match the new data. This block is passed to the update handler. You must call this block as soon as you are done processing the incoming data. Calling this block tells HealthKit that you have successfully received the background data. If you do not call this block, HealthKit continues to attempt to launch your app using a back off algorithm. If your app fails to respond three times, HealthKit assumes that your app cannot receive data, and stops sending you background updates.

## See Also

### Related Documentation

- [enableBackgroundDelivery(for:frequency:withCompletion:)](hkhealthstore/enablebackgrounddelivery%28for_frequency_withcompletion_%29.md): Enables the delivery of updates to an app running in the background.

### Creating Observer Queries

- [Executing Observer Queries](executing-observer-queries.md): Create and run observer queries.
- [init(sampleType:predicate:updateHandler:)](hkobserverquery/init%28sampletype_predicate_updatehandler_%29.md): Instantiates and returns a query that monitors the HealthKit store and responds to changes.
- [init(queryDescriptors:updateHandler:)](hkobserverquery/init%28querydescriptors_updatehandler_%29.md): Creates a query that monitors the HealthKit store and responds to any changes matching any of the query descriptors you provided.

# HKObserverQueryCompletionHandler (Objective-C)

**Framework:** HealthKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

The completion handler for background deliveries.

## Declaration

```objectivec
typedef void (^)(void) HKObserverQueryCompletionHandler;
```

## Mentioned In

- [Executing Observer Queries](executing-observer-queries.md)

<a id="Discussion"></a>

## Discussion

This completion handler defines a block that can be called when responding to background deliveries. If your app registers for background deliveries, HealthKit wakes your app when new data has been saved to the HealthKit store. You can specify a maximum frequency for background deliveries. HealthKit wakes your app only once during each time period that is defined by the frequency.

When HealthKit wakes your app, it calls the update handler on any observer queries that match the new data. This block is passed to the update handler. You must call this block as soon as you are done processing the incoming data. Calling this block tells HealthKit that you have successfully received the background data. If you do not call this block, HealthKit continues to attempt to launch your app using a back off algorithm. If your app fails to respond three times, HealthKit assumes that your app cannot receive data, and stops sending you background updates.

## See Also

### Related Documentation

- [enableBackgroundDeliveryForType:frequency:withCompletion:](hkhealthstore/enablebackgrounddelivery%28for_frequency_withcompletion_%29.md): Enables the delivery of updates to an app running in the background.

### Creating Observer Queries

- [Executing Observer Queries](executing-observer-queries.md): Create and run observer queries.
- [initWithSampleType:predicate:updateHandler:](hkobserverquery/init%28sampletype_predicate_updatehandler_%29.md): Instantiates and returns a query that monitors the HealthKit store and responds to changes.
- [initWithQueryDescriptors:updateHandler:](hkobserverquery/init%28querydescriptors_updatehandler_%29.md): Creates a query that monitors the HealthKit store and responds to any changes matching any of the query descriptors you provided.
