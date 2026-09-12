> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/messages/msmessage/init()](https://developer.apple.com/documentation/messages/msmessage/init())

# init() (Swift)

**Framework:** Messages  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Initializes a new message that is not part of a session.

## Declaration

```swift
init()
```

<a id="return-value"></a>

## Return Value

A newly initialized message.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a new message that transmits app data, but is not updatable. When the recipient selects the message, the recipient’s app extension launches and receives the message object, but it cannot update the message.

## See Also

### Creating Messages

- [init(session:)](init%28session_%29.md): Initializes a new message that is part of the provided session.

# init (Objective-C)

**Framework:** Messages  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+

Initializes a new message that is not part of a session.

## Declaration

```objectivec
- (instancetype) init;
```

<a id="return-value"></a>

## Return Value

A newly initialized message.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a new message that transmits app data, but is not updatable. When the recipient selects the message, the recipient’s app extension launches and receives the message object, but it cannot update the message.

## See Also

### Creating Messages

- [initWithSession:](init%28session_%29.md): Initializes a new message that is part of the provided session.
