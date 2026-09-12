> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitemvaluerequest/respond(value:)](https://developer.apple.com/documentation/avfoundation/avmetadataitemvaluerequest/respond(value:))

# respond(value:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the metadata item’s value.

## Declaration

```swift
func respond(value: any NSCopying & NSObjectProtocol)
```

## Parameters

- `value`: The value to return for the request.

<a id="Discussion"></a>

## Discussion

You call this method to return the metadata item’s value.

## See Also

### Handling the response

- [respond(error:)](respond%28error_%29.md): Returns an error when the system fails to load the value.
- [metadataItem](metadataitem.md): The metadata item to request a value for.

# respondWithValue: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the metadata item’s value.

## Declaration

```objectivec
- (void) respondWithValue:(id<NSCopying,NSObject>) value;
```

## Parameters

- `value`: The value to return for the request.

<a id="Discussion"></a>

## Discussion

You call this method to return the metadata item’s value.

## See Also

### Handling the response

- [respondWithError:](respond%28error_%29.md): Returns an error when the system fails to load the value.
- [metadataItem](metadataitem.md): The metadata item to request a value for.
