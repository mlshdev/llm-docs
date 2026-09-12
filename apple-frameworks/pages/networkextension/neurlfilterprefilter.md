> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/networkextension/neurlfilterprefilter](https://developer.apple.com/documentation/networkextension/neurlfilterprefilter)

# NEURLFilterPrefilter

**Framework:** Network Extension  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

A structure containing a prefilter returned by a filter control provider.

## Declaration

```swift
struct NEURLFilterPrefilter
```

<a id="overview"></a>

## Overview

You return this type from the [fetchPrefilter(existingPrefilterTag:)](neurlfiltercontrolprovider/fetchprefilter%28existingprefiltertag_%29.md) method of [NEURLFilterControlProvider](neurlfiltercontrolprovider.md). The returned `NEURLFilterPrefilter` must contain a Bloom filter built with the 32-bit FNV-1a and 32-bit MurmurHash3 hash functions, with double hashing. Depending on the size of the Bloom filter data, it can be passed as data or the path of a file containing the data.

## Topics

### Creating a prefilter

- [init(data:tag:bitCount:hashCount:murmurSeed:)](neurlfilterprefilter/init%28data_tag_bitcount_hashcount_murmurseed_%29.md): Initializes a new prefilter with the given parameters.

### Working with prefilter properties

- [data](neurlfilterprefilter/data.md): The Bloom filter data.
- [NEURLFilterPrefilter.PrefilterData](neurlfilterprefilter/prefilterdata.md): An enumeration that represents Bloom filter data, as used by a prefilter.
- [tag](neurlfilterprefilter/tag.md): The tag of the Bloom filter data, such as the SHA-256 hash of the Bloom filter data.
- [bitCount](neurlfilterprefilter/bitcount.md): The number of bits in the Bloom filter.
- [hashCount](neurlfilterprefilter/hashcount.md): The number of hashes for the Bloom filter.
- [murmurSeed](neurlfilterprefilter/murmurseed.md): The seed used for the hashing function.

## See Also

### Fetching a prefilter

- [fetchPrefilter(existingPrefilterTag:)](neurlfiltercontrolprovider/fetchprefilter%28existingprefiltertag_%29.md): Fetches prefilter data, in response to a call from the framework.
