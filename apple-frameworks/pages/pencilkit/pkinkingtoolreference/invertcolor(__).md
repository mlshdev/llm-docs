> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/pencilkit/pkinkingtoolreference/invertcolor(_:)](https://developer.apple.com/documentation/pencilkit/pkinkingtoolreference/invertcolor(_:))

# invertColor(\_:) (Swift)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** macOS 26.0+

Converts a color from light to dark appearance or vice versa.

## Declaration

```swift
class func invertColor(_ color: CGColor) -> Unmanaged<CGColor>
```

## Parameters

- `color`: The color to be inverted light\<-\>dark.

<a id="return-value"></a>

## Return Value

The inverted color.

<a id="discussion"></a>

## Discussion

This has the same effect as `convertColor` with opposite user interface styles.

# invertColor: (Objective-C)

**Framework:** PencilKit  
**Kind:** Type Method  
**Availability:** macOS 26.0+

Converts a color from light to dark appearance or vice versa.

## Declaration

```objectivec
+ (CGColorRef) invertColor:(CGColorRef) color;
```

## Parameters

- `color`: The color to be inverted light\<-\>dark.

<a id="return-value"></a>

## Return Value

The inverted color.

<a id="discussion"></a>

## Discussion

This has the same effect as `convertColor` with opposite user interface styles.
