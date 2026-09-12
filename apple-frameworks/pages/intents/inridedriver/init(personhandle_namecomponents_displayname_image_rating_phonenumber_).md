> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridedriver/init(personhandle:namecomponents:displayname:image:rating:phonenumber:)](https://developer.apple.com/documentation/intents/inridedriver/init(personhandle:namecomponents:displayname:image:rating:phonenumber:))

# init(personHandle:nameComponents:displayName:image:rating:phoneNumber:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 10.2) · iPadOS 10.0+ (deprecated in 10.2) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.1)

Initializes and returns a ride driver object using a set of name components and other driver information.

> Use the designated initializer instead

## Declaration

```swift
convenience init(personHandle: INPersonHandle, nameComponents: PersonNameComponents?, displayName: String?, image: INImage?, rating: String?, phoneNumber: String?)
```

## Parameters

- `personHandle`: A handle to use when identifying the driver.
- `nameComponents`: The name of the driver, specified as a set of name components.
- `displayName`: The name of the driver in a user-readable format. This string is displayed to the user by Siri or Maps.
- `image`: A picture of the driver.
- `rating`: The driver’s rating. Strings should be short and informative. For example, you might specify the string “Good” or a string containing Unicode star (★, ☆) characters.
- `phoneNumber`: The driver’s phone number. The user should be able to contact the driver at this number to coordinate ride details.

<a id="return-value"></a>

## Return Value

An initialized driver object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

You can’t change the driver information after initialization, so specify as much information as you have.

## See Also

### Initializing a Ride Driver Object

- [init(phoneNumber:nameComponents:displayName:image:rating:)](init%28phonenumber_namecomponents_displayname_image_rating_%29.md): Initializes and returns a ride driver object using a set of name components and other driver information.
- [init(handle:displayName:image:rating:phoneNumber:)](init%28handle_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a display name and other driver information.
- [init(handle:nameComponents:image:rating:phoneNumber:)](init%28handle_namecomponents_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information

# initWithPersonHandle:nameComponents:displayName:image:rating:phoneNumber: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.2) · iPadOS 10.0+ (deprecated in 10.2) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 10.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.1)

Initializes and returns a ride driver object using a set of name components and other driver information.

> Use the designated initializer instead

## Declaration

```objectivec
- (instancetype) initWithPersonHandle:(INPersonHandle *) personHandle nameComponents:(NSPersonNameComponents *) nameComponents displayName:(NSString *) displayName image:(INImage *) image rating:(NSString *) rating phoneNumber:(NSString *) phoneNumber;
```

## Parameters

- `personHandle`: A handle to use when identifying the driver.
- `nameComponents`: The name of the driver, specified as a set of name components.
- `displayName`: The name of the driver in a user-readable format. This string is displayed to the user by Siri or Maps.
- `image`: A picture of the driver.
- `rating`: The driver’s rating. Strings should be short and informative. For example, you might specify the string “Good” or a string containing Unicode star (★, ☆) characters.
- `phoneNumber`: The driver’s phone number. The user should be able to contact the driver at this number to coordinate ride details.

<a id="return-value"></a>

## Return Value

An initialized driver object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

You can’t change the driver information after initialization, so specify as much information as you have.

## See Also

### Initializing a Ride Driver Object

- [initWithPhoneNumber:nameComponents:displayName:image:rating:](init%28phonenumber_namecomponents_displayname_image_rating_%29.md): Initializes and returns a ride driver object using a set of name components and other driver information.
- [initWithHandle:displayName:image:rating:phoneNumber:](init%28handle_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a display name and other driver information.
- [initWithHandle:nameComponents:image:rating:phoneNumber:](init%28handle_namecomponents_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information
