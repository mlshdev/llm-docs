> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iointerrupteventsource/explicitdisable

# explicitDisable

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
bool explicitDisable;
```

<a id="overview"></a>

## Overview

Has the user expicitly disabled this event source, if so then do not overide their request when returning from the callout

## See Also

### Instance Variables

- [reserved](reserved.md)
- [provider](provider.md)
- [producerCount](producercount.md)
- [intIndex](intindex.md)
- [consumerCount](consumercount.md)
- [autoDisable](autodisable.md)
