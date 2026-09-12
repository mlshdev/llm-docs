> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/insetmessageattributeintent/init(identifiers:attribute:)](https://developer.apple.com/documentation/intents/insetmessageattributeintent/init(identifiers:attribute:))

# init(identifiers:attribute:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the set message attribute intent object with the specified identifiers and attribute.

## Declaration

```swift
init(identifiers: [String]?, attribute: INMessageAttribute)
```

## Parameters

- `identifiers`: An array of identifier strings representing the messages to modify. Each string represents the [identifier](../inmessage/identifier.md) of an [INMessage](../inmessage.md) object that you provided previously.
- `attribute`: The attribute to apply to the messages. For a list of possible values, see [INMessageAttribute](../inmessageattribute.md).

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. Siri creates instances when the user asks to modify the attributes of one or more messages. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithIdentifiers:attribute: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the set message attribute intent object with the specified identifiers and attribute.

## Declaration

```objectivec
- (instancetype) initWithIdentifiers:(NSArray<NSString *> *) identifiers attribute:(INMessageAttribute) attribute;
```

## Parameters

- `identifiers`: An array of identifier strings representing the messages to modify. Each string represents the [identifier](../inmessage/identifier.md) of an [INMessage](../inmessage.md) object that you provided previously.
- `attribute`: The attribute to apply to the messages. For a list of possible values, see [INMessageAttribute](../inmessageattribute.md).

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Typically, you don’t create instances of this class yourself. Siri creates instances when the user asks to modify the attributes of one or more messages. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
