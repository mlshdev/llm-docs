> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreai/specializationoptions/cpuonly

# cpuOnly

**Framework:** Core AI  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Options that restrict compute to the CPU only.

## Declaration

```swift
static let cpuOnly: SpecializationOptions
```

<a id="discussion"></a>

## Discussion

The resulting specialized model only uses the CPU during inference. Because all operations support the CPU, no fallback to other compute units occurs.

## See Also

### Using preset options

- [default](default.md): Options that allow the model to use all available compute units.
