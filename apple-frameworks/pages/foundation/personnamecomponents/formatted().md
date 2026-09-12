> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponents/formatted()](https://developer.apple.com/documentation/foundation/personnamecomponents/formatted())

# formatted()

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a locale-aware string representation of an instance of person name components using the default format style.

## Declaration

```swift
func formatted() -> String
```

<a id="return-value"></a>

## Return Value

A string, formatted according to the default style.

<a id="Discussion"></a>

## Discussion

The [formatted()](formatted%28%29.md) method creates a string representation of a person’s name suitable for most uses.

```swift
var tlc = PersonNameComponents()
tlc.familyName = "Clark"
tlc.givenName = "Thomas"
tlc.middleName = "Louis"
tlc.namePrefix = "Dr."
tlc.nickname = "Tom"
tlc.nameSuffix = "Esq."

tlc.formatted()
// Thomas Clark
```

If you want more control over the length and formatting of the name string, consider using the [formatted(\_:)](formatted%28__%29.md) method and including a format style.

## See Also

### Formatting Person Name Components

- [formatted(\_:)](formatted%28__%29.md): Generates a locale-aware string representation of an instance of person name components using the provided format style.
- [PersonNameComponents.FormatStyle](formatstyle.md): A type used to format a person’s name with a style appropriate for the given locale.
