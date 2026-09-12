> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/init(newregularexpressionfrompattern:flags:in:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/init(newregularexpressionfrompattern:flags:in:))

# init(newRegularExpressionFromPattern:flags:in:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript regular expression value from the specified pattern.

## Declaration

```swift
init!(newRegularExpressionFromPattern pattern: String!, flags: String!, in context: JSContext!)
```

## Parameters

- `pattern`: A string to be interpreted as a regular expression pattern.
- `flags`: A combination of zero or more single-letter flags specifying search options.
- `context`: The JavaScript context in which to create the value.

<a id="return-value"></a>

## Return Value

A new JavaScript regular expression object.

<a id="Discussion"></a>

## Discussion

Calling this method creates a JavaScript `RegExp` object, and is equivalent to declaring a regular expression literal (such as `/ab+c/i`) or calling the `RegExp` constructor (for example, `new RegExp("ab+c", "i")`) in JavaScript.

The `flags` parameter can include any of the following options:

- `g` (global match): match all occurrences of the pattern in a string, not just the first.
- `i` (ignore case): perform case-insensitive search.
- `m` (multiline): treat the `^` and `$` regular expression tokens as matching the start or end of any line in a string (as delimited by newline or return characters), not just the start or end of the entire string.

## See Also

### Creating JavaScript Values

- [init(object:in:)](init%28object_in_%29.md): Creates a JavaScript value by converting the specified native object.
- [init(bool:in:)](init%28bool_in_%29.md): Creates a JavaScript representation of the specified Boolean value.
- [init(double:in:)](init%28double_in_%29.md): Creates a JavaScript representation of the specified floating-point value.
- [init(int32:in:)](init%28int32_in_%29.md): Creates a JavaScript representation of the specified signed integer value.
- [init(uInt32:in:)](init%28uint32_in_%29.md): Creates a JavaScript representation of the specified unsigned integer value.
- [init(newObjectIn:)](init%28newobjectin_%29.md): Creates a new, empty JavaScript object value.
- [init(newArrayIn:)](init%28newarrayin_%29.md): Creates a new, empty JavaScript array value.
- [init(newErrorFromMessage:in:)](init%28newerrorfrommessage_in_%29.md): Creates a JavaScript error value with the specified error message.
- [init(undefinedIn:)](init%28undefinedin_%29.md): Creates a JavaScript `undefined` value.
- [init(nullIn:)](init%28nullin_%29.md): Creates a JavaScript `null` value.
- [init(point:inContext:)](init%28point_incontext_%29.md): Creates a JavaScript representation of the specified point.
- [init(range:inContext:)](init%28range_incontext_%29.md): Creates a JavaScript representation of the specified range.
- [init(rect:inContext:)](init%28rect_incontext_%29.md): Creates a JavaScript representation of the specified rectangle.
- [init(size:inContext:)](init%28size_incontext_%29.md): Creates a JavaScript representation of the specified width and height.
- [init(newSymbolFromDescription:in:)](init%28newsymbolfromdescription_in_%29.md): Creates a unique symbol object.

# valueWithNewRegularExpressionFromPattern:flags:inContext: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript regular expression value from the specified pattern.

## Declaration

```objectivec
+ (JSValue *) valueWithNewRegularExpressionFromPattern:(NSString *) pattern flags:(NSString *) flags inContext:(JSContext *) context;
```

## Parameters

- `pattern`: A string to be interpreted as a regular expression pattern.
- `flags`: A combination of zero or more single-letter flags specifying search options.
- `context`: The JavaScript context in which to create the value.

<a id="return-value"></a>

## Return Value

A new JavaScript regular expression object.

<a id="Discussion"></a>

## Discussion

Calling this method creates a JavaScript `RegExp` object, and is equivalent to declaring a regular expression literal (such as `/ab+c/i`) or calling the `RegExp` constructor (for example, `new RegExp("ab+c", "i")`) in JavaScript.

The `flags` parameter can include any of the following options:

- `g` (global match): match all occurrences of the pattern in a string, not just the first.
- `i` (ignore case): perform case-insensitive search.
- `m` (multiline): treat the `^` and `$` regular expression tokens as matching the start or end of any line in a string (as delimited by newline or return characters), not just the start or end of the entire string.

## See Also

### Creating JavaScript Values

- [valueWithObject:inContext:](init%28object_in_%29.md): Creates a JavaScript value by converting the specified native object.
- [valueWithBool:inContext:](init%28bool_in_%29.md): Creates a JavaScript representation of the specified Boolean value.
- [valueWithDouble:inContext:](init%28double_in_%29.md): Creates a JavaScript representation of the specified floating-point value.
- [valueWithInt32:inContext:](init%28int32_in_%29.md): Creates a JavaScript representation of the specified signed integer value.
- [valueWithUInt32:inContext:](init%28uint32_in_%29.md): Creates a JavaScript representation of the specified unsigned integer value.
- [valueWithNewObjectInContext:](init%28newobjectin_%29.md): Creates a new, empty JavaScript object value.
- [valueWithNewArrayInContext:](init%28newarrayin_%29.md): Creates a new, empty JavaScript array value.
- [valueWithNewErrorFromMessage:inContext:](init%28newerrorfrommessage_in_%29.md): Creates a JavaScript error value with the specified error message.
- [valueWithUndefinedInContext:](init%28undefinedin_%29.md): Creates a JavaScript `undefined` value.
- [valueWithNullInContext:](init%28nullin_%29.md): Creates a JavaScript `null` value.
- [valueWithNewSymbolFromDescription:inContext:](init%28newsymbolfromdescription_in_%29.md): Creates a unique symbol object.
- [valueWithNewPromiseInContext:fromExecutor:](init%28newpromisein_fromexecutor_%29.md): Creates a promise object using the specified executor callback.
- [valueWithNewPromiseRejectedWithReason:inContext:](init%28newpromiserejectedwithreason_in_%29.md): Creates a rejected promise object with the specified value.
- [valueWithNewPromiseResolvedWithResult:inContext:](init%28newpromiseresolvedwithresult_in_%29.md): Creates a resolved promise object with the specified value.
