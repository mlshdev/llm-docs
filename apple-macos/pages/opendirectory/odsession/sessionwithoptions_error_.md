> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/opendirectory/odsession/sessionwithoptions:error:](https://developer.apple.com/documentation/opendirectory/odsession/sessionwithoptions:error:)

# sessionWithOptions:error:

**Interface language:** Objective-C

**Framework:** Open Directory  
**Kind:** Type Method  
**Availability:** Mac Catalyst · macOS 10.6+

Returns an autoreleased session object directed over proxy to another host.

## Declaration

```objectivec
+ (instancetype) sessionWithOptions:(NSDictionary *) inOptions error:(NSError **) outError;
```

## Parameters

- `inOptions`: A dictionary of options to associate with the session. Can be `nil`.
- `outError`: An error reference for error details. Can be `nil`.

<a id="return-value"></a>

## Return Value

The initialized session object.

## See Also

### Related Documentation

- [ODSession](../odsession.md): An `ODSession` object serves as a Cocoa wrapper for an Open Directory session.

### Creating and Accessing Sessions

- [defaultSession](default%28%29.md): Returns a shared instance of the local session.
- [initWithOptions:error:](init%28options_%29.md): Creates a session object directed over proxy to another host.
