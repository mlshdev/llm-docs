> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfiguration-swift.struct/selectionlimit](https://developer.apple.com/documentation/photosui/phpickerconfiguration-swift.struct/selectionlimit)

# selectionLimit

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS

The maximum number of selections the user can make.

## Declaration

```swift
var selectionLimit: Int
```

<a id="Discussion"></a>

## Discussion

The default value is `1`. Setting the value to `0` sets the selection limit to the maximum that the system supports.

## See Also

### Setting the selection limit

- [selection](selection-swift.property.md): The selection behavior for the picker.
- [PHPickerConfigurationSelection](../phpickerconfigurationselection.md): Options that represent differing selection behavior.
- [PHPickerConfiguration.Selection](selection-swift.enum.md): Options that represent differing selection behavior.
