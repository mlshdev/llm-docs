> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsrefreshcontroller/isrefreshing](https://developer.apple.com/documentation/appkit/nsrefreshcontroller/isrefreshing)

# isRefreshing (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A Boolean value indicating whether a refresh operation is in progress.

## Declaration

```swift
var isRefreshing: Bool { get }
```

<a id="discussion"></a>

## Discussion

The default value of this property is `NO`. When the user triggers a refresh, this property automatically becomes `YES`. Call [endRefreshing()](endrefreshing%28%29.md) when your refresh operation completes to reset this property to `NO`.

# isRefreshing (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

A Boolean value indicating whether a refresh operation is in progress.

## Declaration

```objectivec
@property (readonly) BOOL isRefreshing;
```

<a id="discussion"></a>

## Discussion

The default value of this property is `NO`. When the user triggers a refresh, this property automatically becomes `YES`. Call [endRefreshing](endrefreshing%28%29.md) when your refresh operation completes to reset this property to `NO`.
