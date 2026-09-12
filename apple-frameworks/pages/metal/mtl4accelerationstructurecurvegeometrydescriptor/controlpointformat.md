> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor/controlpointformat](https://developer.apple.com/documentation/metal/mtl4accelerationstructurecurvegeometrydescriptor/controlpointformat)

# controlPointFormat (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Declares the format of the control points the control point buffer references.

## Declaration

```swift
var controlPointFormat: MTLAttributeFormat { get set }
```

<a id="discussion"></a>

## Discussion

Defaults to `MTLAttributeFormatFloat3`, representing 3 floating point values tightly packed.

# controlPointFormat (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Declares the format of the control points the control point buffer references.

## Declaration

```objectivec
@property (nonatomic) MTLAttributeFormat controlPointFormat;
```

<a id="discussion"></a>

## Discussion

Defaults to `MTLAttributeFormatFloat3`, representing 3 floating point values tightly packed.
