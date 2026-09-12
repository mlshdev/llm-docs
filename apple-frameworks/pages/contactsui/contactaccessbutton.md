> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/contactaccessbutton](https://developer.apple.com/documentation/contactsui/contactaccessbutton)

# ContactAccessButton

**Framework:** Contacts UI  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A SwiftUI button that you use to add to the set of contacts someone shares with your app.

## Declaration

```swift
@MainActor @preconcurrency struct ContactAccessButton
```

<a id="overview"></a>

## Overview

When someone’s using your app, they can choose to give the app full access to their contacts or to a subset of contacts. They choose this subset of contacts the first time your app requests access with [requestAccess(for:completionHandler:)](../contacts/cncontactstore/requestaccess%28for_completionhandler_%29.md), and can update them in the Settings app. You use this button to prompt them to authorize additional contacts for your app to use while operating under limited-access authorization.

Use this button in addition to a search UI in your app, such as a text field. Initialize the button with a query string from your search UI, along with email addresses and phone numbers to ignore. If a single contact matches, the button shows that contact’s name and image, and tapping the button grants your app access to that contact. If multiple contacts match, tapping the button navigates to another view where the person can choose which contacts to allow. The button updates its display as the query string changes; using a query string bound to a SwiftUI [TextField](https://developer.apple.com/documentation/swiftui/textfield) allows the button to update its display of matches in real time as the person types.

> **Note**

> This button is only useful when your app has limited or no access to contacts. To see what level of access your app has to a person’s contacts, call [authorizationStatus(for:)](../contacts/cncontactstore/authorizationstatus%28for_%29.md). If the returned value is [CNAuthorizationStatus.limited](../contacts/cnauthorizationstatus/limited.md), the button updates itself to show partial or single matches based on the query string. If the authorization status is  [CNAuthorizationStatus.denied](../contacts/cnauthorizationstatus/denied.md), the button shows a prompt to allow access to contacts. If the authorization status is [CNAuthorizationStatus.authorized](../contacts/cnauthorizationstatus/authorized.md), the button doesn’t appear at all.

To show a picker of all contacts and allow someone to add them to your app, without presenting your own search UI, use [contactAccessPicker(isPresented:completionHandler:)](https://developer.apple.com/documentation/swiftui/view/contactaccesspicker%28ispresented:completionhandler:%29).

## Topics

### Creating a contact access button

- [init(queryString:ignoredEmails:ignoredPhoneNumbers:approvalCallback:)](contactaccessbutton/init%28querystring_ignoredemails_ignoredphonenumbers_approvalcallback_%29.md): Creates a contact access button to quickly add contacts under limited-access authorization.

### Setting the button caption

- [ContactAccessButton.Caption](contactaccessbutton/caption.md): A list of access options to display in the contact access button when matching a contact’s name.

### Accessing button style

- [ContactAccessButton.Style](contactaccessbutton/style.md): A type that customizes the style of a contact access button.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [View](https://developer.apple.com/documentation/swiftui/view)
