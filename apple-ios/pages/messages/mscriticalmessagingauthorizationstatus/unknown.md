> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/messages/mscriticalmessagingauthorizationstatus/unknown

# MSCriticalMessagingAuthorizationStatus.unknown

**Framework:** Messages  
**Kind:** Case  
**Availability:** iOS 18.2+ · iPadOS 18.2+

The authorization status is unknown.

## Declaration

```swift
case unknown
```

<a id="Discussion"></a>

## Discussion

A person hasn’t either explicitly authorized or denied authorization to use the framework.

## See Also

### Authorization statuses

- [MSCriticalMessagingAuthorizationStatus.denied](denied.md): A person has denied permission to use the Critical Messaging API.
- [MSCriticalMessagingAuthorizationStatus.approved](approved.md): A person has approved a request to use the Critical Messaging API.
