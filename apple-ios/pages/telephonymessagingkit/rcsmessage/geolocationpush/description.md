> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/geolocationpush/description

# description

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

A textual description of the location.

## Declaration

```swift
var description: String?
```

<a id="discussion"></a>

## Discussion

Use this optional property to tag the nature of the location. For example, set the description to “Home” for the home address of the person using the app. Similarly, if the location is a business, set the description to the name of that business.
