> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/javascriptcore/jsmanagedvalue/value](https://developer.apple.com/documentation/javascriptcore/jsmanagedvalue/value)

# value (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The managed value’s underlying JavaScript value.

## Declaration

```swift
var value: JSValue! { get }
```

<a id="Discussion"></a>

## Discussion

If the JavaScript garbage collector removes the underlying value, this property becomes `nil`.

# value (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.0+ · visionOS 1.0+

The managed value’s underlying JavaScript value.

## Declaration

```objectivec
@property (strong, readonly) JSValue * value;
```

<a id="Discussion"></a>

## Discussion

If the JavaScript garbage collector removes the underlying value, this property becomes `nil`.
