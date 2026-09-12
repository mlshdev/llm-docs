> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartaudiocallintent/init(contacts:)](https://developer.apple.com/documentation/intents/instartaudiocallintent/init(contacts:))

# init(contacts:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Initializes the start audio call intent object with the specified contacts.

> Use the designated initializer instead

## Declaration

```swift
convenience init(contacts: [INPerson]?)
```

## Parameters

- `contacts`: An array of [INPerson](../inperson.md) objects representing the users to call.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to place a call to another user. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Creating the Intent Object

- [init(destinationType:contacts:)](init%28destinationtype_contacts_%29.md): Deprecated. Creates an intent with the specified information.

# initWithContacts: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 11.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.2+ (deprecated in 4.0)

Initializes the start audio call intent object with the specified contacts.

> Use the designated initializer instead

## Declaration

```objectivec
- (instancetype) initWithContacts:(NSArray<INPerson *> *) contacts;
```

## Parameters

- `contacts`: An array of [INPerson](../inperson.md) objects representing the users to call.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to place a call to another user. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

## See Also

### Creating the Intent Object

- [initWithDestinationType:contacts:](init%28destinationtype_contacts_%29.md): Deprecated. Creates an intent with the specified information.
