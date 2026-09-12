> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediasource/mediaobjects(foridentifiers:)](https://developer.apple.com/documentation/medialibrary/mlmediasource/mediaobjects(foridentifiers:))

# mediaObjects(forIdentifiers:) (Swift)

**Framework:** Media Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Returns the media objects with the specified identifiers.

## Declaration

```swift
func mediaObjects(forIdentifiers mediaObjectIdentifiers: [String]) -> [String : MLMediaObject]
```

## Parameters

- `mediaObjectIdentifiers`: An array of media object identifiers to search for in the source.

<a id="return-value"></a>

## Return Value

A dictionary of media objects matching the specified identifiers.

<a id="Discussion"></a>

## Discussion

The media source must have finished loading before this method returns valid data. Specifically, the root media group must be available before the lookup methods will succeed. Otherwise, the return value is undefined.

## See Also

### Accessing Media

- [mediaGroup(forIdentifier:)](mediagroup%28foridentifier_%29.md): Deprecated. Returns the media group with the specified identifier.
- [mediaGroups(forIdentifiers:)](mediagroups%28foridentifiers_%29.md): Deprecated. Returns the media groups with the specified identifiers.
- [mediaObject(forIdentifier:)](mediaobject%28foridentifier_%29.md): Deprecated. Returns the media object with the specified identifier.

# mediaObjectsForIdentifiers: (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Returns the media objects with the specified identifiers.

## Declaration

```objectivec
- (NSDictionary<NSString *,MLMediaObject *> *) mediaObjectsForIdentifiers:(NSArray<NSString *> *) mediaObjectIdentifiers;
```

## Parameters

- `mediaObjectIdentifiers`: An array of media object identifiers to search for in the source.

<a id="return-value"></a>

## Return Value

A dictionary of media objects matching the specified identifiers.

<a id="Discussion"></a>

## Discussion

The media source must have finished loading before this method returns valid data. Specifically, the root media group must be available before the lookup methods will succeed. Otherwise, the return value is undefined.

## See Also

### Accessing Media

- [mediaGroupForIdentifier:](mediagroup%28foridentifier_%29.md): Deprecated. Returns the media group with the specified identifier.
- [mediaGroupsForIdentifiers:](mediagroups%28foridentifiers_%29.md): Deprecated. Returns the media groups with the specified identifiers.
- [mediaObjectForIdentifier:](mediaobject%28foridentifier_%29.md): Deprecated. Returns the media object with the specified identifier.
