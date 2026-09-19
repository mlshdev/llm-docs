> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsicontrollerdriverkit/scsiparallelfeaturerequest/kscsiparallelfeature_attemptnegotiation

# kSCSIParallelFeature_AttemptNegotiation

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit

A selector that indicates that the controller should attempt negotiation for the feature.

## Declaration

```objectivec
kSCSIParallelFeature_AttemptNegotiation
```

## See Also

### Requests

- [kSCSIParallelFeature_NoNegotiation](kscsiparallelfeature_nonegotiation.md): A selector that indicates that the controller should use the current negotiation.
- [kSCSIParallelFeature_ClearNegotiation](kscsiparallelfeature_clearnegotiation.md): A selector that indicates that the controller should clear any negotiation for the feature.
