> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iofwcommand/membervariables

# MemberVariables

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
struct MemberVariables {
   void *fFWIMRefCon;
   IOReturn fCompletionStatus;
   bool fSubmitTimeLatched;
   AbsoluteTime fSubmitTime;
   bool fFlush;
};
```

<a id="overview"></a>

## Overview

This structure will be used to expand the capablilties of the class in the future.
