> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/clockkit/clktextprovider/init(format:_:)](https://developer.apple.com/documentation/clockkit/clktextprovider/init(format:_:))

# init(format:\_:)

**Framework:** ClockKit  
**Kind:** Initializer  
**Availability:** watchOS 6.0+ (deprecated in 27.0)

Creates and returns a text provider built from the specified format string.

> On watchOS 9.0 or later, use WidgetKit instead

## Declaration

```swift
convenience init(format: String, _ args: any CVarArg...)
```

## Parameters

- `format`: A format string to use when building the text provider. To insert content from another text provider into the string, use the `%@` placeholder. For more information and examples about the placeholders you can use in this string, see [Formatting String Objects](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/Strings/Articles/FormatStrings.html#//apple_ref/doc/uid/20000943) and [String Format Specifiers](https://developer.apple.com/library/archive/documentation/CoreFoundation/Conceptual/CFStrings/formatSpecifiers.html#//apple_ref/doc/uid/TP40004265). This parameter must not be `nil`.
- `args`: A comma-separated list of arguments to substitute into `format`.

<a id="return-value"></a>

## Return Value

A text provider object built from the specified arguments.

<a id="Discussion"></a>

## Discussion

Use this method to create a text provider comprising text and the content of other objects, including other text providers.
