> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwparametersprovider/expensivepathsprohibited(_:)](https://developer.apple.com/documentation/network/nwparametersprovider/expensivepathsprohibited(_:))

# expensivePathsProhibited(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Prohibit using expensive paths.

## Declaration

```swift
func expensivePathsProhibited(_ prohibited: Bool) -> Self
```

## Parameters

- `prohibited`: True if expensive paths are prohibited, false otherwise.

<a id="discussion"></a>

## Discussion

Prohibit connections and listeners from using a network interface that is considered expensive by the system, for example some cellular interfaces.

## Default Implementations

### NWParametersProvider Implementations

- [expensivePathsProhibited(\_:)](expensivepathsprohibited%28__%29-53yp0.md): Prohibit using expensive paths.
