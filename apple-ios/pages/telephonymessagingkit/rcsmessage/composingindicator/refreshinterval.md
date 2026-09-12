> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsmessage/composingindicator/refreshinterval](https://developer.apple.com/documentation/telephonymessagingkit/rcsmessage/composingindicator/refreshinterval)

# refreshInterval

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The time interval after which the receiver can expect an update from the composer.

## Declaration

```swift
var refreshInterval: Duration?
```

## See Also

### Accessing composing indicator properties

- [state](state-swift.property.md): The state of the composer.
- [RCSMessage.ComposingIndicator.State](state-swift.enum.md): An enumeration that represents the state of the indicator.
- [lastActive](lastactive.md): The time of last activity.
- [contentType](contenttype.md): The type of message being composed.
- [UTType](https://developer.apple.com/documentation/uniformtypeidentifiers/uttype-swift.struct): A structure that represents a type of data to load, send, or receive.
