> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/languageavailability/preferredstrategy

# preferredStrategy

**Framework:** Translation  
**Kind:** Instance Property  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.0+ · macOS 26.4+

The preferred strategy of translation to check availability for.

## Declaration

```swift
var preferredStrategy: TranslationSession.Strategy { get }
```

<a id="discussion"></a>

## Discussion

Set this property to determine which translation models the framework considers when checking language availability. [lowLatency](../translationsession/strategy/lowlatency.md) checks for traditional translation models that work on all devices. [highFidelity](../translationsession/strategy/highfidelity.md) checks for Apple Intelligence models that provide more fluent translations. When Apple Intelligence is enabled, these models are already downloaded, so translation is immediately available without prompting the person to download languages.
