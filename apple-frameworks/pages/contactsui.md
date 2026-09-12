> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui](https://developer.apple.com/documentation/contactsui)

# Contacts UI (Swift)

**Framework:** Contacts UI  
**Kind:** Framework  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+

Provide an interface that allows people to display information about their contacts.

<a id="overview"></a>

## Overview

The Contacts UI framework contains user interface objects that provide access to a person’s contacts in your app. Depending on your app’s authorization level for using contacts (as indicated by [authorizationStatus(for:)](contacts/cncontactstore/authorizationstatus%28for_%29.md)), your app may be able to display, edit, select, and create contacts. When the authorization level is [CNAuthorizationStatus.limited](contacts/cnauthorizationstatus/limited.md), you can display a [ContactAccessButton](contactsui/contactaccessbutton.md) to request access to contacts beyond the limited set a person has currently granted your app access to.

## Topics

### Contact viewer

- [CNContactViewController](contactsui/cncontactviewcontroller.md): A view controller that displays a new, unknown, or existing contact.

### Contact pickers

- [CNContactPickerViewController](contactsui/cncontactpickerviewcontroller.md): A view controller that displays an interface for picking contacts.
- [CNContactPicker](contactsui/cncontactpicker.md): A popover-based interface for selecting a contact.

### Contact access

- [ContactAccessButton](contactsui/contactaccessbutton.md): A SwiftUI button that you use to add to the set of contacts someone shares with your app.

# Contacts UI (Objective-C)

**Framework:** Contacts UI  
**Kind:** Framework  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · visionOS 1.0+

Provide an interface that allows people to display information about their contacts.

<a id="overview"></a>

## Overview

The Contacts UI framework contains user interface objects that provide access to a person’s contacts in your app. Depending on your app’s authorization level for using contacts (as indicated by [authorizationStatusForEntityType:](contacts/cncontactstore/authorizationstatus%28for_%29.md)), your app may be able to display, edit, select, and create contacts. When the authorization level is [CNAuthorizationStatusLimited](contacts/cnauthorizationstatus/limited.md), you can display a [ContactAccessButton](contactsui/contactaccessbutton.md) to request access to contacts beyond the limited set a person has currently granted your app access to.

## Topics

### Contact viewer

- [CNContactViewController](contactsui/cncontactviewcontroller.md): A view controller that displays a new, unknown, or existing contact.

### Contact pickers

- [CNContactPickerViewController](contactsui/cncontactpickerviewcontroller.md): A view controller that displays an interface for picking contacts.
- [CNContactPicker](contactsui/cncontactpicker.md): A popover-based interface for selecting a contact.
