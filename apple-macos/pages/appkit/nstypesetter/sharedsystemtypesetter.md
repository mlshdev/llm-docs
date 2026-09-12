> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/sharedsystemtypesetter](https://developer.apple.com/documentation/appkit/nstypesetter/sharedsystemtypesetter)

# sharedSystemTypesetter (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns a shared instance of a reentrant typesetter.

## Declaration

```swift
class var sharedSystemTypesetter: NSTypesetter { get }
```

<a id="return-value"></a>

## Return Value

The shared system typesetter. This typesetter is reentrant.

## See Also

### Related Documentation

- [NSATSTypesetter](../nsatstypesetter.md): A concrete typesetter object that places glyphs during the text layout process.

### Getting a typesetter

- [sharedSystemTypesetter(for:)](sharedsystemtypesetter%28for_%29.md): Returns a shared instance of a reentrant typesetter that implements typesetting with the specified behavior.

# sharedSystemTypesetter (Objective-C)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Returns a shared instance of a reentrant typesetter.

## Declaration

```objectivec
@property (class, strong, readonly) NSTypesetter * sharedSystemTypesetter;
```

<a id="return-value"></a>

## Return Value

The shared system typesetter. This typesetter is reentrant.

## See Also

### Related Documentation

- [NSATSTypesetter](../nsatstypesetter.md): A concrete typesetter object that places glyphs during the text layout process.

### Getting a typesetter

- [sharedSystemTypesetterForBehavior:](sharedsystemtypesetter%28for_%29.md): Returns a shared instance of a reentrant typesetter that implements typesetting with the specified behavior.
