> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctionsignature/triangledata](https://developer.apple.com/documentation/metal/mtlintersectionfunctionsignature/triangledata)

# triangleData (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A flag indicating that function signature uses triangle data.

## Declaration

```swift
static var triangleData: MTLIntersectionFunctionSignature { get }
```

<a id="discussion"></a>

## Discussion

The corresponding MSL function needs to contain the `triangle_data` tag in its declaration.

## See Also

### Specifying the intersection function signature

- [instancing](instancing.md): A flag indicating that function signature uses instancing.
- [worldSpaceData](worldspacedata.md): A flag indicating that function signature uses world space data.

# MTLIntersectionFunctionSignatureTriangleData (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A flag indicating that function signature uses triangle data.

## Declaration

```objectivec
MTLIntersectionFunctionSignatureTriangleData
```

<a id="discussion"></a>

## Discussion

The corresponding MSL function needs to contain the `triangle_data` tag in its declaration.

## See Also

### Specifying the intersection function signature

- [MTLIntersectionFunctionSignatureNone](mtlintersectionfunctionsignaturenone.md): A constant indicating that the function uses the default signature.
- [MTLIntersectionFunctionSignatureInstancing](instancing.md): A flag indicating that function signature uses instancing.
- [MTLIntersectionFunctionSignatureWorldSpaceData](worldspacedata.md): A flag indicating that function signature uses world space data.
