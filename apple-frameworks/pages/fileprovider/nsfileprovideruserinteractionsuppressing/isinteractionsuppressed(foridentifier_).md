> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fileprovider/nsfileprovideruserinteractionsuppressing/isinteractionsuppressed(foridentifier:)

# isInteractionSuppressed(forIdentifier:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Asks the File Provider extension if the user suppressed the specified interaction.

## Declaration

```swift
func isInteractionSuppressed(forIdentifier suppressionIdentifier: String) -> Bool
```

## Parameters

- `suppressionIdentifier`: A unique identifier for the user interaction.

## See Also

### Supressing Interactions

- [setInteractionSuppressed(\_:forIdentifier:)](setinteractionsuppressed%28__foridentifier_%29.md): Tells the File Provider extension that the user wants to suppress the user interaction.

# isInteractionSuppressedForIdentifier: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Asks the File Provider extension if the user suppressed the specified interaction.

## Declaration

```objectivec
- (BOOL) isInteractionSuppressedForIdentifier:(NSString *) suppressionIdentifier;
```

## Parameters

- `suppressionIdentifier`: A unique identifier for the user interaction.

## See Also

### Supressing Interactions

- [setInteractionSuppressed:forIdentifier:](setinteractionsuppressed%28__foridentifier_%29.md): Tells the File Provider extension that the user wants to suppress the user interaction.
