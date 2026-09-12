> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchy/invalidate()](https://developer.apple.com/documentation/browserenginekit/layerhierarchy/invalidate())

# invalidate() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Invalidates a layer hierarchy.

## Declaration

```swift
func invalidate()
```

## Mentioned In

- [Hosting browser view layers in the rendering extension](../hosting-browser-view-layers-in-the-rendering-extension.md)

<a id="discussion"></a>

## Discussion

When you call this method, the layer hierarchy is no longer of use. Communicate with your browser app process to remove the related hosting view ([LayerHierarchyHostingView](../layerhierarchyhostingview.md)) from its superview.

## See Also

### Creating and invalidating a layer hierarchy

- [init()](init%28%29.md): Initializes a layer hierarchy.

# invalidate (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Instance Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Invalidates a layer hierarchy.

## Declaration

```objectivec
- (void) invalidate;
```

## Mentioned In

- [Hosting browser view layers in the rendering extension](../hosting-browser-view-layers-in-the-rendering-extension.md)

<a id="discussion"></a>

## Discussion

When you call this method, the layer hierarchy is no longer of use. Communicate with your browser app process to remove the related hosting view ([BELayerHierarchyHostingView](../layerhierarchyhostingview.md)) from its superview.

## See Also

### Creating and invalidating a layer hierarchy

- [layerHierarchyWithError:](init%28%29.md): Initializes a layer hierarchy.
