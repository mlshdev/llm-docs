> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/contactresolver/useridentity()](https://developer.apple.com/documentation/corespotlight/contactresolver/useridentity())

# userIdentity()

**Framework:** CoreSpotlight  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Returns the information for the current contact.

## Declaration

```swift
func userIdentity() -> ResolvedContact
```

<a id="return-value"></a>

## Return Value

A resolved contact structure with information your app manages. Fill this structure with information you manage directly such as app-specific account details. You can also include information from sources to which your app has approved access such as the Contacts framework.
