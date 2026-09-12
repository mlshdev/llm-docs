> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phphotolibrary/fetchpersistentchanges(since:)](https://developer.apple.com/documentation/photos/phphotolibrary/fetchpersistentchanges(since:))

# fetchPersistentChanges(since:) (Swift)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Retrieves the Photos library changes since the token you specify.

## Declaration

```swift
func fetchPersistentChanges(since token: PHPersistentChangeToken) throws -> PHPersistentChangeFetchResult
```

## Parameters

- `token`: The token that represents the state of the Photos library to compare against.

<a id="return-value"></a>

## Return Value

A fetch result that contains library change details; otherwise, an error that indicates why the fetch fails (for example, [PHPhotosError.Code.persistentChangeTokenExpired](../phphotoserror-swift.struct/code/persistentchangetokenexpired.md)).

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Fetching Change History

- [PHPersistentChangeFetchResult](../phpersistentchangefetchresult.md): An object that represents a fetch result and allows you to enumerate a very large set of change records.
- [currentChangeToken](currentchangetoken.md): The opaque token that represents the current state of the Photos library.
- [PHPersistentChangeToken](../phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.

# fetchPersistentChangesSinceToken:error: (Objective-C)

**Framework:** Photos  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Retrieves the Photos library changes since the token you specify.

## Declaration

```objectivec
- (PHPersistentChangeFetchResult *) fetchPersistentChangesSinceToken:(PHPersistentChangeToken *) token error:(NSError **) error;
```

## Parameters

- `token`: The token that represents the state of the Photos library to compare against.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

A fetch result that contains library change details; otherwise, an error that indicates why the fetch fails (for example, [PHPhotosErrorPersistentChangeTokenExpired](../phphotoserror-swift.struct/code/persistentchangetokenexpired.md)).

## Mentioned In

- [Uploading asset resources in the background](../../photokit/uploading-asset-resources-in-the-background.md)

## See Also

### Fetching Change History

- [PHPersistentChangeFetchResult](../phpersistentchangefetchresult.md): An object that represents a fetch result and allows you to enumerate a very large set of change records.
- [currentChangeToken](currentchangetoken.md): The opaque token that represents the current state of the Photos library.
- [PHPersistentChangeToken](../phpersistentchangetoken.md): An opaque object that tracks the state of the Photos library between runs, and that you can copy and serialize for future use.
