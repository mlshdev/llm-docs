> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkjshandle/sourceframe](https://developer.apple.com/documentation/webkit/wkjshandle/sourceframe)

# sourceFrame (Swift)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```swift
@NSCopying var sourceFrame: WKFrameInfo { get }
```

<a id="discussion"></a>

## Discussion

The frame from which the `WKJSHandle` originates and where it can be used.

If the `WKJSHandle` is used as an argument to JavaScript in another frame or after the indicated frame has navigated, it will be interpreted as the JavaScript value `undefined`.

# sourceFrame (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

## Declaration

```objectivec
@property (nonatomic, copy, readonly) WKFrameInfo * sourceFrame;
```

<a id="discussion"></a>

## Discussion

The frame from which the `WKJSHandle` originates and where it can be used.

If the `WKJSHandle` is used as an argument to JavaScript in another frame or after the indicated frame has navigated, it will be interpreted as the JavaScript value `undefined`.
