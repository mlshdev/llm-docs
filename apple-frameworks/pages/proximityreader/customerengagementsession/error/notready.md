> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-df12c7e37114; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/proximityreader/customerengagementsession/error/notready

# CustomerEngagementSession.Error.notReady

**Framework:** ProximityReader  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

The session has not yet received the `.ready` event from the customer. The merchant must wait for the `.ready` event before sending requests.

## Declaration

```swift
case notReady
```
