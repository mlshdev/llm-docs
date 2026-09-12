> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsactivity/additionalactivityitems](https://developer.apple.com/documentation/classkit/clsactivity/additionalactivityitems)

# additionalActivityItems (Swift)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

The list of activity items associated with an activity.

## Declaration

```swift
var additionalActivityItems: [CLSActivityItem] { get }
```

## See Also

### Managing activity items

- [addAdditionalActivityItem(\_:)](addadditionalactivityitem%28__%29.md): Adds an activity item to an activity.
- [primaryActivityItem](primaryactivityitem.md): Adds an activity item to an activity and sets it as the primary activity item.
- [removeAllActivityItems()](removeallactivityitems%28%29.md): Deletes all activity items associated with the current activity.

# additionalActivityItems (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Property  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

The list of activity items associated with an activity.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) NSArray<__kindof CLSActivityItem *> * additionalActivityItems;
```

## See Also

### Managing activity items

- [addAdditionalActivityItem:](addadditionalactivityitem%28__%29.md): Adds an activity item to an activity.
- [primaryActivityItem](primaryactivityitem.md): Adds an activity item to an activity and sets it as the primary activity item.
- [removeAllActivityItems](removeallactivityitems%28%29.md): Deletes all activity items associated with the current activity.
