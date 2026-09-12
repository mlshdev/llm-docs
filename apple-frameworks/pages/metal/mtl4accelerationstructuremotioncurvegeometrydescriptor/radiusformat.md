> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/radiusformat](https://developer.apple.com/documentation/metal/mtl4accelerationstructuremotioncurvegeometrydescriptor/radiusformat)

# radiusFormat (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the format of the radii in the radius buffer.

## Declaration

```swift
var radiusFormat: MTLAttributeFormat { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to  `MTLAttributeFormatFloat`. All keyframes share the same radius format.

# radiusFormat (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Sets the format of the radii in the radius buffer.

## Declaration

```objectivec
@property (nonatomic) MTLAttributeFormat radiusFormat;
```

<a id="discussion"></a>

## Discussion

Defaults to  `MTLAttributeFormatFloat`. All keyframes share the same radius format.
