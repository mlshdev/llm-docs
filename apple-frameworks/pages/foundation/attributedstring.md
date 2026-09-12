> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/attributedstring](https://developer.apple.com/documentation/foundation/attributedstring)

# AttributedString

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

A value type for a string with associated attributes for portions of its text.

## Declaration

```swift
@dynamicMemberLookup struct AttributedString
```

<a id="overview"></a>

## Overview

Attributed strings are character strings that have attributes for individual characters or ranges of characters. Attributes provide traits like visual styles for display, accessibility for guided access, and hyperlink data for linking between data sources. Attribute keys provide the name and value type of each attribute. System frameworks like Foundation and SwiftUI define common keys, and you can define your own in custom extensions.

<a id="String-Attributes"></a>

### String Attributes

You can apply an attribute to an entire string, or to a range within the string. The string represents each range with consistent attributes as a *run*.

[AttributedString](attributedstring.md) uses subscripts and dynamic member lookup to simplify working with attributes from your call points. In its most verbose form, you set an attribute by creating an [AttributeContainer](attributecontainer.md) and merging it into an existing attributed string, like this:

```swift
var attributedString = AttributedString("This is a string with empty attributes.")
var container = AttributeContainer()
container[AttributeScopes.AppKitAttributes.ForegroundColorAttribute.self] = .red
attributedString.mergeAttributes(container, mergePolicy: .keepNew)
```

Using the attributed string’s [subscript(\_:)](attributedstringprotocol/subscript%28__%29-4thnp.md) method, you can omit the explicit use of an [AttributeContainer](attributecontainer.md) and just set the attribute by its type:

```swift
attributedString[AttributeScopes.AppKitAttributes.ForegroundColorAttribute.self] = .yellow
```

Because an [AttributedString](attributedstring.md) supports dynamic member lookup — as described under [Attributes](https://docs.swift.org/swift-book/ReferenceManual/Attributes.html) in [The Swift Programming Language](https://docs.swift.org/swift-book/) — you can access its subscripts with dot syntax instead. When combined with properties like [foregroundColor](attributescopes/appkitattributes/foregroundcolor.md) that return the attribute key type, this final form offers a natural way to set an attribute that applies to an entire string:

```swift
attributedString.foregroundColor = .green
```

This example works because AppKit defines an [AttributeScope](attributescope.md), [AttributeScopes.AppKitAttributes](attributescopes/appkitattributes.md), in which the property [foregroundColor](attributescopes/appkitattributes/foregroundcolor.md) returns the type `AttributeScopes.AppKitAttributes.ForegroundColorAttribute`. Because AppKit’s attribute scope implements [AttributeDynamicLookup](attributedynamiclookup.md), the dot syntax resolves to an equivalent subscript expression, allowing `attributedString.foregroundColor` to replace `attributedString[AttributeScopes.AppKitAttributes.ForegroundColorAttribute.self]`.

You can also set an attribute to apply only to part of an attributed string, by applying the attribute to a range, as seen here:

```swift
var attributedString = AttributedString("The first month of your subscription is free.")
guard let range = attributedString.range(of: "free") else {return}
attributedString[range].foregroundColor = .green
```

You can access portions of the string with unique combinations of attributes by iterating over the string’s [runs](attributedstring/runs-swift.property.md) property.

You can define your own custom attributes by creating types that conform to [AttributedStringKey](attributedstringkey.md), and collecting them in an [AttributeScope](attributescope.md). Custom keys should also extend [AttributeDynamicLookup](attributedynamiclookup.md), so callers can use dot-syntax to access the attribute.

<a id="Creating-Attributed-Strings-with-Markdown"></a>

### Creating Attributed Strings with Markdown

You can create an attributed string by passing a standard [String](https://developer.apple.com/documentation/swift/string) or [Data](data.md) instance that contains Markdown to initializers like [init(markdown:options:baseURL:)](attributedstring/init%28markdown_options_baseurl_%29-52n3u.md). The attributed string creates attributes by parsing the markup in the string.

```swift
do {
    let thankYouString = try AttributedString(
        markdown:"**Thank you!** Please visit our [website](https://example.com)")
} catch {
    print("Couldn't parse the string. \(error.localizedDescription)")
}
```

Localized strings that you load from strings files with initializers like [init(localized:options:table:bundle:locale:comment:)](attributedstring/init%28localized_options_table_bundle_locale_comment_%29-8dlnl.md) can also contain Markdown to add styling. In addition, these localized attributed string initializers can apply the [replacementIndex](attributescopes/foundationattributes/replacementindex.md) attribute, which allows you to determine the range of replacement strings, whose order may vary between languages.

By declaring new attributes that conform to [MarkdownDecodableAttributedStringKey](markdowndecodableattributedstringkey.md), you can add attributes that you invoke by using Apple’s Markdown extension syntax: `^[text](name:value, name:value, …)`. See the sample code project [Building a Localized Food-Ordering App](building-a-localized-food-ordering-app.md) for an example of creating custom attributes and using them with Markdown.

Localized attributed strings can also use the extension syntax to indicate parts of the string where the system can apply automatic grammar agreement. See the initializers that take a `localized:` parameter for examples of this extension syntax, as used with automatic grammar agreement.

<a id="Attribute-Scopes"></a>

### Attribute Scopes

The [AttributedString](attributedstring.md) API defines keys for common uses, such as text styling, semantically marking up formattable types like dates and numbers, and hyperlinking. You can find these in the [AttributeScopes](attributescopes.md) enumeration, which contains attributes for AppKit, Foundation, SwiftUI, and UIKit.

You can define your own attributes by implementing [AttributedStringKey](attributedstringkey.md), and reference them by name by collecting them in an [AttributeScope](attributescope.md).

## Topics

### Creating an Attributed String

- [init()](attributedstring/init%28%29.md): Creates an empty attributed string.
- [init(\_:)](attributedstring/init%28__%29-8tnoq.md): Creates an attributed string from an attributed substring.
- [init(\_:attributes:)](attributedstring/init%28__attributes_%29-2a45h.md): Creates an attributed string from a string and an attribute container.
- [init(\_:attributes:)](attributedstring/init%28__attributes_%29-8jqhp.md): Creates an attributed string from a substring and an attribute container.
- [init(\_:attributes:)](attributedstring/init%28__attributes_%29-8l0iq.md): Creates an attributed string from a character sequence and an attribute container.
- [AttributeContainer](attributecontainer.md): A container for attribute keys and values.

### Creating an Attributed String from Literal Values

- [init(stringLiteral:)](attributedstring/init%28stringliteral_%29.md): Creates an attributed string from the specified string literal, with no attributes.

### Creating a Localized Attributed String

- [init(localized:options:table:bundle:locale:comment:)](attributedstring/init%28localized_options_table_bundle_locale_comment_%29-8dlnl.md): Creates an attributed string by looking up a localized string from the app’s bundle.
- [init(localized:options:table:bundle:locale:comment:including:)](attributedstring/init%28localized_options_table_bundle_locale_comment_including_%29-8uknv.md): Creates an attributed string by looking up a localized string from the app’s bundle, including an attribute scope.
- [init(localized:options:table:bundle:locale:comment:including:)](attributedstring/init%28localized_options_table_bundle_locale_comment_including_%29-5jzpg.md): Creates an attributed string by looking up a localized string from the app’s bundle, including an attribute scope that a key path identifies.
- [String.LocalizationValue](https://developer.apple.com/documentation/swift/string/localizationvalue): A reference to a localizable string, with optional string interpolation.
- [AttributedString.FormattingOptions](attributedstring/formattingoptions.md): Options that affect the handling of attributes.
- [init(localized:)](attributedstring/init%28localized_%29.md): Creates a localized attributed string from a localized string resource.
- [init(localized:including:)](attributedstring/init%28localized_including_%29-2xebo.md): Creates a localized attributed string from a localized string resource, including an attribute scope.
- [init(localized:including:)](attributedstring/init%28localized_including_%29-15xc5.md): Creates a localized attributed string from a localized string resource, including an attribute scope that a key path identifies.
- [LocalizedStringResource](localizedstringresource.md): A reference to a localizable string, accessible from another process.

### Creating a Localized Attributed String with a Default Value

- [init(localized:defaultValue:options:table:bundle:locale:comment:)](attributedstring/init%28localized_defaultvalue_options_table_bundle_locale_comment_%29-4n8e2.md): Creates an attributed string by looking up a localized string from the app’s bundle, using a default value if necessary.
- [init(localized:defaultValue:options:table:bundle:locale:comment:including:)](attributedstring/init%28localized_defaultvalue_options_table_bundle_locale_comment_including_%29-2elmp.md): Creates an attributed string by looking up a localized string from the app’s bundle, including an attribute scope, using a default value if necessary.
- [init(localized:defaultValue:options:table:bundle:locale:comment:including:)](attributedstring/init%28localized_defaultvalue_options_table_bundle_locale_comment_including_%29-9gjtg.md): Creates an attributed string by looking up a localized string from the app’s bundle, including an attribute scope that a key path identifies, using a default value if necessary.

### Creating an Attributed String from Markdown

Use Markdown syntax to initialize an attributed string with text and attributes.

- [Instantiating Attributed Strings with Markdown Syntax](instantiating-attributed-strings-with-markdown-syntax.md): Use a Markdown-syntax string to iniitalize an attributed string with standard or custom attributes.

### Creating an Attributed String from a Reference Type

- [init(\_:including:)](attributedstring/init%28__including_%29-9no47.md): Creates a value-type attributed string from a reference type, including an attribute scope.
- [init(\_:including:)](attributedstring/init%28__including_%29-puv0.md): Creates a value-type attributed string from a reference type, including an attribute scope that a key path identifies.
- [init(\_:)](attributedstring/init%28__%29-1fru0.md): Creates a value-type attributed string from a reference type.

### Creating a Duplicate Attributed String

- [init(\_:including:)](attributedstring/init%28__including_%29-6u3ho.md): Creates an attributed string from another attributed string, including an attribute scope.
- [init(\_:including:)](attributedstring/init%28__including_%29-9ejyj.md): Creates an attributed string from another attributed string, including an attribute scope that a key path identifies.

### Applying and Modifying Attributes

- [setAttributes(\_:)](attributedstring/setattributes%28__%29.md): Sets the attributed string’s attributes to those in a specified attribute container.
- [mergeAttributes(\_:mergePolicy:)](attributedstring/mergeattributes%28__mergepolicy_%29.md): Merges the attributed string’s attributes with those in a specified attribute container.
- [AttributedString.AttributeMergePolicy](attributedstring/attributemergepolicy.md): An enumeration of behaviors to apply when merging attributes.
- [replaceAttributes(\_:with:)](attributedstring/replaceattributes%28__with_%29.md): Replaces occurrences of attributes in one attribute container with those in another attribute container.
- [AttributedStringAttributeMutation](attributedstringattributemutation.md): A protocol that defines in-place mutations for attributes in an attributed string.

### Using Defined Attributes

- [AttributeScopes](attributescopes.md): Collections of attributes that system frameworks define.
- [AttributeDynamicLookup](attributedynamiclookup.md): A type to support dynamic member lookup of attributes and containers.
- [ScopedAttributeContainer](scopedattributecontainer.md): An attribute container that allows dynamic member lookup of its contents within the specified attribute scope.

### Accessing a Range

- [subscript(\_:)](attributedstring/subscript%28__%29-2vqsz.md): Returns a substring of the attributed string using a range to indicate the substring bounds.

### Accessing Indices

- [Accessing Indicies Within an Attributed String](accessing-indicies-within-an-attributed-string.md): Access a position within an attributed string, offset from the beginning, or before or after another known position.

### Accessing Views into the Attributed String

- [characters](attributedstring/characters.md): The characters of the attributed string, as a view into the underlying string.
- [AttributedString.CharacterView](attributedstring/characterview.md): A view into the underlying storage of the attributed string, as Unicode characters.
- [unicodeScalars](attributedstring/unicodescalars.md): The Unicode scalars of the attributed string, as a view into the underlying string.
- [AttributedString.UnicodeScalarView](attributedstring/unicodescalarview.md): A view into the underlying storage of the attributed string, as Unicode scalars.
- [runs](attributedstring/runs-swift.property.md): The attributed runs of the attributed string, as a view into the underlying string.
- [AttributedString.Runs](attributedstring/runs-swift.struct.md): An iterable view into segments of the attributed string, each of which indicates where a run of identical attributes begins or ends.

### Modifying an Attributed String

- [insert(\_:at:)](attributedstring/insert%28__at_%29.md): Inserts the specified string at a specific index in the attributed string.
- [AttributedString.Index](attributedstring/index.md): A type that represents the position of a character or code unit within an attributed string.
- [removeSubrange(\_:)](attributedstring/removesubrange%28__%29.md): Removes a range of characters from the attributed string.
- [replaceSubrange(\_:with:)](attributedstring/replacesubrange%28__with_%29.md): Replaces the contents in a range of the attributed string.

### Transforming Attributes

- [transformingAttributes(\_:\_:)](attributedstring/transformingattributes%28____%29-9prm2.md): Returns an attributed string by calling a closure that transforms one attribute of a source attributed string.
- [transformingAttributes(\_:\_:)](attributedstring/transformingattributes%28____%29-64qnl.md): Returns an attributed string by calling a closure that transforms one attribute, which a key path identifies, of a source attributed string.
- [transformingAttributes(\_:\_:\_:)](attributedstring/transformingattributes%28______%29-7kw1o.md): Returns an attributed string by calling a closure that transforms two attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:)](attributedstring/transformingattributes%28______%29-8gt2n.md): Returns an attributed string created by calling a closure that transforms two attributes, which key paths identify, of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:)](attributedstring/transformingattributes%28________%29-4owv7.md): Returns an attributed string by calling a closure that transforms three attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:)](attributedstring/transformingattributes%28________%29-5xmlf.md): Returns an attributed string by calling a closure that transforms three attributes, which key paths identify, of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:)](attributedstring/transformingattributes%28__________%29-9uodg.md): Returns an attributed string by calling a closure that transforms four attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:)](attributedstring/transformingattributes%28__________%29-all0.md): Returns an attributed string created by calling a closure that transforms four attributes, which key paths identify, of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:\_:)](attributedstring/transformingattributes%28____________%29-3i7ac.md): Returns an attributed string created by calling a closure that transforms five attributes of a source attributed string.
- [transformingAttributes(\_:\_:\_:\_:\_:\_:)](attributedstring/transformingattributes%28____________%29-9hppo.md): Returns an attributed string created by calling a closure that transforms five attributes, which key paths identify, of a source attributed string.
- [AttributedString.SingleAttributeTransformer](attributedstring/singleattributetransformer.md): A type that transforms an attribute by altering its range or value, or by replacing it entirely.

