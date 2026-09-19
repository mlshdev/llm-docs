> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inperson/image

# image (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

An image of the person.

## Declaration

```swift
@NSCopying var image: INImage? { get }
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

Only show the person’s image to the user in appropriate situations. The value of this property is specified automatically at initialization time and can’t be changed later.

## See Also

### Accessing the person’s identity

- [personHandle](personhandle.md): The unique handle that your app assigns to the person.
- [isMe](isme.md): A Boolean value indicating whether the person is the user of the device.
- [aliases](aliases.md): The additional handles that Siri may use to identify the person.

# image (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

An image of the person.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INImage * image;
```

```objectivec
@property (atomic, copy, readonly, nullable) INImage * image;
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)

<a id="Discussion"></a>

## Discussion

Only show the person’s image to the user in appropriate situations. The value of this property is specified automatically at initialization time and can’t be changed later.

## See Also

### Accessing the person’s identity

- [personHandle](personhandle.md): The unique handle that your app assigns to the person.
- [isMe](isme.md): A Boolean value indicating whether the person is the user of the device.
- [aliases](aliases.md): The additional handles that Siri may use to identify the person.
