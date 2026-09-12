> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlayrenderer/reloaddata()](https://developer.apple.com/documentation/mapkit/mktileoverlayrenderer/reloaddata())

# reloadData() (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Forces the tile overlay renderer to reload and redisplay the tiles.

## Declaration

```swift
func reloadData()
```

<a id="Discussion"></a>

## Discussion

Use this method to remove the overlay’s existing tile images and reload them from the original source. This method automatically causes the renderer to redraw the new tiles as soon as it loads them into memory.

# reloadData (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Forces the tile overlay renderer to reload and redisplay the tiles.

## Declaration

```objectivec
- (void) reloadData;
```

<a id="Discussion"></a>

## Discussion

Use this method to remove the overlay’s existing tile images and reload them from the original source. This method automatically causes the renderer to redraw the new tiles as soon as it loads them into memory.
