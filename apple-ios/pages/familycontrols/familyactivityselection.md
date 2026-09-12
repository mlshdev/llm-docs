> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/familycontrols/familyactivityselection](https://developer.apple.com/documentation/familycontrols/familyactivityselection)

# FamilyActivitySelection

**Framework:** Family Controls  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+

A collection of applications, categories, and web domains selected by the user.

## Declaration

```swift
struct FamilyActivitySelection
```

<a id="overview"></a>

## Overview

To protect the user’s privacy, `FamilyActivitySelection` holds opaque values that represent categories, applications, and web domains selected by the user.

You can then pass these opaque values to instances and methods from the [Managed Settings](../managedsettings.md) and [Device Activity](../deviceactivity.md) frameworks to set up and manage parental controls.

> **Important**

> If a user, parent, or guardian revokes authorization of your app, any tokens that [FamilyActivitySelection](familyactivityselection.md) provided while your app was authorized are voided.

For more information on prompting the user to select items, see [FamilyActivityPicker](familyactivitypicker.md).

## Topics

### Accessing selected categories

- [categories](familyactivityselection/categories.md): A set of category instances selected by the user.
- [categoryTokens](familyactivityselection/categorytokens.md): Tokens that represent categories selected by the user.
- [init(includeEntireCategory:)](familyactivityselection/init%28includeentirecategory_%29.md): Creates a new activity selection instance.

### Accessing selected applications

- [applications](familyactivityselection/applications.md): A set of application instances selected by the user.
- [applicationTokens](familyactivityselection/applicationtokens.md): Tokens that represent applications selected by the user.

### Accessing selected web domains

- [webDomains](familyactivityselection/webdomains.md): A set of web domain instances selected by the user.
- [webDomainTokens](familyactivityselection/webdomaintokens.md): Tokens that represent web domains selected by the user.

### Creating activity selections

- [init()](familyactivityselection/init%28%29.md): Creates a new activity selection instance.

### Comparing activity selections

- [includeEntireCategory](familyactivityselection/includeentirecategory.md): A Boolean value that indicates whether the selection should include applications and web domains from the selected categories.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Activity selections

- [FamilyActivityPicker](familyactivitypicker.md): A view in which users specify applications, web domains, and categories without revealing their choices to the app.
