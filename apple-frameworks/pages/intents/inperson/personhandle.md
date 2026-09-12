> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/personhandle](https://developer.apple.com/documentation/intents/inperson/personhandle)

# personHandle (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The unique handle that your app assigns to the person.

## Declaration

```swift
@NSCopying var personHandle: INPersonHandle? { get }
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

The value of this property is an object that uniquely identifies the user to your app. For example, you might provide a handle containing an email address, a phone number, or an account name associated with the user. Siri might show this information when asking the user to choose from among several people with similar names.

## See Also

### Accessing the person’s identity

- [image](image.md): An image of the person.
- [isMe](isme.md): A Boolean value indicating whether the person is the user of the device.
- [aliases](aliases.md): The additional handles that Siri may use to identify the person.

# personHandle (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The unique handle that your app assigns to the person.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INPersonHandle * personHandle;
```

```objectivec
@property (atomic, copy, readonly, nullable) INPersonHandle * personHandle;
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

The value of this property is an object that uniquely identifies the user to your app. For example, you might provide a handle containing an email address, a phone number, or an account name associated with the user. Siri might show this information when asking the user to choose from among several people with similar names.

## See Also

### Accessing the person’s identity

- [image](image.md): An image of the person.
- [isMe](isme.md): A Boolean value indicating whether the person is the user of the device.
- [aliases](aliases.md): The additional handles that Siri may use to identify the person.
