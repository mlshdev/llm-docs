> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avmetadatamachinereadablecodeobject/stringvalue](https://developer.apple.com/documentation/avfoundation/avmetadatamachinereadablecodeobject/stringvalue)

# stringValue (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 9.0+

Returns the error-corrected data decoded into a human-readable string.

## Declaration

```swift
var stringValue: String? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is an `NSString` created by decoding the binary payload according to the format of the machine-readable code, or `nil` if a string representation cannot be created.

## See Also

### Getting machine-readable code values

- [corners](corners-58qbe.md): A Swift array of corner points.
- [descriptor](descriptor.md): A barcode description for use in Core Image.

# stringValue (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 9.0+

Returns the error-corrected data decoded into a human-readable string.

## Declaration

```objectivec
@property (readonly, nullable) NSString * stringValue;
```

<a id="Discussion"></a>

## Discussion

The value of this property is an `NSString` created by decoding the binary payload according to the format of the machine-readable code, or `nil` if a string representation cannot be created.

## See Also

### Getting machine-readable code values

- [corners](corners-8f6bv.md): The points defining the (x, y) locations of the corners.
- [descriptor](descriptor.md): A barcode description for use in Core Image.
