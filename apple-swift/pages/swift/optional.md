> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/optional](https://developer.apple.com/documentation/swift/optional)

# Optional

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A type that represents either a wrapped value or the absence of a value.

## Declaration

```swift
@frozen enum Optional<Wrapped> where Wrapped : ~Copyable, Wrapped : ~Escapable
```

<a id="overview"></a>

## Overview

You use the `Optional` type whenever you use optional values, even if you never type the word `Optional`. Swift’s type system usually shows the wrapped type’s name with a trailing question mark (`?`) instead of showing the full type name. For example, if a variable has the type `Int?`, that’s just another way of writing `Optional<Int>`. The shortened form is preferred for ease of reading and writing code.

The types of `shortForm` and `longForm` in the following code sample are the same:

```swift
let shortForm: Int? = Int("42")
let longForm: Optional<Int> = Int("42")
```

The `Optional` type is an enumeration with two cases. `Optional.none` is equivalent to the `nil` literal. `Optional.some(Wrapped)` stores a wrapped value. For example:

```swift
let number: Int? = Optional.some(42)
let noNumber: Int? = Optional.none
print(noNumber == nil)
// Prints "true"
```

You must unwrap the value of an `Optional` instance before you can use it in many contexts. Because Swift provides several ways to safely unwrap optional values, you can choose the one that helps you write clear, concise code.

The following examples use this dictionary of image names and file paths:

```swift
let imagePaths = ["star": "/glyphs/star.png",
                  "portrait": "/images/content/portrait.jpg",
                  "spacer": "/images/shared/spacer.gif"]
```

Getting a dictionary’s value using a key returns an optional value, so `imagePaths["star"]` has type `Optional<String>` or, written in the preferred manner, `String?`.

<a id="Optional-Binding"></a>

## Optional Binding

To conditionally bind the wrapped value of an `Optional` instance to a new variable, use one of the optional binding control structures, including `if let`, `guard let`, and `switch`.

```swift
if let starPath = imagePaths["star"] {
    print("The star image is at '\(starPath)'")
} else {
    print("Couldn't find the star image")
}
// Prints "The star image is at '/glyphs/star.png'"
```

<a id="Optional-Chaining"></a>

## Optional Chaining

To safely access the properties and methods of a wrapped instance, use the postfix optional chaining operator (postfix `?`). The following example uses optional chaining to access the `hasSuffix(_:)` method on a `String?` instance.

```swift
if imagePaths["star"]?.hasSuffix(".png") == true {
    print("The star image is in PNG format")
}
// Prints "The star image is in PNG format"
```

<a id="Using-the-Nil-Coalescing-Operator"></a>

## Using the Nil-Coalescing Operator

Use the nil-coalescing operator (`??`) to supply a default value in case the `Optional` instance is `nil`. Here a default path is supplied for an image that is missing from `imagePaths`.

```swift
let defaultImagePath = "/images/default.png"
let heartPath = imagePaths["heart"] ?? defaultImagePath
print(heartPath)
// Prints "/images/default.png"
```

The `??` operator also works with another `Optional` instance on the right-hand side. As a result, you can chain multiple `??` operators together.

```swift
let shapePath = imagePaths["cir"] ?? imagePaths["squ"] ?? defaultImagePath
print(shapePath)
// Prints "/images/default.png"
```

<a id="Unconditional-Unwrapping"></a>

## Unconditional Unwrapping

When you’re certain that an instance of `Optional` contains a value, you can unconditionally unwrap the value by using the forced unwrap operator (postfix `!`). For example, the result of the failable `Int` initializer is unconditionally unwrapped in the example below.

```swift
let number = Int("42")!
print(number)
// Prints "42"
```

You can also perform unconditional optional chaining by using the postfix `!` operator.

```swift
let isPNG = imagePaths["star"]!.hasSuffix(".png")
print(isPNG)
// Prints "true"
```

Unconditionally unwrapping a `nil` instance with `!` triggers a runtime error.

## Topics

### Creating an Optional Value

- [Optional.some(\_:)](optional/some%28__%29.md): The presence of a value, stored as `Wrapped`.
- [init(\_:)](optional/init%28__%29.md): Creates an instance that stores the given value.

### Creating a Nil Value

- [Optional.none](optional/none.md): The absence of a value.
- [init(nilLiteral:)](optional/init%28nilliteral_%29.md): Creates an instance initialized with `nil`.

### Transforming an Optional Value

- [map(\_:)](optional/map%28__%29.md): Evaluates the given closure when this `Optional` instance is not `nil`, passing the unwrapped value as a parameter.
- [flatMap(\_:)](optional/flatmap%28__%29.md): Evaluates the given closure when this `Optional` instance is not `nil`, passing the unwrapped value as a parameter.

### Coalescing Nil Values

- [??(\_:\_:)](__%28____%29-9xjze.md): Performs a nil-coalescing operation, returning the wrapped value of an `Optional` instance or a default value.
- [??(\_:\_:)](__%28____%29-1fjjj.md): Performs a nil-coalescing operation, returning the wrapped value of an `Optional` instance or a default `Optional` value.

### Comparing Optional Values

- [~=(\_:\_:)](optional/~=%28____%29.md): Returns a Boolean value indicating whether an argument matches `nil`.

### Encoding and Decoding

- [encode(to:)](optional/encode%28to_%29.md): Conforms when `Wrapped` conforms to `Encodable`. Encodes this optional value into the given encoder.
- [init(from:)](optional/init%28from_%29.md): Conforms when `Wrapped` conforms to `Decodable`. Creates a new instance by decoding from the given decoder.

### Inspecting an Optional

- [hash(into:)](optional/hash%28into_%29.md): Conforms when `Wrapped` conforms to `Hashable`. Hashes the essential components of this value by feeding them into the given hasher.
- [unsafelyUnwrapped](optional/unsafelyunwrapped.md): The wrapped value of this instance, unwrapped without checking whether the instance is `nil`.
- [debugDescription](optional/debugdescription.md): A textual representation of this instance, suitable for debugging.
- [customMirror](optional/custommirror.md): The custom mirror for this instance.

### Publishing an Optional

- [publisher](optional/publisher-swift.property.md): A Combine publisher that publishes this instance’s value to each subscriber exactly once, if it has any value at all.
- [Optional.Publisher](optional/publisher-swift.struct.md): The type of a Combine publisher that publishes the value of a Swift optional instance to each subscriber exactly once, if the instance has any value at all.

### Deprecated

- [hashValue](optional/hashvalue.md): Conforms when `Wrapped` conforms to `Hashable`. The hash value.

### Operators

- [!=(\_:\_:)](optional/!=%28____%29-6y4t6.md): Returns a Boolean value indicating whether the right-hand-side argument is not `nil`.
- [!=(\_:\_:)](optional/!=%28____%29-9e46a.md): Returns a Boolean value indicating whether the left-hand-side argument is not `nil`.
- [==(\_:\_:)](optional/==%28____%29-1j2c8.md): Returns a Boolean value indicating whether the right-hand-side argument is `nil`.
- [==(\_:\_:)](optional/==%28____%29-2tyup.md): Returns a Boolean value indicating whether the left-hand-side argument is `nil`.

### Instance Methods

- [take()](optional/take%28%29.md): Takes the wrapped value being stored in this instance and returns it while also setting the instance to `nil`. If there is no value being stored in this instance, this returns `nil` instead.

### Type Aliases

- [Optional.PartiallyGenerated](optional/partiallygenerated.md): Conforms when `Wrapped` conforms to `Generable`.
- [Optional.Specification](optional/specification.md): Conforms when `Wrapped` conforms to `_IntentValue`.
- [Optional.TableRowBody](optional/tablerowbody.md): Conforms when `Wrapped` conforms to `TableColumnContent`.
- [Optional.TicksCollection](optional/tickscollection.md): Conforms when `Wrapped` conforms to `SliderTickContent`.
- [Optional.UnwrappedType](optional/unwrappedtype.md): Conforms when `Wrapped` conforms to `_IntentValue`.
- [Optional.ValueType](optional/valuetype.md): Conforms when `Wrapped` conforms to `_IntentValue`.

### Type Properties

- [defaultResolverSpecification](optional/defaultresolverspecification.md): Conforms when `Wrapped` conforms to `_IntentValue`.

### Default Implementations

- [AtomicRepresentable Implementations](optional/atomicrepresentable-implementations.md)
- [CustomDebugStringConvertible Implementations](optional/customdebugstringconvertible-implementations.md)
- [CustomReflectable Implementations](optional/customreflectable-implementations.md)
- [Decodable Implementations](optional/decodable-implementations.md)
- [Encodable Implementations](optional/encodable-implementations.md)
- [Equatable Implementations](optional/equatable-implementations.md)
- [ExpressibleByNilLiteral Implementations](optional/expressiblebynilliteral-implementations.md)
- [Hashable Implementations](optional/hashable-implementations.md)
- [IntentValueConvertible Implementations](optional/intentvalueconvertible-implementations.md)
- [IntentValueExpressing Implementations](optional/intentvalueexpressing-implementations.md)

## Relationships

### Conforms To

- [AccessibilityRotorContent](https://developer.apple.com/documentation/swiftui/accessibilityrotorcontent)
- [AtomicRepresentable](../synchronization/atomicrepresentable.md)
- [AttachmentContent](https://developer.apple.com/documentation/realitykit/attachmentcontent)
- [AttributedTextFormattingDefinition](https://developer.apple.com/documentation/swiftui/attributedtextformattingdefinition)
- [AxisContent](https://developer.apple.com/documentation/charts/axiscontent)
- [AxisMark](https://developer.apple.com/documentation/charts/axismark)
- [BitwiseCopyable](bitwisecopyable.md)
- [Chart3DContent](https://developer.apple.com/documentation/charts/chart3dcontent)
- [ChartContent](https://developer.apple.com/documentation/charts/chartcontent)
- [Commands](https://developer.apple.com/documentation/swiftui/commands)
- [ConvertibleToGeneratedContent](https://developer.apple.com/documentation/foundationmodels/convertibletogeneratedcontent)
- [Copyable](copyable.md)
- [CustomDebugStringConvertible](customdebugstringconvertible.md)
- [CustomReflectable](customreflectable.md)
- [CustomTestStringConvertible](https://developer.apple.com/documentation/testing/customteststringconvertible)
- [CustomizableToolbarContent](https://developer.apple.com/documentation/swiftui/customizabletoolbarcontent)
- [Decodable](decodable.md)
- [DecodableWithConfiguration](https://developer.apple.com/documentation/foundation/decodablewithconfiguration)
- [DynamicInstructions](https://developer.apple.com/documentation/foundationmodels/dynamicinstructions)
- [Encodable](encodable.md)
- [EncodableWithConfiguration](https://developer.apple.com/documentation/foundation/encodablewithconfiguration)
- [Equatable](equatable.md)
- [Escapable](escapable.md)
- [ExpressibleByNilLiteral](expressiblebynilliteral.md)
- [Gesture](https://developer.apple.com/documentation/swiftui/gesture)
- [Hashable](hashable.md)
- [InstructionsRepresentable](https://developer.apple.com/documentation/foundationmodels/instructionsrepresentable)
- [IntentValueConvertible](https://developer.apple.com/documentation/appintents/intentvalueconvertible)
- [IntentValueExpressing](https://developer.apple.com/documentation/appintents/intentvalueexpressing)
- [MapContent](https://developer.apple.com/documentation/mapkit/mapcontent)
- [PromptRepresentable](https://developer.apple.com/documentation/foundationmodels/promptrepresentable)
- [RelationshipCollection](https://developer.apple.com/documentation/swiftdata/relationshipcollection)
- [SceneAccessoryContent](https://developer.apple.com/documentation/swiftui/sceneaccessorycontent)
- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)
- [SliderTickContent](https://developer.apple.com/documentation/swiftui/slidertickcontent)
- [StoreContent](https://developer.apple.com/documentation/storekit/storecontent)
- [TabContent](https://developer.apple.com/documentation/swiftui/tabcontent)
- [TableColumnContent](https://developer.apple.com/documentation/swiftui/tablecolumncontent)
- [TableRowContent](https://developer.apple.com/documentation/swiftui/tablerowcontent)
- [ToolbarContent](https://developer.apple.com/documentation/swiftui/toolbarcontent)
- [View](https://developer.apple.com/documentation/swiftui/view)
