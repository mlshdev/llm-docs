> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/current()](https://developer.apple.com/documentation/javascriptcore/jscontext/current())

# current() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns the context currently executing JavaScript code.

## Declaration

```swift
class func current() -> JSContext!
```

<a id="return-value"></a>

## Return Value

The currently executing context, or `nil` if not within native code called from JavaScript.

<a id="Discussion"></a>

## Discussion

Call this method within an Objective-C or Swift block or method invoked from within JavaScript to obtain the [JSContext](../jscontext.md) object responsible for executing that Javascript code.

If not currently in code invoked as a callback from JavaScript, this method returns `nil`.

## See Also

### Inspecting callback state in a running context

- [currentCallee()](currentcallee%28%29.md): Returns the currently executing JavaScript function.
- [currentThis()](currentthis%28%29.md): Returns the value of the `this` keyword in currently executing JavaScript code.
- [currentArguments()](currentarguments%28%29.md): Returns the arguments to the current native callback from JavaScript code.

# currentContext (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns the context currently executing JavaScript code.

## Declaration

```objectivec
+ (JSContext *) currentContext;
```

<a id="return-value"></a>

## Return Value

The currently executing context, or `nil` if not within native code called from JavaScript.

<a id="Discussion"></a>

## Discussion

Call this method within an Objective-C or Swift block or method invoked from within JavaScript to obtain the [JSContext](../jscontext.md) object responsible for executing that Javascript code.

If not currently in code invoked as a callback from JavaScript, this method returns `nil`.

## See Also

### Inspecting callback state in a running context

- [currentCallee](currentcallee%28%29.md): Returns the currently executing JavaScript function.
- [currentThis](currentthis%28%29.md): Returns the value of the `this` keyword in currently executing JavaScript code.
- [currentArguments](currentarguments%28%29.md): Returns the arguments to the current native callback from JavaScript code.
