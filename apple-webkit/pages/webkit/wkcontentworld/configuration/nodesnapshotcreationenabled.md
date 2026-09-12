> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkcontentworld/configuration/nodesnapshotcreationenabled](https://developer.apple.com/documentation/webkit/wkcontentworld/configuration/nodesnapshotcreationenabled)

# nodeSnapshotCreationEnabled (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
var nodeSnapshotCreationEnabled: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A boolean indicating whether or not `window.webkit.createNodeSnapshot` is available.

JavaScript can call `window.webkit.createNodeSnapshot` with a return value to create a `WKDOMNodeSnapshot` object for the application to use in future JavaScript programs. Refer to the `WKDOMNodeSnapshot` documentation for more information.

# nodeSnapshotCreationEnabled (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic, getter=isNodeSnapshotCreationEnabled) BOOL nodeSnapshotCreationEnabled;
```

<a id="discussion"></a>

## Discussion

A boolean indicating whether or not `window.webkit.createNodeSnapshot` is available.

JavaScript can call `window.webkit.createNodeSnapshot` with a return value to create a `WKDOMNodeSnapshot` object for the application to use in future JavaScript programs. Refer to the `WKDOMNodeSnapshot` documentation for more information.
