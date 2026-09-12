> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/1552213-control_flags_constants/knoendingprosody](https://developer.apple.com/documentation/applicationservices/1552213-control_flags_constants/knoendingprosody)

# kNoEndingProsody

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration Case  
**Availability:** macOS 10.0+

## Declaration

```objectivec
kNoEndingProsody = 1
```

<a id="discussion"></a>

## Discussion

Disables prosody at end of sentences. The `kNoEndingProsody` flagbit is used to control whether or not the speech synthesizer automaticallyapplies ending prosody, the speech tone and cadence that normallyoccur at the end of a statement. Under normal circumstances (forexample, when the flag bit is not set), ending prosody is appliedto the speech when the end of the `textBuf` datais reached. This default behavior can be disabled by setting the `kNoEndingProsody` flagbit.

Some synthesizers do not speak until the `kNoEndingProsody` flagbit is reset, or they encounter a period in the text, or `textBuf` isfull.
