> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insendridefeedbackintent/tip

# tip (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The tip for the driver.

## Declaration

```swift
@NSCopying var tip: INCurrencyAmount? { get set }
```

## See Also

### Identifying the Feedback

- [rating](rating.md): The user-supplied rating for the driver.

# tip (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The tip for the driver.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) INCurrencyAmount * tip;
```

```objectivec
@property (atomic, copy, readwrite, nullable) INCurrencyAmount * tip;
```

## See Also

### Identifying the Feedback

- [rating](rating.md): The user-supplied rating for the driver.
