> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage/init(session:)](https://developer.apple.com/documentation/messages/msmessage/init(session:))

# init(session:) (Swift)

**Framework:** Messages  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Initializes a new message that is part of the provided session.

## Declaration

```swift
init(session: MSSession)
```

## Parameters

- `session`: The session object tracking an updatable exchange of messages.

<a id="return-value"></a>

## Return Value

A newly initialized message.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an updatable message. Messages that are part of a session receive special treatment by the Messages app. When the app receives a message that is part of an existing session, the previous message is moved to the bottom of the transcript and updated with the new message’s content.

## See Also

### Creating Messages

- [init()](init%28%29.md): Initializes a new message that is not part of a session.

# initWithSession: (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Initializes a new message that is part of the provided session.

## Declaration

```objectivec
- (instancetype) initWithSession:(MSSession *) session;
```

## Parameters

- `session`: The session object tracking an updatable exchange of messages.

<a id="return-value"></a>

## Return Value

A newly initialized message.

<a id="Discussion"></a>

## Discussion

Use this initializer to create an updatable message. Messages that are part of a session receive special treatment by the Messages app. When the app receives a message that is part of an existing session, the previous message is moved to the bottom of the transcript and updated with the new message’s content.

## See Also

### Creating Messages

- [init](init%28%29.md): Initializes a new message that is not part of a session.
