> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/musickit/musicauthorization/status/restricted

# MusicAuthorization.Status.restricted

**Framework:** MusicKit  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Apps on this device can’t access MusicKit in a way that the user can’t change.

## Declaration

```swift
case restricted
```

<a id="discussion"></a>

## Discussion

In this scenario, don’t prompt for authorization.

An example of this situation is when the device is in education mode.
