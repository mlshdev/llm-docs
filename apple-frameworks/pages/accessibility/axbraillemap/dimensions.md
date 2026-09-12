> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accessibility/axbraillemap/dimensions](https://developer.apple.com/documentation/accessibility/axbraillemap/dimensions)

# dimensions (Swift)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

The number of pins in each dimension of the braille display.

## Declaration

```swift
var dimensions: CGSize { get }
```

<a id="discussion"></a>

## Discussion

The dimensions can change if the user zooms in on the content.

# dimensions (Objective-C)

**Framework:** Accessibility  
**Kind:** Instance Property  
**Availability:** iOS 15.2+ · iPadOS 15.2+ · Mac Catalyst 15.2+ · macOS 12.1+ · tvOS 15.2+ · visionOS 1.0+ · watchOS 8.2+

The number of pins in each dimension of the braille display.

## Declaration

```objectivec
@property (nonatomic, readonly) CGSize dimensions;
```

<a id="discussion"></a>

## Discussion

The dimensions can change if the user zooms in on the content.
