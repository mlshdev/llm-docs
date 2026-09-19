> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvuikit/tvcollectionviewfullscreenlayout/istransitioningtocenterindexpath

# isTransitioningToCenterIndexPath (Swift)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

A Boolean value that indicates whether the cell is changing index paths.

## Declaration

```swift
var isTransitioningToCenterIndexPath: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Use this property to determine whether the cell is changing focus to another cell.

## See Also

### Managing transitions

- [parallaxFactor](parallaxfactor.md): A value that specifies how slowly the background should move relative to the foreground.

# transitioningToCenterIndexPath (Objective-C)

**Framework:** TVUIKit  
**Kind:** Instance Property  
**Availability:** tvOS 13.0+

A Boolean value that indicates whether the cell is changing index paths.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isTransitioningToCenterIndexPath) BOOL transitioningToCenterIndexPath;
```

<a id="Discussion"></a>

## Discussion

Use this property to determine whether the cell is changing focus to another cell.

## See Also

### Managing transitions

- [parallaxFactor](parallaxfactor.md): A value that specifies how slowly the background should move relative to the foreground.
