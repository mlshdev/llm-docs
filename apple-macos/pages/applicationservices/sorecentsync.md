> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/sorecentsync

# soRecentSync

**Framework:** Application Services  
**Kind:** Global Variable  
**Availability:** macOS 10.0+

## Declaration

```swift
var soRecentSync: OSType { get }
```

<a id="discussion"></a>

## Discussion

Get the message code for the most recentlyencountered synchronization command. If no synchronization commandhas been encountered, 0 is returned. The `speechInfo` parameteris a pointer to a variable of type `OSType`.

This selector works with the `GetSpeechInfo` function.
