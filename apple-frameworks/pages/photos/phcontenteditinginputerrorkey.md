> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photos/phcontenteditinginputerrorkey](https://developer.apple.com/documentation/photos/phcontenteditinginputerrorkey)

# PHContentEditingInputErrorKey (Swift)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

An error that occurred while attempting to load the asset data. (`NSError`)

## Declaration

```swift
let PHContentEditingInputErrorKey: String
```

<a id="Discussion"></a>

## Discussion

Photos provides an error object for this key if it cannot provide asset data for your handler block’s `contentEditingInput` parameter. Examine the error object for information about the cause of the error.

## See Also

### Constants

- [PHContentEditingInputResultIsInCloudKey](phcontenteditinginputresultisincloudkey.md): A Boolean value indicating whether the asset data is stored on the local device or must be downloaded from iCloud. (`NSNumber`)
- [PHContentEditingInputCancelledKey](phcontenteditinginputcancelledkey.md): A Boolean value indicating whether the image request was canceled. (`NSNumber`)

# PHContentEditingInputErrorKey (Objective-C)

**Framework:** Photos  
**Kind:** Global Variable  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 10.0+ · visionOS 1.0+

An error that occurred while attempting to load the asset data. (`NSError`)

## Declaration

```objectivec
extern NSString * const PHContentEditingInputErrorKey;
```

<a id="Discussion"></a>

## Discussion

Photos provides an error object for this key if it cannot provide asset data for your handler block’s `contentEditingInput` parameter. Examine the error object for information about the cause of the error.

## See Also

### Constants

- [PHContentEditingInputResultIsInCloudKey](phcontenteditinginputresultisincloudkey.md): A Boolean value indicating whether the asset data is stored on the local device or must be downloaded from iCloud. (`NSNumber`)
- [PHContentEditingInputCancelledKey](phcontenteditinginputcancelledkey.md): A Boolean value indicating whether the image request was canceled. (`NSNumber`)
