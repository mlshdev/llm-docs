> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/load(_:)](https://developer.apple.com/documentation/quartz/qcview/load(_:))

# load(\_:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Loads a [QCComposition](../qccomposition.md) object into the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func load(_ composition: QCComposition!) -> Bool
```

## Parameters

- `composition`: The [QCComposition](../qccomposition.md) object to load.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false). If unsuccessful, any composition that’s already loaded in the view remains loaded.

## See Also

### Loading a Composition

- [loadComposition(fromFile:)](loadcomposition%28fromfile_%29.md): Deprecated. Loads the composition file located at the specified path.
- [loadedComposition()](loadedcomposition%28%29.md): Deprecated. Returns the composition loaded in the view.
- [unloadComposition()](unloadcomposition%28%29.md): Deprecated. Unloads the composition from the view.

# loadComposition: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Loads a [QCComposition](../qccomposition.md) object into the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) loadComposition:(QCComposition *) composition;
```

## Parameters

- `composition`: The [QCComposition](../qccomposition.md) object to load.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if successful; otherwise [false](https://developer.apple.com/documentation/swift/false). If unsuccessful, any composition that’s already loaded in the view remains loaded.

## See Also

### Loading a Composition

- [loadCompositionFromFile:](loadcomposition%28fromfile_%29.md): Deprecated. Loads the composition file located at the specified path.
- [loadedComposition](loadedcomposition%28%29.md): Deprecated. Returns the composition loaded in the view.
- [unloadComposition](unloadcomposition%28%29.md): Deprecated. Unloads the composition from the view.
