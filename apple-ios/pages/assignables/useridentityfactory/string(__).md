> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/assignables/useridentityfactory/string(_:)

# string(\_:)

**Framework:** Assignables  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · visionOS

Creates a [StringUserIdentity](../stringuseridentity.md) with the given string value.

## Declaration

```swift
static func string(_ value: String) -> StringUserIdentity
```

## Parameters

- `value`: The value of the string to contain in this user identity.

<a id="return-value"></a>

## Return Value

A `StringUserIdentity` object with the given string value.
