> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/currentarguments()](https://developer.apple.com/documentation/javascriptcore/jscontext/currentarguments())

# currentArguments() (Swift)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns the arguments to the current native callback from JavaScript code.

## Declaration

```swift
class func currentArguments() -> [Any]!
```

<a id="return-value"></a>

## Return Value

The current callback arguments, or `nil` if not within native code called from JavaScript.

<a id="Discussion"></a>

## Discussion

Call this method within an Objective-C or Swift block or method invoked from within JavaScript to obtain an array of [JSValue](../jsvalue.md) objects representing the arguments to the JavaScript function responsible for that callback.

If not currently in code invoked as a callback from JavaScript, this method returns `nil`.

## See Also

### Inspecting callback state in a running context

- [current()](current%28%29.md): Returns the context currently executing JavaScript code.
- [currentCallee()](currentcallee%28%29.md): Returns the currently executing JavaScript function.
- [currentThis()](currentthis%28%29.md): Returns the value of the `this` keyword in currently executing JavaScript code.

# currentArguments (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Type Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

Returns the arguments to the current native callback from JavaScript code.

## Declaration

```objectivec
+ (NSArray *) currentArguments;
```

<a id="return-value"></a>

## Return Value

The current callback arguments, or `nil` if not within native code called from JavaScript.

<a id="Discussion"></a>

## Discussion

Call this method within an Objective-C or Swift block or method invoked from within JavaScript to obtain an array of [JSValue](../jsvalue.md) objects representing the arguments to the JavaScript function responsible for that callback.

If not currently in code invoked as a callback from JavaScript, this method returns `nil`.

## See Also

### Inspecting callback state in a running context

- [currentContext](current%28%29.md): Returns the context currently executing JavaScript code.
- [currentCallee](currentcallee%28%29.md): Returns the currently executing JavaScript function.
- [currentThis](currentthis%28%29.md): Returns the value of the `this` keyword in currently executing JavaScript code.
