> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebpagepreferences/allowsjshandlecreationinpageworld](https://developer.apple.com/documentation/webkit/wkwebpagepreferences/allowsjshandlecreationinpageworld)

# allowsJSHandleCreationInPageWorld (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
var allowsJSHandleCreationInPageWorld: Bool { get set }
```

<a id="discussion"></a>

## Discussion

A boolean indicating whether `window.webkit.createJSHandle` will be available in `[WKContentWorld pageWorld]`

The default value is false.

# allowsJSHandleCreationInPageWorld (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic) BOOL allowsJSHandleCreationInPageWorld;
```

<a id="discussion"></a>

## Discussion

A boolean indicating whether `window.webkit.createJSHandle` will be available in `[WKContentWorld pageWorld]`

The default value is false.
