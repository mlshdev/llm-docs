> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastore](https://developer.apple.com/documentation/classkit/clsdatastore)

# CLSDataStore (Swift)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

A container for all the ClassKit data in your app.

## Declaration

```swift
class CLSDataStore
```

<a id="overview"></a>

## Overview

Use the ClassKit data store to build and access contexts ([CLSContext](clscontext.md) instances) that you use to advertise your app’s assignable content. Contexts in turn provide access to activities ([CLSActivity](clsactivity.md) instances) and activity items ([CLSScoreItem](clsscoreitem.md), [CLSBinaryItem](clsbinaryitem.md), and [CLSQuantityItem](clsquantityitem.md) instances) that you use to record progress through assignments. You don’t instantiate a data store yourself. Instead, use the single [shared](clsdatastore/shared.md) data store instance throughout your app.

The data store provides access to the app’s one and only main context through the [mainAppContext](clsdatastore/mainappcontext.md) property. This property acts as the root context in your context hierarchy that you can use as a starting point when searching for descendant contexts.

To build contexts, you adopt the [CLSDataStoreDelegate](clsdatastoredelegate.md) protocol in one of your classes, typically one that exists for the lifetime of your app, and assign an instance of that class as the shared data store’s [delegate](clsdatastore/delegate.md) property. Then, when the data store needs a context that it’s never seen before, it asks your delegate to build it.

After you make changes to any context, activity, or activity item, call the data store’s [save(completion:)](clsdatastore/save%28completion_%29.md) method to commit the changes, and propagate them through the network.

## Topics

### Accessing the shared data store

- [shared](clsdatastore/shared.md): The shared data store object.

### Managing the delegate

- [Building missing contexts](building-missing-contexts.md): Create and initialize missing contexts.
- [delegate](clsdatastore/delegate.md): The data store delegate instance.
- [CLSDataStoreDelegate](clsdatastoredelegate.md): An interface the data store uses to request new contexts.

### Accessing specific contexts and activities

- [mainAppContext](clsdatastore/mainappcontext.md): The app’s top-level context.
- [activeContext](clsdatastore/activecontext.md): The currently active context.
- [runningActivity](clsdatastore/runningactivity.md): The currently running activity within the currently active context.
- [fetchActivity(for:completion:)](clsdatastore/fetchactivity%28for_completion_%29.md): Fetches an activity for a given document so you can record progress on the associated task.
- [completeAllAssignedActivities(matching:)](clsdatastore/completeallassignedactivities%28matching_%29.md): Marks all of the assigned and active activities for the given context path as complete.

### Finding contexts that match criteria

- [contexts(matchingIdentifierPath:completion:)](clsdatastore/contexts%28matchingidentifierpath_completion_%29.md): Fetches all the contexts along a given identifier path.
- [contexts(matching:completion:)](clsdatastore/contexts%28matching_completion_%29.md): Fetches all the contexts matching a predicate.
- [CLSPredicateKeyPath](clspredicatekeypath.md): The set of possible key paths you use to search for contexts.

### Removing contexts

- [remove(\_:)](clsdatastore/remove%28__%29.md): Marks a context for removal.

### Saving changes

- [save(completion:)](clsdatastore/save%28completion_%29.md): Saves any changes you’ve made in the data store.

### Instance Methods

- [checkIsAssignedDocument(\_:completion:)](clsdatastore/checkisassigneddocument%28__completion_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Essentials

- [Enabling ClassKit in your app](enabling-classkit-in-your-app.md): Prepare your app and your development environment to adopt ClassKit.
- [ClassKit Environment Entitlement](../bundleresources/entitlements/com.apple.developer.classkit-environment.md): The ClassKit development or production environment for an education app that works with the Schoolwork app.
- [Incorporating ClassKit into an Educational App](incorporating-classkit-into-an-educational-app.md): Walk through the process of setting up assignments and recording student progress.
- [ClassKit UI](../classkitui.md): Display views that enable students to submit and withdraw assigned documents in your app.

# CLSDataStore (Objective-C)

**Framework:** ClassKit  
**Kind:** Class  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

A container for all the ClassKit data in your app.

## Declaration

```objectivec
@interface CLSDataStore : NSObject
```

<a id="overview"></a>

## Overview

Use the ClassKit data store to build and access contexts ([CLSContext](clscontext.md) instances) that you use to advertise your app’s assignable content. Contexts in turn provide access to activities ([CLSActivity](clsactivity.md) instances) and activity items ([CLSScoreItem](clsscoreitem.md), [CLSBinaryItem](clsbinaryitem.md), and [CLSQuantityItem](clsquantityitem.md) instances) that you use to record progress through assignments. You don’t instantiate a data store yourself. Instead, use the single [shared](clsdatastore/shared.md) data store instance throughout your app.

The data store provides access to the app’s one and only main context through the [mainAppContext](clsdatastore/mainappcontext.md) property. This property acts as the root context in your context hierarchy that you can use as a starting point when searching for descendant contexts.

To build contexts, you adopt the [CLSDataStoreDelegate](clsdatastoredelegate.md) protocol in one of your classes, typically one that exists for the lifetime of your app, and assign an instance of that class as the shared data store’s [delegate](clsdatastore/delegate.md) property. Then, when the data store needs a context that it’s never seen before, it asks your delegate to build it.

After you make changes to any context, activity, or activity item, call the data store’s [saveWithCompletion:](clsdatastore/save%28completion_%29.md) method to commit the changes, and propagate them through the network.

## Topics

### Accessing the shared data store

- [shared](clsdatastore/shared.md): The shared data store object.

### Managing the delegate

- [Building missing contexts](building-missing-contexts.md): Create and initialize missing contexts.
- [delegate](clsdatastore/delegate.md): The data store delegate instance.
- [CLSDataStoreDelegate](clsdatastoredelegate.md): An interface the data store uses to request new contexts.

### Accessing specific contexts and activities

- [mainAppContext](clsdatastore/mainappcontext.md): The app’s top-level context.
- [activeContext](clsdatastore/activecontext.md): The currently active context.
- [runningActivity](clsdatastore/runningactivity.md): The currently running activity within the currently active context.
- [fetchActivityForURL:completion:](clsdatastore/fetchactivity%28for_completion_%29.md): Fetches an activity for a given document so you can record progress on the associated task.
- [completeAllAssignedActivitiesMatching:](clsdatastore/completeallassignedactivities%28matching_%29.md): Marks all of the assigned and active activities for the given context path as complete.

### Finding contexts that match criteria

- [contextsMatchingIdentifierPath:completion:](clsdatastore/contexts%28matchingidentifierpath_completion_%29.md): Fetches all the contexts along a given identifier path.
- [contextsMatchingPredicate:completion:](clsdatastore/contexts%28matching_completion_%29.md): Fetches all the contexts matching a predicate.
- [CLSPredicateKeyPath](clspredicatekeypath.md): The set of possible key paths you use to search for contexts.

### Removing contexts

- [removeContext:](clsdatastore/remove%28__%29.md): Marks a context for removal.

### Saving changes

- [saveWithCompletion:](clsdatastore/save%28completion_%29.md): Saves any changes you’ve made in the data store.

### Instance Methods

- [checkIsAssignedDocument:completion:](clsdatastore/checkisassigneddocument%28__completion_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Essentials

- [Enabling ClassKit in your app](enabling-classkit-in-your-app.md): Prepare your app and your development environment to adopt ClassKit.
- [ClassKit Environment Entitlement](../bundleresources/entitlements/com.apple.developer.classkit-environment.md): The ClassKit development or production environment for an education app that works with the Schoolwork app.
- [Incorporating ClassKit into an Educational App](incorporating-classkit-into-an-educational-app.md): Walk through the process of setting up assignments and recording student progress.
