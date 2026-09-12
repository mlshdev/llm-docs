> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inmediadestinationreference/playlistdestination(withname:)](https://developer.apple.com/documentation/intents/inmediadestinationreference/playlistdestination(withname:))

# playlistDestination(withName:) (Swift)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new playlist destination for the media item.

## Declaration

```swift
class func playlistDestination(withName playlistName: String) -> Self
```

<a id="return-value"></a>

## Return Value

A new [INMediaDestinationReference](../inmediadestinationreference.md) object or `nil` if unable to create.

## See Also

### Creating a Media Destination Object

- [library()](library%28%29.md): Creates a new library destination for the media item.

# playlistDestinationWithName: (Objective-C)

**Framework:** Intents  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 14.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new playlist destination for the media item.

## Declaration

```objectivec
+ (instancetype) playlistDestinationWithName:(NSString *) playlistName;
```

<a id="return-value"></a>

## Return Value

A new [INMediaDestination](../inmediadestinationreference.md) object or `nil` if unable to create.

## See Also

### Creating a Media Destination Object

- [libraryDestination](library%28%29.md): Creates a new library destination for the media item.
