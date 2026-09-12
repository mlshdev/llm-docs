> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gkvoicechatclient/participantid()](https://developer.apple.com/documentation/gamekit/gkvoicechatclient/participantid())

# participantID() (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Returns a string that uniquely identifies the local user.

## Declaration

```swift
func participantID() -> String
```

<a id="return-value"></a>

## Return Value

A string that can be used by other participants to connect to the local user.

<a id="Discussion"></a>

## Discussion

The client decides the format and meaning of the participant identifier.

# participantID (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.6+ (deprecated in 10.8) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Returns a string that uniquely identifies the local user.

## Declaration

```objectivec
- (NSString *) participantID;
```

<a id="return-value"></a>

## Return Value

A string that can be used by other participants to connect to the local user.

<a id="Discussion"></a>

## Discussion

The client decides the format and meaning of the participant identifier.