### Accessing Whole-String Attributes

- [subscript(dynamicMember:)](attributedstring/subscript%28dynamicmember_%29-34zdf.md): Returns an attribute value that a key path indicates.
- [AttributeDynamicLookup](attributedynamiclookup.md): A type to support dynamic member lookup of attributes and containers.
- [subscript(dynamicMember:)](attributedstring/subscript%28dynamicmember_%29-9modq.md): Returns a scoped attribute container that a key path indicates.
- [ScopedAttributeContainer](scopedattributecontainer.md): An attribute container that allows dynamic member lookup of its contents within the specified attribute scope.

### Combining Attributed Strings

- [append(\_:)](attributedstring/append%28__%29.md): Appends a string to the attributed string.
- [+(\_:\_:)](attributedstring/+%28____%29-8sbsq.md): Concatenates two attributed strings.
- [+(\_:\_:)](attributedstring/+%28____%29-drfc.md): Concatenates two attributed strings or substrings.
- [+=(\_:\_:)](attributedstring/+=%28____%29-4dk88.md): Appends an attributed string to another attributed string.
- [+=(\_:\_:)](attributedstring/+=%28____%29-6yimu.md): Appends an attributed string or substring to another attributed string.

### Performing Automatic Grammar Agreement

- [inflected()](attributedstring/inflected%28%29.md): Applies automatic grammar agreement inflection rules to the attributed string and returns the result.

