> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pktoolpickercustomitem/configuration-swift.struct/identifier](https://developer.apple.com/documentation/pencilkit/pktoolpickercustomitem/configuration-swift.struct/identifier)

# identifier

**Framework:** PencilKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.0+

A string that uniquely identifies the tool in the picker.

## Declaration

```swift
var identifier: String
```

<a id="Discussion"></a>

## Discussion

For example, you might use the name `com.example.example-company.custom-tool`. If you use multiple tool items with the same identifier to create the picker, the picker only shows the first instance of that item.

## See Also

### Identifying the custom tool

- [name](name.md): A short string to show as the name of the tool in the UI.
