> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiwritingtoolsresultoptions](https://developer.apple.com/documentation/uikit/uiwritingtoolsresultoptions)

# UIWritingToolsResultOptions (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.

## Declaration

```swift
struct UIWritingToolsResultOptions
```

<a id="overview"></a>

## Overview

When configuring a text view, specify what type of text input you want Writing Tools to deliver to your view. You can ask it to return plain text without any attributes, or you can ask it to apply relevant formatting attributes to the text. You can even encourage it to return items in a list or format them in a table.

## Topics

### Getting the output options

- [plainText](uiwritingtoolsresultoptions/plaintext.md): An option to allow only plain text without any attributes in the returned text.
- [richText](uiwritingtoolsresultoptions/richtext.md): An option to include style attributes consistent with the RTF format in the returned text.
- [list](uiwritingtoolsresultoptions/list.md): An option to allow list-style formatting in the returned text.
- [table](uiwritingtoolsresultoptions/table.md): An option to allow tabular layout attributes in the returned text.

### Initializers

- [init(rawValue:)](uiwritingtoolsresultoptions/init%28rawvalue_%29.md)

### Type Properties

- [presentationIntent](uiwritingtoolsresultoptions/presentationintent.md): implies `RichText`, `List`, and `Table`, and Writing Tools may provide text with presentation intent attributes. Writing Tools will use `NSPresentationIntent` instead of `NSTextList` and `NSTextTable` to represent lists and tables.

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

### Configuration

- [Customizing Writing Tools behavior for UIKit views](customizing-writing-tools-behavior-for-system-views.md): Modify the behavior of Writing Tools in standard iOS text views, and adjust your app’s behavior while the feature is active.
- [UIWritingToolsBehavior](uiwritingtoolsbehavior.md): Constants that specify the writing tools experience for the underlying view.

# UIWritingToolsResultOptions (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · visionOS 2.4+

Constants to specify what type of content to allow in Writing Tools suggestions or rewrites.

## Declaration

```objectivec
enum UIWritingToolsResultOptions : NSUInteger;
```

<a id="overview"></a>

## Overview

When configuring a text view, specify what type of text input you want Writing Tools to deliver to your view. You can ask it to return plain text without any attributes, or you can ask it to apply relevant formatting attributes to the text. You can even encourage it to return items in a list or format them in a table.

## Topics

### Getting the output options

- [UIWritingToolsResultPlainText](uiwritingtoolsresultoptions/plaintext.md): An option to allow only plain text without any attributes in the returned text.
- [UIWritingToolsResultRichText](uiwritingtoolsresultoptions/richtext.md): An option to include style attributes consistent with the RTF format in the returned text.
- [UIWritingToolsResultList](uiwritingtoolsresultoptions/list.md): An option to allow list-style formatting in the returned text.
- [UIWritingToolsResultTable](uiwritingtoolsresultoptions/table.md): An option to allow tabular layout attributes in the returned text.

### Enumeration Cases

- [UIWritingToolsResultDefault](uiwritingtoolsresultoptions/uiwritingtoolsresultdefault.md): System-defined behavior
- [UIWritingToolsResultPresentationIntent](uiwritingtoolsresultoptions/presentationintent.md): implies `RichText`, `List`, and `Table`, and Writing Tools may provide text with presentation intent attributes. Writing Tools will use `NSPresentationIntent` instead of `NSTextList` and `NSTextTable` to represent lists and tables.

## See Also

### Configuration

- [Customizing Writing Tools behavior for UIKit views](customizing-writing-tools-behavior-for-system-views.md): Modify the behavior of Writing Tools in standard iOS text views, and adjust your app’s behavior while the feature is active.
- [UIWritingToolsBehavior](uiwritingtoolsbehavior.md): Constants that specify the writing tools experience for the underlying view.