### Performing String Interpolation

- [AttributedString.InterpolationOptions](attributedstring/interpolationoptions.md): Options that affect the behavior of string interpolation on the attributed string.

### Encoding and Decoding

- [AttributeScopeCodableConfiguration](attributescopecodableconfiguration.md): A configuration type for encoding and decoding attributed strings.
- [Encoding and Decoding Attributed String Keys](encoding-and-decoding-attributed-string-keys.md): Protocols adopted by attribute keys to encode or decode data.

### Supporting types

- [DiscontiguousAttributedSubstring](discontiguousattributedsubstring.md): A discontiguous portion of an attributed string.

### Structures

- [AttributedString.AdaptiveImageGlyph](attributedstring/adaptiveimageglyph.md)
- [AttributedString.AttributeInvalidationCondition](attributedstring/attributeinvalidationcondition.md)
- [AttributedString.LineHeight](attributedstring/lineheight.md): The line height definition of a paragraph.
- [AttributedString.LocalizationOptions](attributedstring/localizationoptions.md): Configuration options for the localization of text.
- [AttributedString.MarkdownSourcePosition](attributedstring/markdownsourceposition.md): The position of attributed string text in its original Markdown source string.
- [AttributedString.UTF16View](attributedstring/utf16view.md): A view of an attributed string’s contents as a collection of UTF-16 code units.
- [AttributedString.UTF8View](attributedstring/utf8view.md): A view of an attributed string’s contents as a collection of UTF-8 code units.

