> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/arrayloader/init(samples:)

# init(samples:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a loader backed by the given array of samples.

## Declaration

```swift
init(samples: [Sample])
```

<a id="discussion"></a>

## Discussion

```swift
let loader = ArrayLoader(samples: [
    ModelSample(prompt: "Is 7 a prime number?", expected: true),
])
```
