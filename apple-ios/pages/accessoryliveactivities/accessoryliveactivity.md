> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/accessoryliveactivity](https://developer.apple.com/documentation/accessoryliveactivities/accessoryliveactivity)

# AccessoryLiveActivity

**Framework:** Accessory Live Activities  
**Kind:** Structure  
**Availability:** iOS 26.5+ · iPadOS 26.5+

The details of the Live Activity that iOS forwards to your accessory.

## Declaration

```swift
struct AccessoryLiveActivity
```

## Mentioned In

- [Receiving Live Activity updates and alerts on an accessory](receiving-live-activities-on-an-accessory.md)

## Topics

### Identifying the activity

- [activityIdentifier](accessoryliveactivity/activityidentifier.md): A string that uniquely identifies the Live Activity.
- [sourceBundleIdentifier](accessoryliveactivity/sourcebundleidentifier.md): The bundle identifier of the app that started the Live Activity.
- [sourceBundleName](accessoryliveactivity/sourcebundlename.md): The name of the app from which the activity content originated.

### Accessing the activity’s state and content

- [state](accessoryliveactivity/state.md): The current state of the activity in its life cycle.
- [content](accessoryliveactivity/content-swift.property.md): The updated content of the forwarded Live Activity.
- [AccessoryLiveActivity.Content](accessoryliveactivity/content-swift.struct.md): The content of an alert for a forwarded Live Activity.

### Accessing the app’s icon

- [sourceBundleIcon](accessoryliveactivity/sourcebundleicon.md): The icon of the app that initiated the Live Activity.
- [AccessoryLiveActivity.IconFile](accessoryliveactivity/iconfile.md): An on-demand reference to the app icon of the app that started the Live Activity.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
