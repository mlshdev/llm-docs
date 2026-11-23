> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteam/eventscore

# eventScore (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The number of points or current score for the team.

## Declaration

```swift
var eventScore: String { get }
```

<a id="discussion"></a>

## Discussion

The amount of text CarPlay can show depends on the available space, but is typically no more than three to five characters.

## See Also

### Getting match-related details

- [possessionIndicator](possessionindicator.md): An optional image to display next to the team in possession of the ball.

# eventScore (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

The number of points or current score for the team.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * eventScore;
```

<a id="discussion"></a>

## Discussion

The amount of text CarPlay can show depends on the available space, but is typically no more than three to five characters.

## See Also

### Getting match-related details

- [possessionIndicator](possessionindicator.md): An optional image to display next to the team in possession of the ball.
