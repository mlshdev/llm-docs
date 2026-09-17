> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/webkit/webpage/navigationevent/committed

# WebPage.NavigationEvent.committed

**Framework:** WebKit  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

This event occurs when the page has started to receive content for the main frame.

## Declaration

```swift
case committed
```

<a id="discussion"></a>

## Discussion

This happens immediately before the page starts to update the main frame.
