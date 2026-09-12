> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/devicemanagement/osupdatestatusresponse/osupdatestatusitem](https://developer.apple.com/documentation/devicemanagement/osupdatestatusresponse/osupdatestatusitem)

# OSUpdateStatusResponse.OSUpdateStatusItem

**Interface language:** Data

**Framework:** Device Management  
**Kind:** Device Management Command  
**Availability:** iOS 9.0+ (deprecated in 26.0) · iPadOS 9.0+ (deprecated in 26.0) · Mac Catalyst 9.0+ (deprecated in 26.0) · macOS 10.11.5+ (deprecated in 26.0) · tvOS 12.0+ (deprecated in 26.0)

A dictionary that describes the status of a software update.

> **Removed** Use the declarative management software update features instead.

## Declaration

```
object OSUpdateStatusResponse.OSUpdateStatusItem
```

## Properties

- `DeferralsRemaining` — `integer`: ~~The number of remaining user deferrals for this OS update.~~

  ~~Available: macOS 12.3+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `DownloadPercentComplete` — `number` (required): ~~A floating-point number between `0.0` and `1.0` that indicates the download progress as a percentage.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `IsDownloaded` — `boolean` (required): ~~If `true`, the update has finished downloading.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `MaxDeferrals` — `integer`: ~~The number of times a user can defer this OS update.~~

  ~~Available: macOS 12.3+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `NextScheduledInstall` — `date`: ~~The date of the next attempt at installing this OS update.~~

  ~~Available: macOS 12.3+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `PastNotifications` — `[date]`: ~~The dates/times when the OS notified the user about installing this OS update.~~

  ~~Available: macOS 12.3+~~
  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `ProductKey` — `string` (required): ~~The product key that represents the update.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+
- `Status` — `string` (required): ~~The status of the update, which is one of the following values:~~

  ~~\- `Idle`: The update is idle.~~ ~~\- `Downloading`: The software update is downloading and subsequently preparing.~~ ~~\- `Installing`: The software update is installing.~~

  ~~Deprecated: iOS 26+ | iPadOS 26+ | macOS 26+ | tvOS 26+~~
  Removed: iOS 27+ | iPadOS 27+ | macOS 27+ | tvOS 27+

## See Also

### Objects

- [OSUpdateStatusResponse.ErrorChainItem](errorchainitem.md): Deprecated. A dictionary that describes an error chain item.
