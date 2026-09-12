> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/modelprovider/error/attributecombinationnotsupported](https://developer.apple.com/documentation/roomplan/capturedroom/modelprovider/error/attributecombinationnotsupported)

# CapturedRoom.ModelProvider.Error.attributeCombinationNotSupported

**Framework:** RoomPlan  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An error that indicates the framework doesn’t support the attributes set in a model-URL query.

## Declaration

```swift
case attributeCombinationNotSupported
```

<a id="discussion"></a>

## Discussion

This error occurs for the [modelFileURL(for:)](../modelfileurl%28for_%29-58ykp.md) function when an unsupported combination of attributes resides in the argument array.

## See Also

### Interpreting the error

- [CapturedRoom.ModelProvider.Error.nonExistingFile(url:)](nonexistingfile%28url_%29.md): An error that indicates a model-URL query failed to return a result.
