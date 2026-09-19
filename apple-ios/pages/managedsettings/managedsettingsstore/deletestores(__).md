> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/managedsettings/managedsettingsstore/deletestores(_:)

# deleteStores(\_:)

**Framework:** Managed Settings  
**Kind:** Type Method  
**Availability:** iOS 26.5+ · iPadOS 26.5+ · Mac Catalyst 26.5+

Deletes the given stores configured by your app if they exist

## Declaration

```swift
static func deleteStores(_ storeNames: Set<ManagedSettingsStore.Name>)
```

## Parameters

- `storeNames`: The names of the stores to delete
