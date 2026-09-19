> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inperson/aliases

# aliases (Swift)

**Framework:** Intents  
**Kind:** Instance Property

The additional handles that Siri may use to identify the person.

## Declaration

```swift
var aliases: [INPersonHandle]? { get }
```

<a id="Discussion"></a>

## Discussion

Each [INPersonHandle](../inpersonhandle.md) in this property represents another way of identifying the user to your app. Person handles contain information such as phone numbers or email addresses that are unique to the user.

## See Also

### Accessing the person’s identity

- [personHandle](personhandle.md): The unique handle that your app assigns to the person.
- [image](image.md): An image of the person.
- [isMe](isme.md): A Boolean value indicating whether the person is the user of the device.

# aliases (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property

The additional handles that Siri may use to identify the person.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<INPersonHandle *> * aliases;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSArray<INPersonHandle *> * aliases;
```

<a id="Discussion"></a>

## Discussion

Each [INPersonHandle](../inpersonhandle.md) in this property represents another way of identifying the user to your app. Person handles contain information such as phone numbers or email addresses that are unique to the user.

## See Also

### Accessing the person’s identity

- [personHandle](personhandle.md): The unique handle that your app assigns to the person.
- [image](image.md): An image of the person.
- [isMe](isme.md): A Boolean value indicating whether the person is the user of the device.
