> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitemvaluerequest/respond(error:)](https://developer.apple.com/documentation/avfoundation/avmetadataitemvaluerequest/respond(error:))

# respond(error:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an error when the system fails to load the value.

## Declaration

```swift
func respond(error: any Error)
```

## Parameters

- `error`: The error to return for the request.

## See Also

### Handling the response

- [respond(value:)](respond%28value_%29.md): Returns the metadata item’s value.
- [metadataItem](metadataitem.md): The metadata item to request a value for.

# respondWithError: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns an error when the system fails to load the value.

## Declaration

```objectivec
- (void) respondWithError:(NSError *) error;
```

## Parameters

- `error`: The error to return for the request.

## See Also

### Handling the response

- [respondWithValue:](respond%28value_%29.md): Returns the metadata item’s value.
- [metadataItem](metadataitem.md): The metadata item to request a value for.
