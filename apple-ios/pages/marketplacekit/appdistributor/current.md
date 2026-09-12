> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/marketplacekit/appdistributor/current](https://developer.apple.com/documentation/marketplacekit/appdistributor/current)

# current

**Framework:** MarketplaceKit  
**Kind:** Type Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The source from which the app installs.

## Declaration

```swift
static var current: AppDistributor { get async throws }
```

## Mentioned In

- [Distributing your app on an alternative app marketplace](../distributing-your-app-on-an-alternative-marketplace.md)
- [Distributing your app from your website](../distributing-your-app-from-your-website.md)

<a id="discussion"></a>

## Discussion

iOS sets the value of this property to an [AppDistributor](../appdistributor.md) enumeration case that describes the running app’s manner of distribution. If your app installs from more than one source, you can implement conditional code to do something different based on the value of this property at runtime, for example, your app can display a different graphic.

For more information, see [Distributing your app on an alternative app marketplace](../distributing-your-app-on-an-alternative-marketplace.md).
