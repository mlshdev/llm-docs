> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/os/oslogintegerformatting/hex(explicitpositivesign:includeprefix:uppercase:)](https://developer.apple.com/documentation/os/oslogintegerformatting/hex(explicitpositivesign:includeprefix:uppercase:))

# hex(explicitPositiveSign:includePrefix:uppercase:)

**Framework:** os  
**Kind:** Type Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

Creates a custom hexidecimal format that displays the exact number of digits in the number.

## Declaration

```swift
static func hex(explicitPositiveSign: Bool = false, includePrefix: Bool = false, uppercase: Bool = false) -> OSLogIntegerFormatting
```

## Parameters

- `explicitPositiveSign`: A Boolean value that indicates whether to display a plus (`+`) sign in front of positive integers.
- `includePrefix`: A Boolean value that indicates whether to include a `0x` prefix in front of the hexidecimal value.
- `uppercase`: A Boolean value that indicates whether to uppercase numerals that are greater than 9.

<a id="return-value"></a>

## Return Value

A custom hexadecimal format for integers.

## See Also

### Creating a Custom Integer Format

- [decimal(explicitPositiveSign:)](decimal%28explicitpositivesign_%29.md): Creates a decimal format with custom handling of the numerical sign.
- [decimal(explicitPositiveSign:minDigits:)](decimal%28explicitpositivesign_mindigits_%29.md): Creates a decimal format with custom handling of the numerical sign and the minimum number of digits.
- [hex(explicitPositiveSign:includePrefix:uppercase:minDigits:)](hex%28explicitpositivesign_includeprefix_uppercase_mindigits_%29.md): Creates a custom hexidecimal format that includes a minimum number of digits.
- [octal(explicitPositiveSign:includePrefix:uppercase:)](octal%28explicitpositivesign_includeprefix_uppercase_%29.md): Creates a custom octal format that displays the exact number of digits in the number.
- [octal(explicitPositiveSign:includePrefix:uppercase:minDigits:)](octal%28explicitpositivesign_includeprefix_uppercase_mindigits_%29.md): Creates a custom octal format that includes a minimum number of digits.
