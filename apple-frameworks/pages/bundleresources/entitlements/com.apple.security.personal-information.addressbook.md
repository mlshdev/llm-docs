> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.personal-information.addressbook](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.personal-information.addressbook)

# Address book entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the app may have read-write access to contacts in the user’s address book.

## Details

`com.apple.security.personal-information.addressbook`

<a id="Discussion"></a>

## Discussion

To add this entitlement to your app, enable the App Sandbox capability in Xcode and then select Contacts, or enable the Hardened Runtime capability and then select Address Book.

## See Also

### Personal information

- [Location entitlement](com.apple.security.personal-information.location.md): A Boolean value that indicates whether the app may access location information from Location Services.
- [Calendars entitlement](com.apple.security.personal-information.calendars.md): A Boolean value that indicates whether the app may have read-write access to the user’s calendar.
- [Photos Library Entitlement](com.apple.security.personal-information.photos-library.md): A Boolean value that indicates whether the app has read-write access to the user’s Photos library.
