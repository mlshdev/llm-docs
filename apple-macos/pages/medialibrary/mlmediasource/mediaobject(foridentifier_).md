> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediasource/mediaobject(foridentifier:)](https://developer.apple.com/documentation/medialibrary/mlmediasource/mediaobject(foridentifier:))

# mediaObject(forIdentifier:) (Swift)

**Framework:** Media Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Returns the media object with the specified identifier.

## Declaration

```swift
func mediaObject(forIdentifier mediaObjectIdentifier: String) -> MLMediaObject?
```

## Parameters

- `mediaObjectIdentifier`: The media object identifier to search for in the media source.

<a id="Discussion"></a>

## Discussion

The media source must have finished loading before this method returns valid data. Specifically, the root media group must be available before the lookup methods will succeed. Otherwise, the return value is undefined.

## See Also

### Accessing Media

- [mediaGroup(forIdentifier:)](mediagroup%28foridentifier_%29.md): Deprecated. Returns the media group with the specified identifier.
- [mediaGroups(forIdentifiers:)](mediagroups%28foridentifiers_%29.md): Deprecated. Returns the media groups with the specified identifiers.
- [mediaObjects(forIdentifiers:)](mediaobjects%28foridentifiers_%29.md): Deprecated. Returns the media objects with the specified identifiers.

# mediaObjectForIdentifier: (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Returns the media object with the specified identifier.

## Declaration

```objectivec
- (MLMediaObject *) mediaObjectForIdentifier:(NSString *) mediaObjectIdentifier;
```

## Parameters

- `mediaObjectIdentifier`: The media object identifier to search for in the media source.

<a id="Discussion"></a>

## Discussion

The media source must have finished loading before this method returns valid data. Specifically, the root media group must be available before the lookup methods will succeed. Otherwise, the return value is undefined.

## See Also

### Accessing Media

- [mediaGroupForIdentifier:](mediagroup%28foridentifier_%29.md): Deprecated. Returns the media group with the specified identifier.
- [mediaGroupsForIdentifiers:](mediagroups%28foridentifiers_%29.md): Deprecated. Returns the media groups with the specified identifiers.
- [mediaObjectsForIdentifiers:](mediaobjects%28foridentifiers_%29.md): Deprecated. Returns the media objects with the specified identifiers.
