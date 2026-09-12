> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkjshandle/contentworld](https://developer.apple.com/documentation/webkit/wkjshandle/contentworld)

# contentWorld (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
weak var contentWorld: WKContentWorld? { get }
```

<a id="discussion"></a>

## Discussion

The world in which the `WKJSHandle` can be used.

If the `WKJSHandle` is used in another world it will be interpreted as the JavaScript value `undefined`.

# contentWorld (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic, weak, readonly) WKContentWorld * contentWorld;
```

<a id="discussion"></a>

## Discussion

The world in which the `WKJSHandle` can be used.

If the `WKJSHandle` is used in another world it will be interpreted as the JavaScript value `undefined`.
