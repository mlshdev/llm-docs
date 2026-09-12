> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfilterprefilter/init(data:tag:bitcount:hashcount:murmurseed:)](https://developer.apple.com/documentation/networkextension/neurlfilterprefilter/init(data:tag:bitcount:hashcount:murmurseed:))

# init(data:tag:bitCount:hashCount:murmurSeed:)

**Framework:** Network Extension  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Initializes a new prefilter with the given parameters.

## Declaration

```swift
init(data: NEURLFilterPrefilter.PrefilterData, tag: String, bitCount: Int, hashCount: Int, murmurSeed: UInt32)
```

## Parameters

- `data`: The Bloom filter data, as a [NEURLFilterPrefilter.PrefilterData](prefilterdata.md) instance.
- `tag`: The tag of the Bloom filter data, such as the SHA-256 hash of the Bloom filter data.
- `bitCount`: The number of bits in the Bloom filter.
- `hashCount`: The number of hashes for the Bloom filter.
- `murmurSeed`: The seed used for the MurmurHash3 function.
