> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avplayerinterstitialevent/assetlistresponse](https://developer.apple.com/documentation/avfoundation/avplayerinterstitialevent/assetlistresponse)

# assetListResponse (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The asset list JSON response as a dictionary.

## Declaration

```swift
var assetListResponse: [AnyHashable : any Sendable]? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if there is no asset list loaded for the event. If this value is `nil` and the event’s [templateItems](templateitems.md) is empty, then an asset list read is expected. If this value is `nil` and [templateItems](templateitems.md) isn’t empty, an asset list read isn’t expected.

# assetListResponse (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.4+ · iPadOS 16.4+ · Mac Catalyst 16.4+ · macOS 13.3+ · tvOS 16.4+ · visionOS 1.0+ · watchOS 9.4+

The asset list JSON response as a dictionary.

## Declaration

```objectivec
@property (readonly, nullable) NSDictionary * assetListResponse;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if there is no asset list loaded for the event. If this value is `nil` and the event’s [templateItems](templateitems.md) is empty, then an asset list read is expected. If this value is `nil` and [templateItems](templateitems.md) isn’t empty, an asset list read isn’t expected.
