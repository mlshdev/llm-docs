> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.security.personal-information.photos-library](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.personal-information.photos-library)

# Photos Library Entitlement

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the app has read-write access to the user’s Photos library.

## Details

`com.apple.security.personal-information.photos-library`

<a id="Discussion"></a>

## Discussion

To add this entitlement to your app, first enable the Hardened Runtime capability in Xcode. Then, under Resource Access, select Photos Library.

## See Also

### Personal information

- [Address book entitlement](com.apple.security.personal-information.addressbook.md): A Boolean value that indicates whether the app may have read-write access to contacts in the user’s address book.
- [Location entitlement](com.apple.security.personal-information.location.md): A Boolean value that indicates whether the app may access location information from Location Services.
- [Calendars entitlement](com.apple.security.personal-information.calendars.md): A Boolean value that indicates whether the app may have read-write access to the user’s calendar.
