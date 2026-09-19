> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/intentresolutionresult/needsvalue-data.dictionary

# IntentResolutionResult.NeedsValue

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

An empty object that indicates the service must have a value for this parameter, but the intent doesn’t include one.

## Declaration

```
object IntentResolutionResult.NeedsValue
```

## See Also

### Providing a Generic Result

- [IntentResolutionResult.NotRequired](notrequired-data.dictionary.md): An empty object that indicates the intent doesn’t include a value for this parameter, but the server can proceed without one.
- [IntentResolutionResult.Unsupported](unsupported-data.dictionary.md): An empty object that indicates the server doesn’t support this parameter.
