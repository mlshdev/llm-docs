> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediagroup/mediaobjects](https://developer.apple.com/documentation/medialibrary/mlmediagroup/mediaobjects)

# mediaObjects (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A list of media objects in the media group.

## Declaration

```swift
var mediaObjects: [MLMediaObject]? { get }
```

<a id="Discussion"></a>

## Discussion

This accessor property is nonblocking. If there is no data yet, it returns `nil` and automatically triggers an internal asynchronous request. A KVO notification will be sent via the main thread when data arrives.

## See Also

### Accessing the Group Hierarchy

- [parent](parent.md): Deprecated. The media group’s parent group.
- [childGroups](childgroups.md): Deprecated. A list of child groups contained in the media group.

# mediaObjects (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A list of media objects in the media group.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<MLMediaObject *> * mediaObjects;
```

<a id="Discussion"></a>

## Discussion

This accessor property is nonblocking. If there is no data yet, it returns `nil` and automatically triggers an internal asynchronous request. A KVO notification will be sent via the main thread when data arrives.

## See Also

### Accessing the Group Hierarchy

- [parent](parent.md): Deprecated. The media group’s parent group.
- [childGroups](childgroups.md): Deprecated. A list of child groups contained in the media group.
