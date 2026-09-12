> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/bundleresources/entitlements/com.apple.developer.sensitivecontentanalysis.client](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.developer.sensitivecontentanalysis.client)

# com.apple.developer.sensitivecontentanalysis.client

**Interface languages:** Swift, Objective-C

**Framework:** Bundle Resources  
**Kind:** Property List Key  
**Availability:** iOS 17.0+ · iPadOS 17.0+

A code-signing entitlement that enables an app to detect nudity in images and video.

## Details

`com.apple.developer.sensitivecontentanalysis.client`

## Possible Values

- `analysis`:

<a id="Discussion"></a>

## Discussion

The [Sensitive Content Analysis](../../sensitivecontentanalysis.md) framework fails to return positive results for apps that lack this entitlement in its code signature.

You can add this entitlement to your app by enabling the Sensitive Content Analysis capability in Xcode. For more information, see [Detecting sensitive content in media and providing intervention options](../../sensitivecontentanalysis/detecting-nudity-in-media-and-providing-intervention-options.md).
