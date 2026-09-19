> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/authenticationservices/asauthorizationaccountcreationplatformpublickeycredentialrequest/acceptedcontactidentifiers

# acceptedContactIdentifiers

**Framework:** Authentication Services  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

An ordered list of contact identifiers that the user can choose from during account creation. The order of this list indicates preference. Exactly one contact identifier from this list will be included in the response.

## Declaration

```swift
final let acceptedContactIdentifiers: [ASContactIdentifierRequest]
```
