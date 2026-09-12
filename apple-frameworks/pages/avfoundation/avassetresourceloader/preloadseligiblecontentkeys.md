> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetresourceloader/preloadseligiblecontentkeys](https://developer.apple.com/documentation/avfoundation/avassetresourceloader/preloadseligiblecontentkeys)

# preloadsEligibleContentKeys (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether content keys will be loaded as quickly as possible.

## Declaration

```swift
var preloadsEligibleContentKeys: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to `true` to load eligible keys. This may result in network activity. All work done as a result of setting this property to `true` is performed asynchronously.

# preloadsEligibleContentKeys (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

A Boolean value that indicates whether content keys will be loaded as quickly as possible.

## Declaration

```objectivec
@property (nonatomic) BOOL preloadsEligibleContentKeys;
```

<a id="Discussion"></a>

## Discussion

Set this property to `true` to load eligible keys. This may result in network activity. All work done as a result of setting this property to `true` is performed asynchronously.
