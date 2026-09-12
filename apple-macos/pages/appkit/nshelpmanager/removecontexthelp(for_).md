> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nshelpmanager/removecontexthelp(for:)](https://developer.apple.com/documentation/appkit/nshelpmanager/removecontexthelp(for:))

# removeContextHelp(for:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the association between an object and its context-sensitive help.

## Declaration

```swift
func removeContextHelp(for object: Any)
```

## Parameters

- `object`: Object to disassociate from its help content.

<a id="Discussion"></a>

## Discussion

If `object` does not have context-sensitive help associated with it, this method does nothing.

## See Also

### Configuring Context-Sensitive Help

- [setContextHelp(\_:for:)](setcontexthelp%28__for_%29.md): Associates help content with an object.

# removeContextHelpForObject: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Removes the association between an object and its context-sensitive help.

## Declaration

```objectivec
- (void) removeContextHelpForObject:(id) object;
```

## Parameters

- `object`: Object to disassociate from its help content.

<a id="Discussion"></a>

## Discussion

If `object` does not have context-sensitive help associated with it, this method does nothing.

## See Also

### Configuring Context-Sensitive Help

- [setContextHelp:forObject:](setcontexthelp%28__for_%29.md): Associates help content with an object.
