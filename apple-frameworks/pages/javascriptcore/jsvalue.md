> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue](https://developer.apple.com/documentation/javascriptcore/jsvalue)

# JSValue (Swift)

**Framework:** JavaScriptCore  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript value.

## Declaration

```swift
class JSValue
```

<a id="overview"></a>

## Overview

You use the [JSValue](jsvalue.md) class to convert basic values, such as numbers and strings, between JavaScript and Objective-C or Swift representations to pass data between native code and JavaScript code. You can also use this class to create JavaScript objects that wrap native objects of custom classes or JavaScript functions with implementations that native methods or blocks provide.

Each [JSValue](jsvalue.md) instance originates from a [JSContext](jscontext.md) object that represents the JavaScript execution environment containing that value. The value holds a strong reference to its [context](jsvalue/context.md) object — as long as it retains any value for a particular [JSContext](jscontext.md) instance, that context remains alive. When you invoke an instance method on a [JSValue](jsvalue.md) object, and that method returns another [JSValue](jsvalue.md) object, the returned value belongs to the same context as the original value.

Each JavaScript value also has an association (indirectly via the [context](jsvalue/context.md) property) with a specific [JSVirtualMachine](jsvirtualmachine.md) object that represents the underlying set of execution resources for its context. You can pass [JSValue](jsvalue.md) instances only to methods on [JSValue](jsvalue.md) and [JSContext](jscontext.md) instances on the same virtual machine — attempting to pass a value to a different virtual machine raises an Objective-C exception.

<a id="Convert-Between-JavaScript-and-Native-Types"></a>

### Convert Between JavaScript and Native Types

When you use the [JSValue](jsvalue.md) methods for creating, reading, and converting JavaScript values, JavaScriptCore automatically converts native values to JavaScript values and vice versa, using the rules below.

- [NSDictionary](../foundation/nsdictionary.md) objects or Swift dictionaries and the keys they contain become JavaScript objects with matching named properties and vice versa. JavaScriptCore recursively copies and converts the values for keys.
- [NSArray](../foundation/nsarray.md) objects or Swift arrays become JavaScript arrays and vice versa, with elements that JavaScriptCore recursively copies and converts.
- Objective-C blocks (or Swift closures with the `@convention(block)` attribute) become JavaScript `Function` objects, with parameter and return types that JavaScriptCore converts using the same rules as values. Converting a JavaScript function with a backing from a native block or method returns that block or method; all other JavaScript functions convert as empty dictionaries.
- For all other native object types (and class types or metatypes), JavaScriptCore creates a JavaScript wrapper object with a constructor prototype chain that reflects the native class hierarchy. By default, the JavaScript wrapper for a native object doesn’t make that object’s properties and methods available in JavaScript. To choose properties and methods for export to JavaScript, see [JSExport](jsexport.md).

When you convert an object, method, or block, JavaScriptCore implicitly converts the types and values of object properties and method parameters using the rules below:

| Objective-C (and Swift) types | JavaScript types | Notes |
| --- | --- | --- |
| `nil` | `undefined` |  |
| [NSNull](../foundation/nsnull.md) | `null` |  |
| [NSString](../foundation/nsstring.md) (Swift [String](https://developer.apple.com/documentation/swift/string)) | `String` |  |
| [NSNumber](../foundation/nsnumber.md) and primitive numeric types | `Number`, `Boolean` | Conversion is consistent with the following methods: ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) [init(int32:in:)](jsvalue/init%28int32_in_%29.md) / [toInt32()](jsvalue/toint32%28%29.md) for signed integer types ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) [init(uInt32:in:)](jsvalue/init%28uint32_in_%29.md) / [toUInt32()](jsvalue/touint32%28%29.md) for unsigned integer types ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) [init(bool:in:)](jsvalue/init%28bool_in_%29.md) / [toBool()](jsvalue/tobool%28%29.md) for Boolean types ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) [init(double:in:)](jsvalue/init%28double_in_%29.md) / [toBool()](jsvalue/tobool%28%29.md) for all other numeric types |
| [NSDictionary](../foundation/nsdictionary.md) (Swift [Dictionary](https://developer.apple.com/documentation/swift/dictionary)) | `Object` | Recursive conversion. |
| [NSArray](../foundation/nsarray.md) (Swift [Array](https://developer.apple.com/documentation/swift/array)) | `Array` | Recursive conversion. |
| [NSDate](../foundation/nsdate.md) | `Date` |  |
| Objective-C or Swift object ([objc_object](../objectivec/objc_object.md) or [AnyObject](https://developer.apple.com/documentation/swift/anyobject)) ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) Objective-C or Swift class ([Class](../objectivec/class.md) or [AnyClass](https://developer.apple.com/documentation/swift/anyclass)) | `Object` | Converts with [init(object:in:)](jsvalue/init%28object_in_%29.md) / [toObject()](jsvalue/toobject%28%29.md). |
| Structure types: ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) [NSRange](../foundation/nsrange-c.struct.md), [CGRect](../corefoundation/cgrect.md), [CGPoint](../corefoundation/cgpoint.md), [CGSize](../corefoundation/cgsize.md) | `Object` | There isn’t support for other structure types. |
| Objective-C block (Swift closure) | `Function` | Convert explicitly with [init(object:in:)](jsvalue/init%28object_in_%29.md) / [toObject()](jsvalue/toobject%28%29.md). ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) JavaScript functions don’t convert to native blocks/closures unless they already have a backing from a native block/closure. |

## Topics

### Creating JavaScript Values

- [init(object:in:)](jsvalue/init%28object_in_%29.md): Creates a JavaScript value by converting the specified native object.
- [init(bool:in:)](jsvalue/init%28bool_in_%29.md): Creates a JavaScript representation of the specified Boolean value.
- [init(double:in:)](jsvalue/init%28double_in_%29.md): Creates a JavaScript representation of the specified floating-point value.
- [init(int32:in:)](jsvalue/init%28int32_in_%29.md): Creates a JavaScript representation of the specified signed integer value.
- [init(uInt32:in:)](jsvalue/init%28uint32_in_%29.md): Creates a JavaScript representation of the specified unsigned integer value.
- [init(newObjectIn:)](jsvalue/init%28newobjectin_%29.md): Creates a new, empty JavaScript object value.
- [init(newArrayIn:)](jsvalue/init%28newarrayin_%29.md): Creates a new, empty JavaScript array value.
- [init(newRegularExpressionFromPattern:flags:in:)](jsvalue/init%28newregularexpressionfrompattern_flags_in_%29.md): Creates a JavaScript regular expression value from the specified pattern.
- [init(newErrorFromMessage:in:)](jsvalue/init%28newerrorfrommessage_in_%29.md): Creates a JavaScript error value with the specified error message.
- [init(undefinedIn:)](jsvalue/init%28undefinedin_%29.md): Creates a JavaScript `undefined` value.
- [init(nullIn:)](jsvalue/init%28nullin_%29.md): Creates a JavaScript `null` value.
- [init(point:inContext:)](jsvalue/init%28point_incontext_%29.md): Creates a JavaScript representation of the specified point.
- [init(range:inContext:)](jsvalue/init%28range_incontext_%29.md): Creates a JavaScript representation of the specified range.
- [init(rect:inContext:)](jsvalue/init%28rect_incontext_%29.md): Creates a JavaScript representation of the specified rectangle.
- [init(size:inContext:)](jsvalue/init%28size_incontext_%29.md): Creates a JavaScript representation of the specified width and height.
- [init(newSymbolFromDescription:in:)](jsvalue/init%28newsymbolfromdescription_in_%29.md): Creates a unique symbol object.
- [init(newPromiseIn:fromExecutor:)](jsvalue/init%28newpromisein_fromexecutor_%29.md): Creates a promise object using the specified executor callback.
- [init(newPromiseRejectedWithReason:in:)](jsvalue/init%28newpromiserejectedwithreason_in_%29.md): Creates a rejected promise object with the specified value.
- [init(newPromiseResolvedWithResult:in:)](jsvalue/init%28newpromiseresolvedwithresult_in_%29.md): Creates a resolved promise object with the specified value.

### Reading and Converting JavaScript Values

- [toObject()](jsvalue/toobject%28%29.md): Converts the JavaScript value to a native object.
- [toObjectOf(\_:)](jsvalue/toobjectof%28__%29.md): Converts the JavaScript value to a native object of the specified class.
- [toBool()](jsvalue/tobool%28%29.md): Converts the JavaScript value to a native Boolean value.
- [toDouble()](jsvalue/todouble%28%29.md): Converts the JavaScript value to a native floating-point value.
- [toInt32()](jsvalue/toint32%28%29.md): Converts the JavaScript value to a native signed integer value.
- [toUInt32()](jsvalue/touint32%28%29.md): Converts the JavaScript value to a native unsigned integer value.
- [toNumber()](jsvalue/tonumber%28%29.md): Converts the JavaScript value to a [NSNumber](../foundation/nsnumber.md) object.
- [toString()](jsvalue/tostring%28%29.md): Converts the JavaScript value to a native string.
- [toDate()](jsvalue/todate%28%29.md): Converts the JavaScript value to a date object.
- [toArray()](jsvalue/toarray%28%29.md): Converts the JavaScript value to an array.
- [toDictionary()](jsvalue/todictionary%28%29.md): Converts the JavaScript value to a dictionary.
- [toPoint()](jsvalue/topoint%28%29.md): Converts the value to a point structure.
- [toRange()](jsvalue/torange%28%29.md): Converts the value to a range.
- [toRect()](jsvalue/torect%28%29.md): Converts the value to a rectangle structure.
- [toSize()](jsvalue/tosize%28%29.md): Converts the value to a size.

### Determining the Type of a JavaScript Value

- [isUndefined](jsvalue/isundefined.md): A Boolean value that indicates whether the instance corresponds to the JavaScript `undefined` value.
- [isNull](jsvalue/isnull.md): A Boolean value that indicates whether the instance corresponds to the JavaScript `null` value.
- [isBoolean](jsvalue/isboolean.md): A Boolean value that indicates whether the instance is a JavaScript Boolean value.
- [isNumber](jsvalue/isnumber.md): A Boolean value that indicates whether the instance is a JavaScript numeric value.
- [isString](jsvalue/isstring.md): A Boolean value that indicates whether the instance is a JavaScript `String` object.
- [isObject](jsvalue/isobject.md): A Boolean value that indicates whether the instance is a JavaScript object.
- [isArray](jsvalue/isarray.md): A Boolean value that indicates whether the instance is a JavaScript array value.
- [isDate](jsvalue/isdate.md): A Boolean value that indicates whether the instance is a JavaScript `Date` object.
- [isSymbol](jsvalue/issymbol.md): A Boolean value that indicates whether the instance is a symbol.

### Comparing JavaScript Values

- [isEqual(to:)](jsvalue/isequal%28to_%29.md): Compares the value to another for strict equality.
- [isEqualWithTypeCoercion(to:)](jsvalue/isequalwithtypecoercion%28to_%29.md): Compares the value to another for equivalence, allowing type conversion.
- [isInstance(of:)](jsvalue/isinstance%28of_%29.md): Returns a Boolean value indicating whether the value is an instance of another JavaScript object value.

### Working with Function and Constructor Values

- [call(withArguments:)](jsvalue/call%28witharguments_%29.md): Invokes the value as a JavaScript function.
- [construct(withArguments:)](jsvalue/construct%28witharguments_%29.md): Invokes the value as a JavaScript constructor.
- [invokeMethod(\_:withArguments:)](jsvalue/invokemethod%28__witharguments_%29.md): Calls the named JavaScript method on the value.

### Working with Container Values

- [defineProperty(\_:descriptor:)](jsvalue/defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [hasProperty(\_:)](jsvalue/hasproperty%28__%29.md): Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.
- [deleteProperty(\_:)](jsvalue/deleteproperty%28__%29.md): Deletes the named property from the JavaScript object value.
- [atIndex(\_:)](jsvalue/atindex%28__%29.md): Returns the value at the specified numeric index in the JavaScript object value.
- [setValue(\_:at:)](jsvalue/setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [forProperty(\_:)](jsvalue/forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [setValue(\_:forProperty:)](jsvalue/setvalue%28__forproperty_%29.md): Sets the value of the named property in the JavaScript object value.
- [JSValueProperty](jsvalueproperty.md): A type that identifies a property of a JavaScript value.

### Accessing a Value’s JavaScript Context

- [context](jsvalue/context.md): The JavaScript context hosting this value.

### Accessing Values with Subscript Syntax

- [objectAtIndexedSubscript(\_:)](jsvalue/objectatindexedsubscript%28__%29.md): Returns the value’s JavaScript property at the specified index, allowing subscript syntax.
- [setObject(\_:atIndexedSubscript:)](jsvalue/setobject%28__atindexedsubscript_%29.md): Sets the value’s JavaScript property at the specified index, allowing subscript syntax.
- [objectForKeyedSubscript(\_:)](jsvalue/objectforkeyedsubscript%28__%29.md): Returns the value’s JavaScript property named with the specified key, allowing subscript syntax.
- [setObject(\_:forKeyedSubscript:)](jsvalue/setobject%28__forkeyedsubscript_%29.md): Sets the value’s JavaScript property named with the specified key, allowing subscript syntax.

### Working with the C JavaScriptCore API

- [jsValueRef](jsvalue/jsvalueref.md): Returns the C representation of the JavaScript value.
- [init(JSValueRef:inContext:)](jsvalue/init%28jsvalueref_incontext_%29.md): Creates a JavaScript value object from the equivalent C representation.

### Constants

- [Property Descriptor Keys](property-descriptor-keys.md): Keys for the native dictionary representation of a JavaScript property descriptor, used with the [defineProperty(\_:descriptor:)](jsvalue/defineproperty%28__descriptor_%29.md) method.

### Initializers

- [init(UInt32:inContext:)](jsvalue/init%28uint32_incontext_%29.md)
- [init(bool:inContext:)](jsvalue/init%28bool_incontext_%29.md)
- [init(double:inContext:)](jsvalue/init%28double_incontext_%29.md)
- [init(int32:inContext:)](jsvalue/init%28int32_incontext_%29.md)
- [init(jsValueRef:in:)](jsvalue/init%28jsvalueref_in_%29.md)
- [init(newArrayInContext:)](jsvalue/init%28newarrayincontext_%29.md)
- [init(newBigIntFrom:in:)](jsvalue/init%28newbigintfrom_in_%29-1f0xs.md)
- [init(newBigIntFrom:in:)](jsvalue/init%28newbigintfrom_in_%29-7worq.md)
- [init(newBigIntFrom:in:)](jsvalue/init%28newbigintfrom_in_%29-8l9iv.md)
- [init(newBigIntFrom:in:)](jsvalue/init%28newbigintfrom_in_%29-r38z.md)
- [init(newBigIntFromDouble:inContext:)](jsvalue/init%28newbigintfromdouble_incontext_%29.md)
- [init(newBigIntFromInt64:inContext:)](jsvalue/init%28newbigintfromint64_incontext_%29.md)
- [init(newBigIntFromString:inContext:)](jsvalue/init%28newbigintfromstring_incontext_%29.md)
- [init(newBigIntFromUInt64:inContext:)](jsvalue/init%28newbigintfromuint64_incontext_%29.md)
- [init(newErrorFromMessage:inContext:)](jsvalue/init%28newerrorfrommessage_incontext_%29.md)
- [init(newObjectInContext:)](jsvalue/init%28newobjectincontext_%29.md)
- [init(newPromiseInContext:fromExecutor:)](jsvalue/init%28newpromiseincontext_fromexecutor_%29.md)
- [init(newPromiseRejectedWithReason:inContext:)](jsvalue/init%28newpromiserejectedwithreason_incontext_%29.md)
- [init(newPromiseResolvedWithResult:inContext:)](jsvalue/init%28newpromiseresolvedwithresult_incontext_%29.md)
- [init(newRegularExpressionFromPattern:flags:inContext:)](jsvalue/init%28newregularexpressionfrompattern_flags_incontext_%29.md)
- [init(newSymbolFromDescription:inContext:)](jsvalue/init%28newsymbolfromdescription_incontext_%29.md)
- [init(nullInContext:)](jsvalue/init%28nullincontext_%29.md)
- [init(object:inContext:)](jsvalue/init%28object_incontext_%29.md)
- [init(point:in:)](jsvalue/init%28point_in_%29.md)
- [init(range:in:)](jsvalue/init%28range_in_%29.md)
- [init(rect:in:)](jsvalue/init%28rect_in_%29.md)
- [init(size:in:)](jsvalue/init%28size_in_%29.md)
- [init(undefinedInContext:)](jsvalue/init%28undefinedincontext_%29.md)

### Instance Properties

- [isBigInt](jsvalue/isbigint.md)

### Instance Methods

- [compare(\_:)](jsvalue/compare%28__%29-35b2t.md)
- [compare(\_:)](jsvalue/compare%28__%29-5w184.md)
- [compare(\_:)](jsvalue/compare%28__%29-64n3k.md)
- [compare(\_:)](jsvalue/compare%28__%29-9d4zq.md)
- [toInt64()](jsvalue/toint64%28%29.md)
- [toUInt64()](jsvalue/touint64%28%29.md)

### Default Implementations

- [JSValue Implementations](jsvalue/jsvalue-implementations.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### JavaScript Code

- [JSManagedValue](jsmanagedvalue.md): A JavaScript value with conditional retain behavior to provide automatic memory management.

# JSValue (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

A JavaScript value.

## Declaration

```objectivec
@interface JSValue : NSObject
```

<a id="overview"></a>

## Overview

You use the [JSValue](jsvalue.md) class to convert basic values, such as numbers and strings, between JavaScript and Objective-C or Swift representations to pass data between native code and JavaScript code. You can also use this class to create JavaScript objects that wrap native objects of custom classes or JavaScript functions with implementations that native methods or blocks provide.

Each [JSValue](jsvalue.md) instance originates from a [JSContext](jscontext.md) object that represents the JavaScript execution environment containing that value. The value holds a strong reference to its [context](jsvalue/context.md) object — as long as it retains any value for a particular [JSContext](jscontext.md) instance, that context remains alive. When you invoke an instance method on a [JSValue](jsvalue.md) object, and that method returns another [JSValue](jsvalue.md) object, the returned value belongs to the same context as the original value.

Each JavaScript value also has an association (indirectly via the [context](jsvalue/context.md) property) with a specific [JSVirtualMachine](jsvirtualmachine.md) object that represents the underlying set of execution resources for its context. You can pass [JSValue](jsvalue.md) instances only to methods on [JSValue](jsvalue.md) and [JSContext](jscontext.md) instances on the same virtual machine — attempting to pass a value to a different virtual machine raises an Objective-C exception.

<a id="Convert-Between-JavaScript-and-Native-Types"></a>

### Convert Between JavaScript and Native Types

When you use the [JSValue](jsvalue.md) methods for creating, reading, and converting JavaScript values, JavaScriptCore automatically converts native values to JavaScript values and vice versa, using the rules below.

- [NSDictionary](../foundation/nsdictionary.md) objects or Swift dictionaries and the keys they contain become JavaScript objects with matching named properties and vice versa. JavaScriptCore recursively copies and converts the values for keys.
- [NSArray](../foundation/nsarray.md) objects or Swift arrays become JavaScript arrays and vice versa, with elements that JavaScriptCore recursively copies and converts.
- Objective-C blocks (or Swift closures with the `@convention(block)` attribute) become JavaScript `Function` objects, with parameter and return types that JavaScriptCore converts using the same rules as values. Converting a JavaScript function with a backing from a native block or method returns that block or method; all other JavaScript functions convert as empty dictionaries.
- For all other native object types (and class types or metatypes), JavaScriptCore creates a JavaScript wrapper object with a constructor prototype chain that reflects the native class hierarchy. By default, the JavaScript wrapper for a native object doesn’t make that object’s properties and methods available in JavaScript. To choose properties and methods for export to JavaScript, see [JSExport](jsexport.md).

When you convert an object, method, or block, JavaScriptCore implicitly converts the types and values of object properties and method parameters using the rules below:

| Objective-C (and Swift) types | JavaScript types | Notes |
| --- | --- | --- |
| `nil` | `undefined` |  |
| [NSNull](../foundation/nsnull.md) | `null` |  |
| [NSString](../foundation/nsstring.md) (Swift [String](https://developer.apple.com/documentation/swift/string)) | `String` |  |
| [NSNumber](../foundation/nsnumber.md) and primitive numeric types | `Number`, `Boolean` | Conversion is consistent with the following methods: ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) [valueWithInt32:inContext:](jsvalue/init%28int32_in_%29.md) / [toInt32](jsvalue/toint32%28%29.md) for signed integer types ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) [valueWithUInt32:inContext:](jsvalue/init%28uint32_in_%29.md) / [toUInt32](jsvalue/touint32%28%29.md) for unsigned integer types ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) [valueWithBool:inContext:](jsvalue/init%28bool_in_%29.md) / [toBool](jsvalue/tobool%28%29.md) for Boolean types ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) [valueWithDouble:inContext:](jsvalue/init%28double_in_%29.md) / [toBool](jsvalue/tobool%28%29.md) for all other numeric types |
| [NSDictionary](../foundation/nsdictionary.md) (Swift [Dictionary](https://developer.apple.com/documentation/swift/dictionary)) | `Object` | Recursive conversion. |
| [NSArray](../foundation/nsarray.md) (Swift [Array](https://developer.apple.com/documentation/swift/array)) | `Array` | Recursive conversion. |
| [NSDate](../foundation/nsdate.md) | `Date` |  |
| Objective-C or Swift object ([objc_object](../objectivec/objc_object.md) or [AnyObject](https://developer.apple.com/documentation/swift/anyobject)) ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) Objective-C or Swift class ([Class](../objectivec/class.md) or [AnyClass](https://developer.apple.com/documentation/swift/anyclass)) | `Object` | Converts with [valueWithObject:inContext:](jsvalue/init%28object_in_%29.md) / [toObject](jsvalue/toobject%28%29.md). |
| Structure types: ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) [NSRange](../foundation/nsrange-c.struct.md), [CGRect](../corefoundation/cgrect.md), [CGPoint](../corefoundation/cgpoint.md), [CGSize](../corefoundation/cgsize.md) | `Object` | There isn’t support for other structure types. |
| Objective-C block (Swift closure) | `Function` | Convert explicitly with [valueWithObject:inContext:](jsvalue/init%28object_in_%29.md) / [toObject](jsvalue/toobject%28%29.md). ![](https://developer.apple.com/images/com.apple.javascriptcore/spacer.png) JavaScript functions don’t convert to native blocks/closures unless they already have a backing from a native block/closure. |

## Topics

### Creating JavaScript Values

- [valueWithObject:inContext:](jsvalue/init%28object_in_%29.md): Creates a JavaScript value by converting the specified native object.
- [valueWithBool:inContext:](jsvalue/init%28bool_in_%29.md): Creates a JavaScript representation of the specified Boolean value.
- [valueWithDouble:inContext:](jsvalue/init%28double_in_%29.md): Creates a JavaScript representation of the specified floating-point value.
- [valueWithInt32:inContext:](jsvalue/init%28int32_in_%29.md): Creates a JavaScript representation of the specified signed integer value.
- [valueWithUInt32:inContext:](jsvalue/init%28uint32_in_%29.md): Creates a JavaScript representation of the specified unsigned integer value.
- [valueWithNewObjectInContext:](jsvalue/init%28newobjectin_%29.md): Creates a new, empty JavaScript object value.
- [valueWithNewArrayInContext:](jsvalue/init%28newarrayin_%29.md): Creates a new, empty JavaScript array value.
- [valueWithNewRegularExpressionFromPattern:flags:inContext:](jsvalue/init%28newregularexpressionfrompattern_flags_in_%29.md): Creates a JavaScript regular expression value from the specified pattern.
- [valueWithNewErrorFromMessage:inContext:](jsvalue/init%28newerrorfrommessage_in_%29.md): Creates a JavaScript error value with the specified error message.
- [valueWithUndefinedInContext:](jsvalue/init%28undefinedin_%29.md): Creates a JavaScript `undefined` value.
- [valueWithNullInContext:](jsvalue/init%28nullin_%29.md): Creates a JavaScript `null` value.
- [valueWithNewSymbolFromDescription:inContext:](jsvalue/init%28newsymbolfromdescription_in_%29.md): Creates a unique symbol object.
- [valueWithNewPromiseInContext:fromExecutor:](jsvalue/init%28newpromisein_fromexecutor_%29.md): Creates a promise object using the specified executor callback.
- [valueWithNewPromiseRejectedWithReason:inContext:](jsvalue/init%28newpromiserejectedwithreason_in_%29.md): Creates a rejected promise object with the specified value.
- [valueWithNewPromiseResolvedWithResult:inContext:](jsvalue/init%28newpromiseresolvedwithresult_in_%29.md): Creates a resolved promise object with the specified value.

### Reading and Converting JavaScript Values

- [toObject](jsvalue/toobject%28%29.md): Converts the JavaScript value to a native object.
- [toObjectOfClass:](jsvalue/toobjectof%28__%29.md): Converts the JavaScript value to a native object of the specified class.
- [toBool](jsvalue/tobool%28%29.md): Converts the JavaScript value to a native Boolean value.
- [toDouble](jsvalue/todouble%28%29.md): Converts the JavaScript value to a native floating-point value.
- [toInt32](jsvalue/toint32%28%29.md): Converts the JavaScript value to a native signed integer value.
- [toUInt32](jsvalue/touint32%28%29.md): Converts the JavaScript value to a native unsigned integer value.
- [toNumber](jsvalue/tonumber%28%29.md): Converts the JavaScript value to a [NSNumber](../foundation/nsnumber.md) object.
- [toString](jsvalue/tostring%28%29.md): Converts the JavaScript value to a native string.
- [toDate](jsvalue/todate%28%29.md): Converts the JavaScript value to a date object.
- [toArray](jsvalue/toarray%28%29.md): Converts the JavaScript value to an array.
- [toDictionary](jsvalue/todictionary%28%29.md): Converts the JavaScript value to a dictionary.
- [toPoint](jsvalue/topoint%28%29.md): Converts the value to a point structure.
- [toRange](jsvalue/torange%28%29.md): Converts the value to a range.
- [toRect](jsvalue/torect%28%29.md): Converts the value to a rectangle structure.
- [toSize](jsvalue/tosize%28%29.md): Converts the value to a size.

### Determining the Type of a JavaScript Value

- [isUndefined](jsvalue/isundefined.md): A Boolean value that indicates whether the instance corresponds to the JavaScript `undefined` value.
- [isNull](jsvalue/isnull.md): A Boolean value that indicates whether the instance corresponds to the JavaScript `null` value.
- [isBoolean](jsvalue/isboolean.md): A Boolean value that indicates whether the instance is a JavaScript Boolean value.
- [isNumber](jsvalue/isnumber.md): A Boolean value that indicates whether the instance is a JavaScript numeric value.
- [isString](jsvalue/isstring.md): A Boolean value that indicates whether the instance is a JavaScript `String` object.
- [isObject](jsvalue/isobject.md): A Boolean value that indicates whether the instance is a JavaScript object.
- [isArray](jsvalue/isarray.md): A Boolean value that indicates whether the instance is a JavaScript array value.
- [isDate](jsvalue/isdate.md): A Boolean value that indicates whether the instance is a JavaScript `Date` object.
- [isSymbol](jsvalue/issymbol.md): A Boolean value that indicates whether the instance is a symbol.

### Comparing JavaScript Values

- [isEqualToObject:](jsvalue/isequal%28to_%29.md): Compares the value to another for strict equality.
- [isEqualWithTypeCoercionToObject:](jsvalue/isequalwithtypecoercion%28to_%29.md): Compares the value to another for equivalence, allowing type conversion.
- [isInstanceOf:](jsvalue/isinstance%28of_%29.md): Returns a Boolean value indicating whether the value is an instance of another JavaScript object value.

### Working with Function and Constructor Values

- [callWithArguments:](jsvalue/call%28witharguments_%29.md): Invokes the value as a JavaScript function.
- [constructWithArguments:](jsvalue/construct%28witharguments_%29.md): Invokes the value as a JavaScript constructor.
- [invokeMethod:withArguments:](jsvalue/invokemethod%28__witharguments_%29.md): Calls the named JavaScript method on the value.

### Working with Container Values

- [defineProperty:descriptor:](jsvalue/defineproperty%28__descriptor_%29.md): Defines a property on the JavaScript object value or modifies a property’s definition.
- [hasProperty:](jsvalue/hasproperty%28__%29.md): Returns a Boolean value indicating whether the JavaScript value has a defined property with the specified name.
- [deleteProperty:](jsvalue/deleteproperty%28__%29.md): Deletes the named property from the JavaScript object value.
- [valueAtIndex:](jsvalue/atindex%28__%29.md): Returns the value at the specified numeric index in the JavaScript object value.
- [setValue:atIndex:](jsvalue/setvalue%28__at_%29.md): Sets the value at the specified numeric index in the JavaScript object value.
- [valueForProperty:](jsvalue/forproperty%28__%29.md): Returns the value of the named property in the JavaScript object value.
- [setValue:forProperty:](jsvalue/setvalue%28__forproperty_%29.md): Sets the value of the named property in the JavaScript object value.
- [JSValueProperty](jsvalueproperty.md): A type that identifies a property of a JavaScript value.

### Accessing a Value’s JavaScript Context

- [context](jsvalue/context.md): The JavaScript context hosting this value.

### Accessing Values with Subscript Syntax

- [objectAtIndexedSubscript:](jsvalue/objectatindexedsubscript%28__%29.md): Returns the value’s JavaScript property at the specified index, allowing subscript syntax.
- [setObject:atIndexedSubscript:](jsvalue/setobject%28__atindexedsubscript_%29.md): Sets the value’s JavaScript property at the specified index, allowing subscript syntax.
- [objectForKeyedSubscript:](jsvalue/objectforkeyedsubscript%28__%29.md): Returns the value’s JavaScript property named with the specified key, allowing subscript syntax.
- [setObject:forKeyedSubscript:](jsvalue/setobject%28__forkeyedsubscript_%29.md): Sets the value’s JavaScript property named with the specified key, allowing subscript syntax.

### Working with the C JavaScriptCore API

- [JSValueRef](jsvalue/jsvalueref.md): Returns the C representation of the JavaScript value.

### Constants

- [Property Descriptor Keys](property-descriptor-keys.md): Keys for the native dictionary representation of a JavaScript property descriptor, used with the [defineProperty:descriptor:](jsvalue/defineproperty%28__descriptor_%29.md) method.

### Instance Properties

- [isBigInt](jsvalue/isbigint.md)

### Instance Methods

- [compareDouble:](jsvalue/compare%28__%29-35b2t.md)
- [compareJSValue:](jsvalue/compare%28__%29-5w184.md)
- [compareUInt64:](jsvalue/compare%28__%29-64n3k.md)
- [compareInt64:](jsvalue/compare%28__%29-9d4zq.md)
- [toInt64](jsvalue/toint64%28%29.md)
- [toUInt64](jsvalue/touint64%28%29.md)

### Type Methods

- [valueWithJSValueRef:inContext:](jsvalue/init%28jsvalueref_in_%29.md)
- [valueWithNewBigIntFromString:inContext:](jsvalue/init%28newbigintfrom_in_%29-1f0xs.md)
- [valueWithNewBigIntFromUInt64:inContext:](jsvalue/init%28newbigintfrom_in_%29-7worq.md)
- [valueWithNewBigIntFromInt64:inContext:](jsvalue/init%28newbigintfrom_in_%29-8l9iv.md)
- [valueWithNewBigIntFromDouble:inContext:](jsvalue/init%28newbigintfrom_in_%29-r38z.md)
- [valueWithPoint:inContext:](jsvalue/init%28point_in_%29.md)
- [valueWithRange:inContext:](jsvalue/init%28range_in_%29.md)
- [valueWithRect:inContext:](jsvalue/init%28rect_in_%29.md)
- [valueWithSize:inContext:](jsvalue/init%28size_in_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### JavaScript Code

- [JSManagedValue](jsmanagedvalue.md): A JavaScript value with conditional retain behavior to provide automatic memory management.
