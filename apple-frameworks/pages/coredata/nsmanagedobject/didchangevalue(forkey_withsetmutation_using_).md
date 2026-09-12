> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/didchangevalue(forkey:withsetmutation:using:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/didchangevalue(forkey:withsetmutation:using:))

# didChangeValue(forKey:withSetMutation:using:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Provides an opportunity to respond when a change was made to a specified to-many relationship.

## Declaration

```swift
func didChangeValue(forKey inKey: String, withSetMutation inMutationKind: NSKeyValueSetMutationKind, using inObjects: Set<AnyHashable>)
```

## Parameters

- `inKey`: The name of a property that is a to-many relationship.
- `inMutationKind`: The type of change that was made.
- `inObjects`: The objects that were involved in the change (see [NSKeyValueSetMutationKind](../../foundation/nskeyvaluesetmutationkind.md)).

<a id="Discussion"></a>

## Discussion

For more details, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

You must not override this method.

## See Also

### Supporting Key-Value Observing

- [didAccessValue(forKey:)](didaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [observationInfo()](observationinfo%28%29.md): Returns the observation info of the managed object.
- [setObservationInfo(\_:)](setobservationinfo%28__%29.md): Sets the observation info of the managed object.
- [willAccessValue(forKey:)](willaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [didChangeValue(forKey:)](didchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property has changed.
- [willChangeValue(forKey:)](willchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property is about to change.
- [willChangeValue(forKey:withSetMutation:using:)](willchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change is about to be made to a specified to-many relationship.

# didChangeValueForKey:withSetMutation:usingObjects: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Provides an opportunity to respond when a change was made to a specified to-many relationship.

## Declaration

```objectivec
- (void) didChangeValueForKey:(NSString *) inKey withSetMutation:(NSKeyValueSetMutationKind) inMutationKind usingObjects:(NSSet *) inObjects;
```

## Parameters

- `inKey`: The name of a property that is a to-many relationship.
- `inMutationKind`: The type of change that was made.
- `inObjects`: The objects that were involved in the change (see [NSKeyValueSetMutationKind](../../foundation/nskeyvaluesetmutationkind.md)).

<a id="Discussion"></a>

## Discussion

For more details, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

You must not override this method.

## See Also

### Supporting Key-Value Observing

- [didAccessValueForKey:](didaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [observationInfo](observationinfo%28%29.md): Returns the observation info of the managed object.
- [setObservationInfo:](setobservationinfo%28__%29.md): Sets the observation info of the managed object.
- [willAccessValueForKey:](willaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [didChangeValueForKey:](didchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property has changed.
- [willChangeValueForKey:](willchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property is about to change.
- [willChangeValueForKey:withSetMutation:usingObjects:](willchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change is about to be made to a specified to-many relationship.
