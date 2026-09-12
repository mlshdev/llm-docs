> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phpersistentchangefetchresult](https://developer.apple.com/documentation/photos/phpersistentchangefetchresult)

# PHPersistentChangeFetchResult (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a fetch result and allows you to enumerate a very large set of change records.

## Declaration

```swift
class PHPersistentChangeFetchResult
```

## Topics

### Performing Operations with Objects in a Fetch Request

- [PHPersistentChange](phpersistentchange.md): An object that represents a change in the Photos library, and allows for requesting local identifiers that identify the changes for a library object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Fetching Change History

- [fetchPersistentChanges(since:)](phphotolibrary/fetchpersistentchanges%28since_%29.md): Retrieves the Photos library changes since the token you specify.
- [currentChangeToken](phphotolibrary/currentchangetoken.md): The opaque token that represents the current state of the Photos library.
- [PHPersistentChangeToken](phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.

# PHPersistentChangeFetchResult (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An object that represents a fetch result and allows you to enumerate a very large set of change records.

## Declaration

```objectivec
@interface PHPersistentChangeFetchResult : NSObject
```

## Topics

### Performing Operations with Objects in a Fetch Request

- [enumerateChangesWithBlock:](https://developer.apple.com/documentation/photos/phpersistentchangefetchresult/enumeratechangeswithblock:): Executes the block you specify by using the objects in the fetch result.
- [PHPersistentChange](phpersistentchange.md): An object that represents a change in the Photos library, and allows for requesting local identifiers that identify the changes for a library object.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Fetching Change History

- [fetchPersistentChangesSinceToken:error:](phphotolibrary/fetchpersistentchanges%28since_%29.md): Retrieves the Photos library changes since the token you specify.
- [currentChangeToken](phphotolibrary/currentchangetoken.md): The opaque token that represents the current state of the Photos library.
- [PHPersistentChangeToken](phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.
