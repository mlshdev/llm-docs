> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanhandposerequest/maximumhandcount](https://developer.apple.com/documentation/vision/vndetecthumanhandposerequest/maximumhandcount)

# maximumHandCount (Swift)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The maximum number of hands to detect in an image.

## Declaration

```swift
var maximumHandCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The request orders detected hands by relative size, with only the largest ones having key points determined.

The default value is 2.

# maximumHandCount (Objective-C)

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS 1.0+

The maximum number of hands to detect in an image.

## Declaration

```objectivec
@property (assign, readwrite) NSUInteger maximumHandCount;
```

<a id="Discussion"></a>

## Discussion

The request orders detected hands by relative size, with only the largest ones having key points determined.

The default value is 2.
