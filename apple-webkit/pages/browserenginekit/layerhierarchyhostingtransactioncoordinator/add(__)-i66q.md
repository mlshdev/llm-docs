> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/add(_:)-i66q](https://developer.apple.com/documentation/browserenginekit/layerhierarchyhostingtransactioncoordinator/add(_:)-i66q)

# add(\_:) (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Notifies the transaction coordinator to start coordinating transactions for the given layer hierarchy.

## Declaration

```swift
@MainActor func add(_ layerHierarchy: LayerHierarchy)
```

## Parameters

- `layerHierarchy`: The object to coordinate transactions for.

<a id="discussion"></a>

## Discussion

The transaction coordinator coordinates any transactions involving layers in the `layerHierarchy` until you call [commit()](commit%28%29.md).

## See Also

### Synchronizing transactions

- [add(\_:)](add%28__%29-7day0.md): Notifies the transaction coordinator to start coordinating transactions for the given view.
- [commit()](commit%28%29.md): Notifies the render server to coordinate transactions for the added views and layer hierarchies.

# addLayerHierarchy: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Notifies the transaction coordinator to start coordinating transactions for the given layer hierarchy.

## Declaration

```objectivec
- (void) addLayerHierarchy:(BELayerHierarchy *) layerHierarchy;
```

## Parameters

- `layerHierarchy`: The object to coordinate transactions for.

<a id="discussion"></a>

## Discussion

The transaction coordinator coordinates any transactions involving layers in the `layerHierarchy` until you call [commit](commit%28%29.md).

## See Also

### Synchronizing transactions

- [addLayerHierarchyHostingView:](add%28__%29-7day0.md): Notifies the transaction coordinator to start coordinating transactions for the given view.
- [commit](commit%28%29.md): Notifies the render server to coordinate transactions for the added views and layer hierarchies.
