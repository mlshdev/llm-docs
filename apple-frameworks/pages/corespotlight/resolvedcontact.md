> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/resolvedcontact](https://developer.apple.com/documentation/corespotlight/resolvedcontact)

# ResolvedContact

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Contact information to help a search query match references to a person or organization.

## Declaration

```swift
struct ResolvedContact
```

## Mentioned In

- [Making your indexed content available to Foundation Models](making-your-indexed-content-available-to-foundation-models.md)

<a id="overview"></a>

## Overview

Use this type to specify details about the person or business that uses your app. When a query matches references to a specific person or business, the information in this structure helps the search tool resolve references to that contact. For example, a query that looks for the author of an email uses this information to resolve a request such as “find the emails that I authored.” Fill in as many fields of this structure as possible with the information available to your app.

## Topics

### Creating the contact

- [init(displayName:)](resolvedcontact/init%28displayname_%29.md)

### Specifying the person’s name

- [displayName](resolvedcontact/displayname.md): The name your app displays for the contact.
- [nameComponents](resolvedcontact/namecomponents.md): The contact’s names as a set of structured name components.
- [names](resolvedcontact/names.md): Alternate names you use to refer to the contact.

### Specifying contact information

- [emailAddresses](resolvedcontact/emailaddresses.md): The email addresses for this contact.
- [phoneNumbers](resolvedcontact/phonenumbers.md): The phone numbers for this contact.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Contact resolution

- [ContactResolver](contactresolver.md): An interface you use to help Foundation models resolve references to the person using the app.
