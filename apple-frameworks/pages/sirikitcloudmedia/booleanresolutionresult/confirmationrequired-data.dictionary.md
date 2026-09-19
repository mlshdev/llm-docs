> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirikitcloudmedia/booleanresolutionresult/confirmationrequired-data.dictionary

# BooleanResolutionResult.ConfirmationRequired

**Interface language:** Data

**Framework:** SiriKit Cloud Media  
**Kind:** Object  
**Availability:** SiriKit Cloud Media 1.0.2+

A result that requires the user to confirm the Boolean value before proceeding.

## Declaration

```
object BooleanResolutionResult.ConfirmationRequired
```

## Properties

- `valueToConfirm` — `boolean` (required): A Boolean value for the user to confirm or reject.

## See Also

### Providing a Result

- [BooleanResolutionResult.Success](success-data.dictionary.md): A Boolean value that successfully matches the intent.
