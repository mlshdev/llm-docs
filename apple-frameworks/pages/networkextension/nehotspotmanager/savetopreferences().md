> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nehotspotmanager/savetopreferences()

# saveToPreferences()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Saves the HotspotManager configuration in the Network Extension preferences.

## Declaration

```swift
final func saveToPreferences() async throws
```

<a id="discussion"></a>

## Discussion

Only call this method after previously calling [loadFromPreferences()](loadfrompreferences%28%29.md) to load the configuration.

This method throws [NEHotspotManager.Error](error.md) value asynchronously on failure.

## See Also

### Managing the saved configuration

- [loadFromPreferences()](loadfrompreferences%28%29.md): Loads the hotspot manager configuration from the Network Extension preferences.
- [removeFromPreferences()](removefrompreferences%28%29.md): Removes the hotspot manager configuration from the Network Extension preferences.
