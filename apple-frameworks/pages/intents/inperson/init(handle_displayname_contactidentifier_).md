> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inperson/init(handle:displayname:contactidentifier:)](https://developer.apple.com/documentation/intents/inperson/init(handle:displayname:contactidentifier:))

# init(handle:displayName:contactIdentifier:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Creates a person object with the specified display name and contact information.

> Use the designated initializer instead

## Declaration

```swift
convenience init(handle: String, displayName: String?, contactIdentifier: String?)
```

## Parameters

- `handle`: A string containing information that your app uses to identify the user. You can use an email address, phone number, account name, or any information that lets you identify the user uniquely.
- `displayName`: The string you display for the user’s name.
- `contactIdentifier`: The identifier associated with the user’s [CNContact](../../contacts/cncontact.md) object. Specify a value for this parameter when the user has a corresponding entry in the Contacts database.

<a id="return-value"></a>

## Return Value

An initialized person object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method as a convenient way to create person objects that do not require an image.

# initWithHandle:displayName:contactIdentifier: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 10.0) · iPadOS 10.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.12+ (deprecated in 10.12) · visionOS 1.0+ (deprecated in 1.0)

Creates a person object with the specified display name and contact information.

> Use the designated initializer instead

## Declaration

```objectivec
- (instancetype) initWithHandle:(NSString *) handle displayName:(NSString *) displayName contactIdentifier:(NSString *) contactIdentifier;
```

## Parameters

- `handle`: A string containing information that your app uses to identify the user. You can use an email address, phone number, account name, or any information that lets you identify the user uniquely.
- `displayName`: The string you display for the user’s name.
- `contactIdentifier`: The identifier associated with the user’s [CNContact](../../contacts/cncontact.md) object. Specify a value for this parameter when the user has a corresponding entry in the Contacts database.

<a id="return-value"></a>

## Return Value

An initialized person object or `nil` if the object could not be created.

<a id="Discussion"></a>

## Discussion

Use this method as a convenient way to create person objects that do not require an image.
