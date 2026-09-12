> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/cnauthorizationstatus/limited](https://developer.apple.com/documentation/contacts/cnauthorizationstatus/limited)

# CNAuthorizationStatus.limited (Swift)

**Framework:** Contacts  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+ · watchOS 11.0+

The app has access to a limited subset of contacts, chosen by the person using the app.

## Declaration

```swift
case limited
```

## Mentioned In

- [Accessing the contact store](../accessing-the-contact-store.md)

<a id="discussion"></a>

## Discussion

A person can give your app limited access to their contacts by choosing this option when your app first attempts to authorize for accessing contacts. Thereafter, the person can maintain the set of contacts exposed to your app by managing them in the Settings app.

Your app can prompt the person to add contacts to the limited-access set by displaying a [ContactAccessButton](../../contactsui/contactaccessbutton.md), in association with a search UI your app provides. You can also display a picker to add contacts with the SwiftUI view modifier [contactAccessPicker(isPresented:completionHandler:)](https://developer.apple.com/documentation/swiftui/view/contactaccesspicker%28ispresented:completionhandler:%29).

## See Also

### Authorization statuses

- [CNAuthorizationStatus.notDetermined](notdetermined.md): The user has not yet made a choice regarding whether the application may access contact data.
- [CNAuthorizationStatus.restricted](restricted.md): The application is not authorized to access contact data. The user cannot change this application’s status, possibly due to active restrictions such as parental controls being in place.
- [CNAuthorizationStatus.denied](denied.md): The user explicitly denied access to contact data for the application.
- [CNAuthorizationStatus.authorized](authorized.md): The application is authorized to access contact data.

# CNAuthorizationStatusLimited (Objective-C)

**Framework:** Contacts  
**Kind:** Enumeration Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+ · watchOS 11.0+

The app has access to a limited subset of contacts, chosen by the person using the app.

## Declaration

```objectivec
CNAuthorizationStatusLimited
```

## Mentioned In

- [Accessing the contact store](../accessing-the-contact-store.md)

<a id="discussion"></a>

## Discussion

A person can give your app limited access to their contacts by choosing this option when your app first attempts to authorize for accessing contacts. Thereafter, the person can maintain the set of contacts exposed to your app by managing them in the Settings app.

Your app can prompt the person to add contacts to the limited-access set by displaying a [ContactAccessButton](../../contactsui/contactaccessbutton.md), in association with a search UI your app provides. You can also display a picker to add contacts with the SwiftUI view modifier [contactAccessPicker(isPresented:completionHandler:)](https://developer.apple.com/documentation/swiftui/view/contactaccesspicker%28ispresented:completionhandler:%29).

## See Also

### Authorization statuses

- [CNAuthorizationStatusNotDetermined](notdetermined.md): The user has not yet made a choice regarding whether the application may access contact data.
- [CNAuthorizationStatusRestricted](restricted.md): The application is not authorized to access contact data. The user cannot change this application’s status, possibly due to active restrictions such as parental controls being in place.
- [CNAuthorizationStatusDenied](denied.md): The user explicitly denied access to contact data for the application.
- [CNAuthorizationStatusAuthorized](authorized.md): The application is authorized to access contact data.
