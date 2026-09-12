> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/accessoryliveactivities/accessoryliveactivity/content-swift.property](https://developer.apple.com/documentation/accessoryliveactivities/accessoryliveactivity/content-swift.property)

# content

**Framework:** Accessory Live Activities  
**Kind:** Instance Property  
**Availability:** iOS 26.5+ · iPadOS 26.5+

The updated content of the forwarded Live Activity.

## Declaration

```swift
let content: AccessoryLiveActivity.Content?
```

<a id="Overview"></a>

## Overview

If a Live Activity update only changes the activity’s [state](state.md) and doesn’t contain updated data, the `content` property is `nil`. If the `content` property isn’t `nil`, check the [alert](content-swift.struct/alert.md) to determine whether the update requires you to render a notification-style alert on your accessory.

## See Also

### Accessing the activity’s state and content

- [state](state.md): The current state of the activity in its life cycle.
- [AccessoryLiveActivity.Content](content-swift.struct.md): The content of an alert for a forwarded Live Activity.
