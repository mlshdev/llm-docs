> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.contacts.notes](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.contacts.notes)

# com.apple.developer.contacts.notes (Swift)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the app may access the notes in contact entries.

## Details

`com.apple.developer.contacts.notes`

<a id="Discussion"></a>

## Discussion

When your app loads one or more entries from the user’s contacts — for example, by calling the [unifiedContacts(matching:keysToFetch:)](../../contacts/cncontactstore/unifiedcontacts%28matching_keystofetch_%29.md) method — you provide a list of keys specifying the fields to fetch. To request the [note](../../contacts/cncontact/note.md) field using [CNContactNoteKey](../../contacts/cncontactnotekey.md) in iOS 13 or later or macOS 13 or later, your app must have the [com.apple.developer.contacts.notes](com.apple.developer.contacts.notes.md) entitlement. When your app tries to fetch notes without the entitlement, it receives an [unauthorizedKeys](../../contacts/cnerror/unauthorizedkeys.md) error. Your app only needs the entitlement if it reads or writes notes.

Add the entitlement to your app in the Xcode property list editor. Set the entitlement’s type to Boolean, and the corresponding value to `YES`.

![A screenshot of Xcode showing the contact notes entitlement in an app’s entitlements file.](https://developer.apple.com/images/com.apple.bundleresources/media-3368935@2x.png)

Before you submit an app with this entitlement to the App Store, you need to get permission to use the entitlement. Request permission at [https://developer.apple.com/contact/request/contact-note-field](https://developer.apple.com/contact/request/contact-note-field).

# com.apple.developer.contacts.notes (Objective-C)

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · macOS 13.0+ · visionOS 1.0+

A Boolean value that indicates whether the app may access the notes in contact entries.

## Details

`com.apple.developer.contacts.notes`

<a id="Discussion"></a>

## Discussion

When your app loads one or more entries from the user’s contacts — for example, by calling the [unifiedContactsMatchingPredicate:keysToFetch:error:](../../contacts/cncontactstore/unifiedcontacts%28matching_keystofetch_%29.md) method — you provide a list of keys specifying the fields to fetch. To request the [note](../../contacts/cncontact/note.md) field using [CNContactNoteKey](../../contacts/cncontactnotekey.md) in iOS 13 or later or macOS 13 or later, your app must have the [com.apple.developer.contacts.notes](com.apple.developer.contacts.notes.md) entitlement. When your app tries to fetch notes without the entitlement, it receives an [unauthorizedKeys](../../contacts/cnerror/unauthorizedkeys.md) error. Your app only needs the entitlement if it reads or writes notes.

Add the entitlement to your app in the Xcode property list editor. Set the entitlement’s type to Boolean, and the corresponding value to `YES`.

![A screenshot of Xcode showing the contact notes entitlement in an app’s entitlements file.](https://developer.apple.com/images/com.apple.bundleresources/media-3368935@2x.png)

Before you submit an app with this entitlement to the App Store, you need to get permission to use the entitlement. Request permission at [https://developer.apple.com/contact/request/contact-note-field](https://developer.apple.com/contact/request/contact-note-field).
