> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvmljs/datasource/datasource/3192122-segmentsize

# segmentSize

**Interface language:** Data

**Framework:** TVMLKit JS  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

The maximum number of indexes that are loaded each time the [loadindexes](3192119-loadindexes.md) event is triggered.

## Declaration

```
readonly attribute int segmentSize;
```

<a id="discussion"></a>

## Discussion

This property allows you to adjust the number of indexes to be loaded according to the capabilities of your server endpoints.

The `segmentSize` attribute defaults to 20 indexes.

## See Also

### Loading Elements

- [loadindexes](3192119-loadindexes.md): An event type that tells the data source to load its indexes.
