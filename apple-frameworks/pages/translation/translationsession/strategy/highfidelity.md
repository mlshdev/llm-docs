> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/translation/translationsession/strategy/highfidelity](https://developer.apple.com/documentation/translation/translationsession/strategy/highfidelity)

# highFidelity

**Framework:** Translation  
**Kind:** Type Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.0+ · macOS 26.4+

A translation strategy that provides more fluent translations using Apple Intelligence.

## Declaration

```swift
static let highFidelity: TranslationSession.Strategy
```

<a id="discussion"></a>

## Discussion

Use this strategy for higher-quality translations on devices with Apple Intelligence enabled. The models are already downloaded when Apple Intelligence is enabled, so no additional language downloads are required. This strategy offers higher-quality translations and supports additional languages, but may take longer to complete than [lowLatency](lowlatency.md). On devices without Apple Intelligence, it falls back to the traditional models used by `lowLatency`.

## See Also

### Choosing a translation strategy

- [lowLatency](lowlatency.md): A translation strategy that provides fast translations using traditional models.