### Initializers

- [init(\_:)](attributedstring/init%28__%29-83wi.md): Creates an attributed string from a discontiguous attributed substring.
- [init(localized:defaultValue:options:table:bundle:locale:comment:)](attributedstring/init%28localized_defaultvalue_options_table_bundle_locale_comment_%29-2nmk8.md)
- [init(localized:defaultValue:options:table:bundle:locale:comment:including:)](attributedstring/init%28localized_defaultvalue_options_table_bundle_locale_comment_including_%29-6qaoe.md)
- [init(localized:defaultValue:options:table:bundle:locale:comment:including:)](attributedstring/init%28localized_defaultvalue_options_table_bundle_locale_comment_including_%29-iisj.md)
- [init(localized:options:)](attributedstring/init%28localized_options_%29.md)
- [init(localized:options:including:)](attributedstring/init%28localized_options_including_%29-3dycp.md)
- [init(localized:options:including:)](attributedstring/init%28localized_options_including_%29-4cbfv.md)
- [init(localized:options:table:bundle:locale:comment:)](attributedstring/init%28localized_options_table_bundle_locale_comment_%29-1w4s.md)
- [init(localized:options:table:bundle:locale:comment:including:)](attributedstring/init%28localized_options_table_bundle_locale_comment_including_%29-3zy6h.md)
- [init(localized:options:table:bundle:locale:comment:including:)](attributedstring/init%28localized_options_table_bundle_locale_comment_including_%29-8ao6x.md)
- [init(transferable:in:)](attributedstring/init%28transferable_in_%29.md): Extract an attributed string from SwiftUI’s transferable representation in a certain environment.

