> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfilterprefilter/bitcount](https://developer.apple.com/documentation/networkextension/neurlfilterprefilter/bitcount)

# bitCount

**Framework:** Network Extension  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

The number of bits in the Bloom filter.

## Declaration

```swift
let bitCount: Int
```

## See Also

### Working with prefilter properties

- [data](data.md): The Bloom filter data.
- [NEURLFilterPrefilter.PrefilterData](prefilterdata.md): An enumeration that represents Bloom filter data, as used by a prefilter.
- [tag](tag.md): The tag of the Bloom filter data, such as the SHA-256 hash of the Bloom filter data.
- [hashCount](hashcount.md): The number of hashes for the Bloom filter.
- [murmurSeed](murmurseed.md): The seed used for the hashing function.
