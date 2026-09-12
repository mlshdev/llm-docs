> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshelpmanager/setcontexthelp(_:for:)](https://developer.apple.com/documentation/appkit/nshelpmanager/setcontexthelp(_:for:))

# setContextHelp(\_:for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Associates help content with an object.

## Declaration

```swift
func setContextHelp(_ attrString: NSAttributedString, for object: Any)
```

## Parameters

- `attrString`: Help content to associate with `object`.
- `object`: Object to associate with `help`.

<a id="Discussion"></a>

## Discussion

When the application enters context-sensitive help mode, if `object` is clicked, `help` appears in the context-sensitive help window.

## See Also

### Configuring Context-Sensitive Help

- [removeContextHelp(for:)](removecontexthelp%28for_%29.md): Removes the association between an object and its context-sensitive help.

# setContextHelp:forObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Associates help content with an object.

## Declaration

```objectivec
- (void) setContextHelp:(NSAttributedString *) attrString forObject:(id) object;
```

## Parameters

- `attrString`: Help content to associate with `object`.
- `object`: Object to associate with `help`.

<a id="Discussion"></a>

## Discussion

When the application enters context-sensitive help mode, if `object` is clicked, `help` appears in the context-sensitive help window.

## See Also

### Configuring Context-Sensitive Help

- [removeContextHelpForObject:](removecontexthelp%28for_%29.md): Removes the association between an object and its context-sensitive help.
