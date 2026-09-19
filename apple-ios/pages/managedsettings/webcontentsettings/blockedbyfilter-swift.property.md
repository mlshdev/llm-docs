> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/webcontentsettings/blockedbyfilter-swift.property

# blockedByFilter

**Framework:** Managed Settings  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+

The current policy for filtering websites.

## Declaration

```swift
var blockedByFilter: WebContentSettings.FilterPolicy? { get set }
```

<a id="discussion"></a>

## Discussion

Setting any filter policy besides `.none` will disable Safari private browsing. The value is `nil` unless you specify a policy. Your app can block up to 50 web domains and specify up to 50 web domains exceptions at once.

## See Also

### Filtering web domains

- [blockedByFilter](blockedbyfilter-swift.type.property.md): A description of the setting that controls which websites a user can access.
- [WebContentSettings.FilterPolicy](filterpolicy.md): The policies available for filtering web content based on specific web domains.
