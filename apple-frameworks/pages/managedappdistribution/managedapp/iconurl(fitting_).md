> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/managedappdistribution/managedapp/iconurl(fitting:)](https://developer.apple.com/documentation/managedappdistribution/managedapp/iconurl(fitting:))

# iconURL(fitting:)

**Framework:** ManagedAppDistribution  
**Kind:** Instance Method  
**Availability:** iOS 17.2+ · iPadOS 17.2+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 2.4+

A URL for the icon of the app.

## Declaration

```swift
func iconURL(fitting size: CGSize) -> URL?
```

## Parameters

- `size`: The size of the icon.

<a id="return-value"></a>

## Return Value

The URL of the icon.

<a id="discussion"></a>

## Discussion

The icon scales to fit the given size.

## See Also

### Obtaining general information

- [name](name.md): The app’s localized name.
- [subtitle](subtitle.md): The app’s localized subtitle.
- [description](description.md): The app’s localized description.
- [fileSize](filesize.md): The size of the app in bytes.
- [screenshotURLs(fitting:)](screenshoturls%28fitting_%29.md): An array of the app’s screenshot URLs.
