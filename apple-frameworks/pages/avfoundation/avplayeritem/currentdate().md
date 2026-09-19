> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avplayeritem/currentdate()

# currentDate() (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the current time of the item as a date.

## Declaration

```swift
nonisolated func currentDate() -> Date?
```

<a id="return-value"></a>

## Return Value

The current time of the item as a date, or `nil` if there isn’t a mapped date for the item.

<a id="Discussion"></a>

## Discussion

The system calculates this value from the `EXT-X-PROGRAM-DATE-TIME` tag.

## See Also

### Accessing timing information

- [currentTime()](currenttime%28%29.md): Returns the current time of the item.
- [duration](duration.md): The duration of the item.
- [timebase](timebase.md): The timebase information for the item.

# currentDate (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the current time of the item as a date.

## Declaration

```objectivec
- (NSDate *) currentDate;
```

<a id="return-value"></a>

## Return Value

The current time of the item as a date, or `nil` if there isn’t a mapped date for the item.

<a id="Discussion"></a>

## Discussion

The system calculates this value from the `EXT-X-PROGRAM-DATE-TIME` tag.

## See Also

### Accessing timing information

- [currentTime](currenttime%28%29.md): Returns the current time of the item.
- [duration](duration.md): The duration of the item.
- [timebase](timebase.md): The timebase information for the item.
