> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/loadedcomposition()](https://developer.apple.com/documentation/quartz/qcview/loadedcomposition())

# loadedComposition() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the composition loaded in the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func loadedComposition() -> QCComposition!
```

<a id="return-value"></a>

## Return Value

The composition loaded in the view; otherwise `nil`.

## See Also

### Loading a Composition

- [loadComposition(fromFile:)](loadcomposition%28fromfile_%29.md): Deprecated. Loads the composition file located at the specified path.
- [load(\_:)](load%28__%29.md): Deprecated. Loads a [QCComposition](../qccomposition.md) object into the view.
- [unloadComposition()](unloadcomposition%28%29.md): Deprecated. Unloads the composition from the view.

# loadedComposition (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the composition loaded in the view.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (QCComposition *) loadedComposition;
```

<a id="return-value"></a>

## Return Value

The composition loaded in the view; otherwise `nil`.

## See Also

### Loading a Composition

- [loadCompositionFromFile:](loadcomposition%28fromfile_%29.md): Deprecated. Loads the composition file located at the specified path.
- [loadComposition:](load%28__%29.md): Deprecated. Loads a [QCComposition](../qccomposition.md) object into the view.
- [unloadComposition](unloadcomposition%28%29.md): Deprecated. Unloads the composition from the view.
