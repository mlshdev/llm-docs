> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/translation/translationsession/strategy

# TranslationSession.Strategy

**Framework:** Translation  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.0+ · macOS 26.4+

The preferred model to handle translations in your app.

## Declaration

```swift
struct Strategy
```

<a id="overview"></a>

## Overview

This determines which model your app uses for translating content. The framework uses this strategy when available, or automatically selects an appropriate alternative based on device capabilities and language availability.

## Topics

### Choosing a translation strategy

- [highFidelity](strategy/highfidelity.md): A translation strategy that provides more fluent translations using Apple Intelligence.
- [lowLatency](strategy/lowlatency.md): A translation strategy that provides fast translations using traditional models.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
