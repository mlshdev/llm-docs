> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreai/specializationoptions/default](https://developer.apple.com/documentation/coreai/specializationoptions/default)

# default

**Framework:** Core AI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Options that allow the model to use all available compute units.

## Declaration

```swift
static let `default`: SpecializationOptions
```

<a id="discussion"></a>

## Discussion

The specialization process selects the combination of compute units that minimizes inference latency.

## See Also

### Using preset options

- [cpuOnly](cpuonly.md): Options that restrict compute to the CPU only.
