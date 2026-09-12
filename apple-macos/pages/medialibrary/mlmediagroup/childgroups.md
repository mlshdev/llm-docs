> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediagroup/childgroups](https://developer.apple.com/documentation/medialibrary/mlmediagroup/childgroups)

# childGroups (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A list of child groups contained in the media group.

## Declaration

```swift
var childGroups: [MLMediaGroup]? { get }
```

## See Also

### Accessing the Group Hierarchy

- [parent](parent.md): Deprecated. The media group’s parent group.
- [mediaObjects](mediaobjects.md): Deprecated. A list of media objects in the media group.

# childGroups (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

A list of child groups contained in the media group.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSArray<MLMediaGroup *> * childGroups;
```

## See Also

### Accessing the Group Hierarchy

- [parent](parent.md): Deprecated. The media group’s parent group.
- [mediaObjects](mediaobjects.md): Deprecated. A list of media objects in the media group.
