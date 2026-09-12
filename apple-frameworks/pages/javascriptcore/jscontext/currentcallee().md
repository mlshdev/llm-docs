> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/currentcallee()](https://developer.apple.com/documentation/javascriptcore/jscontext/currentcallee())

# currentCallee() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Returns the currently executing JavaScript function.

## Declaration

```swift
class func currentCallee() -> JSValue!
```

<a id="return-value"></a>

## Return Value

The currently executing JavaScript function, or `nil` if not within native code called from JavaScript.

<a id="Discussion"></a>

## Discussion

Call this method within an Objective-C or Swift block or method invoked from within JavaScript to obtain a [JSValue](../jsvalue.md) object representing the JavaScript function responsible for executing that code.

If not currently in code invoked as a callback from JavaScript, this method returns `nil`.

## See Also

### Inspecting callback state in a running context

- [current()](current%28%29.md): Returns the context currently executing JavaScript code.
- [currentThis()](currentthis%28%29.md): Returns the value of the `this` keyword in currently executing JavaScript code.
- [currentArguments()](currentarguments%28%29.md): Returns the arguments to the current native callback from JavaScript code.

# currentCallee (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+

Returns the currently executing JavaScript function.

## Declaration

```objectivec
+ (JSValue *) currentCallee;
```

<a id="return-value"></a>

## Return Value

The currently executing JavaScript function, or `nil` if not within native code called from JavaScript.

<a id="Discussion"></a>

## Discussion

Call this method within an Objective-C or Swift block or method invoked from within JavaScript to obtain a [JSValue](../jsvalue.md) object representing the JavaScript function responsible for executing that code.

If not currently in code invoked as a callback from JavaScript, this method returns `nil`.

## See Also

### Inspecting callback state in a running context

- [currentContext](current%28%29.md): Returns the context currently executing JavaScript code.
- [currentThis](currentthis%28%29.md): Returns the value of the `this` keyword in currently executing JavaScript code.
- [currentArguments](currentarguments%28%29.md): Returns the arguments to the current native callback from JavaScript code.
