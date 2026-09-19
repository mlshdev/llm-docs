> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iohideventdriver/1528350-handleunicodegesturecandidaterep

# handleUnicodeGestureCandidateReport

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.12.2+ (deprecated in 10.15.1)

## Declaration

```objectivec
IOHIDEvent * handleUnicodeGestureCandidateReport(EventElementCollection *candidate, AbsoluteTime timeStamp, UInt32 reportID);
```
