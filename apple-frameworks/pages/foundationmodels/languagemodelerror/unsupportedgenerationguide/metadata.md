> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedgenerationguide/metadata

# metadata

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Additional information about the failure, keyed by name.

## Declaration

```swift
var metadata: [String : any Sendable]
```

## See Also

### Inspecting unsupported generation guide errors

- [schemaName](schemaname.md): The name of the schema whose generation guide isn’t supported, if any.
- [debugDescription](debugdescription.md): A debug description to help developers diagnose issues during development.
