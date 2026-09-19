> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coregraphics/cgfunctioncallbacks/evaluate

# evaluate (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback that evaluates the function.

## Declaration

```swift
var evaluate: CGFunctionEvaluateCallback?
```

## See Also

### Instance Properties

- [releaseInfo](releaseinfo.md): If non-`NULL`,the callback used to release the `info` parameterpassed to [init(info:domainDimension:domain:rangeDimension:range:callbacks:)](../cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md).
- [version](version.md): The structure version number. For this structure,the version should be `0`.

# evaluate (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The callback that evaluates the function.

## Declaration

```objectivec
CGFunctionEvaluateCallback evaluate;
```

## See Also

### Instance Properties

- [releaseInfo](releaseinfo.md): If non-`NULL`,the callback used to release the `info` parameterpassed to [CGFunctionCreate](../cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md).
- [version](version.md): The structure version number. For this structure,the version should be `0`.
