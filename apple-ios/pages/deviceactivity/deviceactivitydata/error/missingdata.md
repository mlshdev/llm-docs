> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-6a8f7b178c0a; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/deviceactivity/deviceactivitydata/error/missingdata

# DeviceActivityData.Error.missingData

**Framework:** Device Activity  
**Kind:** Case  
**Availability:** iOS 26.4+ · iPadOS 26.4+

An error indicating the requested data does not exist.

## Declaration

```swift
case missingData
```

<a id="Discussion"></a>

## Discussion

If fetching cached data returns this error, fetching live data may resolve the issue.

## See Also

### Representing errors

- [DeviceActivityData.Error.unavailable](unavailable.md): An error indicating data access is unavailable.
- [DeviceActivityData.Error.unauthorized](unauthorized.md): An error indicating the app isn’t authorized to provide parental controls and access data.
