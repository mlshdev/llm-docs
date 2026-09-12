> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/bool](https://developer.apple.com/documentation/swift/bool)

# Bool

**Framework:** Swift  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A value type whose instances are either `true` or `false`.

## Declaration

```swift
@frozen struct Bool
```

<a id="overview"></a>

## Overview

`Bool` represents Boolean values in Swift. Create instances of `Bool` by using one of the Boolean literals `true` or `false`, or by assigning the result of a Boolean method or operation to a variable or constant.

```swift
var godotHasArrived = false

let numbers = 1...5
let containsTen = numbers.contains(10)
print(containsTen)
// Prints "false"

let (a, b) = (100, 101)
let aFirst = a < b
print(aFirst)
// Prints "true"
```

Swift uses only simple Boolean values in conditional contexts to help avoid accidental programming errors and to help maintain the clarity of each control statement. Unlike in other programming languages, in Swift, integers and strings cannot be used where a Boolean value is required.

For example, the following code sample does not compile, because it attempts to use the integer `i` in a logical context:

```swift
var i = 5
while i {
    print(i)
    i -= 1
}
// error: Cannot convert value of type 'Int' to expected condition type 'Bool'
```

The correct approach in Swift is to compare the `i` value with zero in the `while` statement.

```swift
while i != 0 {
    print(i)
    i -= 1
}
```

<a id="Using-Imported-Boolean-values"></a>

## Using Imported Boolean values

The C `bool` and `Boolean` types and the Objective-C `BOOL` type are all bridged into Swift as `Bool`. The single `Bool` type in Swift guarantees that functions, methods, and properties imported from C and Objective-C have a consistent type interface.

## Topics

### Comparing Boolean Values

- [==(\_:\_:)](bool/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.
- [!=(\_:\_:)](bool/!=%28____%29.md): Returns a Boolean value indicating whether two values are not equal.

### Transforming a Boolean

- [toggle()](bool/toggle%28%29.md): Toggles the Boolean variable’s value.
- [!(\_:)](bool/!%28__%29.md): Performs a logical NOT operation on a Boolean value.
- [||(\_:\_:)](bool/__%28____%29.md): Performs a logical OR operation on two Boolean values.
- [&&(\_:\_:)](bool/&&%28____%29.md): Performs a logical AND operation on two Boolean values.

### Creating a Random Value

- [random()](bool/random%28%29.md): Returns a random Boolean value.
- [random(using:)](bool/random%28using_%29.md): Returns a random Boolean value, using the given generator as a source for randomness.

### Describing a Boolean

- [description](bool/description.md): A textual representation of the Boolean value.

### Inspecting a Boolean

- [customMirror](bool/custommirror.md): A mirror that reflects the `Bool` instance.
- [customPlaygroundQuickLook](bool/customplaygroundquicklook.md): Deprecated. A custom playground Quick Look for the `Bool` instance.
- [hashValue](bool/hashvalue.md): The hash value.
- [hash(into:)](bool/hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Creating a Boolean From Another Value

- [init(\_:)](bool/init%28__%29-25sp9.md): Creates an instance equal to the given Boolean value.
- [init(\_:)](bool/init%28__%29-83vgw.md): Creates a new Boolean value from the given string.

### Converting an NSNumber to a Boolean

- [init(\_:)](bool/init%28__%29-3mody.md): Deprecated.
- [init(exactly:)](bool/init%28exactly_%29.md)
- [init(truncating:)](bool/init%28truncating_%29.md)

### Encoding and Decoding

- [init(from:)](bool/init%28from_%29.md): Creates a new instance by decoding from the given decoder.
- [encode(to:)](bool/encode%28to_%29.md): Encodes this value into the given encoder.

### Infrequently Used Intializers

- [init()](bool/init%28%29.md): Creates an instance initialized to `false`.
- [init(booleanLiteral:)](bool/init%28booleanliteral_%29.md): Creates an instance initialized to the specified Boolean literal.

### Boolean Literals

- [true](true.md): A true value.
- [false](false.md): A false value.

### Structures

- [Bool.IntentDisplayName](bool/intentdisplayname.md)

### Type Aliases

- [Bool.Specification](bool/specification.md)
- [Bool.UnwrappedType](bool/unwrappedtype.md)
- [Bool.ValueType](bool/valuetype.md)

### Type Properties

- [defaultResolverSpecification](bool/defaultresolverspecification.md)

### Default Implementations

- [AtomicRepresentable Implementations](bool/atomicrepresentable-implementations.md)
- [CustomReflectable Implementations](bool/customreflectable-implementations.md)
- [CustomStringConvertible Implementations](bool/customstringconvertible-implementations.md)
- [Decodable Implementations](bool/decodable-implementations.md)
- [Encodable Implementations](bool/encodable-implementations.md)
- [Equatable Implementations](bool/equatable-implementations.md)
- [ExpressibleByBooleanLiteral Implementations](bool/expressiblebybooleanliteral-implementations.md)
- [Hashable Implementations](bool/hashable-implementations.md)
- [LosslessStringConvertible Implementations](bool/losslessstringconvertible-implementations.md)

## Relationships

### Conforms To

- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [BNNSScalar](https://developer.apple.com/documentation/accelerate/bnnsscalar)
- [BindableData](https://developer.apple.com/documentation/realitykit/bindabledata)
- [BitwiseCopyable](bitwisecopyable.md)
- [CKRecordValueProtocol](https://developer.apple.com/documentation/cloudkit/ckrecordvalueprotocol)
- [CVAttachmentValueRepresentable](https://developer.apple.com/documentation/corevideo/cvattachmentvaluerepresentable)
- [CVarArg](cvararg.md)
- [ConvertibleFromGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertiblefromgeneratedcontent)
- [ConvertibleToBytes](convertibletobytes.md)
- [ConvertibleToGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertibletogeneratedcontent)
- [Copyable](copyable.md)
- [CustomReflectable](customreflectable.md)
- [CustomStringConvertible](customstringconvertible.md)
- [Decodable](decodable.md)
- [Encodable](encodable.md)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByBooleanLiteral](expressiblebybooleanliteral.md)
- [Generable](https://developer.apple.com/documentation/foundationmodels/generable)
- [Hashable](hashable.md)
- [InstructionsRepresentable](https://developer.apple.com/documentation/foundationmodels/instructionsrepresentable)
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [LosslessStringConvertible](losslessstringconvertible.md)
- [MLDataValueConvertible](https://developer.apple.com/documentation/createml/mldatavalueconvertible)
- [MLTensorScalar](https://developer.apple.com/documentation/coreml/mltensorscalar)
- [MusicLibraryRequestFilterValueEquatable](https://developer.apple.com/documentation/musickit/musiclibraryrequestfiltervalueequatable)
- [PromptRepresentable](https://developer.apple.com/documentation/foundationmodels/promptrepresentable)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [USDPrim.Attribute.Value](https://developer.apple.com/documentation/usdkit/usdprim/attribute/value)
- [USDStage.Object.MetadataValue](https://developer.apple.com/documentation/usdkit/usdstage/object/metadatavalue)
- [USDValueProtocol](https://developer.apple.com/documentation/usdkit/usdvalueprotocol)
