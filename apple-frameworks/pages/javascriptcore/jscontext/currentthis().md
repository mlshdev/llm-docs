> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/currentthis()](https://developer.apple.com/documentation/javascriptcore/jscontext/currentthis())

# currentThis() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns the value of the `this` keyword in currently executing JavaScript code.

## Declaration

```swift
class func currentThis() -> JSValue!
```

<a id="return-value"></a>

## Return Value

The current value of the JavaScript `this` keyword, or `nil` if not within native code called from JavaScript.

<a id="Discussion"></a>

## Discussion

Call this method within an Objective-C or Swift block or method invoked from within JavaScript to obtain a [JSValue](../jsvalue.md) object representing the current value of the `this` keyword in that JavaScript code.

If not currently in code invoked as a callback from JavaScript, this method returns `nil`.

## See Also

### Inspecting callback state in a running context

- [current()](current%28%29.md): Returns the context currently executing JavaScript code.
- [currentCallee()](currentcallee%28%29.md): Returns the currently executing JavaScript function.
- [currentArguments()](currentarguments%28%29.md): Returns the arguments to the current native callback from JavaScript code.

# currentThis (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns the value of the `this` keyword in currently executing JavaScript code.

## Declaration

```objectivec
+ (JSValue *) currentThis;
```

<a id="return-value"></a>

## Return Value

The current value of the JavaScript `this` keyword, or `nil` if not within native code called from JavaScript.

<a id="Discussion"></a>

## Discussion

Call this method within an Objective-C or Swift block or method invoked from within JavaScript to obtain a [JSValue](../jsvalue.md) object representing the current value of the `this` keyword in that JavaScript code.

If not currently in code invoked as a callback from JavaScript, this method returns `nil`.

## See Also

### Inspecting callback state in a running context

- [currentContext](current%28%29.md): Returns the context currently executing JavaScript code.
- [currentCallee](currentcallee%28%29.md): Returns the currently executing JavaScript function.
- [currentArguments](currentarguments%28%29.md): Returns the arguments to the current native callback from JavaScript code.
