> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/contactsui/contactaccessbutton/caption](https://developer.apple.com/documentation/contactsui/contactaccessbutton/caption)

# ContactAccessButton.Caption

**Framework:** Contacts UI  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+

A list of access options to display in the contact access button when matching a contact’s name.

## Declaration

```swift
enum Caption
```

<a id="overview"></a>

## Overview

Set the caption of a contact access button with the view modifier [contactAccessButtonCaption(\_:)](https://developer.apple.com/documentation/swiftui/view/contactaccessbuttoncaption%28_:%29). When the query produces a single result, the content access button shows the the caption under the matching contact name. For example, a search for `Anne` could show a button that displays the matching name “Anne Johnson” with a caption line of “annejohnson1@icloud.com” when the caption type is [ContactAccessButton.Caption.email](caption/email.md).

## Topics

### Caption options

- [ContactAccessButton.Caption.defaultText](caption/defaulttext.md): A caption option that displays a default value.
- [ContactAccessButton.Caption.email](caption/email.md): A caption option that displays an email address for the contact.
- [ContactAccessButton.Caption.phone](caption/phone.md): A caption option that displays a phone number for the contact.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
