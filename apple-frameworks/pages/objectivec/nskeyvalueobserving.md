> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nskeyvalueobserving](https://developer.apple.com/documentation/objectivec/nskeyvalueobserving)

# NSKeyValueObserving (Swift)

**Framework:** Objective-C Runtime  
**Kind:** API Collection

An informal protocol that objects adopt to be notified of changes to the specified properties of other objects.

<a id="overview"></a>

## Overview

You can observe any object properties including simple attributes, to-one relationships, and to-many relationships. Observers of to-many relationships are informed of the type of change made — as well as which objects are involved in the change.

[NSObject](nsobject-swift.class.md) provides an implementation of the [NSKeyValueObserving](nskeyvalueobserving.md) protocol that provides an automatic observing capability for all objects. You can further refine notifications by disabling automatic observer notifications and implementing manual notifications using the methods in this protocol.

## Topics

### Change Notification

- [observeValue(forKeyPath:of:change:context:)](nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md): Informs the observing object when the value at the specified key path relative to the observed object has changed.

### Registering for Observation

- [addObserver(\_:forKeyPath:options:context:)](nsobject-swift.class/addobserver%28__forkeypath_options_context_%29.md): Registers the observer object to receive KVO notifications for the key path relative to the object receiving this message.
- [removeObserver(\_:forKeyPath:)](nsobject-swift.class/removeobserver%28__forkeypath_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message.
- [removeObserver(\_:forKeyPath:context:)](nsobject-swift.class/removeobserver%28__forkeypath_context_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message, given the context.

### Notifying Observers of Changes

- [willChangeValue(forKey:)](nsobject-swift.class/willchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property is about to change.
- [didChangeValue(forKey:)](nsobject-swift.class/didchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property has changed.
- [willChange(\_:valuesAt:forKey:)](nsobject-swift.class/willchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change is about to be executed at given indexes for a specified ordered to-many relationship.
- [didChange(\_:valuesAt:forKey:)](nsobject-swift.class/didchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change has occurred on the indexes for a specified ordered to-many relationship.
- [willChangeValue(forKey:withSetMutation:using:)](nsobject-swift.class/willchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change is about to be made to a specified unordered to-many relationship.
- [didChangeValue(forKey:withSetMutation:using:)](nsobject-swift.class/didchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change was made to a specified unordered to-many relationship.

### Observing Customization

- [automaticallyNotifiesObservers(forKey:)](nsobject-swift.class/automaticallynotifiesobservers%28forkey_%29.md): Returns a Boolean value that indicates whether the observed object supports automatic key-value observation for the given key.
- [keyPathsForValuesAffectingValue(forKey:)](nsobject-swift.class/keypathsforvaluesaffectingvalue%28forkey_%29.md): Returns a set of key paths for properties whose values affect the value of the specified key.
- [NSKeyValueObservingCustomization](../foundation/nskeyvalueobservingcustomization.md): Conforming to NSKeyValueObservingCustomization is not required to use Key-Value Observing. Provide an implementation of these functions if you need to disable auto-notifying for a key, or add dependent keys
- [observationInfo](nsobject-swift.class/observationinfo.md): Returns a pointer that identifies information about all of the observers that are registered with the observed object.

### Constants

- [NSKeyValueObservation](../foundation/nskeyvalueobservation.md)
- [NSKeyValueObservedChange](../foundation/nskeyvalueobservedchange.md)
- [NSKeyValueChange](../foundation/nskeyvaluechange.md): The kinds of changes that can be observed.
- [NSKeyValueObservingOptions](../foundation/nskeyvalueobservingoptions.md): The values that can be returned in a change dictionary.
- [NSKeyValueChangeKey](../foundation/nskeyvaluechangekey.md): The keys that can appear in the change dictionary.
- [NSKeyValueSetMutationKind](../foundation/nskeyvaluesetmutationkind.md)

## See Also

### Related Documentation

- [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i)

# NSKeyValueObserving (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** API Collection

An informal protocol that objects adopt to be notified of changes to the specified properties of other objects.

<a id="overview"></a>

## Overview

You can observe any object properties including simple attributes, to-one relationships, and to-many relationships. Observers of to-many relationships are informed of the type of change made — as well as which objects are involved in the change.

[NSObject](nsobject-swift.class.md) provides an implementation of the [NSKeyValueObserving](nskeyvalueobserving.md) protocol that provides an automatic observing capability for all objects. You can further refine notifications by disabling automatic observer notifications and implementing manual notifications using the methods in this protocol.

## Topics

### Change Notification

- [observeValueForKeyPath:ofObject:change:context:](nsobject-swift.class/observevalue%28forkeypath_of_change_context_%29.md): Informs the observing object when the value at the specified key path relative to the observed object has changed.

### Registering for Observation

- [addObserver:forKeyPath:options:context:](nsobject-swift.class/addobserver%28__forkeypath_options_context_%29.md): Registers the observer object to receive KVO notifications for the key path relative to the object receiving this message.
- [removeObserver:forKeyPath:](nsobject-swift.class/removeobserver%28__forkeypath_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message.
- [removeObserver:forKeyPath:context:](nsobject-swift.class/removeobserver%28__forkeypath_context_%29.md): Stops the observer object from receiving change notifications for the property specified by the key path relative to the object receiving this message, given the context.

### Notifying Observers of Changes

- [willChangeValueForKey:](nsobject-swift.class/willchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property is about to change.
- [didChangeValueForKey:](nsobject-swift.class/didchangevalue%28forkey_%29.md): Informs the observed object that the value of a given property has changed.
- [willChange:valuesAtIndexes:forKey:](nsobject-swift.class/willchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change is about to be executed at given indexes for a specified ordered to-many relationship.
- [didChange:valuesAtIndexes:forKey:](nsobject-swift.class/didchange%28__valuesat_forkey_%29.md): Informs the observed object that the specified change has occurred on the indexes for a specified ordered to-many relationship.
- [willChangeValueForKey:withSetMutation:usingObjects:](nsobject-swift.class/willchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change is about to be made to a specified unordered to-many relationship.
- [didChangeValueForKey:withSetMutation:usingObjects:](nsobject-swift.class/didchangevalue%28forkey_withsetmutation_using_%29.md): Informs the observed object that the specified change was made to a specified unordered to-many relationship.

### Observing Customization

- [automaticallyNotifiesObserversForKey:](nsobject-swift.class/automaticallynotifiesobservers%28forkey_%29.md): Returns a Boolean value that indicates whether the observed object supports automatic key-value observation for the given key.
- [keyPathsForValuesAffectingValueForKey:](nsobject-swift.class/keypathsforvaluesaffectingvalue%28forkey_%29.md): Returns a set of key paths for properties whose values affect the value of the specified key.
- [setKeys:triggerChangeNotificationsForDependentKey:](nsobject-swift.class/setkeys_triggerchangenotificationsfordependentkey_.md): Deprecated. Configures the observed object to post change notifications for a given property if any of the properties specified in a given array changes.
- [observationInfo](nsobject-swift.class/observationinfo.md): Returns a pointer that identifies information about all of the observers that are registered with the observed object.

### Constants

- [NSKeyValueChange](../foundation/nskeyvaluechange.md): The kinds of changes that can be observed.
- [NSKeyValueObservingOptions](../foundation/nskeyvalueobservingoptions.md): The values that can be returned in a change dictionary.
- [NSKeyValueChangeKey](../foundation/nskeyvaluechangekey.md): The keys that can appear in the change dictionary.
- [NSKeyValueSetMutationKind](../foundation/nskeyvaluesetmutationkind.md)

## See Also

### Related Documentation

- [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i)
