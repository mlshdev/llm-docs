> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/homekit/hmerror/invalidvaluetype](https://developer.apple.com/documentation/homekit/hmerror/invalidvaluetype)

# invalidValueType

**Framework:** HomeKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · tvOS 10.0+ · visionOS 1.0+ · watchOS 2.0+

An attempt to use an invalid value type.

## Declaration

```swift
static var invalidValueType: HMError.Code { get }
```

## See Also

### Detecting value errors

- [invalidDataFormatSpecified](invaliddataformatspecified.md): An error indicating an invalid data format was specified.
- [nameContainsProhibitedCharacters](namecontainsprohibitedcharacters.md): An attempt to name an object with prohibited characters.
- [nameDoesNotEndWithValidCharacters](namedoesnotendwithvalidcharacters.md): An error indicating the provided name has invalid characters at the end.
- [nameDoesNotStartWithValidCharacters](namedoesnotstartwithvalidcharacters.md): An attempt to start the name of an object with invalid characters.
- [stringLongerThanMaximum](stringlongerthanmaximum.md): An attempt to use a string longer than the maximum allowed.
- [stringShorterThanMinimum](stringshorterthanminimum.md): An attempt to use a string shorter than the required minimum.
- [valueHigherThanMaximum](valuehigherthanmaximum.md): An attempt to use a numeric value higher than the specified maximum value.
- [valueLowerThanMinimum](valuelowerthanminimum.md): An attempt to use a numeric value lower than the specified minimum value.
