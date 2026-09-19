> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/insendridefeedbackintent/rating

# rating (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The user-supplied rating for the driver.

## Declaration

```swift
@NSCopying var rating: NSNumber? { get set }
```

## See Also

### Identifying the Feedback

- [tip](tip.md): The tip for the driver.

# rating (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The user-supplied rating for the driver.

## Declaration

```objectivec
@property (nonatomic, copy, readwrite, nullable) NSNumber * rating;
```

```objectivec
@property (atomic, copy, readwrite, nullable) NSNumber * rating;
```

## See Also

### Identifying the Feedback

- [tip](tip.md): The tip for the driver.
