> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/evaluations/jsonloader/init(url:)

# init(url:)

**Framework:** Evaluations  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+ · Xcode 27.0+

Creates a loader backed by the JSON or JSONL file at the given URL.

## Declaration

```swift
init(url: URL)
```

<a id="discussion"></a>

## Discussion

```swift
var dataset: JSONLoader<ModelSample<String>> {
    let url = Bundle.main.url(forResource: "samples", withExtension: "jsonl")!
    return JSONLoader(url: url)
}
```
