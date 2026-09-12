> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contacts/accessing-a-person-s-contact-data-using-contacts-and-contactsui](https://developer.apple.com/documentation/contacts/accessing-a-person-s-contact-data-using-contacts-and-contactsui)

# Accessing a person’s contact data using Contacts and ContactsUI

**Interface languages:** Swift, Objective-C

**Framework:** Contacts  
**Kind:** Sample Code  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · Xcode 16.0+

Allow people to grant your app access to contact data by adding the Contact access button and Contact access picker to your app.

<a id="Overview"></a>

## Overview

> **Note**

> This sample code project is associated with WWDC24 session 10121: [Meet the Contact Access Button](https://developer.apple.com/wwdc24/10121/).

<a id="Configure-the-sample-code-project"></a>

### Configure the sample code project

Before running the sample code project in Xcode, select the sample target, then configure it to use your Developer team for signing.

## See Also

### Essentials

- [Accessing the contact store](accessing-the-contact-store.md): Request permission from the person to read and write their contact data.
- [CNContactStore](cncontactstore.md): The object that fetches and saves contacts, groups, and containers from the user’s Contacts database.
- [NSContactsUsageDescription](../bundleresources/information-property-list/nscontactsusagedescription.md): A message that tells people why the app is requesting access to their contacts.
- [com.apple.developer.contacts.notes](../bundleresources/entitlements/com.apple.developer.contacts.notes.md): A Boolean value that indicates whether the app may access the notes in contact entries.
