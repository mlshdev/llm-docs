> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/intentresolutionresult/notrequired-data.dictionary

# IntentResolutionResult.NotRequired

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

An empty object that indicates the intent doesn’t include a value for this parameter, but the server can proceed without one.

## Declaration

```
object IntentResolutionResult.NotRequired
```

## See Also

### Providing a Generic Result

- [IntentResolutionResult.NeedsValue](needsvalue-data.dictionary.md): An empty object that indicates the service must have a value for this parameter, but the intent doesn’t include one.
- [IntentResolutionResult.Unsupported](unsupported-data.dictionary.md): An empty object that indicates the server doesn’t support this parameter.
