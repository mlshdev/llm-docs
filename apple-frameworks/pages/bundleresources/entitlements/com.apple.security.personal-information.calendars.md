> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.personal-information.calendars](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.personal-information.calendars)

# Calendars entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the app may have read-write access to the user’s calendar.

## Details

`com.apple.security.personal-information.calendars`

<a id="Discussion"></a>

## Discussion

To add this entitlement to your app, first enable the App Sandbox or Hardened Runtime capability in Xcode, and then select Calendar.

## See Also

### Personal information

- [Address book entitlement](com.apple.security.personal-information.addressbook.md): A Boolean value that indicates whether the app may have read-write access to contacts in the user’s address book.
- [Location entitlement](com.apple.security.personal-information.location.md): A Boolean value that indicates whether the app may access location information from Location Services.
- [Photos Library Entitlement](com.apple.security.personal-information.photos-library.md): A Boolean value that indicates whether the app has read-write access to the user’s Photos library.
