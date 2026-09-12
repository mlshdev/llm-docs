> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/didaccessvalue(forkey:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/didaccessvalue(forkey:))

# didAccessValue(forKey:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Provides support for key-value observing access notification.

## Declaration

```swift
func didAccessValue(forKey key: String?)
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Together with [willAccessValue(forKey:)](willaccessvalue%28forkey_%29.md), this method is used to fire faults, to maintain inverse relationships, and so on. Each read access must be wrapped in this method pair (in the same way that each write access must be wrapped in the `willChangeValueForKey:`/`didChangeValueForKey:` method pair). In the default implementation of `NSManagedObject` these methods are invoked for you automatically. If, say, you create a custom subclass that uses explicit instance variables, you must invoke them yourself, as in the following example.

```objc
- (NSString *)firstName
{
    [self willAccessValueForKey:@"firstName"];
    NSString *rtn = firstName;
    [self didAccessValueForKey:@"firstName"];
    return rtn;
}
```

## See Also

### Supporting Key-Value Observing

- [observationInfo()](observationinfo%28%29.md): Returns the observation info of the managed object.
- [setObservationInfo(\_:)](setobservationinfo%28__%29.md): Sets the observation info of the managed object.
- [willAccessValue(forKey:)](willaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [didChangeValue(forKey:)](didchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property has changed.
- [didChangeValue(forKey:withSetMutation:using:)](didchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change was made to a specified to-many relationship.
- [willChangeValue(forKey:)](willchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property is about to change.
- [willChangeValue(forKey:withSetMutation:using:)](willchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change is about to be made to a specified to-many relationship.

# didAccessValueForKey: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Provides support for key-value observing access notification.

## Declaration

```objectivec
- (void) didAccessValueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

Together with [willAccessValueForKey:](willaccessvalue%28forkey_%29.md), this method is used to fire faults, to maintain inverse relationships, and so on. Each read access must be wrapped in this method pair (in the same way that each write access must be wrapped in the `willChangeValueForKey:`/`didChangeValueForKey:` method pair). In the default implementation of `NSManagedObject` these methods are invoked for you automatically. If, say, you create a custom subclass that uses explicit instance variables, you must invoke them yourself, as in the following example.

```objc
- (NSString *)firstName
{
    [self willAccessValueForKey:@"firstName"];
    NSString *rtn = firstName;
    [self didAccessValueForKey:@"firstName"];
    return rtn;
}
```

## See Also

### Supporting Key-Value Observing

- [observationInfo](observationinfo%28%29.md): Returns the observation info of the managed object.
- [setObservationInfo:](setobservationinfo%28__%29.md): Sets the observation info of the managed object.
- [willAccessValueForKey:](willaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [didChangeValueForKey:](didchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property has changed.
- [didChangeValueForKey:withSetMutation:usingObjects:](didchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change was made to a specified to-many relationship.
- [willChangeValueForKey:](willchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property is about to change.
- [willChangeValueForKey:withSetMutation:usingObjects:](willchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change is about to be made to a specified to-many relationship.
