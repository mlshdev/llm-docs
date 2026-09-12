> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/regexbuilder/choiceof](https://developer.apple.com/documentation/regexbuilder/choiceof)

# ChoiceOf

**Framework:** RegexBuilder  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

A regex component that chooses exactly one of its constituent regex components when matching.

## Declaration

```swift
struct ChoiceOf<Output>
```

<a id="overview"></a>

## Overview

You can use `ChoiceOf` to provide a group of regex components, each of which can be exclusively matched. In this example, `regex` successfully matches either a `"CREDIT"` or `"DEBIT"` substring:

```swift
let regex = Regex {
    ChoiceOf {
        "CREDIT"
        "DEBIT"
    }
}
let match = try regex.prefixMatch(in: "DEBIT    04032020    Payroll $69.73")
print(match?.0 as Any)
// Prints "DEBIT"
```

## Topics

### Initializers

- [init(\_:)](choiceof/init%28__%29.md): Creates a regex component that chooses exactly one of the regex components provided by the builder closure.

## Relationships

### Conforms To

- [Copyable](../swift/copyable.md)
- [Escapable](../swift/escapable.md)
- [RegexComponent](../swift/regexcomponent.md)

## See Also

### Components

- [CharacterClass](characterclass.md): A class of characters that match in a regex.
- [Anchor](anchor.md): A regex component that matches a specific condition at a particular position in an input string.
- [Lookahead](lookahead.md): A regex component that allows a match to continue only if its contents match at the given location.
- [NegativeLookahead](negativelookahead.md): A regex component that allows a match to continue only if its contents do not match at the given location.
