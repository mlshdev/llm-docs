> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/composingindicator/contenttype

# contentType

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The type of message being composed.

## Declaration

```swift
var contentType: UTType?
```

## See Also

### Accessing composing indicator properties

- [state](state-swift.property.md): The state of the composer.
- [RCSMessage.ComposingIndicator.State](state-swift.enum.md): An enumeration that represents the state of the indicator.
- [lastActive](lastactive.md): The time of last activity.
- [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct): A structure that represents a type of data to load, send, or receive.
- [refreshInterval](refreshinterval.md): The time interval after which the receiver can expect an update from the composer.
