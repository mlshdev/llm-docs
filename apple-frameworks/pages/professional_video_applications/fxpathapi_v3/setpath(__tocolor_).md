> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/professional_video_applications/fxpathapi_v3/setpath(_:tocolor:)](https://developer.apple.com/documentation/professional_video_applications/fxpathapi_v3/setpath(_:tocolor:))

# setPath(\_:toColor:) (Swift)

**Framework:** Professional Video Applications  
**Kind:** Instance Method  
**Availability:** FxPlug 4.0+

Sets the color the host app uses to draw the path with the given ID.

## Declaration

```swift
func setPath(_ pathID: FxPathID!, toColor newColor: FxPathColor) throws
```

## Parameters

- `pathID`: The ID of the path you want to draw in a different color.
- `newColor`: The FxPathColor to use to draw the path in.

# setPath:toColor:error: (Objective-C)

**Framework:** Professional Video Applications  
**Kind:** Instance Method

Sets the color the host app uses to draw the path with the given ID.

## Declaration

```objectivec
- (BOOL) setPath:(FxPathID) pathID toColor:(FxPathColor) newColor error:(NSError * *) err;
```

## Parameters

- `pathID`: The ID of the path you want to draw in a different color.
- `newColor`: The FxPathColor to use to draw the path in.
- `err`: If this is not `nil`, then any errors which occur when setting the path drawing color.

<a id="return-value"></a>

## Return Value

Returns `YES` if retrieving the color was successful, `NO` otherwise. If it returns `NO` and `err` was not `nil`, then `*err` will point to an `NSError` object containing information about what went wrong.
