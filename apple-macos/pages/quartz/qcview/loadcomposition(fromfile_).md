> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qcview/loadcomposition(fromfile:)](https://developer.apple.com/documentation/quartz/qcview/loadcomposition(fromfile:))

# loadComposition(fromFile:) (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Loads the composition file located at the specified path.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func loadComposition(fromFile path: String!) -> Bool
```

## Parameters

- `path`: A string that specifies the location of a Quartz Composer composition file.

<a id="return-value"></a>

## Return Value

If unsuccessful, returns [false](https://developer.apple.com/documentation/swift/false); any composition that’s already loaded in the view remains loaded.

## See Also

### Loading a Composition

- [load(\_:)](load%28__%29.md): Deprecated. Loads a [QCComposition](../qccomposition.md) object into the view.
- [loadedComposition()](loadedcomposition%28%29.md): Deprecated. Returns the composition loaded in the view.
- [unloadComposition()](unloadcomposition%28%29.md): Deprecated. Unloads the composition from the view.

# loadCompositionFromFile: (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Loads the composition file located at the specified path.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (BOOL) loadCompositionFromFile:(NSString *) path;
```

## Parameters

- `path`: A string that specifies the location of a Quartz Composer composition file.

<a id="return-value"></a>

## Return Value

If unsuccessful, returns [false](https://developer.apple.com/documentation/swift/false); any composition that’s already loaded in the view remains loaded.

## See Also

### Loading a Composition

- [loadComposition:](load%28__%29.md): Deprecated. Loads a [QCComposition](../qccomposition.md) object into the view.
- [loadedComposition](loadedcomposition%28%29.md): Deprecated. Returns the composition loaded in the view.
- [unloadComposition](unloadcomposition%28%29.md): Deprecated. Unloads the composition from the view.
