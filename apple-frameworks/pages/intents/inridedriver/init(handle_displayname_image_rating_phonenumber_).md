> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inridedriver/init(handle:displayname:image:rating:phonenumber:)](https://developer.apple.com/documentation/intents/inridedriver/init(handle:displayname:image:rating:phonenumber:))

# init(handle:displayName:image:rating:phoneNumber:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Initializes and returns a ride driver object using a display name and other driver information.

> Use the designated initializer instead

## Declaration

```swift
convenience init(handle: String, displayName: String?, image: INImage?, rating: String?, phoneNumber: String?)
```

## Parameters

- `handle`: A string containing information that your app uses to identify the driver. You might use an email address, phone number, account name, or any information that lets you identify the user uniquely.
- `displayName`: The name of the driver. Siri displays this string to the user.
- `image`: A picture of the driver.
- `rating`: The driver’s rating.
- `phoneNumber`: The driver’s phone number. The user should be able to contact the driver at this number to coordinate ride details.

<a id="return-value"></a>

## Return Value

An initialized driver object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

You must specify all of the driver’s information at initialization time. You can’t change the values after initialization.

## See Also

### Initializing a Ride Driver Object

- [init(phoneNumber:nameComponents:displayName:image:rating:)](init%28phonenumber_namecomponents_displayname_image_rating_%29.md): Initializes and returns a ride driver object using a set of name components and other driver information.
- [init(handle:nameComponents:image:rating:phoneNumber:)](init%28handle_namecomponents_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information
- [init(personHandle:nameComponents:displayName:image:rating:phoneNumber:)](init%28personhandle_namecomponents_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information.

# initWithHandle:displayName:image:rating:phoneNumber: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 10.0+ (deprecated in 10.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 3.0)

Initializes and returns a ride driver object using a display name and other driver information.

> Use the designated initializer instead

## Declaration

```objectivec
- (instancetype) initWithHandle:(NSString *) handle displayName:(NSString *) displayName image:(INImage *) image rating:(NSString *) rating phoneNumber:(NSString *) phoneNumber;
```

## Parameters

- `handle`: A string containing information that your app uses to identify the driver. You might use an email address, phone number, account name, or any information that lets you identify the user uniquely.
- `displayName`: The name of the driver. Siri displays this string to the user.
- `image`: A picture of the driver.
- `rating`: The driver’s rating.
- `phoneNumber`: The driver’s phone number. The user should be able to contact the driver at this number to coordinate ride details.

<a id="return-value"></a>

## Return Value

An initialized driver object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

You must specify all of the driver’s information at initialization time. You can’t change the values after initialization.

## See Also

### Initializing a Ride Driver Object

- [initWithPhoneNumber:nameComponents:displayName:image:rating:](init%28phonenumber_namecomponents_displayname_image_rating_%29.md): Initializes and returns a ride driver object using a set of name components and other driver information.
- [initWithHandle:nameComponents:image:rating:phoneNumber:](init%28handle_namecomponents_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information
- [initWithPersonHandle:nameComponents:displayName:image:rating:phoneNumber:](init%28personhandle_namecomponents_displayname_image_rating_phonenumber_%29.md): Deprecated. Initializes and returns a ride driver object using a set of name components and other driver information.
