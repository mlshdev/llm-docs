> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/roombuilder/init(options:)](https://developer.apple.com/documentation/roomplan/roombuilder/init(options:))

# init(options:)

**Framework:** RoomPlan  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+

Creates a room builder using the specified options.

## Declaration

```swift
init(options: RoomBuilder.ConfigurationOptions)
```

## Parameters

- `options`: An option set to customize the captured room.

<a id="discussion"></a>

## Discussion

Pass the [beautifyObjects](configurationoptions/beautifyobjects.md) option to enhance the look of the output for the captured room, or  (`[]`) to omit capture post-processing.

## See Also

### Creating a room builder

- [RoomBuilder.ConfigurationOptions](configurationoptions.md): Options that configure a room builder.
