> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwcommand/1813158-insertafter](https://developer.apple.com/documentation/kernel/iofwcommand/1813158-insertafter)

# insertAfter

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual void insertAfter(
 IOFWCommand &prev); 
```

## Parameters

- `prev`: command to insert after
- `queue`: queue command is being added to

<a id="overview"></a>

## Overview

inserts a command after the specified one.

## See Also

### Miscellaneous

- [removeFromQ](1813168-removefromq.md)
- [setHead](1813176-sethead.md)
