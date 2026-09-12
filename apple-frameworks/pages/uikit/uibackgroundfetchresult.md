> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uibackgroundfetchresult](https://developer.apple.com/documentation/uikit/uibackgroundfetchresult)

# UIBackgroundFetchResult (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that indicate the result of a background fetch operation.

## Declaration

```swift
enum UIBackgroundFetchResult
```

## Topics

### Constants

- [UIBackgroundFetchResult.newData](uibackgroundfetchresult/newdata.md): New data was successfully downloaded.
- [UIBackgroundFetchResult.noData](uibackgroundfetchresult/nodata.md): There was no new data to download.
- [UIBackgroundFetchResult.failed](uibackgroundfetchresult/failed.md): An attempt to download data was made but that attempt failed.

### Initializers

- [init(rawValue:)](uibackgroundfetchresult/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Downloading data in the background

- [application(\_:handleEventsForBackgroundURLSession:completionHandler:)](uiapplicationdelegate/application%28__handleeventsforbackgroundurlsession_completionhandler_%29.md): Tells the delegate that events related to a URL session are waiting to be processed.

# UIBackgroundFetchResult (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Constants that indicate the result of a background fetch operation.

## Declaration

```objectivec
enum UIBackgroundFetchResult : NSUInteger;
```

## Topics

### Constants

- [UIBackgroundFetchResultNewData](uibackgroundfetchresult/newdata.md): New data was successfully downloaded.
- [UIBackgroundFetchResultNoData](uibackgroundfetchresult/nodata.md): There was no new data to download.
- [UIBackgroundFetchResultFailed](uibackgroundfetchresult/failed.md): An attempt to download data was made but that attempt failed.

## See Also

### Downloading data in the background

- [application:handleEventsForBackgroundURLSession:completionHandler:](uiapplicationdelegate/application%28__handleeventsforbackgroundurlsession_completionhandler_%29.md): Tells the delegate that events related to a URL session are waiting to be processed.
