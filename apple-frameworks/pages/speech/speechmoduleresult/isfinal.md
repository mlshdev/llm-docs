> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/speech/speechmoduleresult/isfinal](https://developer.apple.com/documentation/speech/speechmoduleresult/isfinal)

# isFinal

**Framework:** Speech  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Whether this result is final at the time it is produced.

## Declaration

```swift
var isFinal: Bool { get }
```

<a id="discussion"></a>

## Discussion

- If `true`, then this result is final. There will be no later result over its range.
- If `false`, then this result is volatile. There may or may not be a later result over this result’s range. In particular, there is no guarantee that this result will be reissued with this property set to `true`.

Equivalent to `resultsFinalizationTime >= range.end`.

## See Also

### Getting finalization state

- [resultsFinalizationTime](resultsfinalizationtime.md): The audio input time up to which results from this module have been finalized (after this result). The module’s results are final up to but not including this time.