### Instance Methods

- [inflected(locale:userTermOfAddress:inflectionConcepts:)](attributedstring/inflected%28locale_usertermofaddress_inflectionconcepts_%29.md): Process automatic grammar agreement and formatting attributes.
- [rangeOfAudioTimeRangeAttributes(intersecting:)](attributedstring/rangeofaudiotimerangeattributes%28intersecting_%29.md): Returns the range of the attributed string that is within the given time range.
- [removeSubranges(\_:)](attributedstring/removesubranges%28__%29.md): Removes the elements at the given indices.
- [replaceSelection(\_:with:)](attributedstring/replaceselection%28__with_%29.md): Replace the selection with new attributed content.
- [replaceSelection(\_:withCharacters:)](attributedstring/replaceselection%28__withcharacters_%29.md): Replace the selection with new content, attributed with the typing attributes.
- [transform(updating:body:)](attributedstring/transform%28updating_body_%29-1b6eb.md): Tracks the location of the provided range throughout the mutation closure, updating the provided range to one that represents the same effective locations after the mutation.
- [transform(updating:body:)](attributedstring/transform%28updating_body_%29-3j625.md): Tracks the location of the provided ranges throughout the mutation closure, updating them to new ranges that represent the same effective locations after the mutation.
- [transform(updating:body:)](attributedstring/transform%28updating_body_%29-79te9.md): Tracks the location of the provided range throughout the mutation closure, returning a new, updated range that represents the same effective locations after the mutation.
- [transform(updating:body:)](attributedstring/transform%28updating_body_%29-89r96.md): Tracks the location of the provided ranges throughout the mutation closure, returning a new, updated range that represents the same effective locations after the mutation
- [transform(updating:body:)](attributedstring/transform%28updating_body_%29-9wpg2.md): Tracks the location of the selection throughout the mutation closure, updating the selection so it represents the same effective locations after the mutation.
- [transformAttributes(in:body:)](attributedstring/transformattributes%28in_body_%29.md): Apply a change to the attributes in the entire selection.

