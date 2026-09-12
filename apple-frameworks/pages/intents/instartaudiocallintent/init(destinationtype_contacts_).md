> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartaudiocallintent/init(destinationtype:contacts:)](https://developer.apple.com/documentation/intents/instartaudiocallintent/init(destinationtype:contacts:))

# init(destinationType:contacts:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Creates an intent with the specified information.

## Declaration

```swift
init(destinationType: INCallDestinationType, contacts: [INPerson]?)
```

## Parameters

- `destinationType`: The type of call to place.
- `contacts`: An array of [INPerson](../inperson.md) objects representing the users to call.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to place a call to another user. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Creating the Intent Object

- [init(contacts:)](init%28contacts_%29.md): Deprecated. Initializes the start audio call intent object with the specified contacts.

# initWithDestinationType:contacts: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ (deprecated in 13.0) · iPadOS 11.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 4.0+ (deprecated in 6.0)

Creates an intent with the specified information.

## Declaration

```objectivec
- (instancetype) initWithDestinationType:(INCallDestinationType) destinationType contacts:(NSArray<INPerson *> *) contacts;
```

## Parameters

- `destinationType`: The type of call to place.
- `contacts`: An array of [INPerson](../inperson.md) objects representing the users to call.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to place a call to another user. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Creating the Intent Object

- [initWithContacts:](init%28contacts_%29.md): Deprecated. Initializes the start audio call intent object with the specified contacts.
