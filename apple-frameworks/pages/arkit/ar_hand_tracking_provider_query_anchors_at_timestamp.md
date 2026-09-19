> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/ar_hand_tracking_provider_query_anchors_at_timestamp

# ar_hand_tracking_provider_query_anchors_at_timestamp

**Interface language:** Objective-C

**Framework:** ARKit  
**Kind:** Function  
**Availability:** visionOS 2.0+

## Declaration

```objectivec
extern ar_hand_anchor_query_status_t ar_hand_tracking_provider_query_anchors_at_timestamp(ar_hand_tracking_provider_t hand_tracking_provider, CFTimeInterval timestamp, ar_hand_anchor_t hand_anchor_left, ar_hand_anchor_t hand_anchor_right);
```