### Subscripts

- [subscript(\_:)](attributedstring/subscript%28__%29-2yypq.md): Obtain the discontiguous substring of a selection.
- [subscript(\_:)](attributedstring/subscript%28__%29-ftoi.md): Returns a discontiguous substring of this discontiguous attributed string using a set of ranges to indicate the discontiguous substring bounds.

### Type Aliases

- [AttributedString.Specification](attributedstring/specification.md)
- [AttributedString.UnwrappedType](attributedstring/unwrappedtype.md)
- [AttributedString.ValueType](attributedstring/valuetype.md)

### Type Properties

- [defaultResolverSpecification](attributedstring/defaultresolverspecification.md)

### Enumerations

- [AttributedString.AttributeRunBoundaries](attributedstring/attributerunboundaries.md)
- [AttributedString.TextAlignment](attributedstring/textalignment.md): The explicit alignment of text within its container.
- [AttributedString.WritingDirection](attributedstring/writingdirection.md): The writing direction of a piece of text.

### Default Implementations

- [AttributedStringAttributeMutation Implementations](attributedstring/attributedstringattributemutation-implementations.md)
- [AttributedStringProtocol Implementations](attributedstring/attributedstringprotocol-implementations.md)
- [ExpressibleByStringLiteral Implementations](attributedstring/expressiblebystringliteral-implementations.md)
- [IntentValueConvertible Implementations](attributedstring/intentvalueconvertible-implementations.md)

## Relationships

### Conforms To

- [AttributedStringAttributeMutation](attributedstringattributemutation.md)
- [AttributedStringProtocol](attributedstringprotocol.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [DecodableWithConfiguration](decodablewithconfiguration.md)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [EncodableWithConfiguration](encodablewithconfiguration.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [ExpressibleByExtendedGraphemeClusterLiteral](https://developer.apple.com/documentation/swift/expressiblebyextendedgraphemeclusterliteral)
- [ExpressibleByStringLiteral](https://developer.apple.com/documentation/swift/expressiblebystringliteral)
- [ExpressibleByUnicodeScalarLiteral](https://developer.apple.com/documentation/swift/expressiblebyunicodescalarliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [IntentValueConvertible](../appintents/intentvalueconvertible.md)
- [IntentValueExpressing](../appintents/intentvalueexpressing.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transferable](../coretransferable/transferable.md)

## See Also

### Strings with Metadata

- [AttributedSubstring](attributedsubstring.md): A portion of an attributed string.
- [Attributed String Supporting Types](attributed-string-supporting-types.md): Types that the attributed string, attributed substring, and helper types extend or conform to, for sharing common functionality.
- [NSAttributedString](nsattributedstring.md): A string of text that manages data, layout, and stylistic information for ranges of characters to support rendering.
- [NSMutableAttributedString](nsmutableattributedstring.md): A mutable string with associated attributes (such as visual style, hyperlinks, or accessibility data) for portions of its text.
