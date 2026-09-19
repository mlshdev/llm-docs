> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/axuielement_h/kaxcopymultipleattributeoptionstoponerror

# kAXCopyMultipleAttributeOptionStopOnError

**Interface language:** Objective-C

**Framework:** Application Services

## Declaration

```objectivec
enum {
   kAXCopyMultipleAttributeOptionStopOnError = 0x1
};
```

<a id="overview"></a>

## Overview

Pass this option to [AXUIElementCopyMultipleAttributeValues](../1462051-axuielementcopymultipleattribute.md) to force the function to stop when it gets an error.
