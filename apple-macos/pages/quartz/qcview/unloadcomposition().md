> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/unloadcomposition()](https://developer.apple.com/documentation/quartz/qcview/unloadcomposition())

# unloadComposition() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Unloads the composition from the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func unloadComposition()
```

<a id="Discussion"></a>

## Discussion

If necessary, this method calls [stopRendering()](stoprendering%28%29.md)  prior to unloading the composition.

## See Also

### Loading a Composition

- [loadComposition(fromFile:)](loadcomposition%28fromfile_%29.md): Deprecated. Loads the composition file located at the specified path.
- [load(\_:)](load%28__%29.md): Deprecated. Loads a [QCComposition](../qccomposition.md) object into the view.
- [loadedComposition()](loadedcomposition%28%29.md): Deprecated. Returns the composition loaded in the view.

# unloadComposition (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Unloads the composition from the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (void) unloadComposition;
```

<a id="Discussion"></a>

## Discussion

If necessary, this method calls [stopRendering](stoprendering%28%29.md)  prior to unloading the composition.

## See Also

### Loading a Composition

- [loadCompositionFromFile:](loadcomposition%28fromfile_%29.md): Deprecated. Loads the composition file located at the specified path.
- [loadComposition:](load%28__%29.md): Deprecated. Loads a [QCComposition](../qccomposition.md) object into the view.
- [loadedComposition](loadedcomposition%28%29.md): Deprecated. Returns the composition loaded in the view.
