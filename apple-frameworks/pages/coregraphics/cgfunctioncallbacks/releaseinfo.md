> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgfunctioncallbacks/releaseinfo](https://developer.apple.com/documentation/coregraphics/cgfunctioncallbacks/releaseinfo)

# releaseInfo (Swift)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

If non-`NULL`,the callback used to release the `info` parameterpassed to [init(info:domainDimension:domain:rangeDimension:range:callbacks:)](../cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md).

## Declaration

```swift
var releaseInfo: CGFunctionReleaseInfoCallback?
```

## See Also

### Instance Properties

- [evaluate](evaluate.md): The callback that evaluates the function.
- [version](version.md): The structure version number. For this structure,the version should be `0`.

# releaseInfo (Objective-C)

**Framework:** Core Graphics  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

If non-`NULL`,the callback used to release the `info` parameterpassed to [CGFunctionCreate](../cgfunction/init%28info_domaindimension_domain_rangedimension_range_callbacks_%29.md).

## Declaration

```objectivec
CGFunctionReleaseInfoCallback releaseInfo;
```

## See Also

### Instance Properties

- [evaluate](evaluate.md): The callback that evaluates the function.
- [version](version.md): The structure version number. For this structure,the version should be `0`.
