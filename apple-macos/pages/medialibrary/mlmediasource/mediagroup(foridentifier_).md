> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediasource/mediagroup(foridentifier:)](https://developer.apple.com/documentation/medialibrary/mlmediasource/mediagroup(foridentifier:))

# mediaGroup(forIdentifier:) (Swift)

**Framework:** Media Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Returns the media group with the specified identifier.

## Declaration

```swift
func mediaGroup(forIdentifier mediaGroupIdentifier: String) -> MLMediaGroup?
```

## Parameters

- `mediaGroupIdentifier`: The media group identifier to search for in the source.

<a id="Discussion"></a>

## Discussion

The media source must have finished loading before this method returns valid data. Specifically, the root media group must be available before the lookup methods will succeed. Otherwise, the return value is undefined.

## See Also

### Accessing Media

- [mediaGroups(forIdentifiers:)](mediagroups%28foridentifiers_%29.md): Deprecated. Returns the media groups with the specified identifiers.
- [mediaObject(forIdentifier:)](mediaobject%28foridentifier_%29.md): Deprecated. Returns the media object with the specified identifier.
- [mediaObjects(forIdentifiers:)](mediaobjects%28foridentifiers_%29.md): Deprecated. Returns the media objects with the specified identifiers.

# mediaGroupForIdentifier: (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Returns the media group with the specified identifier.

## Declaration

```objectivec
- (MLMediaGroup *) mediaGroupForIdentifier:(NSString *) mediaGroupIdentifier;
```

## Parameters

- `mediaGroupIdentifier`: The media group identifier to search for in the source.

<a id="Discussion"></a>

## Discussion

The media source must have finished loading before this method returns valid data. Specifically, the root media group must be available before the lookup methods will succeed. Otherwise, the return value is undefined.

## See Also

### Accessing Media

- [mediaGroupsForIdentifiers:](mediagroups%28foridentifiers_%29.md): Deprecated. Returns the media groups with the specified identifiers.
- [mediaObjectForIdentifier:](mediaobject%28foridentifier_%29.md): Deprecated. Returns the media object with the specified identifier.
- [mediaObjectsForIdentifiers:](mediaobjects%28foridentifiers_%29.md): Deprecated. Returns the media objects with the specified identifiers.
