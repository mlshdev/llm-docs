> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/scsicontrollerdriverkit/scsiparallelfeaturerequest/kscsiparallelfeature_clearnegotiation

# kSCSIParallelFeature_ClearNegotiation

**Interface language:** Objective-C

**Framework:** SCSIControllerDriverKit  
**Kind:** Enumeration Case  
**Availability:** DriverKit

A selector that indicates that the controller should clear any negotiation for the feature.

## Declaration

```objectivec
kSCSIParallelFeature_ClearNegotiation
```

## See Also

### Requests

- [kSCSIParallelFeature_NoNegotiation](kscsiparallelfeature_nonegotiation.md): A selector that indicates that the controller should use the current negotiation.
- [kSCSIParallelFeature_AttemptNegotiation](kscsiparallelfeature_attemptnegotiation.md): A selector that indicates that the controller should attempt negotiation for the feature.
