> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsvalue/init(size:incontext:)](https://developer.apple.com/documentation/javascriptcore/jsvalue/init(size:incontext:))

# init(size:inContext:)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript representation of the specified width and height.

## Declaration

```swift
init!(size: CGSize, inContext context: JSContext!)
```

## Parameters

- `size`: A CoreGraphics size structure.
- `context`: The JavaScript context in which to create the value.

<a id="return-value"></a>

## Return Value

A JavaScript object representing the specified size.

<a id="Discussion"></a>

## Discussion

Converting a rectangle creates a JavaScript object value with fields named `width` and `height`.

## See Also

### Creating JavaScript Values

- [init(object:in:)](init%28object_in_%29.md): Creates a JavaScript value by converting the specified native object.
- [init(bool:in:)](init%28bool_in_%29.md): Creates a JavaScript representation of the specified Boolean value.
- [init(double:in:)](init%28double_in_%29.md): Creates a JavaScript representation of the specified floating-point value.
- [init(int32:in:)](init%28int32_in_%29.md): Creates a JavaScript representation of the specified signed integer value.
- [init(uInt32:in:)](init%28uint32_in_%29.md): Creates a JavaScript representation of the specified unsigned integer value.
- [init(newObjectIn:)](init%28newobjectin_%29.md): Creates a new, empty JavaScript object value.
- [init(newArrayIn:)](init%28newarrayin_%29.md): Creates a new, empty JavaScript array value.
- [init(newRegularExpressionFromPattern:flags:in:)](init%28newregularexpressionfrompattern_flags_in_%29.md): Creates a JavaScript regular expression value from the specified pattern.
- [init(newErrorFromMessage:in:)](init%28newerrorfrommessage_in_%29.md): Creates a JavaScript error value with the specified error message.
- [init(undefinedIn:)](init%28undefinedin_%29.md): Creates a JavaScript `undefined` value.
- [init(nullIn:)](init%28nullin_%29.md): Creates a JavaScript `null` value.
- [init(point:inContext:)](init%28point_incontext_%29.md): Creates a JavaScript representation of the specified point.
- [init(range:inContext:)](init%28range_incontext_%29.md): Creates a JavaScript representation of the specified range.
- [init(rect:inContext:)](init%28rect_incontext_%29.md): Creates a JavaScript representation of the specified rectangle.
- [init(newSymbolFromDescription:in:)](init%28newsymbolfromdescription_in_%29.md): Creates a unique symbol object.
