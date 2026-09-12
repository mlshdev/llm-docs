> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/appintentstesting/dynamicpropertypath/subscript(dynamicmember:)-hqdv](https://developer.apple.com/documentation/appintentstesting/dynamicpropertypath/subscript(dynamicmember:)-hqdv)

# subscript(dynamicMember:)

**Framework:** App Intents Testing  
**Kind:** Instance Subscript  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Accesses a property by name without casting.

## Declaration

```swift
subscript(dynamicMember identifier: String) -> (any IntentValueExpressing)? { get throws }
```

<a id="overview"></a>

## Overview

Use this subscript to check for `nil` values and to assign values to intent parameters.
