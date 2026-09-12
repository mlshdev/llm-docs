> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsactivity/removeallactivityitems()](https://developer.apple.com/documentation/classkit/clsactivity/removeallactivityitems())

# removeAllActivityItems() (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Deletes all activity items associated with the current activity.

## Declaration

```swift
func removeAllActivityItems()
```

<a id="Discussion"></a>

## Discussion

Call the [save(completion:)](../clsdatastore/save%28completion_%29.md) method on the data store after removing activity items, just as you would when adding items, to propagate the changes to the network:

```swift
activity.removeAllActivityItems()

CLSDataStore.shared.save { error in
    // Handle errors.
}
```

## See Also

### Managing activity items

- [addAdditionalActivityItem(\_:)](addadditionalactivityitem%28__%29.md): Adds an activity item to an activity.
- [primaryActivityItem](primaryactivityitem.md): Adds an activity item to an activity and sets it as the primary activity item.
- [additionalActivityItems](additionalactivityitems.md): The list of activity items associated with an activity.

# removeAllActivityItems (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 14.5+ · iPadOS 14.5+ · Mac Catalyst 14.5+ · macOS 11.3+ · visionOS 1.0+

Deletes all activity items associated with the current activity.

## Declaration

```objectivec
- (void) removeAllActivityItems;
```

<a id="Discussion"></a>

## Discussion

Call the [saveWithCompletion:](../clsdatastore/save%28completion_%29.md) method on the data store after removing activity items, just as you would when adding items, to propagate the changes to the network:

```swift
activity.removeAllActivityItems()

CLSDataStore.shared.save { error in
    // Handle errors.
}
```

## See Also

### Managing activity items

- [addAdditionalActivityItem:](addadditionalactivityitem%28__%29.md): Adds an activity item to an activity.
- [primaryActivityItem](primaryactivityitem.md): Adds an activity item to an activity and sets it as the primary activity item.
- [additionalActivityItems](additionalactivityitems.md): The list of activity items associated with an activity.
