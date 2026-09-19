> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmljs/mediaitem/1627412-mediaitem

# MediaItem

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Method  
**Availability:** tvOS 9.0+

Creates a new `MediaItem` object from the information stored in the URL location.

## Declaration

```
new MediaItem(
    in String type, 
    in optional String url
);
```

## Parameters

- `type`: The type of media item to be created. Valid values are `audio` and `video`. The default is `video`.
- `url`: The URL pointing to the media item information.

<a id="return_value"></a>

## Return Value

Returns the `MediaItem` object found in the location specified by the URL.
