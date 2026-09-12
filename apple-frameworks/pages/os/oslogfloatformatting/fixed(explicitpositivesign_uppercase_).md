> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogfloatformatting/fixed(explicitpositivesign:uppercase:)](https://developer.apple.com/documentation/os/oslogfloatformatting/fixed(explicitpositivesign:uppercase:))

# fixed(explicitPositiveSign:uppercase:)

**Framework:** os  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a custom fixed-point format with a system-determined precision value.

## Declaration

```swift
static func fixed(explicitPositiveSign: Bool = false, uppercase: Bool = false) -> OSLogFloatFormatting
```

## Parameters

- `explicitPositiveSign`: A Boolean value that indicates whether to display a plus (`+`) sign in front of positive numbers.
- `uppercase`: A Boolean value that indicates whether to uppercase letters that are part of the floating-point number. For example, it determines the capitalization of the exponent indicator `e` in the number `1.0e9`, or the letters in special values such as `NaN` and `Inf`.

<a id="return-value"></a>

## Return Value

A custom fixed-point format for floating-point numbers.

## See Also

### Creating a Custom Formatting Object

- [exponential(explicitPositiveSign:uppercase:)](exponential%28explicitpositivesign_uppercase_%29.md): Creates a custom exponential format with a system-determined precision value.
- [exponential(precision:explicitPositiveSign:uppercase:)](exponential%28precision_explicitpositivesign_uppercase_%29.md): Creates a custom exponential format with the specified precision value.
- [fixed(precision:explicitPositiveSign:uppercase:)](fixed%28precision_explicitpositivesign_uppercase_%29.md): Creates a custom fixed-point format with the specified precision value.
- [hex(explicitPositiveSign:uppercase:)](hex%28explicitpositivesign_uppercase_%29.md): Creates a custom hexadecimal format.
- [hybrid(explicitPositiveSign:uppercase:)](hybrid%28explicitpositivesign_uppercase_%29.md): Creates a custom hybrid format with a system-determined precision value.
- [hybrid(precision:explicitPositiveSign:uppercase:)](hybrid%28precision_explicitpositivesign_uppercase_%29.md): Creates a custom hybrid format with the precision value.
