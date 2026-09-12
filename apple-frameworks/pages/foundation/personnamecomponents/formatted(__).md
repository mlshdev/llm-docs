> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/personnamecomponents/formatted(_:)](https://developer.apple.com/documentation/foundation/personnamecomponents/formatted(_:))

# formatted(\_:)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

Generates a locale-aware string representation of an instance of person name components using the provided format style.

## Declaration

```swift
func formatted<S>(_ style: S) -> S.FormatOutput where S : FormatStyle, S.FormatInput == PersonNameComponents
```

## Parameters

- `style`: Specifies the [PersonNameComponents.FormatStyle](formatstyle.md) applied to the person name components.

<a id="return-value"></a>

## Return Value

A string, formatted according to the provided style.

<a id="Discussion"></a>

## Discussion

Use the [formatted(\_:)](formatted%28__%29.md) method to create a string representation of a person’s name with a customized length for specific uses. You can use the [PersonNameComponents.FormatStyle](formatstyle.md) static factory method [name(style:)](../formatstyle/name%28style_%29.md) to create a custom format style as a parameter to the method.

For example:

```swift
var tlc = PersonNameComponents()
tlc.familyName = "Clark"
tlc.givenName = "Thomas"
tlc.middleName = "Louis"
tlc.namePrefix = "Dr."
tlc.nickname = "Tom"
tlc.nameSuffix = "Esq."

tlc.formatted(.name(style: .long))
// Dr. Thomas Louis Clark Esq.

tlc.formatted(.name(style: .medium))
// Thomas Clark

tlc.formatted(.name(style: .short))
// Tom

tlc.formatted(.name(style: .abbreviated))
// TC
```

## See Also

### Formatting Person Name Components

- [formatted()](formatted%28%29.md): Generates a locale-aware string representation of an instance of person name components using the default format style.
- [PersonNameComponents.FormatStyle](formatstyle.md): A type used to format a person’s name with a style appropriate for the given locale.
