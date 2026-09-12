> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfilterprefilter/prefilterdata](https://developer.apple.com/documentation/networkextension/neurlfilterprefilter/prefilterdata)

# NEURLFilterPrefilter.PrefilterData

**Framework:** Network Extension  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

An enumeration that represents Bloom filter data, as used by a prefilter.

## Declaration

```swift
enum PrefilterData
```

## Topics

### Accessing prefilter data

- [NEURLFilterPrefilter.PrefilterData.smallFilter(\_:)](prefilterdata/smallfilter%28__%29.md): A prefilter data enumeration case that contains the prefilter data as the associated value.
- [NEURLFilterPrefilter.PrefilterData.temporaryFilepath(\_:)](prefilterdata/temporaryfilepath%28__%29.md): A prefilter data enumeration case that contains a temporary file path to the prefilter data as the associated value.

## See Also

### Working with prefilter properties

- [data](data.md): The Bloom filter data.
- [tag](tag.md): The tag of the Bloom filter data, such as the SHA-256 hash of the Bloom filter data.
- [bitCount](bitcount.md): The number of bits in the Bloom filter.
- [hashCount](hashcount.md): The number of hashes for the Bloom filter.
- [murmurSeed](murmurseed.md): The seed used for the hashing function.
