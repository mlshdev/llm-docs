> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uitableviewcontenthuggingelements](https://developer.apple.com/documentation/uikit/uitableviewcontenthuggingelements)

# UITableViewContentHuggingElements (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Constants that determine which types of items in a table view tightly hug their content.

## Declaration

```swift
struct UITableViewContentHuggingElements
```

## Topics

### Specifying content-hugging elements

- [sectionHeaders](uitableviewcontenthuggingelements/sectionheaders.md): A mode where section headers in the table view tightly hug their content.

### Creating a content-hugging elements structure

- [init(rawValue:)](uitableviewcontenthuggingelements/init%28rawvalue_%29.md): Creates a content-hugging elements structure.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Managing content-hugging behavior

- [contentHuggingElements](uitableview/contenthuggingelements.md): A setting that determines which type of items tightly hug their content.

# UITableViewContentHuggingElements (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

Constants that determine which types of items in a table view tightly hug their content.

## Declaration

```objectivec
enum UITableViewContentHuggingElements : NSInteger;
```

## Topics

### Specifying content-hugging elements

- [UITableViewContentHuggingElementsNone](uitableviewcontenthuggingelements/uitableviewcontenthuggingelementsnone.md): A mode where none of the items in the table view tightly hug their content.
- [UITableViewContentHuggingElementsSectionHeaders](uitableviewcontenthuggingelements/sectionheaders.md): A mode where section headers in the table view tightly hug their content.

## See Also

### Managing content-hugging behavior

- [contentHuggingElements](uitableview/contenthuggingelements.md): A setting that determines which type of items tightly hug their content.
