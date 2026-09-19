> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/cmdraftmode

# cmDraftMode

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

Draft mode indicates that the CMM should sacrifice quality, if necessary, to minimize resource requirements. Note that the default CMM currently produces the same results for both normal and draft mode.

## Declaration

```swift
var cmDraftMode: Int { get }
```
