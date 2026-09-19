> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accessoryliveactivities/accessoryliveactivity/content-swift.struct/alert

# alert

**Framework:** Accessory Live Activities  
**Kind:** Instance Property  
**Availability:** iOS 26.5+ · iPadOS 26.5+

The Live Activity update’s alert message.

## Declaration

```swift
let alert: AccessoryLiveActivity.Content.AlertMessage?
```

<a id="discussion"></a>

## Discussion

The `alert` property is `nil` if the Live Activity update doesn’t require displaying an alert on your accessory.

## See Also

### Alerting people

- [AccessoryLiveActivity.Content.AlertMessage](alertmessage.md): The content you use as an alert for a Live Activity update on your accessory.
