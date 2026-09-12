> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/managedsettingsstore/init(named:)](https://developer.apple.com/documentation/managedsettings/managedsettingsstore/init(named:))

# init(named:)

**Framework:** Managed Settings  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a new instance of a store with a custom name.

## Declaration

```swift
convenience init(named name: ManagedSettingsStore.Name)
```

## Parameters

- `name`: A unique name for the store.

<a id="discussion"></a>

## Discussion

Each store contains the settings that the client app applies. If the client app doesn’t explicitly apply a setting, the default value is `nil`. Using `.default` is akin to calling  `ManagedSettingsStore()`.
