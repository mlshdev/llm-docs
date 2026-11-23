> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5c9fd14c92ba; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/carplay/cpnowplayingsportsteam/possessionindicator

# possessionIndicator (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An optional image to display next to the team in possession of the ball.

## Declaration

```swift
@NSCopying var possessionIndicator: UIImage? { get }
```

<a id="discussion"></a>

## Discussion

For sports that have a concept of possession, this property stores the image to display next to the team in possession of the ball. For example, one team in American football has possession of the ball and drives toward the goal while the other team plays defense. This property can be `nil` if the sport doesn’t have the concept of possession, or if displaying an indicator doesn’t make sense.

## See Also

### Getting match-related details

- [eventScore](eventscore.md): The number of points or current score for the team.

# possessionIndicator (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

An optional image to display next to the team in possession of the ball.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) UIImage * possessionIndicator;
```

<a id="discussion"></a>

## Discussion

For sports that have a concept of possession, this property stores the image to display next to the team in possession of the ball. For example, one team in American football has possession of the ball and drives toward the goal while the other team plays defense. This property can be `nil` if the sport doesn’t have the concept of possession, or if displaying an indicator doesn’t make sense.

## See Also

### Getting match-related details

- [eventScore](eventscore.md): The number of points or current score for the team.
