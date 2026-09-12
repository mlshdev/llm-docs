> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/willaccessvalue(forkey:)](https://developer.apple.com/documentation/coredata/nsmanagedobject/willaccessvalue(forkey:))

# willAccessValue(forKey:) (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Provides support for key-value observing access notification.

## Declaration

```swift
func willAccessValue(forKey key: String?)
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

See [didAccessValue(forKey:)](didaccessvalue%28forkey_%29.md) for more details. You can invoke this method with the `key` value of `nil` to ensure that a fault has been fired, as illustrated by the following example.

```objc
[aManagedObject willAccessValueForKey:nil];
```

## See Also

### Supporting Key-Value Observing

- [didAccessValue(forKey:)](didaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [observationInfo()](observationinfo%28%29.md): Returns the observation info of the managed object.
- [setObservationInfo(\_:)](setobservationinfo%28__%29.md): Sets the observation info of the managed object.
- [didChangeValue(forKey:)](didchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property has changed.
- [didChangeValue(forKey:withSetMutation:using:)](didchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change was made to a specified to-many relationship.
- [willChangeValue(forKey:)](willchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property is about to change.
- [willChangeValue(forKey:withSetMutation:using:)](willchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change is about to be made to a specified to-many relationship.

# willAccessValueForKey: (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Provides support for key-value observing access notification.

## Declaration

```objectivec
- (void) willAccessValueForKey:(NSString *) key;
```

## Parameters

- `key`: The name of one of the receiver’s properties.

<a id="Discussion"></a>

## Discussion

See [didAccessValueForKey:](didaccessvalue%28forkey_%29.md) for more details. You can invoke this method with the `key` value of `nil` to ensure that a fault has been fired, as illustrated by the following example.

```objc
[aManagedObject willAccessValueForKey:nil];
```

## See Also

### Supporting Key-Value Observing

- [didAccessValueForKey:](didaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [observationInfo](observationinfo%28%29.md): Returns the observation info of the managed object.
- [setObservationInfo:](setobservationinfo%28__%29.md): Sets the observation info of the managed object.
- [didChangeValueForKey:](didchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property has changed.
- [didChangeValueForKey:withSetMutation:usingObjects:](didchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change was made to a specified to-many relationship.
- [willChangeValueForKey:](willchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property is about to change.
- [willChangeValueForKey:withSetMutation:usingObjects:](willchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change is about to be made to a specified to-many relationship.
