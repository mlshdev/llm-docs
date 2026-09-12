> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransaction/lock()](https://developer.apple.com/documentation/quartzcore/catransaction/lock())

# lock() (Swift)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Attempts to acquire a recursive spin-lock lock, ensuring that returned layer values are valid until unlocked.

## Declaration

```swift
class func lock()
```

<a id="Discussion"></a>

## Discussion

Core Animation uses a data model that promises not to corrupt the internal data structures when called from multiple threads concurrently, but not that data returned is still valid if the property was valid on another thread. By locking during a transaction you can ensure data that is read, modified, and set is correctly managed.

## See Also

### Managing Concurrency

- [unlock()](unlock%28%29.md): Relinquishes a previously acquired transaction lock.

# lock (Objective-C)

**Framework:** Core Animation  
**Kind:** Type Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Attempts to acquire a recursive spin-lock lock, ensuring that returned layer values are valid until unlocked.

## Declaration

```objectivec
+ (void) lock;
```

<a id="Discussion"></a>

## Discussion

Core Animation uses a data model that promises not to corrupt the internal data structures when called from multiple threads concurrently, but not that data returned is still valid if the property was valid on another thread. By locking during a transaction you can ensure data that is read, modified, and set is correctly managed.

## See Also

### Managing Concurrency

- [unlock](unlock%28%29.md): Relinquishes a previously acquired transaction lock.
