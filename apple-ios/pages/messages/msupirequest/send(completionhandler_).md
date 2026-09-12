> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msupirequest/send(completionhandler:)](https://developer.apple.com/documentation/messages/msupirequest/send(completionhandler:))

# send(completionHandler:) (Swift)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```swift
func send(completionHandler: @escaping @Sendable (Bool) -> Void)
```

```swift
func send() async -> Bool
```

## Parameters

- `completionHandler`: A completion handler called when the message has been sent or has failed to send.

<a id="discussion"></a>

## Discussion

Sends this UPI request.

# sendWithCompletionHandler: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+

## Declaration

```objectivec
- (void) sendWithCompletionHandler:(void (^)(BOOL sent)) completionHandler;
```

## Parameters

- `completionHandler`: A completion handler called when the message has been sent or has failed to send.

<a id="discussion"></a>

## Discussion

Sends this UPI request.
