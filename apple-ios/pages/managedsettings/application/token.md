> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/application/token

# token

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

An opaque representation of a specific web domain.

## Declaration

```swift
let token: ApplicationToken?
```

<a id="discussion"></a>

## Discussion

Use  a token to share information about an app with other devices in the same Family Sharing group.

## See Also

### Accessing application information

- [bundleIdentifier](bundleidentifier.md): The unique string that identifies this app.
- [localizedDisplayName](localizeddisplayname.md): A localized display name for the application.
