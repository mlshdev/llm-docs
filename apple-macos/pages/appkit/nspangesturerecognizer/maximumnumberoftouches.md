> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspangesturerecognizer/maximumnumberoftouches](https://developer.apple.com/documentation/appkit/nspangesturerecognizer/maximumnumberoftouches)

# maximumNumberOfTouches (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The maximum number of touches allowed to recognize this gesture

## Declaration

```swift
var maximumNumberOfTouches: Int { get set }
```

<a id="discussion"></a>

## Discussion

Set this property to 0 to require exactly `minimumNumberOfTouches` touches to recognize the gesture. Defaults to `NSIntegerMax`.

## See Also

### Setting the number of touches

- [minimumNumberOfTouches](minimumnumberoftouches.md): The minimum number of touches needed to recognize this gesture

# maximumNumberOfTouches (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The maximum number of touches allowed to recognize this gesture

## Declaration

```objectivec
@property NSInteger maximumNumberOfTouches;
```

<a id="discussion"></a>

## Discussion

Set this property to 0 to require exactly `minimumNumberOfTouches` touches to recognize the gesture. Defaults to `NSIntegerMax`.

## See Also

### Setting the number of touches

- [minimumNumberOfTouches](minimumnumberoftouches.md): The minimum number of touches needed to recognize this gesture
