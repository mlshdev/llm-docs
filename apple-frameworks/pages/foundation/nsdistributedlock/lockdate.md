> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsdistributedlock/lockdate](https://developer.apple.com/documentation/foundation/nsdistributedlock/lockdate)

# lockDate (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the time the receiver was acquired by any of the `NSDistributedLock` objects using the same path.

## Declaration

```swift
var lockDate: Date { get }
```

<a id="return-value"></a>

## Return Value

The time the receiver was acquired by any of the `NSDistributedLock` objects using the same path. Returns `nil` if the lock doesn’t exist.

<a id="Discussion"></a>

## Discussion

This method is potentially useful to applications that want to use an age heuristic to decide if a lock is too old and should be broken.

If the creation date on the lock isn’t the date on which you locked it, you’ve lost the lock: it’s been broken since you last checked it.

# lockDate (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the time the receiver was acquired by any of the `NSDistributedLock` objects using the same path.

## Declaration

```objectivec
@property (copy, readonly) NSDate * lockDate;
```

<a id="return-value"></a>

## Return Value

The time the receiver was acquired by any of the `NSDistributedLock` objects using the same path. Returns `nil` if the lock doesn’t exist.

<a id="Discussion"></a>

## Discussion

This method is potentially useful to applications that want to use an age heuristic to decide if a lock is too old and should be broken.

If the creation date on the lock isn’t the date on which you locked it, you’ve lost the lock: it’s been broken since you last checked it.
