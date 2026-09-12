> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchy/layer](https://developer.apple.com/documentation/browserenginekit/layerhierarchy/layer)

# layer (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The layer represented by this layer hierarchy.

## Declaration

```swift
var layer: CALayer? { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to the root layer of the hierarchy that you host in a [LayerHierarchyHostingView](../layerhierarchyhostingview.md) in the browser app.

# layer (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Property  
**Availability:** iOS 17.4+ · iPadOS 17.4+

The layer represented by this layer hierarchy.

## Declaration

```objectivec
@property (nonatomic, strong, nullable) CALayer * layer;
```

<a id="discussion"></a>

## Discussion

Set this property to the root layer of the hierarchy that you host in a [BELayerHierarchyHostingView](../layerhierarchyhostingview.md) in the browser app.
