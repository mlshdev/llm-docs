> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginputcancelledkey](https://developer.apple.com/documentation/photos/phcontenteditinginputcancelledkey)

# PHContentEditingInputCancelledKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the image request was canceled. (`NSNumber`)

## Declaration

```swift
let PHContentEditingInputCancelledKey: String
```

<a id="Discussion"></a>

## Discussion

If you call the [cancelContentEditingInputRequest(\_:)](phasset/cancelcontenteditinginputrequest%28__%29.md) method to cancel a request, Photos calls your result handler block with the value `true` for this key.

## See Also

### Constants

- [PHContentEditingInputResultIsInCloudKey](phcontenteditinginputresultisincloudkey.md): A Boolean value indicating whether the asset data is stored on the local device or must be downloaded from iCloud. (`NSNumber`)
- [PHContentEditingInputErrorKey](phcontenteditinginputerrorkey.md): An error that occurred while attempting to load the asset data. (`NSError`)

# PHContentEditingInputCancelledKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

A Boolean value indicating whether the image request was canceled. (`NSNumber`)

## Declaration

```objectivec
extern NSString * const PHContentEditingInputCancelledKey;
```

<a id="Discussion"></a>

## Discussion

If you call the [cancelContentEditingInputRequest:](phasset/cancelcontenteditinginputrequest%28__%29.md) method to cancel a request, Photos calls your result handler block with the value `true` for this key.

## See Also

### Constants

- [PHContentEditingInputResultIsInCloudKey](phcontenteditinginputresultisincloudkey.md): A Boolean value indicating whether the asset data is stored on the local device or must be downloaded from iCloud. (`NSNumber`)
- [PHContentEditingInputErrorKey](phcontenteditinginputerrorkey.md): An error that occurred while attempting to load the asset data. (`NSError`)
