> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/customidentifier](https://developer.apple.com/documentation/intents/inperson/customidentifier)

# customIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The unique identifier that your app uses to identify the person.

## Declaration

```swift
var customIdentifier: String? { get }
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)
- [Resolving the Parameters of an Intent](../../sirikit/resolving-the-parameters-of-an-intent.md)

<a id="Discussion"></a>

## Discussion

Use this property to access the custom identification string that you specified at initialization time. The value of this property is also returned by the [vocabularyIdentifier](../inspeakable/vocabularyidentifier.md) property.

> **Important**

>  The information in this property is for developer purposes only. Use [personHandle](personhandle.md) when your app needs to display identification information to the user.

## See Also

### Accessing app-specific identifiers

- [contactIdentifier](contactidentifier.md): The Contacts database identifier for the person.

# customIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 3.2+

The unique identifier that your app uses to identify the person.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSString * customIdentifier;
```

```objectivec
@property (atomic, copy, readonly, nullable) NSString * customIdentifier;
```

## Mentioned In

- [Improving interactions between Siri and your messaging app](../../sirikit/improving-interactions-between-siri-and-your-messaging-app.md)
- [Resolving the Parameters of an Intent](../../sirikit/resolving-the-parameters-of-an-intent.md)

<a id="Discussion"></a>

## Discussion

Use this property to access the custom identification string that you specified at initialization time. The value of this property is also returned by the [vocabularyIdentifier](../inspeakable/vocabularyidentifier.md) property.

> **Important**

>  The information in this property is for developer purposes only. Use [personHandle](personhandle.md) when your app needs to display identification information to the user.

## See Also

### Accessing app-specific identifiers

- [contactIdentifier](contactidentifier.md): The Contacts database identifier for the person.
