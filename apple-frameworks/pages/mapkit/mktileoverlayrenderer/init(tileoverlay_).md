> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlayrenderer/init(tileoverlay:)](https://developer.apple.com/documentation/mapkit/mktileoverlayrenderer/init(tileoverlay:))

# init(tileOverlay:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Initializes and returns a tile renderer with the specified overlay object.

## Declaration

```swift
init(tileOverlay overlay: MKTileOverlay)
```

## Parameters

- `overlay`: The tile overlay object whose contents you want to draw.

<a id="return-value"></a>

## Return Value

An initialized tile renderer object.

<a id="Discussion"></a>

## Discussion

The returned renderer object works with the tile overlay object to coordinate the loading and display of its map tiles.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

# initWithTileOverlay: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Initializes and returns a tile renderer with the specified overlay object.

## Declaration

```objectivec
- (instancetype) initWithTileOverlay:(MKTileOverlay *) overlay;
```

## Parameters

- `overlay`: The tile overlay object whose contents you want to draw.

<a id="return-value"></a>

## Return Value

An initialized tile renderer object.

<a id="Discussion"></a>

## Discussion

The returned renderer object works with the tile overlay object to coordinate the loading and display of its map tiles.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)
