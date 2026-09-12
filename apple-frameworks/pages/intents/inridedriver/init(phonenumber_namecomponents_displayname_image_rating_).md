> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridedriver/init(phonenumber:namecomponents:displayname:image:rating:)](https://developer.apple.com/documentation/intents/inridedriver/init(phonenumber:namecomponents:displayname:image:rating:))

# init(phoneNumber:nameComponents:displayName:image:rating:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes and returns a ride driver object using a set of name components and other driver information.

## Declaration

```swift
init(phoneNumber: String, nameComponents: PersonNameComponents?, displayName: String?, image: INImage?, rating: String?)
```

## Parameters

- `phoneNumber`: The driver’s phone number. The user should be able to contact the driver at this number to coordinate ride details.
- `nameComponents`: The name of the driver, specified as a set of name components.
- `displayName`: The name of the driver in a user-readable format. This string is displayed to the user by Siri or Maps.
- `image`: A picture of the driver.
- `rating`: The driver’s rating. Strings should be short and informative. For example, you might specify the string “Good” or a string containing Unicode star (★, ☆) characters.

<a id="return-value"></a>

## Return Value

An initialized driver object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

You can’t change the driver information after initialization, so specify as much information as you have.

## See Also

### Initializing a Ride Driver Object

- [init(handle:displayName:image:rating:phoneNumber:)](init%28handle_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a display name and other driver information.
- [init(handle:nameComponents:image:rating:phoneNumber:)](init%28handle_namecomponents_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information
- [init(personHandle:nameComponents:displayName:image:rating:phoneNumber:)](init%28personhandle_namecomponents_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information.

# initWithPhoneNumber:nameComponents:displayName:image:rating: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.2+ · iPadOS 10.2+ · Mac Catalyst 13.1+ · visionOS 1.0+ · watchOS 3.2+

Initializes and returns a ride driver object using a set of name components and other driver information.

## Declaration

```objectivec
- (instancetype) initWithPhoneNumber:(NSString *) phoneNumber nameComponents:(NSPersonNameComponents *) nameComponents displayName:(NSString *) displayName image:(INImage *) image rating:(NSString *) rating;
```

## Parameters

- `phoneNumber`: The driver’s phone number. The user should be able to contact the driver at this number to coordinate ride details.
- `nameComponents`: The name of the driver, specified as a set of name components.
- `displayName`: The name of the driver in a user-readable format. This string is displayed to the user by Siri or Maps.
- `image`: A picture of the driver.
- `rating`: The driver’s rating. Strings should be short and informative. For example, you might specify the string “Good” or a string containing Unicode star (★, ☆) characters.

<a id="return-value"></a>

## Return Value

An initialized driver object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

You can’t change the driver information after initialization, so specify as much information as you have.

## See Also

### Initializing a Ride Driver Object

- [initWithHandle:displayName:image:rating:phoneNumber:](init%28handle_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a display name and other driver information.
- [initWithHandle:nameComponents:image:rating:phoneNumber:](init%28handle_namecomponents_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information
- [initWithPersonHandle:nameComponents:displayName:image:rating:phoneNumber:](init%28personhandle_namecomponents_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information.
