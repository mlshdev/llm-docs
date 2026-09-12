> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmedialibrary/mediasources](https://developer.apple.com/documentation/medialibrary/mlmedialibrary/mediasources)

# mediaSources (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Returns a dictionary of media sources by identifier.

## Declaration

```swift
var mediaSources: [String : MLMediaSource]? { get }
```

<a id="Discussion"></a>

## Discussion

Returns `nil` the first time, beginning an asynchronous load of the media sources. A KVO notification is sent when all media sources have been loaded. If there are no objects in a media source, the source does not appear in this dictionary.

# mediaSources (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Returns a dictionary of media sources by identifier.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSDictionary<NSString *,MLMediaSource *> * mediaSources;
```

<a id="Discussion"></a>

## Discussion

Returns `nil` the first time, beginning an asynchronous load of the media sources. A KVO notification is sent when all media sources have been loaded. If there are no objects in a media source, the source does not appear in this dictionary.
