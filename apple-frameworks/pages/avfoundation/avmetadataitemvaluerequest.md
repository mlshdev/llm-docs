> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadataitemvaluerequest](https://developer.apple.com/documentation/avfoundation/avmetadataitemvaluerequest)

# AVMetadataItemValueRequest (Swift)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that responds to a request to load the value of a metadata item.

## Declaration

```swift
class AVMetadataItemValueRequest
```

## Topics

### Handling the response

- [respond(value:)](avmetadataitemvaluerequest/respond%28value_%29.md): Returns the metadata item’s value.
- [respond(error:)](avmetadataitemvaluerequest/respond%28error_%29.md): Returns an error when the system fails to load the value.
- [metadataItem](avmetadataitemvaluerequest/metadataitem.md): The metadata item to request a value for.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Creating a metadata item

- [init(propertiesOfMetadataItem:valueLoadingHandler:)](avmetadataitem/init%28propertiesofmetadataitem_valueloadinghandler_%29.md): Creates a metadata item whose value loads on an on-demand basis only.

# AVMetadataItemValueRequest (Objective-C)

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An object that responds to a request to load the value of a metadata item.

## Declaration

```objectivec
@interface AVMetadataItemValueRequest : NSObject
```

## Topics

### Handling the response

- [respondWithValue:](avmetadataitemvaluerequest/respond%28value_%29.md): Returns the metadata item’s value.
- [respondWithError:](avmetadataitemvaluerequest/respond%28error_%29.md): Returns an error when the system fails to load the value.
- [metadataItem](avmetadataitemvaluerequest/metadataitem.md): The metadata item to request a value for.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)
