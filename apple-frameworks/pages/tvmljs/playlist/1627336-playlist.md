> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tvmljs/playlist/1627336-playlist](https://developer.apple.com/documentation/tvmljs/playlist/1627336-playlist)

# Playlist

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Creates a new playlist object.

## Declaration

```
new Playlist();
```

<a id="return_value"></a>

## Return Value

An empty playlist array.

<a id="discussion"></a>

## Discussion

After creating a new playlist, use the [push](1627433-push.md) method to add new media items to the end of the playlist.

## See Also

### Modifying the Playlist

- [item](1627377-item.md): Returns the media item located in the indicated array index.
- [length](1627327-length.md): The number of items in the playlist.
- [pop](1627310-pop.md): Removes a media item from the end of a playlist.
- [push](1627433-push.md): Adds a media item to the end of a playlist.
- [splice](1627367-splice.md): Deletes the indicated array elements and replaces them with the specified elements.
