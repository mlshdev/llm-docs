> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/deviceactivity/deviceactivityfilter/users-swift.struct/children](https://developer.apple.com/documentation/deviceactivity/deviceactivityfilter/users-swift.struct/children)

# children

**Framework:** Device Activity  
**Kind:** Type Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Filters data for the children in the current user’s iCloud family.

## Declaration

```swift
static let children: DeviceActivityFilter.Users
```

<a id="discussion"></a>

## Discussion

Only parents and guardians in an iCloud family that are actively managing children via the `FamilyControls` framework have permission to report a child’s device activity data.
