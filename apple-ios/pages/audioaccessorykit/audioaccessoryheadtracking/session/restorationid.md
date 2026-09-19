> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audioaccessorykit/audioaccessoryheadtracking/session/restorationid

# restorationID

**Framework:** AudioAccessoryKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+

A stable identifier the system uses to bring this extension out of suspension when sensor traffic arrives for this accessory.

## Declaration

```swift
final let restorationID: String?
```

<a id="discussion"></a>

## Discussion

`nil` if the host could not provide a restoration identifier for the underlying accessory transport.
