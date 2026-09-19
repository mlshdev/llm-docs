> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/javascriptcore/jsvalue/jsvalueref

# jsValueRef (Swift)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the C representation of the JavaScript value.

## Declaration

```swift
var jsValueRef: JSValueRef! { get }
```

<a id="Discussion"></a>

## Discussion

See `JSValueRef` for the C JavaScriptCore API.

## See Also

### Working with the C JavaScriptCore API

- [init(JSValueRef:inContext:)](init%28jsvalueref_incontext_%29.md): Creates a JavaScript value object from the equivalent C representation.

# JSValueRef (Objective-C)

**Framework:** JavaScriptCore  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Returns the C representation of the JavaScript value.

## Declaration

```objectivec
@property (readonly) JSValueRef JSValueRef;
```

<a id="Discussion"></a>

## Discussion

See `JSValueRef` for the C JavaScriptCore API.
