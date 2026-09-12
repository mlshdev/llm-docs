> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/carbon_core/unicode_utilities/1390638-key_output_index_masks](https://developer.apple.com/documentation/coreservices/carbon_core/unicode_utilities/1390638-key_output_index_masks)

# Key Output Index Masks

**Framework:** Core Services

Test the bits in `UCKeyOutput` values.

<a id="overview"></a>

## Overview

You can use these masks to test the bits in `UCKeyOutput` values.

## Topics

### Constants

- [kUCKeyOutputStateIndexMask](../../kuckeyoutputstateindexmask.md): If the bit specified by this mask is set, the [UCKeyStateRecordsIndex](../../uckeystaterecordsindex.md) `UCKeyOutput` value contains an index into a structure of type [UCKeyStateRecordsIndex](../../uckeystaterecordsindex.md).
- [kUCKeyOutputSequenceIndexMask](../../kuckeyoutputsequenceindexmask.md): If the bit specified by this mask is set, the `UCKeyOutput` value contains an index into a structure of type [UCKeySequenceDataIndex](../../uckeysequencedataindex.md).
- [kUCKeyOutputTestForIndexMask](../../kuckeyoutputtestforindexmask.md)
- [kUCKeyOutputGetIndexMask](../../kuckeyoutputgetindexmask.md): You can use this mask to test the bits (0–13) in a `UCKeyOutput` value that provide the actual index to another structure.
