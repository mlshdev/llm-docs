> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwparametersprovider/constrainedpathsprohibited(_:)-5anfr

# constrainedPathsProhibited(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Prohibit using constrained paths.

## Declaration

```swift
func constrainedPathsProhibited(_ prohibited: Bool) -> Self
```

## Parameters

- `prohibited`: True if constrained paths are prohibited, false otherwise.

<a id="discussion"></a>

## Discussion

Prohibit connections and listeners from using a network interface that is considered constrained by the system, for example an interface in Low Data Mode.
