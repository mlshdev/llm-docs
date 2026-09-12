> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/shadergraph/math/normal-map-decode](https://developer.apple.com/documentation/shadergraph/math/normal-map-decode)

# Normal Map Decode

**Framework:** ShaderGraph  
**Kind:** ShaderGraph Node  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 26.0+ · visionOS 1.0+

Remaps a normal’s value from \[0,1\] to \[-1,1\] by applying 2x-1.

<a id="Parameter-Types"></a>

## Parameter Types

| Input | Type |
| --- | --- |
| `In` | Vector3f |

| Output | Type |
| --- | --- |
| `Out` | Vector3f |

## See Also

### Nodes

- [Add](add.md): Adds two values.
- [Subtract](subtract.md): Subtracts two values.
- [Multiply](multiply.md): Multiplies two values.
- [Divide](divide.md): Divides two values.
- [Modulo](modulo.md): Outputs the remaining fraction after dividing the input by a value and subtracting the integer portion.
- [Abs](abs.md): Outputs the per-channel absolute value of the input.
- [Floor](floor.md): Outputs the nearest integer value, per-channel, less than or equal to the incoming values.
- [Ceiling](ceiling.md): Outputs the nearest integer value, per-channel, greater than or equal to the incoming values.
- [Power](power.md): Raises the incoming value to an exponent.
- [Sin](sin.md): The sine of the incoming value in radians.
- [Cos](cos.md): The cosine of the incoming value in radians.
- [Tan](tan.md): The tangent of the incoming value in radians.
- [Asin](asin.md): The arcsine of the incoming value in radians.
- [Acos](acos.md): The arccosine of the incoming value in radians.
- [Atan2](atan2.md): The arctangent of the expression (iny/inx) in radians.
