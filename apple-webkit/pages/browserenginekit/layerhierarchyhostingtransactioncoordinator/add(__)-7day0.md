> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/add(_:)-7day0](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/add(_:)-7day0)

# add(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Notifies the transaction coordinator to start coordinating transactions for the given view.

## Declaration

```swift
@MainActor func add(_ hostingView: LayerHierarchyHostingView)
```

## Parameters

- `hostingView`: The view to coordinate transactions for.

<a id="discussion"></a>

## Discussion

The transaction coordinator coordinates any transactions involving `hostingView` until you call [commit()](commit%28%29.md).

## See Also

### Synchronizing transactions

- [add(\_:)](add%28__%29-i66q.md): Notifies the transaction coordinator to start coordinating transactions for the given layer hierarchy.
- [commit()](commit%28%29.md): Notifies the render server to coordinate transactions for the added views and layer hierarchies.

# addLayerHierarchyHostingView: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Notifies the transaction coordinator to start coordinating transactions for the given view.

## Declaration

```objectivec
- (void) addLayerHierarchyHostingView:(BELayerHierarchyHostingView *) hostingView;
```

## Parameters

- `hostingView`: The view to coordinate transactions for.

<a id="discussion"></a>

## Discussion

The transaction coordinator coordinates any transactions involving `hostingView` until you call [commit](commit%28%29.md).

## See Also

### Synchronizing transactions

- [addLayerHierarchy:](add%28__%29-i66q.md): Notifies the transaction coordinator to start coordinating transactions for the given layer hierarchy.
- [commit](commit%28%29.md): Notifies the render server to coordinate transactions for the added views and layer hierarchies.
