> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/instartvideocallintent/init(contacts:)](https://developer.apple.com/documentation/intents/instartvideocallintent/init(contacts:))

# init(contacts:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Initializes the start video call intent object with the specified contacts.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

## Declaration

```swift
init(contacts: [INPerson]?)
```

## Parameters

- `contacts`: An array of [INPerson](../inperson.md) objects representing the users to call.

<a id="return-value"></a>

## Return Value

An initialized intent or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to place a video call to another user. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.

# initWithContacts: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 13.0) · iPadOS 10.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0)

Initializes the start video call intent object with the specified contacts.

> INStartVideoCallIntent is deprecated. Please adopt INStartCallIntent instead

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

Normally, you don’t create instances of this class yourself. Instead, Siri creates instances when the user asks to place a video call to another user. However, you can use this method during testing to create intent objects in order to validate your intent handling code paths.
