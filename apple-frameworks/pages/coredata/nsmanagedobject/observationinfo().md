> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coredata/nsmanagedobject/observationinfo()](https://developer.apple.com/documentation/coredata/nsmanagedobject/observationinfo())

# observationInfo() (Swift)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+

Returns the observation info of the managed object.

## Declaration

```swift
func observationInfo() -> UnsafeMutableRawPointer?
```

<a id="return-value"></a>

## Return Value

The observation info of the receiver.

<a id="Discussion"></a>

## Discussion

For more about key-value observation, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

> **Important**

>  You must not override this method.

## See Also

### Supporting Key-Value Observing

- [didAccessValue(forKey:)](didaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [setObservationInfo(\_:)](setobservationinfo%28__%29.md): Sets the observation info of the managed object.
- [willAccessValue(forKey:)](willaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [didChangeValue(forKey:)](didchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property has changed.
- [didChangeValue(forKey:withSetMutation:using:)](didchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change was made to a specified to-many relationship.
- [willChangeValue(forKey:)](willchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property is about to change.
- [willChangeValue(forKey:withSetMutation:using:)](willchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change is about to be made to a specified to-many relationship.

# observationInfo (Objective-C)

**Framework:** Core Data  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.1+ · macOS 10.4+

Returns the observation info of the managed object.

## Declaration

```objectivec
- (void *) observationInfo;
```

<a id="return-value"></a>

## Return Value

The observation info of the receiver.

<a id="Discussion"></a>

## Discussion

For more about key-value observation, see [Key-Value Observing Programming Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/KeyValueObserving/KeyValueObserving.html#//apple_ref/doc/uid/10000177i).

> **Important**

>  You must not override this method.

## See Also

### Supporting Key-Value Observing

- [didAccessValueForKey:](didaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [setObservationInfo:](setobservationinfo%28__%29.md): Sets the observation info of the managed object.
- [willAccessValueForKey:](willaccessvalue%28forkey_%29.md): Provides support for key-value observing access notification.
- [didChangeValueForKey:](didchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property has changed.
- [didChangeValueForKey:withSetMutation:usingObjects:](didchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change was made to a specified to-many relationship.
- [willChangeValueForKey:](willchangevalue%28forkey_%29.md): Provides an opportunity to respond when a value of a given property is about to change.
- [willChangeValueForKey:withSetMutation:usingObjects:](willchangevalue%28forkey_withsetmutation_using_%29.md): Provides an opportunity to respond when a change is about to be made to a specified to-many relationship.
