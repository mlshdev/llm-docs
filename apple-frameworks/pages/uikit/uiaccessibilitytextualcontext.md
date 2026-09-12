> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiaccessibilitytextualcontext](https://developer.apple.com/documentation/uikit/uiaccessibilitytextualcontext)

# UIAccessibilityTextualContext (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe a named context that helps identify and classify the type of text inside an element.

## Declaration

```swift
struct UIAccessibilityTextualContext
```

## Topics

### Constants

- [console](uiaccessibilitytextualcontext/console.md): A constant that indicates the text appears in a console context.
- [fileSystem](uiaccessibilitytextualcontext/filesystem.md): A constant that indicates the text appears in a file-system context.
- [messaging](uiaccessibilitytextualcontext/messaging.md): A constant that indicates the text appears in a messaging context.
- [narrative](uiaccessibilitytextualcontext/narrative.md): A constant that indicates the text appears in a narrative speech context.
- [sourceCode](uiaccessibilitytextualcontext/sourcecode.md): A constant that indicates the text appears in a source-code context.
- [spreadsheet](uiaccessibilitytextualcontext/spreadsheet.md): A constant that indicates the text appears in a spreadsheet context.
- [wordProcessing](uiaccessibilitytextualcontext/wordprocessing.md): A constant that indicates the text appears in a word-processing context.

### Initializers

- [init(\_:)](uiaccessibilitytextualcontext/init%28__%29.md): Creates a textual context.
- [init(rawValue:)](uiaccessibilitytextualcontext/init%28rawvalue_%29.md): Creates a textual context with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Behaviors

- [UIAccessibilityFocus](../objectivec/uiaccessibilityfocus.md): An informal protocol that provides a way to determine whether an assistive app, such as VoiceOver, has focus on an accessible element.
- [UIAccessibilityIdentification](uiaccessibilityidentification.md): Methods that associate a unique identifier with elements in your user interface.
- [UIAccessibilityReadingContent](uiaccessibilityreadingcontent.md): Methods to implement for an object that represents content that users read, such as a book or an article.
- [UIAccessibilityContentSizeCategoryImageAdjusting](uiaccessibilitycontentsizecategoryimageadjusting.md): Methods to determine when to adjust images for different content size categories.

# UIAccessibilityTextualContext (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Constants that describe a named context that helps identify and classify the type of text inside an element.

## Declaration

```objectivec
typedef NSString * UIAccessibilityTextualContext;
```

## Topics

### Constants

- [UIAccessibilityTextualContextConsole](uiaccessibilitytextualcontext/console.md): A constant that indicates the text appears in a console context.
- [UIAccessibilityTextualContextFileSystem](uiaccessibilitytextualcontext/filesystem.md): A constant that indicates the text appears in a file-system context.
- [UIAccessibilityTextualContextMessaging](uiaccessibilitytextualcontext/messaging.md): A constant that indicates the text appears in a messaging context.
- [UIAccessibilityTextualContextNarrative](uiaccessibilitytextualcontext/narrative.md): A constant that indicates the text appears in a narrative speech context.
- [UIAccessibilityTextualContextSourceCode](uiaccessibilitytextualcontext/sourcecode.md): A constant that indicates the text appears in a source-code context.
- [UIAccessibilityTextualContextSpreadsheet](uiaccessibilitytextualcontext/spreadsheet.md): A constant that indicates the text appears in a spreadsheet context.
- [UIAccessibilityTextualContextWordProcessing](uiaccessibilitytextualcontext/wordprocessing.md): A constant that indicates the text appears in a word-processing context.

## See Also

### Behaviors

- [UIAccessibilityFocus](../objectivec/uiaccessibilityfocus.md): An informal protocol that provides a way to determine whether an assistive app, such as VoiceOver, has focus on an accessible element.
- [UIAccessibilityIdentification](uiaccessibilityidentification.md): Methods that associate a unique identifier with elements in your user interface.
- [UIAccessibilityReadingContent](uiaccessibilityreadingcontent.md): Methods to implement for an object that represents content that users read, such as a book or an article.
- [UIAccessibilityContentSizeCategoryImageAdjusting](uiaccessibilitycontentsizecategoryimageadjusting.md): Methods to determine when to adjust images for different content size categories.
