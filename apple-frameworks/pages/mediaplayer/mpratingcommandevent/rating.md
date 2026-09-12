> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mediaplayer/mpratingcommandevent/rating](https://developer.apple.com/documentation/mediaplayer/mpratingcommandevent/rating)

# rating (Swift)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The rating for the command event.

## Declaration

```swift
var rating: Float { get }
```

<a id="Discussion"></a>

## Discussion

The `rating` property must be between the minimum and maximum ratings defined by the [maximumRating](../mpratingcommand/maximumrating.md) and [minimumRating](../mpratingcommand/minimumrating.md) properties.

# rating (Objective-C)

**Framework:** Media Player  
**Kind:** Instance Property  
**Availability:** iOS 7.1+ · iPadOS 7.1+ · Mac Catalyst 13.1+ · macOS 10.12.2+ · tvOS 7.1+ · visionOS 1.0+ · watchOS 5.0+

The rating for the command event.

## Declaration

```objectivec
@property (nonatomic, readonly) float rating;
```

<a id="Discussion"></a>

## Discussion

The `rating` property must be between the minimum and maximum ratings defined by the [maximumRating](../mpratingcommand/maximumrating.md) and [minimumRating](../mpratingcommand/minimumrating.md) properties.
