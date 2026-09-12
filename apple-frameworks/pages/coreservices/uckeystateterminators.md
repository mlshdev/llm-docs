> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreservices/uckeystateterminators](https://developer.apple.com/documentation/coreservices/uckeystateterminators)

# UCKeyStateTerminators (Swift)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Lists the default terminators for each dead-key state handled by a `'uchr'` resource.

## Declaration

```swift
struct UCKeyStateTerminators
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout ( `'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyStateTerminators` type is used in the fourth key mapping section of the `'uchr ` ' resource. 

The `UCKeyStateTerminators` structure contains the list of default terminators (characters or sequences) for each dead-key state that is handled by a `'uchr'` resource. When a dead-key state is in effect but a modifier-and-key combination is typed which has no special handling for that state, the default terminator for the state is output before the modifier-and-key combination is processed. If this table is not present or does not extend far enough to have a terminator for the state, nothing is output when the state terminates.

## Topics

### Initializers

- [init()](uckeystateterminators/1448249-init.md)
- [init(keyStateTerminatorsFormat:keyStateTerminatorCount:keyStateTerminators:)](uckeystateterminators/1443209-init.md)

### Instance Properties

- [keyStateTerminatorCount](uckeystateterminators/1390511-keystateterminatorcount.md): An unsigned 16-bit integer specifying the number of default dead-key state terminators contained in the `keyStateTerminators[]` array.
- [keyStateTerminators](uckeystateterminators/1390409-keystateterminators.md): An array of default dead-key state terminators, described as values of type [UCKeyCharSeq](uckeycharseq.md); the value `keyStateTerminators[0]` is the terminator for state 1, and so on.
- [keyStateTerminatorsFormat](uckeystateterminators/1390431-keystateterminatorsformat.md): An unsigned 16-bit integer identifying the format of the `UCKeyStateTerminators` structure. Set to `kUCKeyStateTerminatorsFormat`.

# UCKeyStateTerminators (Objective-C)

**Framework:** Core Services  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Lists the default terminators for each dead-key state handled by a `'uchr'` resource.

## Declaration

```objectivec
typedef struct UCKeyStateTerminators {
    ...
} UCKeyStateTerminators;
```

<a id="overview"></a>

## Overview

The Unicode keyboard-layout ( `'uchr'`) resource contains the data necessary to map virtual key codes to Unicode character codes for a given keyboard layout. The `'uchr'` format consists of a header information section and five key mapping data sections. The `UCKeyStateTerminators` type is used in the fourth key mapping section of the `'uchr ` ' resource. 

The `UCKeyStateTerminators` structure contains the list of default terminators (characters or sequences) for each dead-key state that is handled by a `'uchr'` resource. When a dead-key state is in effect but a modifier-and-key combination is typed which has no special handling for that state, the default terminator for the state is output before the modifier-and-key combination is processed. If this table is not present or does not extend far enough to have a terminator for the state, nothing is output when the state terminates.

## Topics

### Instance Properties

- [keyStateTerminatorCount](uckeystateterminators/1390511-keystateterminatorcount.md): An unsigned 16-bit integer specifying the number of default dead-key state terminators contained in the `keyStateTerminators[]` array.
- [keyStateTerminators](uckeystateterminators/1390409-keystateterminators.md): An array of default dead-key state terminators, described as values of type [UCKeyCharSeq](uckeycharseq.md); the value `keyStateTerminators[0]` is the terminator for state 1, and so on.
- [keyStateTerminatorsFormat](uckeystateterminators/1390431-keystateterminatorsformat.md): An unsigned 16-bit integer identifying the format of the `UCKeyStateTerminators` structure. Set to `kUCKeyStateTerminatorsFormat`.
