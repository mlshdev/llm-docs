> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mediaplayer/mpratingcommand/minimumrating

# minimumRating (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The minimum rating for a command.

## Declaration

```swift
var minimumRating: Float { get set }
```

<a id="Discussion"></a>

## Discussion

The `minimumRating` property must be less than the [maximumRating](maximumrating.md) property.

## See Also

### Defining maximum and minimum ratings

- [maximumRating](maximumrating.md): The maximum rating for a command.

# minimumRating (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The minimum rating for a command.

## Declaration

```objectivec
@property (nonatomic, assign) float minimumRating;
```

<a id="Discussion"></a>

## Discussion

The `minimumRating` property must be less than the [maximumRating](maximumrating.md) property.

## See Also

### Defining maximum and minimum ratings

- [maximumRating](maximumrating.md): The maximum rating for a command.
