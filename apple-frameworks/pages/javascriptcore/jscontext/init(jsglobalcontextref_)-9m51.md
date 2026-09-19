> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/javascriptcore/jscontext/init(jsglobalcontextref:)-9m51

# init(JSGlobalContextRef:)

**Framework:** JavaScriptCore  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 13.0+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Creates a JavaScript context object from the equivalent C representation.

## Declaration

```swift
init!(JSGlobalContextRef jsGlobalContextRef: JSGlobalContextRef!)
```

## Parameters

- `jsGlobalContextRef`: A C JavaScript context reference.

<a id="return-value"></a>

## Return Value

A JavaScript context object representing the same context.

<a id="Discussion"></a>

## Discussion

See `JSContextRef` for the C JavaScriptCore API.

## See Also

### Working with the C JavaScriptCore API

- [jsGlobalContextRef](jsglobalcontextref.md): Returns the C representation of the JavaScript context.
