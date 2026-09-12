> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/pushtotalk/ptchannelmanager/activechanneluuid](https://developer.apple.com/documentation/pushtotalk/ptchannelmanager/activechanneluuid)

# activeChannelUUID (Swift)

**Framework:** Push to Talk  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

The unique identifier of the active channel for the app.

## Declaration

```swift
var activeChannelUUID: UUID? { get }
```

<a id="Discussion"></a>

## Discussion

You can activate only one channel at a time. A `nil` value indicates there isn’t an active Push to Talk channel. When this value isn’t `nil`, the channel is active in the user interface, and the ephemeral push token is usable.

# activeChannelUUID (Objective-C)

**Framework:** Push to Talk  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

The unique identifier of the active channel for the app.

## Declaration

```objectivec
@property (nonatomic, strong, readonly, nullable) NSUUID * activeChannelUUID;
```

<a id="Discussion"></a>

## Discussion

You can activate only one channel at a time. A `nil` value indicates there isn’t an active Push to Talk channel. When this value isn’t `nil`, the channel is active in the user interface, and the ephemeral push token is usable.
