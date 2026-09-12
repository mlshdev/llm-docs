> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phpersistentchangetoken](https://developer.apple.com/documentation/photos/phpersistentchangetoken)

# PHPersistentChangeToken (Swift)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.

## Declaration

```swift
class PHPersistentChangeToken
```

## Mentioned In

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md)

## Topics

### Initializers

- [init(coder:)](phpersistentchangetoken/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Fetching Change History

- [fetchPersistentChanges(since:)](phphotolibrary/fetchpersistentchanges%28since_%29.md): Retrieves the Photos library changes since the token you specify.
- [PHPersistentChangeFetchResult](phpersistentchangefetchresult.md): An object that represents a fetch result and allows you to enumerate a very large set of change records.
- [currentChangeToken](phphotolibrary/currentchangetoken.md): The opaque token that represents the current state of the Photos library.

# PHPersistentChangeToken (Objective-C)

**Framework:** Photos  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.

## Declaration

```objectivec
@interface PHPersistentChangeToken : NSObject
```

## Mentioned In

- [Uploading asset resources in the background](../photokit/uploading-asset-resources-in-the-background.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Fetching Change History

- [fetchPersistentChangesSinceToken:error:](phphotolibrary/fetchpersistentchanges%28since_%29.md): Retrieves the Photos library changes since the token you specify.
- [PHPersistentChangeFetchResult](phpersistentchangefetchresult.md): An object that represents a fetch result and allows you to enumerate a very large set of change records.
- [currentChangeToken](phphotolibrary/currentchangetoken.md): The opaque token that represents the current state of the Photos library.
