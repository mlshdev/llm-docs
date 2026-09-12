> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsimage/matchesonlyonbestfittingaxis](https://developer.apple.com/documentation/appkit/nsimage/matchesonlyonbestfittingaxis)

# matchesOnlyOnBestFittingAxis (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the image matches only on the best fitting axis.

## Declaration

```swift
var matchesOnlyOnBestFittingAxis: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the image is drawn only on the best fitting axis; otherwise, [false](https://developer.apple.com/documentation/swift/false). This property defaults to [false](https://developer.apple.com/documentation/swift/false).

NSImage has always tried to use a representation with at least as many pixels as the destination rectangle. Many apps try to implement banners and 3 part / 9 part images by stretching an NSImage over a much larger area (usually only on a single axis).

With the addition of 2x assets these apps are finding this policy displays the 2x image rep when they would prefer the 1x rep. This behavior can be changed by using this method.

> **Note**

>  It is still preferable to use the [NSDrawThreePartImage(\_:\_:\_:\_:\_:\_:\_:\_:)](../nsdrawthreepartimage%28________________%29.md) and [NSDrawNinePartImage(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](../nsdrawninepartimage%28__________________________%29.md), functions when possible.

# matchesOnlyOnBestFittingAxis (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

A Boolean value that indicates whether the image matches only on the best fitting axis.

## Declaration

```objectivec
@property BOOL matchesOnlyOnBestFittingAxis;
```

<a id="Discussion"></a>

## Discussion

[true](https://developer.apple.com/documentation/swift/true) if the image is drawn only on the best fitting axis; otherwise, [false](https://developer.apple.com/documentation/swift/false). This property defaults to [false](https://developer.apple.com/documentation/swift/false).

NSImage has always tried to use a representation with at least as many pixels as the destination rectangle. Many apps try to implement banners and 3 part / 9 part images by stretching an NSImage over a much larger area (usually only on a single axis).

With the addition of 2x assets these apps are finding this policy displays the 2x image rep when they would prefer the 1x rep. This behavior can be changed by using this method.

> **Note**

>  It is still preferable to use the [NSDrawThreePartImage](../nsdrawthreepartimage%28________________%29.md) and [NSDrawNinePartImage](../nsdrawninepartimage%28__________________________%29.md), functions when possible.
