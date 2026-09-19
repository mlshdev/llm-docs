> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/networkextension/nehotspotmanager/loadfrompreferences()

# loadFromPreferences()

**Framework:** Network Extension  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Loads the hotspot manager configuration from the Network Extension preferences.

## Declaration

```swift
final func loadFromPreferences() async throws
```

<a id="discussion"></a>

## Discussion

If you haven’t previously saved a configuration with [saveToPreferences()](savetopreferences%28%29.md), this call loads a default configuration.

This method throws [NEHotspotManager.Error](error.md) value asynchronously on failure.

## See Also

### Managing the saved configuration

- [saveToPreferences()](savetopreferences%28%29.md): Saves the HotspotManager configuration in the Network Extension preferences.
- [removeFromPreferences()](removefrompreferences%28%29.md): Removes the hotspot manager configuration from the Network Extension preferences.
