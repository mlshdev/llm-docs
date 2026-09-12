> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/1390638-key_output_index_masks](https://developer.apple.com/documentation/coreservices/1390638-key_output_index_masks)

# Key Output Index Masks

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Test the bits in `UCKeyOutput` values.

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [kUCKeyOutputStateIndexMask](1390638-key_output_index_masks/kuckeyoutputstateindexmask.md): If the bit specified by this mask is set, the [UCKeyStateRecordsIndex](uckeystaterecordsindex.md) `UCKeyOutput` value contains an index into a structure of type [UCKeyStateRecordsIndex](uckeystaterecordsindex.md).
- [kUCKeyOutputSequenceIndexMask](1390638-key_output_index_masks/kuckeyoutputsequenceindexmask.md): If the bit specified by this mask is set, the `UCKeyOutput` value contains an index into a structure of type [UCKeySequenceDataIndex](uckeysequencedataindex.md).
- [kUCKeyOutputTestForIndexMask](1390638-key_output_index_masks/kuckeyoutputtestforindexmask.md)
- [kUCKeyOutputGetIndexMask](1390638-key_output_index_masks/kuckeyoutputgetindexmask.md): You can use this mask to test the bits (0–13) in a `UCKeyOutput` value that provide the actual index to another structure.
