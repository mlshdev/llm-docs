> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchspecifickey](https://developer.apple.com/documentation/dispatch/dispatchspecifickey)

# DispatchSpecificKey

**Framework:** Dispatch  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A key associated with a specific contextual value on a dispatch queue.

## Declaration

```swift
final class DispatchSpecificKey<T>
```

<a id="overview"></a>

## Overview

Access the value of a key using the [setSpecific(key:value:)](dispatchqueue/setspecific%28key_value_%29.md) and [getSpecific(key:)](dispatchqueue/getspecific%28key_%29-swift.method.md) methods.

## Topics

### Creating a Key

- [init()](dispatchspecifickey/init%28%29.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting and Setting Contextual Data

- [setSpecific(key:value:)](dispatchqueue/setspecific%28key_value_%29.md): Sets the key/value data for the specified dispatch queue.
- [getSpecific(key:)](dispatchqueue/getspecific%28key_%29-swift.method.md): Returns the value for the key associated with this dispatch queue.
- [getSpecific(key:)](dispatchqueue/getspecific%28key_%29-swift.type.method.md): Returns the value for the key associated with the current execution context.
