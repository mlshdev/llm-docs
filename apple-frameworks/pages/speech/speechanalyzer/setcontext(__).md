> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechanalyzer/setcontext(_:)](https://developer.apple.com/documentation/speech/speechanalyzer/setcontext(_:))

# setContext(\_:)

**Framework:** Speech  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets contextual information to improve or inform the analysis.

## Declaration

```swift
final func setContext(_ newContext: AnalysisContext) async throws
```

## Parameters

- `newContext`: A context object. This object will replace the current object.

<a id="discussion"></a>

## Discussion

Other analyzer instances may use the same context object.

## See Also

### Managing contexts

- [context](context.md): An object containing contextual information.
