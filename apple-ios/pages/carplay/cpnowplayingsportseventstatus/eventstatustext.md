> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/carplay/cpnowplayingsportseventstatus/eventstatustext](https://developer.apple.com/documentation/carplay/cpnowplayingsportseventstatus/eventstatustext)

# eventStatusText (Swift)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Up to three separate strings for event status may be displayed.

## Declaration

```swift
var eventStatusText: [String]? { get }
```

<a id="discussion"></a>

## Discussion

The first string should always be used to show the play period (quarter, inning, period) using as few characters as possible; e.g. “2nd” for the 2nd quarter.

The second and third strings can be used to display additional information, like “1st & 10” and “SF 15” for an American football game.

All three strings should be kept as brief as possible to ensure they display well on car screens of various sizes.

# eventStatusText (Objective-C)

**Framework:** CarPlay  
**Kind:** Instance Property  
**Availability:** iOS 18.4+ · iPadOS 18.4+ · Mac Catalyst 18.4+

Up to three separate strings for event status may be displayed.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) NSArray<NSString *> * eventStatusText;
```

<a id="discussion"></a>

## Discussion

The first string should always be used to show the play period (quarter, inning, period) using as few characters as possible; e.g. “2nd” for the 2nd quarter.

The second and third strings can be used to display additional information, like “1st & 10” and “SF 15” for an American football game.

All three strings should be kept as brief as possible to ensure they display well on car screens of various sizes.
