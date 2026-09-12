> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/fileprovider/nsfileprovideruserinteractionsuppressing/setinteractionsuppressed(_:foridentifier:)](https://developer.apple.com/documentation/fileprovider/nsfileprovideruserinteractionsuppressing/setinteractionsuppressed(_:foridentifier:))

# setInteractionSuppressed(\_:forIdentifier:) (Swift)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Tells the File Provider extension that the user wants to suppress the user interaction.

## Declaration

```swift
func setInteractionSuppressed(_ suppression: Bool, forIdentifier suppressionIdentifier: String)
```

## Parameters

- `suppression`: A Boolean value that indicates whether the user wants to suppress the specified user interaction.
- `suppressionIdentifier`: A unique identifier for the user interaction.

## See Also

### Supressing Interactions

- [isInteractionSuppressed(forIdentifier:)](isinteractionsuppressed%28foridentifier_%29.md): Asks the File Provider extension if the user suppressed the specified interaction.

# setInteractionSuppressed:forIdentifier: (Objective-C)

**Framework:** File Provider  
**Kind:** Instance Method  
**Availability:** macOS 12.0+

Tells the File Provider extension that the user wants to suppress the user interaction.

## Declaration

```objectivec
- (void) setInteractionSuppressed:(BOOL) suppression forIdentifier:(NSString *) suppressionIdentifier;
```

## Parameters

- `suppression`: A Boolean value that indicates whether the user wants to suppress the specified user interaction.
- `suppressionIdentifier`: A unique identifier for the user interaction.

## See Also

### Supressing Interactions

- [isInteractionSuppressedForIdentifier:](isinteractionsuppressed%28foridentifier_%29.md): Asks the File Provider extension if the user suppressed the specified interaction.
