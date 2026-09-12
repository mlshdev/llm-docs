> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediagroup/parent](https://developer.apple.com/documentation/medialibrary/mlmediagroup/parent)

# parent (Swift)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The media group’s parent group.

## Declaration

```swift
unowned(unsafe) var parent: MLMediaGroup? { get }
```

## See Also

### Accessing the Group Hierarchy

- [childGroups](childgroups.md): Deprecated. A list of child groups contained in the media group.
- [mediaObjects](mediaobjects.md): Deprecated. A list of media objects in the media group.

# parent (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

The media group’s parent group.

## Declaration

```objectivec
@property (assign, readonly, nullable) MLMediaGroup * parent;
```

## See Also

### Accessing the Group Hierarchy

- [childGroups](childgroups.md): Deprecated. A list of child groups contained in the media group.
- [mediaObjects](mediaobjects.md): Deprecated. A list of media objects in the media group.
