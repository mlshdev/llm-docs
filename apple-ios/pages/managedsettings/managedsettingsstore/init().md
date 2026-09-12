> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/managedsettings/managedsettingsstore/init()](https://developer.apple.com/documentation/managedsettings/managedsettingsstore/init())

# init()

**Framework:** Managed Settings  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 26.0+

Creates a new instance of a store.

## Declaration

```swift
init()
```

<a id="discussion"></a>

## Discussion

Each store contains the settings that the client app applies. If the client app doesn’t explicitly apply a setting, the default value is `nil`.
