> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avdelegatingplaybackcoordinator/currentitemidentifier](https://developer.apple.com/documentation/avfoundation/avdelegatingplaybackcoordinator/currentitemidentifier)

# currentItemIdentifier (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An identifier of the current item.

## Declaration

```swift
var currentItemIdentifier: String? { get }
```

<a id="Discussion"></a>

## Discussion

The coordinator sets this value in a previous call to [transitionToItem(withIdentifier:proposingInitialTimingBasedOn:)](transitiontoitem%28withidentifier_proposinginitialtimingbasedon_%29.md).

# currentItemIdentifier (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+

An identifier of the current item.

## Declaration

```objectivec
@property (nonatomic, readonly, nullable) NSString * currentItemIdentifier;
```

<a id="Discussion"></a>

## Discussion

The coordinator sets this value in a previous call to [transitionToItemWithIdentifier:proposingInitialTimingBasedOnTimebase:](transitiontoitem%28withidentifier_proposinginitialtimingbasedon_%29.md).
