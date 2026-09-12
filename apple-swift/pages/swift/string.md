> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/string](https://developer.apple.com/documentation/swift/string)

# String

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A Unicode string value that is a collection of characters.

## Declaration

```swift
@frozen struct String
```

<a id="overview"></a>

## Overview

A string is a series of characters, such as `"Swift"`, that forms a collection. Strings in Swift are Unicode correct and locale insensitive, and are designed to be efficient. The `String` type bridges with the Objective-C class `NSString` and offers interoperability with C functions that work with strings.

You can create new strings using string literals or string interpolations. A *string literal* is a series of characters enclosed in quotes.

```swift
let greeting = "Welcome!"
```

*String interpolations* are string literals that evaluate any included expressions and convert the results to string form. String interpolations give you an easy way to build a string from multiple pieces. Wrap each expression in a string interpolation in parentheses, prefixed by a backslash.

```swift
let name = "Rosa"
let personalizedGreeting = "Welcome, \(name)!"
// personalizedGreeting == "Welcome, Rosa!"

let price = 2
let number = 3
let cookiePrice = "\(number) cookies: $\(price * number)."
// cookiePrice == "3 cookies: $6."
```

Combine strings using the concatenation operator (`+`).

```swift
let longerGreeting = greeting + " We're glad you're here!"
// longerGreeting == "Welcome! We're glad you're here!"
```

Multiline string literals are enclosed in three double quotation marks (`"""`), with each delimiter on its own line. Indentation is stripped from each line of a multiline string literal to match the indentation of the closing delimiter.

```swift
let banner = """
          __,
         (           o  /) _/_
          `.  , , , ,  //  /
        (___)(_(_/_(_ //_ (__
                     /)
                    (/
        """
```

<a id="Modifying-and-Comparing-Strings"></a>

## Modifying and Comparing Strings

Strings always have value semantics. Modifying a copy of a string leaves the original unaffected.

```swift
var otherGreeting = greeting
otherGreeting += " Have a nice time!"
// otherGreeting == "Welcome! Have a nice time!"

print(greeting)
// Prints "Welcome!"
```

Comparing strings for equality using the equal-to operator (`==`) or a relational operator (like `<` or `>=`) is always performed using Unicode canonical representation. As a result, different representations of a string compare as being equal.

```swift
let cafe1 = "Cafe\u{301}"
let cafe2 = "Café"
print(cafe1 == cafe2)
// Prints "true"
```

The Unicode scalar value `"\u{301}"` modifies the preceding character to include an accent, so `"e\u{301}"` has the same canonical representation as the single Unicode scalar value `"é"`.

Basic string operations are not sensitive to locale settings, ensuring that string comparisons and other operations always have a single, stable result, allowing strings to be used as keys in `Dictionary` instances and for other purposes.

<a id="Accessing-String-Elements"></a>

## Accessing String Elements

A string is a collection of *extended grapheme clusters*, which approximate human-readable characters. Many individual characters, such as “é”, “김”, and “🇮🇳”, can be made up of multiple Unicode scalar values. These scalar values are combined by Unicode’s boundary algorithms into extended grapheme clusters, represented by the Swift `Character` type. Each element of a string is represented by a `Character` instance.

For example, to retrieve the first word of a longer string, you can search for a space and then create a substring from a prefix of the string up to that point:

```swift
let name = "Marie Curie"
let firstSpace = name.firstIndex(of: " ") ?? name.endIndex
let firstName = name[..<firstSpace]
// firstName == "Marie"
```

The `firstName` constant is an instance of the `Substring` type—a type that represents substrings of a string while sharing the original string’s storage. Substrings present the same interface as strings.

```swift
print("\(name)'s first name has \(firstName.count) letters.")
// Prints "Marie Curie's first name has 5 letters."
```

<a id="Accessing-a-Strings-Unicode-Representation"></a>

## Accessing a String’s Unicode Representation

If you need to access the contents of a string as encoded in different Unicode encodings, use one of the string’s `unicodeScalars`, `utf16`, or `utf8` properties. Each property provides access to a view of the string as a series of code units, each encoded in a different Unicode encoding.

To demonstrate the different views available for every string, the following examples use this `String` instance:

```swift
let cafe = "Cafe\u{301} du 🌍"
print(cafe)
// Prints "Café du 🌍"
```

The `cafe` string is a collection of the nine characters that are visible when the string is displayed.

```swift
print(cafe.count)
// Prints "9"
print(Array(cafe))
// Prints "["C", "a", "f", "é", " ", "d", "u", " ", "🌍"]"
```

<a id="Unicode-Scalar-View"></a>

## Unicode Scalar View

A string’s `unicodeScalars` property is a collection of Unicode scalar values, the 21-bit codes that are the basic unit of Unicode. Each scalar value is represented by a `Unicode.Scalar` instance and is equivalent to a UTF-32 code unit.

```swift
print(cafe.unicodeScalars.count)
// Prints "10"
print(Array(cafe.unicodeScalars))
// Prints "["C", "a", "f", "e", "\u{0301}", " ", "d", "u", " ", "\u{0001F30D}"]"
print(cafe.unicodeScalars.map { $0.value })
// Prints "[67, 97, 102, 101, 769, 32, 100, 117, 32, 127757]"
```

The `unicodeScalars` view’s elements comprise each Unicode scalar value in the `cafe` string. In particular, because `cafe` was declared using the decomposed form of the `"é"` character, `unicodeScalars` contains the scalar values for both the letter `"e"` (101) and the accent character `"´"` (769).

<a id="UTF-16-View"></a>

## UTF-16 View

A string’s `utf16` property is a collection of UTF-16 code units, the 16-bit encoding form of the string’s Unicode scalar values. Each code unit is stored as a `UInt16` instance.

```swift
print(cafe.utf16.count)
// Prints "11"
print(Array(cafe.utf16))
// Prints "[67, 97, 102, 101, 769, 32, 100, 117, 32, 55356, 57101]"
```

The elements of the `utf16` view are the code units for the string when encoded in UTF-16. These elements match those accessed through indexed `NSString` APIs.

```swift
let nscafe = cafe as NSString
print(nscafe.length)
// Prints "11"
print(nscafe.character(at: 3))
// Prints "101"
```

<a id="UTF-8-View"></a>

## UTF-8 View

A string’s `utf8` property is a collection of UTF-8 code units, the 8-bit encoding form of the string’s Unicode scalar values. Each code unit is stored as a `UInt8` instance.

```swift
print(cafe.utf8.count)
// Prints "14"
print(Array(cafe.utf8))
// Prints "[67, 97, 102, 101, 204, 129, 32, 100, 117, 32, 240, 159, 140, 141]"
```

The elements of the `utf8` view are the code units for the string when encoded in UTF-8. This representation matches the one used when `String` instances are passed to C APIs.

```swift
let cLength = strlen(cafe)
print(cLength)
// Prints "14"
```

<a id="Measuring-the-Length-of-a-String"></a>

## Measuring the Length of a String

When you need to know the length of a string, you must first consider what you’ll use the length for. Are you measuring the number of characters that will be displayed on the screen, or are you measuring the amount of storage needed for the string in a particular encoding? A single string can have greatly differing lengths when measured by its different views.

For example, an ASCII character like the capital letter *A* is represented by a single element in each of its four views. The Unicode scalar value of *A* is `65`, which is small enough to fit in a single code unit in both UTF-16 and UTF-8.

```swift
let capitalA = "A"
print(capitalA.count)
// Prints "1"
print(capitalA.unicodeScalars.count)
// Prints "1"
print(capitalA.utf16.count)
// Prints "1"
print(capitalA.utf8.count)
// Prints "1"
```

On the other hand, an emoji flag character is constructed from a pair of Unicode scalar values, like `"\u{1F1F5}"` and `"\u{1F1F7}"`. Each of these scalar values, in turn, is too large to fit into a single UTF-16 or UTF-8 code unit. As a result, each view of the string `"🇵🇷"` reports a different length.

```swift
let flag = "🇵🇷"
print(flag.count)
// Prints "1"
print(flag.unicodeScalars.count)
// Prints "2"
print(flag.utf16.count)
// Prints "4"
print(flag.utf8.count)
// Prints "8"
```

To check whether a string is empty, use its `isEmpty` property instead of comparing the length of one of the views to `0`. Unlike with `isEmpty`, calculating a view’s `count` property requires iterating through the elements of the string.

<a id="Accessing-String-View-Elements"></a>

## Accessing String View Elements

To find individual elements of a string, use the appropriate view for your task. For example, to retrieve the first word of a longer string, you can search the string for a space and then create a new string from a prefix of the string up to that point.

```swift
let name = "Marie Curie"
let firstSpace = name.firstIndex(of: " ") ?? name.endIndex
let firstName = name[..<firstSpace]
print(firstName)
// Prints "Marie"
```

Strings and their views share indices, so you can access the UTF-8 view of the `name` string using the same `firstSpace` index.

```swift
print(Array(name.utf8[..<firstSpace]))
// Prints "[77, 97, 114, 105, 101]"
```

Note that an index into one view may not have an exact corresponding position in another view. For example, the `flag` string declared above comprises a single character, but is composed of eight code units when encoded as UTF-8. The following code creates constants for the first and second positions in the `flag.utf8` view. Accessing the `utf8` view with these indices yields the first and second code UTF-8 units.

```swift
let firstCodeUnit = flag.startIndex
let secondCodeUnit = flag.utf8.index(after: firstCodeUnit)
// flag.utf8[firstCodeUnit] == 240
// flag.utf8[secondCodeUnit] == 159
```

When used to access the elements of the `flag` string itself, however, the `secondCodeUnit` index does not correspond to the position of a specific character. Instead of only accessing the specific UTF-8 code unit, that index is treated as the position of the character at the index’s encoded offset. In the case of `secondCodeUnit`, that character is still the flag itself.

```swift
// flag[firstCodeUnit] == "🇵🇷"
// flag[secondCodeUnit] == "🇵🇷"
```

If you need to validate that an index from one string’s view corresponds with an exact position in another view, use the index’s `samePosition(in:)` method or the `init(_:within:)` initializer.

```swift
if let exactIndex = secondCodeUnit.samePosition(in: flag) {
    print(flag[exactIndex])
} else {
    print("No exact match for this position.")
}
// Prints "No exact match for this position."
```

<a id="Performance-Optimizations"></a>

## Performance Optimizations

Although strings in Swift have value semantics, strings use a copy-on-write strategy to store their data in a buffer. This buffer can then be shared by different copies of a string. A string’s data is only copied lazily, upon mutation, when more than one string instance is using the same buffer. Therefore, the first in any sequence of mutating operations may cost O(*n*) time and space.

When a string’s contiguous storage fills up, a new buffer must be allocated and data must be moved to the new storage. String buffers use an exponential growth strategy that makes appending to a string a constant time operation when averaged over many append operations.

<a id="Bridging-Between-String-and-NSString"></a>

## Bridging Between String and NSString

Any `String` instance can be bridged to `NSString` using the type-cast operator (`as`), and any `String` instance that originates in Objective-C may use an `NSString` instance as its storage. Because any arbitrary subclass of `NSString` can become a `String` instance, there are no guarantees about representation or efficiency when a `String` instance is backed by `NSString` storage. Because `NSString` is immutable, it is just as though the storage was shared by a copy. The first in any sequence of mutating operations causes elements to be copied into unique, contiguous storage which may cost O(*n*) time and space, where *n* is the length of the string’s encoded representation (or more, if the underlying `NSString` has unusual performance characteristics).

For more information about the Unicode terms used in this discussion, see the [Unicode.org glossary](http://www.unicode.org/glossary/). In particular, this discussion mentions [extended grapheme clusters](http://www.unicode.org/glossary/#extended_grapheme_cluster), [Unicode scalar values](http://www.unicode.org/glossary/#unicode_scalar_value), and [canonical equivalence](http://www.unicode.org/glossary/#canonical_equivalent).

## Topics

### Creating a String

In addition to creating a string from a single string literal, you can also create an empty string, a string containing an existing group of characters, or a string repeating the contents of another string.

- [init(decoding:)](string/init%28decoding_%29-nm7v.md): Creates a string by interpreting the file path’s content as UTF-8 on Unix and UTF-16 on Windows.
- [init()](string/init%28%29.md): Creates an empty string.
- [init(\_:)](string/init%28__%29-8v3fo.md): Creates a string containing the given character.
- [init(\_:)](string/init%28__%29-8og6g.md): Creates a new string containing the characters in the given sequence.
- [init(\_:)](string/init%28__%29-1ip93.md): Creates a new instance of a collection containing the elements of a sequence.
- [init(\_:)](string/init%28__%29-50pwi.md): Creates a new string containing the characters in the given sequence.
- [init(\_:)](string/init%28__%29-14lv5.md): Creates a new string from the given substring.
- [init(repeating:count:)](string/init%28repeating_count_%29-23xjt.md): Creates a new string representing the given string repeated the specified number of times.
- [init(repeating:count:)](string/init%28repeating_count_%29-11bpi.md): Creates a string representing the given character repeated the specified number of times.
- [init(unsafeUninitializedCapacity:initializingUTF8With:)](string/init%28unsafeuninitializedcapacity_initializingutf8with_%29.md)

### Inspecting a String

- [isEmpty](string/isempty.md): A Boolean value indicating whether a string has no characters.
- [count](string/count.md): The number of characters in a string.

### Creating a String from Unicode Data

- [init(\_:)](string/init%28__%29-8ay23.md)
- [init(data:encoding:)](string/init%28data_encoding_%29.md): Returns a `String` initialized by converting given `data` into Unicode characters using a given `encoding`.
- [init(validatingUTF8:)](string/init%28validatingutf8_%29-208fn.md): Deprecated. Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given pointer.
- [init(validating:as:)](string/init%28validating_as_%29-84qr9.md): Creates a new string by copying and validating the sequence of code units passed in, according to the specified encoding.
- [init(validating:as:)](string/init%28validating_as_%29-5cw2c.md): Creates a new string by copying and validating the sequence of code units passed in, according to the specified encoding.
- [init(utf8String:)](string/init%28utf8string_%29-8qmaq.md): Creates a string by copying the data from a given null-terminated array of UTF8-encoded bytes.
- [init(utf8String:)](string/init%28utf8string_%29-3mcco.md): Creates a string by copying the data from a given null-terminated C array of UTF8-encoded bytes.
- [init(utf16CodeUnits:count:)](string/init%28utf16codeunits_count_%29.md): Creates a new string that contains the specified number of characters from the given C array of Unicode characters.
- [init(utf16CodeUnitsNoCopy:count:freeWhenDone:)](string/init%28utf16codeunitsnocopy_count_freewhendone_%29.md): Deprecated. Creates a new string that contains the specified number of characters from the given C array of UTF-16 code units.
- [init(decoding:as:)](string/init%28decoding_as_%29.md): Creates a string from the given Unicode code units in the specified encoding.

### Creating a String Using Formats

- [init(format:\_:)](string/init%28format___%29.md): Returns a `String` object initialized by using a given format string as a template into which the remaining argument values are substituted.
- [init(format:arguments:)](string/init%28format_arguments_%29.md): Returns a `String` object initialized by using a given format string as a template into which the remaining argument values are substituted according to the user’s default locale.
- [init(format:locale:\_:)](string/init%28format_locale___%29.md): Returns a `String` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information.
- [init(format:locale:arguments:)](string/init%28format_locale_arguments_%29.md): Returns a `String` object initialized by using a given format string as a template into which the remaining argument values are substituted according to given locale information.
- [localizedStringWithFormat(\_:\_:)](string/localizedstringwithformat%28____%29.md): Returns a string created by using a given format string as a template into which the remaining argument values are substituted according to the user’s default locale.

### Creating a Localized String

- [init(localized:table:bundle:locale:comment:)](string/init%28localized_table_bundle_locale_comment_%29.md): Creates a localized string from an interpolated string.
- [init(localized:options:table:bundle:locale:comment:)](string/init%28localized_options_table_bundle_locale_comment_%29.md): Creates a localized string from an interpolated string, applying the specified options.
- [String.LocalizationValue](string/localizationvalue.md): A reference to a localizable string, with optional string interpolation.
- [String.LocalizationOptions](string/localizationoptions.md): Options to apply when initializing a localized string.
- [init(localized:defaultValue:table:bundle:locale:comment:)](string/init%28localized_defaultvalue_table_bundle_locale_comment_%29.md): Creates a localized string from an arbitrary static string key.
- [init(localized:defaultValue:options:table:bundle:locale:comment:)](string/init%28localized_defaultvalue_options_table_bundle_locale_comment_%29.md): Creates a localized string from an arbitrary static string key, applying the specified options.
- [init(localized:)](string/init%28localized_%29.md): Creates a localized string from a localized string resource.
- [init(localized:options:)](string/init%28localized_options_%29.md): Creates a localized string from a localized string resource, applying the specified options.

### Converting Numeric Values

- [init(\_:radix:uppercase:)](string/init%28__radix_uppercase_%29.md): Creates a string representing the given value in base 10, or some other specified base.

### Converting a C String

- [init(bytes:encoding:)](string/init%28bytes_encoding_%29.md): Creates a new string equivalent to the given bytes interpreted in the specified encoding. Note: This API does not interpret embedded nulls as termination of the string. Use `String?(validatingCString:)` instead for null-terminated C strings.
- [init(bytesNoCopy:length:encoding:freeWhenDone:)](string/init%28bytesnocopy_length_encoding_freewhendone_%29.md): Deprecated. Creates a new string that contains the specified number of bytes from the given buffer, interpreted in the specified encoding, and optionally frees the buffer.
- [init(validatingCString:)](string/init%28validatingcstring_%29-992vo.md): Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given pointer.
- [init(validatingCString:)](string/init%28validatingcstring_%29-98wra.md): Deprecated. Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given array.
- [init(cString:)](string/init%28cstring_%29-2p84k.md): Creates a new string by copying the null-terminated UTF-8 data referenced by the given pointer.
- [init(cString:)](string/init%28cstring_%29-6kr8s.md): Creates a new string by copying the null-terminated UTF-8 data referenced by the given pointer.
- [init(cString:encoding:)](string/init%28cstring_encoding_%29-3h7bc.md): Produces a string by copying the null-terminated bytes in a given array, interpreted according to a given encoding.
- [init(cString:encoding:)](string/init%28cstring_encoding_%29-3qgzd.md): Produces a string by copying the null-terminated bytes in a given C array, interpreted according to a given encoding.
- [init(decodingCString:as:)](string/init%28decodingcstring_as_%29-8way7.md): Deprecated. Creates a new string by copying the null-terminated sequence of code units referenced by the given array.
- [decodeCString(\_:as:repairingInvalidCodeUnits:)](string/decodecstring%28__as_repairinginvalidcodeunits_%29-46n2p.md): Creates a new string by copying the null-terminated data referenced by the given pointer using the specified encoding.

### Converting Other Types to Strings

- [init(\_:)](string/init%28__%29-1ywfq.md): Creates an instance from the description of a given `LosslessStringConvertible` instance.
- [init(describing:)](string/init%28describing_%29-588wb.md): Creates a string representing the given value.
- [init(describing:)](string/init%28describing_%29-hsqw.md): Creates a string representing the given value.
- [init(describing:)](string/init%28describing_%29-6ttci.md): Creates a string representing the given value.
- [init(describing:)](string/init%28describing_%29-67ncf.md): Creates a string representing the given value.
- [init(reflecting:)](string/init%28reflecting_%29.md): Creates a string with a detailed representation of the given value, suitable for debugging.

### Creating a String from a File or URL

- [init(contentsOf:)](string/init%28contentsof_%29.md): Deprecated.
- [init(contentsOf:encoding:)](string/init%28contentsof_encoding_%29.md): Produces a string created by reading data from a given URL interpreted using a given encoding.
- [init(contentsOf:usedEncoding:)](string/init%28contentsof_usedencoding_%29.md): Produces a string created by reading data from a given URL and returns by reference the encoding used to interpret the data.
- [init(contentsOfFile:)](string/init%28contentsoffile_%29.md): Deprecated.
- [init(contentsOfFile:encoding:)](string/init%28contentsoffile_encoding_%29.md): Produces a string created by reading data from the file at a given path interpreted using a given encoding.
- [init(contentsOfFile:usedEncoding:)](string/init%28contentsoffile_usedencoding_%29.md): Produces a string created by reading data from the file at a given path and returns by reference the encoding used to interpret the file.

### Writing to a File or URL

- [write(\_:)](string/write%28__%29.md): Appends the given string to this string.
- [write(to:)](string/write%28to_%29.md): Writes the string into the given output stream.

### Appending Strings and Characters

- [append(\_:)](string/append%28__%29-4xa8f.md): Appends the given string to this string.
- [append(\_:)](string/append%28__%29-4xi3j.md): Appends the given character to the string.
- [append(contentsOf:)](string/append%28contentsof_%29-oxek.md)
- [append(contentsOf:)](string/append%28contentsof_%29-9vb4t.md)
- [append(contentsOf:)](string/append%28contentsof_%29-7est5.md): Appends the characters in the given sequence to the string.
- [append(contentsOf:)](string/append%28contentsof_%29-9foms.md): Adds the elements of a sequence or collection to the end of this collection.
- [reserveCapacity(\_:)](string/reservecapacity%28__%29.md): Reserves enough space in the string’s underlying storage to store the specified number of ASCII characters.
- [+(\_:\_:)](string/+%28____%29.md)
- [+=(\_:\_:)](string/+=%28____%29.md)
- [+(\_:\_:)](string/+%28____%29-6h59y.md): Creates a new collection by concatenating the elements of a sequence and a collection.
- [+(\_:\_:)](string/+%28____%29-n329.md): Creates a new collection by concatenating the elements of a collection and a sequence.
- [+(\_:\_:)](string/+%28____%29-9fm57.md): Creates a new collection by concatenating the elements of two collections.
- [+=(\_:\_:)](string/+=%28____%29-676gx.md): Appends the elements of a sequence to a range-replaceable collection.

### Inserting Characters

- [insert(\_:at:)](string/insert%28__at_%29.md): Inserts a new character at the specified position.
- [insert(\_:at:)](string/insert%28__at_%29-88yqh.md): Inserts a new element into the collection at the specified position.
- [insert(contentsOf:at:)](string/insert%28contentsof_at_%29-rdu9.md): Inserts the elements of a sequence into the collection at the specified position.
- [insert(contentsOf:at:)](string/insert%28contentsof_at_%29.md): Inserts a collection of characters at the specified position.

### Replacing Substrings

- [replaceSubrange(\_:with:)](string/replacesubrange%28__with_%29.md): Replaces the text within the specified bounds with the given characters.
- [replaceSubrange(\_:with:)](string/replacesubrange%28__with_%29-72947.md): Replaces the specified subrange of elements with the given collection.

### Removing Substrings

- [remove(at:)](string/remove%28at_%29.md): Removes and returns the character at the specified position.
- [remove(at:)](string/remove%28at_%29-5g0wm.md): Removes and returns the element at the specified position.
- [removeAll(keepingCapacity:)](string/removeall%28keepingcapacity_%29.md): Replaces this string with the empty string.
- [removeAll(where:)](string/removeall%28where_%29.md): Removes all the elements that satisfy the given predicate.
- [removeFirst()](string/removefirst%28%29.md): Removes and returns the first element of the collection.
- [removeFirst(\_:)](string/removefirst%28__%29.md): Removes the specified number of elements from the beginning of the collection.
- [removeLast()](string/removelast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.
- [removeLast(\_:)](string/removelast%28__%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes the specified number of elements from the end of the collection.
- [removeSubrange(\_:)](string/removesubrange%28__%29.md): Removes the characters in the given range.
- [removeSubrange(\_:)](string/removesubrange%28__%29-8maxn.md): Removes the elements in the specified subrange from the collection.
- [removeSubrange(\_:)](string/removesubrange%28__%29-9twng.md): Removes the elements in the specified subrange from the collection.
- [drop(while:)](string/drop%28while_%29.md): Returns a subsequence by skipping elements while `predicate` returns `true` and returning the remaining elements.
- [dropFirst(\_:)](string/dropfirst%28__%29.md): Returns a subsequence containing all but the given number of initial elements.
- [dropLast(\_:)](string/droplast%28__%29.md): Returns a subsequence containing all but the specified number of final elements.
- [popLast()](string/poplast%28%29.md): Conforms when `Self` conforms to `BidirectionalCollection`. Removes and returns the last element of the collection.

### Changing Case

- [lowercased()](string/lowercased%28%29.md): Returns a lowercase version of the string.
- [uppercased()](string/uppercased%28%29.md): Returns an uppercase version of the string.

### Comparing Strings Using Operators

Comparing strings using the equal-to operator (==) or a relational operator (like \< and \>=) is always performed using the Unicode canonical representation, so that different representations of a string compare as being equal.

- [==(\_:\_:)](string/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [==(\_:\_:)](string/==%28____%29-8kzxf.md)
- [!=(\_:\_:)](string/!=%28____%29-frzf.md)
- [~=(\_:\_:)](string/~=%28____%29.md)

### Comparing Characters

- [elementsEqual(\_:)](string/elementsequal%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether this sequence and another sequence contain the same elements in the same order.
- [elementsEqual(\_:by:)](string/elementsequal%28__by_%29.md): Returns a Boolean value indicating whether this sequence and another sequence contain equivalent elements in the same order, using the given predicate as the equivalence test.
- [starts(with:)](string/starts%28with_%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the initial elements of the sequence are the same as the elements in another sequence.
- [starts(with:by:)](string/starts%28with_by_%29.md): Returns a Boolean value indicating whether the initial elements of the sequence are equivalent to the elements in another sequence, using the given predicate as the equivalence test.
- [lexicographicallyPrecedes(\_:)](string/lexicographicallyprecedes%28__%29.md): Conforms when `Element` conforms to `Comparable`. Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the less-than operator (`<`) to compare elements.
- [lexicographicallyPrecedes(\_:by:)](string/lexicographicallyprecedes%28__by_%29.md): Returns a Boolean value indicating whether the sequence precedes another sequence in a lexicographical (dictionary) ordering, using the given predicate to compare elements.

### Creating and Applying Differences

- [applying(\_:)](string/applying%28__%29.md): Applies the given difference to this collection.
- [difference(from:)](string/difference%28from_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the difference needed to produce this collection’s ordered elements from the given collection.
- [difference(from:by:)](string/difference%28from_by_%29.md): Returns the difference needed to produce this collection’s ordered elements from the given collection, using the given predicate as an equivalence test.

### Finding Substrings

- [hasPrefix(\_:)](string/hasprefix%28__%29.md)
- [hasSuffix(\_:)](string/hassuffix%28__%29.md)

### Finding Characters

- [contains(\_:)](string/contains%28__%29.md): Conforms when `Element` conforms to `Equatable`. Returns a Boolean value indicating whether the sequence contains the given element.
- [allSatisfy(\_:)](string/allsatisfy%28__%29.md): Returns a Boolean value indicating whether every element of a sequence satisfies a given predicate.
- [contains(where:)](string/contains%28where_%29.md): Returns a Boolean value indicating whether the sequence contains an element that satisfies the given predicate.
- [first(where:)](string/first%28where_%29.md): Returns the first element of the sequence that satisfies the given predicate.
- [firstIndex(of:)](string/firstindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [firstIndex(where:)](string/firstindex%28where_%29.md): Returns the first index in which an element of the collection satisfies the given predicate.
- [last(where:)](string/last%28where_%29.md): Returns the last element of the sequence that satisfies the given predicate.
- [lastIndex(of:)](string/lastindex%28of_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the last index where the specified value appears in the collection.
- [lastIndex(where:)](string/lastindex%28where_%29.md): Returns the index of the last element in the collection that matches the given predicate.
- [max()](string/max%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the maximum element in the sequence.
- [max(\_:\_:)](string/max%28____%29.md)
- [max(by:)](string/max%28by_%29.md): Returns the maximum element in the sequence, using the given predicate as the comparison between elements.
- [min()](string/min%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the minimum element in the sequence.
- [min(\_:\_:)](string/min%28____%29.md)
- [min(by:)](string/min%28by_%29.md): Returns the minimum element in the sequence, using the given predicate as the comparison between elements.

### Getting Substrings

- [subscript(\_:)](string/subscript%28__%29-2so14.md): Accesses a contiguous subrange of the collection’s elements.
- [subscript(\_:)](string/subscript%28__%29-4h7s3.md): Accesses the contiguous subrange of the collection’s elements specified by a range expression.
- [subscript(\_:)](string/subscript%28__%29-4al9c.md)
- [prefix(\_:)](string/prefix%28__%29.md): Returns a subsequence, up to the specified maximum length, containing the initial elements of the collection.
- [prefix(through:)](string/prefix%28through_%29.md): Returns a subsequence from the start of the collection through the specified position.
- [prefix(upTo:)](string/prefix%28upto_%29.md): Returns a subsequence from the start of the collection up to, but not including, the specified position.
- [prefix(while:)](string/prefix%28while_%29.md): Returns a subsequence containing the initial elements until `predicate` returns `false` and skipping the remaining elements.
- [suffix(\_:)](string/suffix%28__%29.md): Returns a subsequence, up to the given maximum length, containing the final elements of the collection.
- [suffix(from:)](string/suffix%28from_%29.md): Returns a subsequence from the specified position to the end of the collection.

### Splitting a String

- [split(separator:maxSplits:omittingEmptySubsequences:)](string/split%28separator_maxsplits_omittingemptysubsequences_%29.md): Conforms when `Element` conforms to `Equatable`. Returns the longest possible subsequences of the collection, in order, around elements equal to the given element.
- [split(maxSplits:omittingEmptySubsequences:whereSeparator:)](string/split%28maxsplits_omittingemptysubsequences_whereseparator_%29.md): Returns the longest possible subsequences of the collection, in order, that don’t contain elements satisfying the given predicate.

### Getting Characters and Bytes

- [subscript(\_:)](string/subscript%28__%29-lc0v.md): Accesses the character at the given position.
- [first](string/first.md): The first element of the collection.
- [last](string/last.md): The last element of the collection.
- [randomElement()](string/randomelement%28%29.md): Returns a random element of the collection.
- [randomElement(using:)](string/randomelement%28using_%29.md): Returns a random element of the collection, using the given generator as a source for randomness.

### Working with Encodings

- [availableStringEncodings](string/availablestringencodings.md): An array of the encodings that strings support in the application’s environment.
- [defaultCStringEncoding](string/defaultcstringencoding.md): The C-string encoding assumed for any method accepting a C string as an argument.
- [localizedName(of:)](string/localizedname%28of_%29.md): Returns a human-readable string giving the name of the specified encoding.
- [isContiguousUTF8](string/iscontiguousutf8.md): Returns whether this string’s storage contains validly-encoded UTF-8 contents in contiguous memory.
- [makeContiguousUTF8()](string/makecontiguousutf8%28%29.md): If this string is not contiguous, make it so. If this mutates the string, it will invalidate any pre-existing indices.
- [withUTF8(\_:)](string/withutf8%28__%29.md): Runs `body` over the content of this string in contiguous memory. If this string is not contiguous, this will first make it contiguous, which will also speed up subsequent access. If this mutates the string, it will invalidate any pre-existing indices.

### Working with String Views

- [unicodeScalars](string/unicodescalars.md): The string’s value represented as a collection of Unicode scalar values.
- [init(\_:)](string/init%28__%29-2t931.md): Creates a string corresponding to the given collection of Unicode scalars.
- [init(\_:)](string/init%28__%29-11jx3.md): Creates a String having the given content.
- [utf16](string/utf16.md): A UTF-16 encoding of `self`.
- [init(\_:)](string/init%28__%29-wbcx.md): Creates a string corresponding to the given sequence of UTF-16 code units.
- [init(\_:)](string/init%28__%29-expd.md): Creates a String having the given content.
- [utf8](string/utf8.md): A UTF-8 encoding of `self`.
- [init(\_:)](string/init%28__%29-6sprj.md): Creates a string corresponding to the given sequence of UTF-8 code units.
- [init(\_:)](string/init%28__%29-83bub.md): Creates a String having the given content.

### Transforming a String’s Characters

- [compactMap(\_:)](string/compactmap%28__%29.md): Returns an array containing the non-`nil` results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](string/flatmap%28__%29-i3m9.md): Returns an array containing the concatenated results of calling the given transformation with each element of this sequence.
- [flatMap(\_:)](string/flatmap%28__%29-6chuq.md): Deprecated.
- [reduce(\_:\_:)](string/reduce%28____%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [reduce(into:\_:)](string/reduce%28into___%29.md): Returns the result of combining the elements of the sequence using the given closure.
- [lazy](string/lazy.md): A sequence containing the same elements as this sequence, but on which some operations, such as `map` and `filter`, are implemented lazily.

### Iterating over a String’s Characters

- [forEach(\_:)](string/foreach%28__%29.md): Calls the given closure on each element in the sequence in the same order as a `for`-`in` loop.
- [enumerated()](string/enumerated%28%29.md): Returns a sequence of pairs (*n*, *x*), where *n* represents a consecutive integer starting at zero and *x* represents an element of the sequence.
- [makeIterator()](string/makeiterator%28%29.md): Returns an iterator over the elements of the collection.
- [underestimatedCount](string/underestimatedcount.md): A value less than or equal to the number of elements in the collection.

### Reordering a String’s Characters

- [sorted()](string/sorted%28%29.md): Conforms when `Element` conforms to `Comparable`. Returns the elements of the sequence, sorted.
- [sorted(by:)](string/sorted%28by_%29.md): Returns the elements of the sequence, sorted using the given predicate as the comparison between elements.
- [reversed()](string/reversed%28%29.md): Returns a view presenting the elements of the collection in reverse order.
- [shuffled()](string/shuffled%28%29.md): Returns the elements of the sequence, shuffled.
- [shuffled(using:)](string/shuffled%28using_%29.md): Returns the elements of the sequence, shuffled using the given generator as a source for randomness.

### Getting C Strings

- [utf8CString](string/utf8cstring.md): A contiguously stored null-terminated UTF-8 representation of the string.
- [withCString(\_:)](string/withcstring%28__%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of UTF-8 code units.
- [withCString(encodedAs:\_:)](string/withcstring%28encodedas___%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated sequence of code units.

### Working with Paths

- [init(\_:)](string/init%28__%29-3a5mh.md): Deprecated.
- [init(validatingUTF8:)](string/init%28validatingutf8_%29-6i0in.md): Deprecated.

### Manipulating Indices

- [startIndex](string/startindex.md): The position of the first character in a nonempty string.
- [endIndex](string/endindex.md): A string’s “past the end” position—that is, the position one greater than the last valid subscript argument.
- [index(after:)](string/index%28after_%29.md): Returns the position immediately after the given index.
- [formIndex(after:)](string/formindex%28after_%29.md): Replaces the given index with its successor.
- [index(before:)](string/index%28before_%29.md): Returns the position immediately before the given index.
- [formIndex(before:)](string/formindex%28before_%29.md): Replaces the given index with its predecessor.
- [index(\_:offsetBy:)](string/index%28__offsetby_%29.md): Returns an index that is the specified distance from the given index.
- [index(\_:offsetBy:limitedBy:)](string/index%28__offsetby_limitedby_%29.md): Returns an index that is the specified distance from the given index, unless that distance is beyond a given limiting index.
- [formIndex(\_:offsetBy:)](string/formindex%28__offsetby_%29.md): Offsets the given index by the specified distance.
- [formIndex(\_:offsetBy:limitedBy:)](string/formindex%28__offsetby_limitedby_%29.md): Offsets the given index by the specified distance, or so that it equals the given limiting index.
- [distance(from:to:)](string/distance%28from_to_%29.md): Returns the distance between two indices.
- [indices](string/indices-swift.property.md): Conforms when `Indices` is `DefaultIndices<Self>`. The indices that are valid for subscripting the collection, in ascending order.

### Creating a Range Expression

- [...(\_:\_:)](string/'...%28____%29.md): Returns a closed range that contains both of its bounds.
- [...(\_:)](string/'...%28__%29-4mm4o.md): Returns a partial range up to, and including, its upper bound.
- [...(\_:)](string/'...%28__%29-6ct5g.md): Returns a partial range extending upward from a lower bound.

### Encoding and Decoding

- [encode(to:)](string/encode%28to_%29.md): Encodes this value into the given encoder.
- [init(from:)](string/init%28from_%29.md): Creates a new instance by decoding from the given decoder.

### Describing a String

- [description](string/description.md): The value of this string.
- [debugDescription](string/debugdescription.md): A representation of the string that is suitable for debugging.
- [customMirror](string/custommirror.md): A mirror that reflects the `String` instance.
- [hashValue](string/hashvalue.md): The hash value.
- [hash(into:)](string/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Infrequently Used Functionality

- [index(of:)](string/index%28of_%29.md): Deprecated. Conforms when `Element` conforms to `Equatable`. Returns the first index where the specified value appears in the collection.
- [init(\_:)](string/init%28__%29-5a5lw.md)
- [init(stringInterpolation:)](string/init%28stringinterpolation_%29.md): Creates a new instance from an interpolated string literal.
- [init(stringLiteral:)](string/init%28stringliteral_%29.md): Creates an instance initialized to the given string value.
- [init(unicodeScalarLiteral:)](string/init%28unicodescalarliteral_%29.md): Conforms when `ExtendedGraphemeClusterLiteralType` is `Self.UnicodeScalarLiteralType`.
- [init(extendedGraphemeClusterLiteral:)](string/init%28extendedgraphemeclusterliteral_%29.md): Conforms when `ExtendedGraphemeClusterLiteralType` is `Self.StringLiteralType`.
- [customPlaygroundQuickLook](string/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `String` instance.
- [withContiguousStorageIfAvailable(\_:)](string/withcontiguousstorageifavailable%28__%29.md): Executes a closure on the sequence’s contiguous storage.

### Reference Types

Use bridged reference types when you need reference semantics or Foundation-specific behavior.

- [NSString](https://developer.apple.com/documentation/foundation/nsstring): A static, plain-text Unicode string object.
- [NSMutableString](https://developer.apple.com/documentation/foundation/nsmutablestring): A dynamic plain-text Unicode string object.

### Related String Types

- [Substring](substring.md): A slice of a string.
- [StringProtocol](stringprotocol.md): A type that can represent a string as a collection of characters.
- [String.Index](string/index.md): A position of a character or code unit in a string.
- [String.UnicodeScalarView](string/unicodescalarview.md): A view of a string’s contents as a collection of Unicode scalar values.
- [String.UTF16View](string/utf16view.md): A view of a string’s contents as a collection of UTF-16 code units.
- [String.UTF8View](string/utf8view.md): A view of a string’s contents as a collection of UTF-8 code units.
- [String.Iterator](string/iterator.md): A type that provides the collection’s iteration interface and encapsulates its iteration state.
- [String.Encoding](string/encoding.md)

### Structures

- [String.Comparator](string/comparator.md): A `String` comparison performed using the given comparison options and locale.
- [String.IntentInputOptions](string/intentinputoptions.md)
- [String.StandardComparator](string/standardcomparator.md): Compares `String`s using one of a fixed set of standard comparison algorithms.

### Initializers

- [init(\_:)](string/init%28__%29-1oup7.md)
- [init(\_:)](string/init%28__%29-2cuu.md)
- [init(\_:)](string/init%28__%29-5ruqx.md)
- [init(cString:)](string/init%28cstring_%29-1gatt.md): Deprecated.
- [init(cString:)](string/init%28cstring_%29-295hy.md): Deprecated.
- [init(cString:)](string/init%28cstring_%29-472zs.md): Deprecated. Creates a new string by copying the null-terminated UTF-8 data referenced by the given array.
- [init(cString:)](string/init%28cstring_%29-54awj.md): Deprecated. Creates a new string by copying the null-terminated UTF-8 data referenced by the given array.
- [init(cString:)](string/init%28cstring_%29-cgw2.md): Deprecated.
- [init(cString:encoding:)](string/init%28cstring_encoding_%29-358mb.md): Deprecated.
- [init(cString:encoding:)](string/init%28cstring_encoding_%29-4ydt6.md): Deprecated.
- [init(copying:)](string/init%28copying_%29.md): Creates a new string, copying the specified code units.
- [init(decoding:)](string/init%28decoding_%29-364r2.md): On Unix, creates the string `"/"`
- [init(decoding:)](string/init%28decoding_%29-9xh58.md): Creates a string by interpreting the path component’s content as UTF-8 on Unix and UTF-16 on Windows.
- [init(decodingCString:as:)](string/init%28decodingcstring_as_%29-2zmjc.md): Deprecated.
- [init(decodingCString:as:)](string/init%28decodingcstring_as_%29-534rp.md): Deprecated.
- [init(describingForTest:)](string/init%28describingfortest_%29.md): Initialize this instance so that it can be presented in a test’s output.
- [init(platformString:)](string/init%28platformstring_%29-341sr.md): Deprecated.
- [init(platformString:)](string/init%28platformstring_%29-36ydz.md): Deprecated.
- [init(platformString:)](string/init%28platformstring_%29-5j2y3.md): Creates a string by interpreting the null-terminated platform string as UTF-8 on Unix and UTF-16 on Windows.
- [init(platformString:)](string/init%28platformstring_%29-7hjry.md): Creates a string by interpreting the null-terminated platform string as UTF-8 on Unix and UTF-16 on Windows.
- [init(utf8String:)](string/init%28utf8string_%29-5v4k8.md): Deprecated.
- [init(utf8String:)](string/init%28utf8string_%29-7t980.md): Deprecated.
- [init(validating:)](string/init%28validating_%29-6r2j9.md): On Unix, creates the string `"/"`
- [init(validating:)](string/init%28validating_%29-95n8b.md): Creates a string from a path component, validating its contents as UTF-8 on Unix and UTF-16 on Windows.
- [init(validating:)](string/init%28validating_%29-9dx2b.md): Creates a string from a file path, validating its contents as UTF-8 on Unix and UTF-16 on Windows.
- [init(validatingCString:)](string/init%28validatingcstring_%29-1x5p0.md): Deprecated.
- [init(validatingCString:)](string/init%28validatingcstring_%29-7gjlg.md): Deprecated.
- [init(validatingPlatformString:)](string/init%28validatingplatformstring_%29-2920w.md): Creates a string by interpreting the null-terminated platform string as UTF-8 on Unix and UTF-16 on Windows.
- [init(validatingPlatformString:)](string/init%28validatingplatformstring_%29-8x1kn.md): Deprecated.
- [init(validatingPlatformString:)](string/init%28validatingplatformstring_%29-91z6f.md): Creates a string by interpreting the null-terminated platform string as UTF-8 on Unix and UTF-16 on Windows.
- [init(validatingPlatformString:)](string/init%28validatingplatformstring_%29-go44.md): Deprecated.
- [init(validatingUTF8:)](string/init%28validatingutf8_%29-2m5lb.md): Deprecated. Creates a new string by copying and validating the null-terminated UTF-8 data referenced by the given array.
- [init(validatingUTF8:)](string/init%28validatingutf8_%29-2o7g5.md): Deprecated.
- [init(validatingUTF8:)](string/init%28validatingutf8_%29-8awk3.md): Deprecated.

### Instance Properties

- [characters](string/characters.md): A view of the string’s contents as a collection of characters.
- [utf8Span](string/utf8span.md): A UTF-8 span over the code units that make up this string.

### Instance Methods

- [data(using:allowLossyConversion:)](string/data%28using_allowlossyconversion_%29.md)
- [isTriviallyIdentical(to:)](string/istriviallyidentical%28to_%29.md): Returns a boolean value indicating whether this string is identical to `other`.
- [withMutableCharacters(\_:)](string/withmutablecharacters%28__%29.md): Applies the given closure to a mutable view of the string’s characters.
- [withPlatformString(\_:)](string/withplatformstring%28__%29.md): Calls the given closure with a pointer to the contents of the string, represented as a null-terminated platform string.

### Type Aliases

- [String.CharacterView](string/characterview.md): A view of a string’s contents as a collection of characters.
- [String.CompareOptions](string/compareoptions.md)
- [String.EncodingConversionOptions](string/encodingconversionoptions.md)
- [String.EnumerationOptions](string/enumerationoptions.md)
- [String.IndexDistance](string/indexdistance.md): Deprecated. A type that represents the number of steps between two `String.Index` values, where one value is reachable from the other.
- [String.Output](string/output.md)
- [String.Specification](string/specification.md)
- [String.UnicodeScalarIndex](string/unicodescalarindex.md): The index type for a string’s `unicodeScalars` view.
- [String.UnwrappedType](string/unwrappedtype.md)
- [String.ValueType](string/valuetype.md)

### Type Properties

- [defaultResolverSpecification](string/defaultresolverspecification.md)

### Type Methods

- [decodeCString(\_:as:repairingInvalidCodeUnits:)](string/decodecstring%28__as_repairinginvalidcodeunits_%29-2l7u6.md): Deprecated.
- [decodeCString(\_:as:repairingInvalidCodeUnits:)](string/decodecstring%28__as_repairinginvalidcodeunits_%29-3mvvy.md)
- [decodeCString(\_:as:repairingInvalidCodeUnits:)](string/decodecstring%28__as_repairinginvalidcodeunits_%29-9pdmv.md): Deprecated.

### Default Implementations

- [Attachable Implementations](string/attachable-implementations.md)
- [BidirectionalCollection Implementations](string/bidirectionalcollection-implementations.md)
- [CodingKeyRepresentable Implementations](string/codingkeyrepresentable-implementations.md)
- [Collection Implementations](string/collection-implementations.md)
- [Comparable Implementations](string/comparable-implementations.md)
- [CustomDebugStringConvertible Implementations](string/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](string/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](string/customstringconvertible-implementations.md)
- [Decodable Implementations](string/decodable-implementations.md)
- [Encodable Implementations](string/encodable-implementations.md)
- [Equatable Implementations](string/equatable-implementations.md)
- [ExpressibleByExtendedGraphemeClusterLiteral Implementations](string/expressiblebyextendedgraphemeclusterliteral-implementations.md)
- [ExpressibleByStringInterpolation Implementations](string/expressiblebystringinterpolation-implementations.md)
- [ExpressibleByStringLiteral Implementations](string/expressiblebystringliteral-implementations.md)
- [ExpressibleByUnicodeScalarLiteral Implementations](string/expressiblebyunicodescalarliteral-implementations.md)
- [Hashable Implementations](string/hashable-implementations.md)
- [LosslessStringConvertible Implementations](string/losslessstringconvertible-implementations.md)
- [RangeReplaceableCollection Implementations](string/rangereplaceablecollection-implementations.md)
- [Sequence Implementations](string/sequence-implementations.md)
- [StringProtocol Implementations](string/stringprotocol-implementations.md)
- [TextOutputStream Implementations](string/textoutputstream-implementations.md)
- [TextOutputStreamable Implementations](string/textoutputstreamable-implementations.md)

## Relationships

### Conforms To

- [Attachable](https://developer.apple.com/documentation/testing/attachable)
- [BidirectionalCollection](bidirectionalcollection.md)
- [BindableData](https://developer.apple.com/documentation/realitykit/bindabledata)
- [CKRecordValueProtocol](https://developer.apple.com/documentation/cloudkit/ckrecordvalueprotocol)
- [CVAttachmentValueRepresentable](https://developer.apple.com/documentation/corevideo/cvattachmentvaluerepresentable)
- [CVarArg](cvararg.md)
- [CodingKeyRepresentable](codingkeyrepresentable.md)
- [Collection](collection.md)
- [Comparable](comparable.md)
- [ConvertibleFromGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertiblefromgeneratedcontent)
- [ConvertibleToGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertibletogeneratedcontent)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomReflectable](customreflectable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [CustomTestStringConvertible](https://developer.apple.com/documentation/testing/customteststringconvertible)
- [CustomURLRepresentationParameterConvertible](https://developer.apple.com/documentation/appintents/customurlrepresentationparameterconvertible)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [EntityIdentifierConvertible](https://developer.apple.com/documentation/appintents/entityidentifierconvertible)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByExtendedGraphemeClusterLiteral](expressiblebyextendedgraphemeclusterliteral.md)
- [ExpressibleByStringInterpolation](expressiblebystringinterpolation.md)
- [ExpressibleByStringLiteral](expressiblebystringliteral.md)
- [ExpressibleByUnicodeScalarLiteral](expressiblebyunicodescalarliteral.md)
- [Generable](https://developer.apple.com/documentation/foundationmodels/generable)
- [Hashable](hashable.md)
- [InstructionsRepresentable](https://developer.apple.com/documentation/foundationmodels/instructionsrepresentable)
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [LosslessStringConvertible](losslessstringconvertible.md)
- [MLDataValueConvertible](https://developer.apple.com/documentation/createml/mldatavalueconvertible)
- [MLIdentifier](https://developer.apple.com/documentation/createml/mlidentifier)
- [MirrorPath](mirrorpath.md)
- [MusicLibraryRequestFilterValueEquatable](https://developer.apple.com/documentation/musickit/musiclibraryrequestfiltervalueequatable)
- [Plottable](https://developer.apple.com/documentation/charts/plottable)
- [PrimitivePlottableProtocol](https://developer.apple.com/documentation/charts/primitiveplottableprotocol)
- [PromptRepresentable](https://developer.apple.com/documentation/foundationmodels/promptrepresentable)
- [RangeReplaceableCollection](rangereplaceablecollection.md)
- [RegexComponent](regexcomponent.md)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [Sequence](sequence.md)
- [StringProtocol](stringprotocol.md)
- [TextOutputStream](textoutputstream.md)
- [TextOutputStreamable](textoutputstreamable.md)
- [Transferable](https://developer.apple.com/documentation/coretransferable/transferable)
- [USDPrim.Attribute.Value](https://developer.apple.com/documentation/usdkit/usdprim/attribute/value)
- [USDStage.Object.MetadataValue](https://developer.apple.com/documentation/usdkit/usdstage/object/metadatavalue)
- [USDValueProtocol](https://developer.apple.com/documentation/usdkit/usdvalueprotocol)

## See Also

### Standard Library

- [Int](int.md): A signed integer value type.
- [Double](double.md): A double-precision (64-bit), floating-point value type.
- [Array](array.md): An ordered, random-access collection.
- [Dictionary](dictionary.md): A collection whose elements are key-value pairs.
- [Swift Standard Library](swift-standard-library.md): Solve complex problems and write high-performance, readable code.
