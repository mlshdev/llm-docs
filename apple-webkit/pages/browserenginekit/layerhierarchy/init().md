> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/browserenginekit/layerhierarchy/init()](https://developer.apple.com/documentation/browserenginekit/layerhierarchy/init())

# init() (Swift)

**Framework:** BrowserEngineKit  
**Kind:** Initializer  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Initializes a layer hierarchy.

## Declaration

```swift
init() throws
```

<a id="discussion"></a>

## Discussion

This initializer can fail and throw an error if your extension can’t establish a connection to the rendering server.

## See Also

### Creating and invalidating a layer hierarchy

- [invalidate()](invalidate%28%29.md): Invalidates a layer hierarchy.

# layerHierarchyWithError: (Objective-C)

**Framework:** BrowserEngineKit  
**Kind:** Type Method  
**Availability:** iOS 17.4+ · iPadOS 17.4+

Initializes a layer hierarchy.

## Declaration

```objectivec
+ (BELayerHierarchy *) layerHierarchyWithError:(NSError **) error;
```

## Parameters

- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="discussion"></a>

## Discussion

This initializer can fail and throw an error if your extension can’t establish a connection to the rendering server.

## See Also

### Creating and invalidating a layer hierarchy

- [invalidate](invalidate%28%29.md): Invalidates a layer hierarchy.
