> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctionsignature/instancing](https://developer.apple.com/documentation/metal/mtlintersectionfunctionsignature/instancing)

# instancing (Swift)

**Framework:** Metal  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A flag indicating that function signature uses instancing.

## Declaration

```swift
static var instancing: MTLIntersectionFunctionSignature { get }
```

<a id="discussion"></a>

## Discussion

The corresponding MSL function needs to contain the `instancing` tag in its declaration.

## See Also

### Specifying the intersection function signature

- [triangleData](triangledata.md): A flag indicating that function signature uses triangle data.
- [worldSpaceData](worldspacedata.md): A flag indicating that function signature uses world space data.

# MTLIntersectionFunctionSignatureInstancing (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration Case  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

A flag indicating that function signature uses instancing.

## Declaration

```objectivec
MTLIntersectionFunctionSignatureInstancing
```

<a id="discussion"></a>

## Discussion

The corresponding MSL function needs to contain the `instancing` tag in its declaration.

## See Also

### Specifying the intersection function signature

- [MTLIntersectionFunctionSignatureNone](mtlintersectionfunctionsignaturenone.md): A constant indicating that the function uses the default signature.
- [MTLIntersectionFunctionSignatureTriangleData](triangledata.md): A flag indicating that function signature uses triangle data.
- [MTLIntersectionFunctionSignatureWorldSpaceData](worldspacedata.md): A flag indicating that function signature uses world space data.
