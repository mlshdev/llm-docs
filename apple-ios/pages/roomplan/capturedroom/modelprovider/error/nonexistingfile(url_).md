> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/roomplan/capturedroom/modelprovider/error/nonexistingfile(url:)](https://developer.apple.com/documentation/roomplan/capturedroom/modelprovider/error/nonexistingfile(url:))

# CapturedRoom.ModelProvider.Error.nonExistingFile(url:)

**Framework:** RoomPlan  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

An error that indicates a model-URL query failed to return a result.

## Declaration

```swift
case nonExistingFile(url: URL)
```

## Parameters

- `URL`: The URL that references a nonexisting file.

<a id="discussion"></a>

## Discussion

This error occurs when the app hasn’t associated a URL to the attributes in a model-URL query.

## See Also

### Interpreting the error

- [CapturedRoom.ModelProvider.Error.attributeCombinationNotSupported](attributecombinationnotsupported.md): An error that indicates the framework doesn’t support the attributes set in a model-URL query.
