> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogfloatformatting/hex(explicitpositivesign:uppercase:)](https://developer.apple.com/documentation/os/oslogfloatformatting/hex(explicitpositivesign:uppercase:))

# hex(explicitPositiveSign:uppercase:)

**Framework:** os  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a custom hexadecimal format.

## Declaration

```swift
static func hex(explicitPositiveSign: Bool = false, uppercase: Bool = false) -> OSLogFloatFormatting
```

## Parameters

- `explicitPositiveSign`: A Boolean value that indicates whether to display a plus (`+`) sign in front of positive numbers.
- `uppercase`: A Boolean value that indicates whether to uppercase letters that are part of the floating-point number. In a hexidecimal number, it determines the capitalization of numerals above the number 9.

<a id="return-value"></a>

## Return Value

A custom hexadecimal format for floating-point numbers.

## See Also

### Creating a Custom Formatting Object

- [exponential(explicitPositiveSign:uppercase:)](exponential%28explicitpositivesign_uppercase_%29.md): Creates a custom exponential format with a system-determined precision value.
- [exponential(precision:explicitPositiveSign:uppercase:)](exponential%28precision_explicitpositivesign_uppercase_%29.md): Creates a custom exponential format with the specified precision value.
- [fixed(explicitPositiveSign:uppercase:)](fixed%28explicitpositivesign_uppercase_%29.md): Creates a custom fixed-point format with a system-determined precision value.
- [fixed(precision:explicitPositiveSign:uppercase:)](fixed%28precision_explicitpositivesign_uppercase_%29.md): Creates a custom fixed-point format with the specified precision value.
- [hybrid(explicitPositiveSign:uppercase:)](hybrid%28explicitpositivesign_uppercase_%29.md): Creates a custom hybrid format with a system-determined precision value.
- [hybrid(precision:explicitPositiveSign:uppercase:)](hybrid%28precision_explicitpositivesign_uppercase_%29.md): Creates a custom hybrid format with the precision value.
