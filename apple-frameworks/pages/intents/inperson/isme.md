> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/isme](https://developer.apple.com/documentation/intents/inperson/isme)

# isMe (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value indicating whether the person is the user of the device.

## Declaration

```swift
var isMe: Bool { get }
```

<a id="Discussion"></a>

## Discussion

It’s essential that you set [isMe](isme.md) to [true](https://developer.apple.com/documentation/swift/true) for the current device user when creating an [INPerson](../inperson.md) object for use with [Messaging](../../sirikit/messaging.md) intents. For example, if the sender of an outgoing message is also the user of the device, set [isMe](isme.md) to [true](https://developer.apple.com/documentation/swift/true). Similarly, when creating the recipient array for an incoming message—which should include the current device user—set [isMe](isme.md) to [true](https://developer.apple.com/documentation/swift/true) for the person in the recipient list that is the current device user, and set [isMe](isme.md) to [false](https://developer.apple.com/documentation/swift/false) for all other recipients.

To set [isMe](isme.md), call the [init(personHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:)](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md) method when creating the [INPerson](../inperson.md) object.

## See Also

### Accessing the person’s identity

- [personHandle](personhandle.md): The unique handle that your app assigns to the person.
- [image](image.md): An image of the person.
- [aliases](aliases.md): The additional handles that Siri may use to identify the person.

# isMe (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · visionOS 1.0+ · watchOS 4.0+

A Boolean value indicating whether the person is the user of the device.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) BOOL isMe;
```

```objectivec
@property (atomic, assign, readonly) BOOL isMe;
```

<a id="Discussion"></a>

## Discussion

It’s essential that you set [isMe](isme.md) to [true](https://developer.apple.com/documentation/swift/true) for the current device user when creating an [INPerson](../inperson.md) object for use with [Messaging](../../sirikit/messaging.md) intents. For example, if the sender of an outgoing message is also the user of the device, set [isMe](isme.md) to [true](https://developer.apple.com/documentation/swift/true). Similarly, when creating the recipient array for an incoming message—which should include the current device user—set [isMe](isme.md) to [true](https://developer.apple.com/documentation/swift/true) for the person in the recipient list that is the current device user, and set [isMe](isme.md) to [false](https://developer.apple.com/documentation/swift/false) for all other recipients.

To set [isMe](isme.md), call the [initWithPersonHandle:nameComponents:displayName:image:contactIdentifier:customIdentifier:isMe:](init%28personhandle_namecomponents_displayname_image_contactidentifier_customidentifier_isme_%29.md) method when creating the [INPerson](../inperson.md) object.

## See Also

### Accessing the person’s identity

- [personHandle](personhandle.md): The unique handle that your app assigns to the person.
- [image](image.md): An image of the person.
- [aliases](aliases.md): The additional handles that Siri may use to identify the person.
