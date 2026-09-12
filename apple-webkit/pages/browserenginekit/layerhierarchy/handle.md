> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchy/handle](https://developer.apple.com/documentation/browserenginekit/layerhierarchy/handle)

# handle (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A reference to the layer hierarchy that you add to the hosting view.

## Declaration

```swift
var handle: LayerHierarchyHandle { get }
```

<a id="discussion"></a>

## Discussion

Get the handle in your extension process, then use XPC to send it to the browser app. In the browser app, add the handle to a [LayerHierarchyHostingView](../layerhierarchyhostingview.md).

# handle (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

A reference to the layer hierarchy that you add to the hosting view.

## Declaration

```objectivec
@property (nonatomic, strong, readonly) BELayerHierarchyHandle * handle;
```

<a id="discussion"></a>

## Discussion

Get the handle in your extension process, then use XPC to send it to the browser app. In the browser app, add the handle to a [BELayerHierarchyHostingView](../layerhierarchyhostingview.md).
