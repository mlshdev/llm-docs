> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/telephonymessagingkit/rcsservice/configuration/maximumgroupsize](https://developer.apple.com/documentation/telephonymessagingkit/rcsservice/configuration/maximumgroupsize)

# maximumGroupSize

**Framework:** TelephonyMessagingKit  
**Kind:** Instance Property  
**Availability:** iOS 26.0+

The maximum number of participants allowed for a group chat.

## Declaration

```swift
var maximumGroupSize: Int? { get }
```

<a id="discussion"></a>

## Discussion

This value is `nil` if group chat is disabled.

## See Also

### Inspecting chat configuration

- [chatRevokeTimeout](chatrevoketimeout.md): The maximum duration the service provider allows for delivery notification before it revokes a chat message.
