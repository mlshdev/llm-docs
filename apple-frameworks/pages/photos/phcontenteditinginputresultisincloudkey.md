> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginputresultisincloudkey](https://developer.apple.com/documentation/photos/phcontenteditinginputresultisincloudkey)

# PHContentEditingInputResultIsInCloudKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the asset data is stored on the local device or must be downloaded from iCloud. (`NSNumber`)

## Declaration

```swift
let PHContentEditingInputResultIsInCloudKey: String
```

<a id="Discussion"></a>

## Discussion

If `true`, no asset data was provided because the asset data must be downloaded from iCloud. To do this, submit another request, specifying `true` for the [isNetworkAccessAllowed](phcontenteditinginputrequestoptions/isnetworkaccessallowed.md) option.

## See Also

### Constants

- [PHContentEditingInputCancelledKey](phcontenteditinginputcancelledkey.md): A Boolean value indicating whether the image request was canceled. (`NSNumber`)
- [PHContentEditingInputErrorKey](phcontenteditinginputerrorkey.md): An error that occurred while attempting to load the asset data. (`NSError`)

# PHContentEditingInputResultIsInCloudKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the asset data is stored on the local device or must be downloaded from iCloud. (`NSNumber`)

## Declaration

```objectivec
extern NSString * const PHContentEditingInputResultIsInCloudKey;
```

<a id="Discussion"></a>

## Discussion

If `true`, no asset data was provided because the asset data must be downloaded from iCloud. To do this, submit another request, specifying `true` for the [networkAccessAllowed](phcontenteditinginputrequestoptions/isnetworkaccessallowed.md) option.

## See Also

### Constants

- [PHContentEditingInputCancelledKey](phcontenteditinginputcancelledkey.md): A Boolean value indicating whether the image request was canceled. (`NSNumber`)
- [PHContentEditingInputErrorKey](phcontenteditinginputerrorkey.md): An error that occurred while attempting to load the asset data. (`NSError`)
