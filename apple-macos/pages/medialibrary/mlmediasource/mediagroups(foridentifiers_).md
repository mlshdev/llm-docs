> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/medialibrary/mlmediasource/mediagroups(foridentifiers:)](https://developer.apple.com/documentation/medialibrary/mlmediasource/mediagroups(foridentifiers:))

# mediaGroups(forIdentifiers:) (Swift)

**Framework:** Media Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Returns the media groups with the specified identifiers.

## Declaration

```swift
func mediaGroups(forIdentifiers mediaGroupIdentifiers: [String]) -> [String : MLMediaGroup]
```

## Parameters

- `mediaGroupIdentifiers`: An array of media group identifiers to search for in the source.

<a id="return-value"></a>

## Return Value

A dictionary of media groups matching the specified identifiers.

<a id="Discussion"></a>

## Discussion

The media source must have finished loading before this method returns valid data. Specifically, the root media group must be available before the lookup methods will succeed. Otherwise, the return value is undefined.

## See Also

### Accessing Media

- [mediaGroup(forIdentifier:)](mediagroup%28foridentifier_%29.md): Deprecated. Returns the media group with the specified identifier.
- [mediaObject(forIdentifier:)](mediaobject%28foridentifier_%29.md): Deprecated. Returns the media object with the specified identifier.
- [mediaObjects(forIdentifiers:)](mediaobjects%28foridentifiers_%29.md): Deprecated. Returns the media objects with the specified identifiers.

# mediaGroupsForIdentifiers: (Objective-C)

**Framework:** Media Library  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+ (deprecated in 10.15)

Returns the media groups with the specified identifiers.

## Declaration

```objectivec
- (NSDictionary<NSString *,MLMediaGroup *> *) mediaGroupsForIdentifiers:(NSArray<NSString *> *) mediaGroupIdentifiers;
```

## Parameters

- `mediaGroupIdentifiers`: An array of media group identifiers to search for in the source.

<a id="return-value"></a>

## Return Value

A dictionary of media groups matching the specified identifiers.

<a id="Discussion"></a>

## Discussion

The media source must have finished loading before this method returns valid data. Specifically, the root media group must be available before the lookup methods will succeed. Otherwise, the return value is undefined.

## See Also

### Accessing Media

- [mediaGroupForIdentifier:](mediagroup%28foridentifier_%29.md): Deprecated. Returns the media group with the specified identifier.
- [mediaObjectForIdentifier:](mediaobject%28foridentifier_%29.md): Deprecated. Returns the media object with the specified identifier.
- [mediaObjectsForIdentifiers:](mediaobjects%28foridentifiers_%29.md): Deprecated. Returns the media objects with the specified identifiers.
