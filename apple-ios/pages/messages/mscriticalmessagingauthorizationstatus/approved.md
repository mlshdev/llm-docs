> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messages/mscriticalmessagingauthorizationstatus/approved

# MSCriticalMessagingAuthorizationStatus.approved

**Framework:** Messages  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A person has approved a request to use the Critical Messaging API.

## Declaration

```swift
case approved
```

<a id="Discussion"></a>

## Discussion

The framework returns this value when someone approves a request to use the API.

## See Also

### Authorization statuses

- [MSCriticalMessagingAuthorizationStatus.unknown](unknown.md): The authorization status is unknown.
- [MSCriticalMessagingAuthorizationStatus.denied](denied.md): A person has denied permission to use the Critical Messaging API.
