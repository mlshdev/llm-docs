> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofwcommand/membervariables](https://developer.apple.com/documentation/kernel/iofwcommand/membervariables)

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
