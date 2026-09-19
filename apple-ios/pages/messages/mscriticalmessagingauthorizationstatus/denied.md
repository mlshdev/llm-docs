> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messages/mscriticalmessagingauthorizationstatus/denied

# MSCriticalMessagingAuthorizationStatus.denied

**Framework:** Messages  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+

A person has denied permission to use the Critical Messaging API.

## Declaration

```swift
case denied
```

<a id="Discussion"></a>

## Discussion

The framework returns this value when someone explicitly denies a request to use the  API.

## See Also

### Authorization statuses

- [MSCriticalMessagingAuthorizationStatus.unknown](unknown.md): The authorization status is unknown.
- [MSCriticalMessagingAuthorizationStatus.approved](approved.md): A person has approved a request to use the Critical Messaging API.
