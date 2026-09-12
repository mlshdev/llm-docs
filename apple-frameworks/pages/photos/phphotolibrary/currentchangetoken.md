> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/currentchangetoken](https://developer.apple.com/documentation/photos/phphotolibrary/currentchangetoken)

# currentChangeToken (Swift)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The opaque token that represents the current state of the Photos library.

## Declaration

```swift
var currentChangeToken: PHPersistentChangeToken { get }
```

## See Also

### Fetching Change History

- [fetchPersistentChanges(since:)](fetchpersistentchanges%28since_%29.md): Retrieves the Photos library changes since the token you specify.
- [PHPersistentChangeFetchResult](../phpersistentchangefetchresult.md): An object that represents a fetch result and allows you to enumerate a very large set of change records.
- [PHPersistentChangeToken](../phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.

# currentChangeToken (Objective-C)

**Framework:** Photos  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The opaque token that represents the current state of the Photos library.

## Declaration

```objectivec
@property (nonatomic, readonly) PHPersistentChangeToken * currentChangeToken;
```

## See Also

### Fetching Change History

- [fetchPersistentChangesSinceToken:error:](fetchpersistentchanges%28since_%29.md): Retrieves the Photos library changes since the token you specify.
- [PHPersistentChangeFetchResult](../phpersistentchangefetchresult.md): An object that represents a fetch result and allows you to enumerate a very large set of change records.
- [PHPersistentChangeToken](../phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.
