> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/contactresolver](https://developer.apple.com/documentation/corespotlight/contactresolver)

# ContactResolver

**Framework:** CoreSpotlight  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

An interface you use to help Foundation models resolve references to the person using the app.

## Declaration

```swift
protocol ContactResolver : Sendable
```

## Mentioned In

- [Making your indexed content available to Foundation Models](making-your-indexed-content-available-to-foundation-models.md)

<a id="overview"></a>

## Overview

When a search involves people, the search tool needs to know how to resolve references to “I” or “me” in any conversations. Implement this protocol in a custom type and assign it to the Spotlight search tool you use with your Foundation models session. Your custom type returns a [ResolvedContact](resolvedcontact.md) structure, which contains any information your app uses to refer to the person. For example, fill the structure with name information, email addresses, or phone numbers from the account your app manages.

The following example shows an implementation of this structure and the code you use to assign it to your Spotlight search tool.

```swift
struct MyContactResolver: ContactResolver {
    func userIdentity() -> ResolvedContact {
        var contact = ResolvedContact(displayName: "John Appleseed")
        contact.emailAddresses = ["john@example.com"]
        return contact
    }
}

var configuration = SpotlightSearchTool.Configuration()
configuration.contactResolver = MyContactResolver()
```

## Topics

### Returning the identity data

- [userIdentity()](contactresolver/useridentity%28%29.md): Returns the information for the current contact.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Contact resolution

- [ResolvedContact](resolvedcontact.md): Contact information to help a search query match references to a person or organization.
