> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/servicemanagement/smappservice/statusforlegacyplist(at:)](https://developer.apple.com/documentation/servicemanagement/smappservice/statusforlegacyplist(at:))

# statusForLegacyPlist(at:) (Swift)

**Framework:** Service Management  
**Kind:** Type Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Check the authorization status of an earlier OS version login item.

## Declaration

```swift
class func statusForLegacyPlist(at url: URL) -> SMAppService.Status
```

## Parameters

- `url`: The URL of the helper executable’s property list.

<a id="return-value"></a>

## Return Value

One of the [SMAppService.Status](status-swift.enum.md) constants that indicate the current authorization status.

## Mentioned In

- [Updating helper executables from earlier versions of macOS](../updating-helper-executables-from-earlier-versions-of-macos.md)

# statusForLegacyURL: (Objective-C)

**Framework:** Service Management  
**Kind:** Type Method  
**Availability:** Mac Catalyst 16.0+ · macOS 13.0+

Check the authorization status of an earlier OS version login item.

## Declaration

```objectivec
+ (SMAppServiceStatus) statusForLegacyURL:(NSURL *) url;
```

## Parameters

- `url`: The URL of the helper executable’s property list.

<a id="return-value"></a>

## Return Value

One of the [SMAppServiceStatus](status-swift.enum.md) constants that indicate the current authorization status.

## Mentioned In

- [Updating helper executables from earlier versions of macOS](../updating-helper-executables-from-earlier-versions-of-macos.md)
