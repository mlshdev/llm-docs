> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jscontext/setobject(_:forkeyedsubscript:)](https://developer.apple.com/documentation/javascriptcore/jscontext/setobject(_:forkeyedsubscript:))

# setObject(\_:forKeyedSubscript:) (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the specified JavaScript property of the context’s global object, allowing subscript setter syntax.

## Declaration

```swift
func setObject(_ object: Any!, forKeyedSubscript key: (any NSCopying & NSObjectProtocol)!)
```

## Parameters

- `object`: The value to set for the JavaScript property.
- `key`: The JavaScript property name to use in the context’s global JavaScript object.

<a id="Discussion"></a>

## Discussion

This method first constructs a [JSValue](../jsvalue.md) object from the `key` parameter, then uses that value in JavaScript to set the property in the context’s global object.

Use this method (or Objective-C subscript syntax) to bridge native objects or functions for use in JavaScript. For example, the following code creates a JavaScript function whose implementation is an Objective-C block:

```objc
JSContext *context = [[JSContext alloc] init];
context[@"makeNSColor"] = ^(NSDictionary *rgb){
    float r = rgb[@"red"].floatValue;
    float g = rgb[@"green"].floatValue;
    float b = rgb[@"blue"].floatValue;
    return [NSColor colorWithRed:(r / 255.f) green:(g / 255.f) blue:(b / 255.f) alpha:1.0];
};
```

## See Also

### Accessing JavaScript global state with subscripts

- [objectForKeyedSubscript(\_:)](objectforkeyedsubscript%28__%29.md): Returns the value of the specified JavaScript property in the context’s global object, allowing subscript getter syntax.

# setObject:forKeyedSubscript: (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Sets the specified JavaScript property of the context’s global object, allowing subscript setter syntax.

## Declaration

```objectivec
- (void) setObject:(id) object forKeyedSubscript:(NSObject<NSCopying> *) key;
```

## Parameters

- `object`: The value to set for the JavaScript property.
- `key`: The JavaScript property name to use in the context’s global JavaScript object.

<a id="Discussion"></a>

## Discussion

This method first constructs a [JSValue](../jsvalue.md) object from the `key` parameter, then uses that value in JavaScript to set the property in the context’s global object.

Use this method (or Objective-C subscript syntax) to bridge native objects or functions for use in JavaScript. For example, the following code creates a JavaScript function whose implementation is an Objective-C block:

```objc
JSContext *context = [[JSContext alloc] init];
context[@"makeNSColor"] = ^(NSDictionary *rgb){
    float r = rgb[@"red"].floatValue;
    float g = rgb[@"green"].floatValue;
    float b = rgb[@"blue"].floatValue;
    return [NSColor colorWithRed:(r / 255.f) green:(g / 255.f) blue:(b / 255.f) alpha:1.0];
};
```

## See Also

### Accessing JavaScript global state with subscripts

- [objectForKeyedSubscript:](objectforkeyedsubscript%28__%29.md): Returns the value of the specified JavaScript property in the context’s global object, allowing subscript getter syntax.
