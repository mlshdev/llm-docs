> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/token](https://developer.apple.com/documentation/managedsettings/token)

# Token

**Framework:** Managed Settings  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

A representation of an activity, such as an app or website, that doesn’t reveal its identity.

## Declaration

```swift
struct Token<T>
```

<a id="overview"></a>

## Overview

Managed Settings uses a `Token` to preserve user privacy and prevent anyone outside of a Family Sharing group from identifying what apps and websites the family accesses. You can use tokens to restrict and filter device use without accessing personal information.

The ManagedSettings framework provides the following types of tokens:

- **[ApplicationToken](applicationtoken.md)**: An opaque representation of a selected app.
- **[WebDomainToken](webdomaintoken.md)**: An opaque representation of a selected web domain.
- **[ActivityCategoryToken](activitycategorytoken.md)**: An opaque representation of a selected category of activity.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
