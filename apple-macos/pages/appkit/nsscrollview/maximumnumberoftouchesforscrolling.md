> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscrollview/maximumnumberoftouchesforscrolling](https://developer.apple.com/documentation/appkit/nsscrollview/maximumnumberoftouchesforscrolling)

# maximumNumberOfTouchesForScrolling (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The maximum number of touches needed for scrolling

## Declaration

```swift
var maximumNumberOfTouchesForScrolling: Int { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to 0 to require exactly `minimumNumberOfTouchesForScrolling` touches to recognize the gesture. Defaults to `NSIntegerMax`.

# maximumNumberOfTouchesForScrolling (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The maximum number of touches needed for scrolling

## Declaration

```objectivec
@property NSInteger maximumNumberOfTouchesForScrolling;
```

<a id="discussion"></a>

## Discussion

Set this property to 0 to require exactly `minimumNumberOfTouchesForScrolling` touches to recognize the gesture. Defaults to `NSIntegerMax`.
