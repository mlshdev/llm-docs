> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevicenotificationname/init(rawvalue:)](https://developer.apple.com/documentation/metal/mtldevicenotificationname/init(rawvalue:))

# init(rawValue:)

**Framework:** Metal  
**Kind:** Initializer  
**Availability:** macOS 10.13+ (deprecated in 27.0)

Creates a Metal device notification name from a string.

> Device notifications are not applicable on Apple Silicon

## Declaration

```swift
init(rawValue: String)
```

## Parameters

- `rawValue`: A string of the notification’s name.

<a id="discussion"></a>

## Discussion

Use this type’s static properties instead of this initializer.

## See Also

### Creating a notification name

- [wasAdded](wasadded.md): Deprecated. A notification that Metal sends to observers when the system adds a GPU device.
- [removalRequested](removalrequested.md): Deprecated. A notification that Metal sends to observers when a person requests to remove a GPU device from the system.
- [wasRemoved](wasremoved.md): Deprecated. A notification that Metal sends to observers when the system removes a GPU device.
