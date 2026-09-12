> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/technologyoverviews/standard-data-types-and-processes](https://developer.apple.com/documentation/technologyoverviews/standard-data-types-and-processes)

# Standard data types and processes

**Framework:** Technology Overviews

Store fundamental types of data, and discover the key behaviors that make using those types easier.

All apps use basic data structures to manage information. To manage simple types of data, use the types in [Swift Standard Library](https://developer.apple.com/documentation/swift/swift-standard-library) and the [Foundation](../foundation.md) framework. The types in these frameworks are often more capable than most primitive types like `int` and are also portable between Apple platforms. Use the framework types to manage:

- [Integers](https://developer.apple.com/documentation/swift/int), [floating-point values](https://developer.apple.com/documentation/swift/float) [double-precision floats](https://developer.apple.com/documentation/swift/double), and [Boolean](https://developer.apple.com/documentation/swift/bool) values
- [Strings](https://developer.apple.com/documentation/swift/string), [characters](https://developer.apple.com/documentation/swift/character), and [stylized text strings](../foundation/attributedstring.md)
- [Dates and times](../foundation/dates-and-times.md), and other [units of measurement](../foundation/units-and-measurement.md)
- [Points](../foundation/nspoint.md), [rectangles](../foundation/nsrect.md), and other [geometric values](../foundation/numbers-data-and-basic-values.md)
- [URLs](../foundation/url.md) and [unique identifiers](../foundation/uuid.md)
- [Binary data](../foundation/data.md)
- [Arrays](https://developer.apple.com/documentation/swift/array), [dictionaries](https://developer.apple.com/documentation/swift/dictionary), [sets](https://developer.apple.com/documentation/swift/set), and other [collection types](../foundation/collections.md)

The benefit of using the framework-provided types is they automatically adapt to the programming language you’re using. In Swift, types like `Int` and `Float` are actually structures you can include in collections. They also adopt standard behaviors like being [Equatable](https://developer.apple.com/documentation/swift/equatable), [Comparable](https://developer.apple.com/documentation/swift/comparable), [Identifiable](https://developer.apple.com/documentation/swift/identifiable), [Copyable](https://developer.apple.com/documentation/swift/copyable), [Hashable](https://developer.apple.com/documentation/swift/hashable), and more. You can even extend them to support custom behaviors you define.

In Objective-C, integers, floating-point values, and other primitive types map to the language’s built-in representation, but you can still use the types in object-oriented ways. For example, you can include numerical and simple types in collections by wrapping them in an [NSNumber](../foundation/nsnumber.md) or [NSValue](../foundation/nsvalue.md) object.

---

<a id="Choose-the-best-configuration-for-variables"></a>

## Choose the best configuration for variables

The variables you create are either *mutable* or *immutable*, meaning you can change their values after initialization or you can’t. Mutability is an important consideration when designing data structures because it impacts how you move data around your app. A structure with only immutable data values doesn’t change, so multiple tasks can safely access that structure at the same time. The same isn’t true if the structure contains a mutable value. Tasks must synchronize access to a mutable structure to avoid corrupting the data inside it.

[Swift](https://developer.apple.com/documentation/swift) types are inherently mutable, but you specify their actual mutability when you declare them as variables. In Swift, you declare variables using either the `let` or `var` keyword. The `let` keyword creates a variable with an immutable version of the type, and the `var` keyword creates a variable with a mutable type. The compiler enforces the mutability of variables you declare. In the following code listing, you can change the value of the `currentLoginAttempt` variable, but the compiler reports an error if you attempt to change the value in `maximumNumberOfLoginAttempts`.

```swift
let maximumNumberOfLoginAttempts = 10
var currentLoginAttempt = 0
```

In Objective-C, the mutability of a type depends on the type itself. Integers and other primitive types are inherently mutable in Objective-C unless you declare them as constants. However, the mutability of most object types depends on the type itself. The [Foundation](../foundation.md) framework defines mutable and immutable variants of most object types, with types being immutable unless they contain the word “mutable” in the type name. For example, the [NSString](../foundation/nsstring.md) type stores an immutable string, and the [NSMutableString](../foundation/nsmutablestring.md) contains the mutable version.

Choose immutable types to represent your data whenever possible. Because their values don’t change, you can pass immutable types safely around your app and access them from any task or thread. As needed, create a mutable copy of a variable to perform intermediate tasks. In Swift, copy the immutable value into a mutable variable. In Objective-C, you can create mutable versions of many immutable types using the methods of the [NSMutableCopying](../foundation/nsmutablecopying.md) protocol.

---

<a id="Prepare-to-save-your-apps-data-to-disk"></a>

## Prepare to save your app’s data to disk

At some point, you’re going to want to save your app’s data to disk. The first step of this process is to convert your structured data into a serial stream of bytes that you can write to a file, which you do using the [archiving and serialization](../foundation/archives-and-serialization.md) process. This process converts your in-memory data structures to a stream of bytes that you can then write to disk. When reading content from disk, you reverse this process by recreating your data structures from the serialized stream of bytes.

Most [Swift](https://developer.apple.com/documentation/swift) and [Foundation](../foundation.md) types have built-in support for serialization. For custom Swift types, you [add serialization support](../foundation/encoding-and-decoding-custom-types.md), by adopting the [Encodable](https://developer.apple.com/documentation/swift/encodable) and [Decodable](https://developer.apple.com/documentation/swift/decodable) protocols. The default implementation of these protocols automatically encode and decode the properties you specify, but you can also encode and decode properties manually if you prefer.

To serialize types in Objective-C, adopt the [NSCoding](../foundation/nscoding.md) and [NSSecureCoding](../foundation/nssecurecoding.md) protocols to specify which properties you want to save. To generate a [Data](../foundation/data.md) object with the stream of bytes from your data structure, use a [NSKeyedArchiver](../foundation/nskeyedarchiver.md) object to encode one or more objects. To recreate your objects later, reverse the process using an [NSKeyedUnarchiver](../foundation/nskeyedunarchiver.md) object.

---

<a id="Format-data-for-different-audiences"></a>

## Format data for different audiences

Bringing your app to other countries involves localizing text and other content to match a person’s language, but it also involves formatting data according to the person’s regional settings. Different countries and regions have rules for how to format numbers, dates, currencies, and other types of data. For example, one country might separate the fractional part of a currency using a comma, and another might use a period. Formatting data for the current [locale](../foundation/locale.md) is one step in the [internationalization process](https://developer.apple.com/documentation/xcode/supporting-multiple-languages-in-your-app), which you use to make your app available globally.

Before displaying data values in your app’s interface, [format them](../foundation/data-formatting.md) for the current region. Most Swift types have built-in methods for formatting their contents using the contents of a [FormatStyle](../foundation/formatstyle.md) type. For example, apply the [IntegerFormatStyle](../foundation/integerformatstyle.md) type to format a value as an integer. Format styles use the current [Locale](../foundation/locale.md) and other information to format values appropriately for the current device. You can also configure format style types with custom formatting behaviors.

To format values in Objective-C, use an instance of the [Formatter](../foundation/formatter.md) class to generate strings from your data. Foundation defines specific subclasses to format [dates](../foundation/dateformatter.md), [measurable values](../foundation/dateformatter.md) such as distances, [numbers](../foundation/numberformatter.md), and [people’s names](../foundation/personnamecomponentsformatter.md), among others.

---

<a id="Filter-sort-and-compare-items"></a>

## Filter, sort, and compare items

Working on large amounts of data can make it difficult to organize and find that data. As the number of items in an array increases, [apply filters](../foundation/filters-and-sorting.md) to locate the items you want. You can also [sort](../foundation/filters-and-sorting.md) the contents of an array using rules you supply.

At the center of all filter and sort operations are *predicates*, which are logical tests to apply during the operation. A typical predicate compares a property from a data structure against a value you specify. For example, a predicate might match the name field of a structure to a name string someone specified in your interface. Build predicates in your app using the [Predicate](../foundation/predicate.md) or [NSPredicate](../foundation/nspredicate.md) type. You can also combine predicates to specify match multiple values. The following code uses a macro to create a [Predicate](../foundation/predicate.md) structure that matches two fields of a `Message` structure against specific values.

```swift
let messagePredicate = #Predicate<Message> { message in
    message.length < 100 && message.sender == "Shelly"
}
```

Some types support the use of predicates to generate a filtered list of results. For example, the [Array](https://developer.apple.com/documentation/swift/array) type contains methods to [find elements](https://developer.apple.com/documentation/swift/array) using predicates. Other collection types offer similar methods.

Once you have a filtered list of results, apply sort descriptors to arrange them in a preferred order. Build a sort descriptor from the [SortDescriptor](../foundation/sortdescriptor.md) or [NSSortDescriptor](../foundation/nssortdescriptor.md) type, and pass them to methods of your collection types. The sort descriptors arrange elements according to the specified criteria and return a new or modified version of your collection.

---

<a id="Secure-your-data"></a>

## Secure your data

Protect your app’s data, and store any data you write to disk securely. People’s devices contain a lot of personal information, and even information that might not seem personal can expose details about someone’s habits or choices. Apple platforms make it easy to encrypt and decrypt the data and files you create. In addition, make sure you adopt [secure policies](../security.md) for handling data to reduce the likelihood of a malicious attack gaining access to that data.

- When serializing data, adopt [secure coding](../foundation/nssecurecoding.md) for all of your custom data types.
- [Encrypt data](../cryptokit.md) before you save it to disk, or apply [file protection attributes](../foundation/fileprotectiontype.md) to the files you write to disk.
- Store passwords, cryptographic keys, certificates, secret information, and other small chunks of sensitive data in the device [Keychain](../security/keychain-services.md).
- Store data files in your app’s container directory, which other apps can’t access by default.
- Validate all data you receive from external sources before incorporating it into your data structures.
